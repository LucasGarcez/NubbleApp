import React from 'react';

import {ProfilePage} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  return <ProfilePage userId={userId} />;
}
