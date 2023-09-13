import {api} from '@api';

import {UserAPI} from '../User';

import {AuthCredentialsAPI, SignUpDataAPI} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};
