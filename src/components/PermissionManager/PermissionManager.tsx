import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {Screen, Text, Button, ActivityIndicator, Box} from '@components';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center">
        {description}
      </Text>
      {isLoading && <ActivityIndicator color="primary" />}
      {status === 'never_ask_again' && (
        <Box>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              color="error"
              bold
              marginVertical="s16"
              textAlign="center">
              É necessário abrir e fechar o App novamente após alterar as
              configurações
            </Text>
          )}
          <Button
            title="Abrir Configurações"
            onPress={Linking.openSettings}
            mt="s16"
          />
        </Box>
      )}
    </Screen>
  );
}
