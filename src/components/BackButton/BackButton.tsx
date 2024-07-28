import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Icon, Text, TouchableOpacityBox} from '@components';

const ICON_SIZE = 20;

export type BackButtonProps = {
  showBackLabel?: boolean;
};
export function BackButton({showBackLabel}: BackButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacityBox
      testID="screen-back-button"
      flexDirection="row"
      alignItems="center"
      mr={showBackLabel ? 's10' : undefined}
      onPress={navigation.goBack}>
      <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
      {showBackLabel && (
        <Text preset="paragraphMedium" semiBold ml="s8">
          Voltar
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
