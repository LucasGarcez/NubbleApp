import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsTypes';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>()(
  persist(
    set => ({
      authCredentials: null,
      isLoading: false,
      saveCredentials: async ac => set({authCredentials: ac}),
      removeCredentials: async () => set({authCredentials: null}),
    }),
    {
      name: '@Auth',
      storage: storage,
    },
  ),
);
