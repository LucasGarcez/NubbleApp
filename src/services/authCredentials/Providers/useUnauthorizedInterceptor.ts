import {useEffect} from 'react';

import {api} from '@api';
import {AuthCredentials, authService} from '@domain';

type UnauthorizedInterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => void;
  removeCredentials: () => void;
};

let RETRIED_REFRESH = false;

export function useUnauthorizedInterceptor({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: UnauthorizedInterceptorProps) {
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
          const newAuthCredentials = await authService.tryToRefreshToken(
            authCredentials?.refreshToken,
          );
          saveCredentials(newAuthCredentials);
          // TESTAR QUANDO ESSA SEGUNDA REQUEST FALHAR (Auth token errado)
          prevRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
          return api(prevRequest);
        }

        return Promise.reject(error);
      },
    );

    return () => api.interceptors.response.eject(responseIntercept);
  }, [authCredentials?.refreshToken, removeCredentials, saveCredentials]);
}
