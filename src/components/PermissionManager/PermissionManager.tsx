import React, {useEffect} from 'react';
import {Linking, Platform, View} from 'react-native';

import {PermissionName, PermissionStatus, usePermission} from '@services';

import {Screen, Text, ActivityIndicator, Button} from '@components';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
  onChangeStatus?: (status?: PermissionStatus) => void;
}

export function PermissionManager({
  description,
  permissionName,
  onChangeStatus,
  children,
}: PermissionManagerProps) {
  const {isLoading, status} = usePermission(permissionName);

  useEffect(() => {
    if (onChangeStatus) {
      onChangeStatus(status);
    }
  }, [onChangeStatus, status]);

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
        <View>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              color="error"
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
        </View>
      )}
    </Screen>
  );
}
