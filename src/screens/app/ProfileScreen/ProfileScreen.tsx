import React from 'react';

import {ProfileTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  return <ProfileTemplate userId={userId} />;
}
