import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function EditPasswordScreen({}: AppScreenProps<'EditPasswordScreen'>) {
  return (
    <Screen canGoBack scrollable title="Editar Senha">
      <Text preset="headingSmall">Editar Senha</Text>
    </Screen>
  );
}
