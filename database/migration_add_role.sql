-- Migration: Add role column to users table
-- Role can be 'admin' or 'user'

USE `ecommerce_db`;

-- Add role column with default value 'user'
ALTER TABLE `users`
ADD COLUMN `role` ENUM('admin', 'user') NOT NULL DEFAULT 'user' AFTER `avatar`;

