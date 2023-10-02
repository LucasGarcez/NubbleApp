import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

type UnauthorizedInterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => void;
  removeCredentials: () => void;
};

export function registerUnauthorizedInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: UnauthorizedInterceptorProps) {
  const responseIntercept = api.interceptors.response.use(
    response => response,
    async error => {
      const prevRequest = error.config;

      if (error.response.status === 401) {
        if (
          prevRequest.sent ||
          !authCredentials?.refreshToken ||
          authService.isRefreshTokenRequest(prevRequest)
        ) {
          removeCredentials();

          return Promise.reject(error);
        }
        prevRequest.sent = true;

        const newAuthCredentials = await authService.tryToRefreshToken(
          authCredentials?.refreshToken,
        );

        saveCredentials(newAuthCredentials);
        prevRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(prevRequest);
      }

      return Promise.reject(error);
    },
  );

  return () => api.interceptors.response.eject(responseIntercept);
}
