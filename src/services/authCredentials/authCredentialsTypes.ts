import {AuthCredentials, User} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  userId: number | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  updateUser: (user: User) => void;
  isLoading: boolean;
}
