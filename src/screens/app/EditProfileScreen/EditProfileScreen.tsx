import React from 'react';

import {useUserGetById} from '@domain';

import {Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} />
    </Screen>
  );
}
