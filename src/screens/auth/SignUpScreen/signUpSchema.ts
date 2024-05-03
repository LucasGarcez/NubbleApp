import {zodTypes} from '@form';
import {z} from 'zod';

export const signUpSchema = z.object({
  username: zodTypes.userName,

  firstName: zodTypes.name,
  lastName: zodTypes.name,
  email: zodTypes.email,
  password: zodTypes.password,
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
