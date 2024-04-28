import React from 'react';

import {useAuthCredentials} from '@services';

import {ProfilePage} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCredentials();

  if (!authCredentials) {
    return null;
  }

  return <ProfilePage userId={authCredentials?.user.id} isMyProfile />;
}
