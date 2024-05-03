import {zodTypes} from '@form';
import {z} from 'zod';

export const loginSchema = z.object({
  email: zodTypes.email,
  password: z.string().min(1, 'senha obrigatória'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
