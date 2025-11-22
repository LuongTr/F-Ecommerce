<?php

/**
 * JWT Authentication Utilities
 * Simple implementation without external dependencies
 */

class JWTHandler
{
    private static $secret;
    private static $expiration;

    public static function init()
    {
        self::$secret = getenv('JWT_SECRET') ?: 'your_super_secret_jwt_key_here_change_in_production';
        self::$expiration = (int)(getenv('JWT_EXPIRATION') ?: 3600);
    }

    public static function generateToken($userId, $email)
    {
        $issuedAt = time();
        $expireAt = $issuedAt + self::$expiration;

        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode([
            'iat' => $issuedAt,
            'exp' => $expireAt,
            'user_id' => $userId,
            'email' => $email
        ]);

        $encodedHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $encodedPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

        $signature = hash_hmac('sha256', $encodedHeader . "." . $encodedPayload, self::$secret, true);
        $encodedSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        return $encodedHeader . "." . $encodedPayload . "." . $encodedSignature;
    }

    public static function validateToken($token)
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return false;
        }

        $header = $parts[0];
        $payload = $parts[1];
        $signature = $parts[2];

        // Verify signature
        $expectedSignature = hash_hmac('sha256', $header . "." . $payload, self::$secret, true);
        $expectedSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($expectedSignature));

        if (!hash_equals($signature, $expectedSignature)) {
            return false;
        }

        // Decode payload
        $payload = json_decode(base64_decode(str_replace(['-', '_'], ['+', '/'], $payload)), true);
        if (!$payload) {
            return false;
        }

        // Check expiration
        if (isset($payload['exp']) && $payload['exp'] < time()) {
            return false;
        }

        return $payload;
    }

    public static function getTokenFromHeader()
    {
        $headers = getallheaders();
        $authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';

        if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            return $matches[1];
        }

        return null;
    }

    public static function requireAuth()
    {
        $token = self::getTokenFromHeader();
        if (!$token) {
            self::sendError('No token provided', 401);
        }

        $decoded = self::validateToken($token);
        if (!$decoded) {
            self::sendError('Invalid or expired token', 401);
        }

        return $decoded;
    }

    public static function sendError($message, $statusCode = 400)
    {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode(['error' => true, 'message' => $message]);
        exit;
    }

    public static function sendSuccess($data = null, $message = 'Success')
    {
        header('Content-Type: application/json');
        echo json_encode([
            'error' => false,
            'message' => $message,
            'data' => $data
        ]);
        exit;
    }

    public static function sendCorsHeaders()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
        header('Access-Control-Max-Age: 86400');

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit(0);
        }
    }
}

// Initialize JWT on load
JWTHandler::init();
