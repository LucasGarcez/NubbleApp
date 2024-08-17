import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function EditProfileScreen({}: AppScreenProps<'EditProfileScreen'>) {
  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <Text preset="headingSmall">Editar Perfil</Text>
    </Screen>
  );
}
