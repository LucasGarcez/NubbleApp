import React, {useCallback, useEffect} from 'react';
import {createContext, useState} from 'react';

import {registerUnauthorizedInterceptor} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const saveCredentials = useCallback(
    async (ac: AuthCredentials): Promise<void> => {
      authService.updateToken(ac.token);
      authCredentialsStorage.set(ac);
      setAuthCredentials(ac);
    },
    [],
  );

  const removeCredentials = useCallback(async (): Promise<void> => {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }, []);

  useEffect(() => {
    const removeInterceptor = registerUnauthorizedInterceptor({
      authCredentials,
      saveCredentials,
      removeCredentials,
    });

    return () => removeInterceptor();
  }, [authCredentials, removeCredentials, saveCredentials]);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000, ''));
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
