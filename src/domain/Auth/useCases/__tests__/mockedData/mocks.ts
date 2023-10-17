import {AuthCredentials} from '../../../authTypes';

export const mockedAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2023-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    username: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl: 'fake-url',
    isOnline: false,
    fullName: 'Maria Julia',
  },
};
