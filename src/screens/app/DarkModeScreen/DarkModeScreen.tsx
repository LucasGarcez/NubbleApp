import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  return (
    <Screen canGoBack title="Modo escuro">
      <Text>Dark Mode</Text>
    </Screen>
  );
}
