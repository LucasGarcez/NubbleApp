import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  userId: number | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
