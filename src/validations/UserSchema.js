import { z } from 'zod';

export const userRegisterSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(30, 'Username cannot exceed 30 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .max(244, 'What is this email...?')
    .email('Email is invalid')
    .toLowerCase(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(255, 'Pretty safe but cannot exceed 255 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/,
      'Password must contain lowercase letters, uppercase letters, numbers, and symbols'
    ),
});

export const userLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(244, 'What is this email...?')
    .email('Email is invalid')
    .toLowerCase(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(255, 'Pretty safe but cannot exceed 255 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/,
      'Password must contain lowercase letters, uppercase letters, numbers, and symbols'
    ),
});
