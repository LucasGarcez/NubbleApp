import React from 'react';

import {Box, PressableBox} from '../Box/Box';

export type RadioButtonProps = {
  isSelected: boolean;
  onPress: () => void;
};

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      hitSlop={10}
      height={20}
      width={20}
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? 'primary' : 'gray4'}
      borderRadius="s16">
      <Box
        backgroundColor={isSelected ? 'primary' : undefined}
        height={12}
        width={12}
        borderRadius="s16"
      />
    </PressableBox>
  );
}
