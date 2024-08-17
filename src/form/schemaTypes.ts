import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

const username = z
  .string()
  .min(5, 'username muito curto')
  .regex(userNameRegex, 'username inválido')
  .toLowerCase();

const name = z
  .string()
  .min(5, 'nome muito curto')
  .max(50, 'nome muito longo')
  .transform(stringUtils.capitalizeFirstLetter);

const email = z.string().email('email inválido');

const password = z.string().min(8, 'senha deve ter no mínimo 8 caracteres');

export const schemaTypes = {username, name, email, password};
