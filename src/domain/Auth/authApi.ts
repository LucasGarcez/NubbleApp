import {api} from '@api';
import {AxiosRequestConfig} from 'axios';

import {UserAPI} from '../User';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  ForgotPasswordParam,
  SignUpDataAPI,
} from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('auth/register', data);
  return response.data;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params,
    },
  );

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-email', {
    params,
  });

  return response.data;
}

async function forgotPassword(
  params: ForgotPasswordParam,
): Promise<{message: string}> {
  const response = await api.post<{message: string}>(
    'auth/forgot-password',
    params,
  );

  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
}

/**
 * @param axiosConfig [AxiosRequestConfig](https://axios-http.com/docs/req_config) - The Axios request configuration
 * @returns  Check the config URL property to returns if is a refresh token request
 */
function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  const url = request.url;
  return url === REFRESH_TOKEN_URL;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};
