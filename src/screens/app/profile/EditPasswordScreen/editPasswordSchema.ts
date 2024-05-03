import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const editPasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(5, 'username muito curto')
      .regex(userNameRegex, 'username inválido'),
    newPassword: z.string().min(8, 'senha deve ter no mínimo 8 caracteres'),
    confirmedNewPassword: z
      .string()
      .min(8, 'senha deve ter no mínimo 8 caracteres'),
  })
  .refine(data => data.confirmedNewPassword === data.newPassword, {
    message: 'senhas não conferem',
    path: ['confirmedNewPassword'],
  });

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
