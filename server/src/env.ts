import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  APP_ORIGIN: z.string().url().default('http://localhost:3000'),
  DATABASE_URL: z.string().min(1),
  SESSION_SECRET: z.string().min(24),
  COOKIE_SECURE: z.coerce.boolean().default(false)
});

export const env = EnvSchema.parse(process.env);
