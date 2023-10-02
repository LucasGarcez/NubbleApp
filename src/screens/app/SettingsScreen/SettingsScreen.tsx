import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();

  return (
    <Screen canGoBack title="Configurações">
      <Button loading={isLoading} title="Sair da conta" onPress={signOut} />
    </Screen>
  );
}
