import React from 'react';

import {useAuthCredentials} from '@services';

import {ProfileTemplate} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  const {userId} = useAuthCredentials();

  if (!userId) {
    return null;
  }

  return <ProfileTemplate userId={userId} isMyProfile />;
}
