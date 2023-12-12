import React from 'react';
import {Linking} from 'react-native';

import {PermissionStatus} from '@services';

import {Screen, Text, ActivityIndicator, Button} from '@components';

interface PermissionManagerProps {
  isLoading: boolean;
  status?: PermissionStatus;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  description,
  status,
  isLoading,
  children,
}: PermissionManagerProps) {
  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text textAlign="center">{description}</Text>
      {isLoading && <ActivityIndicator color="primary" />}
      {status === 'never_ask_again' && (
        <Button
          title="Abrir Configurações"
          onPress={Linking.openSettings}
          mt="s16"
        />
      )}
    </Screen>
  );
}
