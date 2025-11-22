-- Migration: Add avatar column to users table
-- Run this if the avatar column is missing from your users table

USE `ecommerce_db`;

-- Add avatar column if it doesn't exist
ALTER TABLE `users`
ADD COLUMN `avatar` VARCHAR(255) COMMENT 'Path to uploaded avatar image' AFTER `phone`;
