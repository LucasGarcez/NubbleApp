import {zodTypes} from '@form';
import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: zodTypes.email,
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
