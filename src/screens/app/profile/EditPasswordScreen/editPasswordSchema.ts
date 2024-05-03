import {zodTypes} from '@form';
import {z} from 'zod';

export const editPasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: zodTypes.password,
    confirmedNewPassword: zodTypes.password,
  })
  .refine(data => data.confirmedNewPassword === data.newPassword, {
    message: 'senhas não conferem',
    path: ['confirmedNewPassword'],
  });

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
