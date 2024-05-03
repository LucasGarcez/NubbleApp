import {zodTypes} from '@form';
import {z} from 'zod';

export const editProfileSchema = z.object({
  username: zodTypes.userName,
  firstName: zodTypes.name,
  lastName: zodTypes.name,
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
