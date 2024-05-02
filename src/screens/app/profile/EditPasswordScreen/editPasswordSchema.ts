import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const editPasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(5, 'username muito curto')
    .regex(userNameRegex, 'username inválido')
    .toLowerCase(),
  newPassword: z.string().min(8, 'senha deve ter no mínimo 8 caracteres'),
  //TODO: check zod confirm match passwords
  confirmedNewPassword: z
    .string()
    .min(8, 'senha deve ter no mínimo 8 caracteres'),
});

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
