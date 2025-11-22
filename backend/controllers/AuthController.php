<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/jwt.php';

class AuthController
{
    public static function register()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        if (
            !isset($data['first_name']) || !isset($data['last_name']) ||
            !isset($data['email']) || !isset($data['password'])
        ) {
            JWTHandler::sendError('Missing required fields', 400);
        }

        $firstName = trim($data['first_name']);
        $lastName = trim($data['last_name']);
        $email = trim($data['email']);
        $password = $data['password'];

        // Validation
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            JWTHandler::sendError('Invalid email format', 400);
        }

        if (strlen($password) < 6) {
            JWTHandler::sendError('Password must be at least 6 characters', 400);
        }

        try {
            $db = Database::getInstance();
            $pdo = $db->getConnection();

            // Check if email already exists
            $existing = $db->fetchOne(
                "SELECT id FROM users WHERE email = ?",
                [$email]
            );

            if ($existing) {
                JWTHandler::sendError('Email already registered', 400);
            }

            // Hash password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insert user
            $userId = $db->insert('users', [
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $email,
                'password_hash' => $hashedPassword
            ]);

            // Generate token
            $token = JWTHandler::generateToken($userId, $email);

            JWTHandler::sendSuccess([
                'user' => [
                    'id' => $userId,
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email
                ],
                'token' => $token
            ], 'User registered successfully');
        } catch (Exception $e) {
            JWTHandler::sendError('Registration failed: ' . $e->getMessage(), 500);
        }
    }

    public static function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!isset($data['email']) || !isset($data['password'])) {
            JWTHandler::sendError('Email and password are required', 400);
        }

        $email = trim($data['email']);
        $password = $data['password'];

        try {
            $db = Database::getInstance();
            $pdo = $db->getConnection();

            // Get user
            $user = $db->fetchOne(
                "SELECT id, first_name, last_name, email, password_hash FROM users WHERE email = ?",
                [$email]
            );

            if (!$user || !password_verify($password, $user['password_hash'])) {
                JWTHandler::sendError('Invalid credentials', 401);
            }

            // Generate token
            $token = JWTHandler::generateToken($user['id'], $user['email']);

            unset($user['password_hash']); // Remove password from response

            JWTHandler::sendSuccess([
                'user' => $user,
                'token' => $token
            ], 'Login successful');
        } catch (Exception $e) {
            JWTHandler::sendError('Login failed: ' . $e->getMessage(), 500);
        }
    }
}
