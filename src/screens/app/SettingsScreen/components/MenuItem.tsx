import React from 'react';

import {Icon, PressableBox, Text} from '@components';

export type MenuitemProps = {
  label: string;
  onPress: () => void;
};
export function MenuItem({label, onPress}: MenuitemProps) {
  return (
    <PressableBox
      onPress={onPress}
      paddingVertical="s16"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Text>{label}</Text>
      <Icon name="arrowRight" />
    </PressableBox>
  );
}
