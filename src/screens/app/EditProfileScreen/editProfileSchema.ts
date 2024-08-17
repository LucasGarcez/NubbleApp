import {schemaTypes} from '@form';
import {z} from 'zod';

export const editProfileSchema = z.object({
  username: schemaTypes.username,
  firstName: schemaTypes.name,
  lastName: schemaTypes.name,
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
