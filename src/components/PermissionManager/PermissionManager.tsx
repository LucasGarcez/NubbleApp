import React from 'react';
import {Linking} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {Screen, Text, Button, ActivityIndicator} from '@components';

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
      <Text preset="headingSmall" textAlign="center" color="error">
        {description}
      </Text>
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
