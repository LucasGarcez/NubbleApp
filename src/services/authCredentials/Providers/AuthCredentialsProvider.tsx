import React, {useEffect} from 'react';
import {createContext, useState} from 'react';

import {api} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsTypes';

let RETRIED_REFRESH = false;

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

  useEffect(() => {
    const responseIntercept = api.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error.config;
        if (error.response.status === 401) {
          if (
            prevRequest.sent ||
            !authCredentials?.refreshToken ||
            RETRIED_REFRESH
          ) {
            removeCredentials();
            return;
          }
          prevRequest.sent = true;
          RETRIED_REFRESH = true;

          // o que acontece caso essa requisição falhe, com um 401 ou outro status code
          const newAuthCredentials = await authService.tryToRefreshToken(
            authCredentials?.refreshToken,
          );
          saveCredentials(newAuthCredentials);
          prevRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
          // TESTAR QUANDO ESSA SEGUNDA REQUEST FALHAR (Auth token errado)
          return api(prevRequest);
        }

        return Promise.reject(error);
      },
    );

    return () => api.interceptors.response.eject(responseIntercept);
  }, [authCredentials?.refreshToken]);

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

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
