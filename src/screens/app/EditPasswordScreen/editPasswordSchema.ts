import {schemaTypes} from '@form';
import {z} from 'zod';

export const editPasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: schemaTypes.password,
    confirmedPassword: schemaTypes.password,
  })
  .refine(data => data.confirmedPassword === data.newPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmedPassword'],
  });

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
