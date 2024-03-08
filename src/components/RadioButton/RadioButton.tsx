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
      onPress={onPress}
      justifyContent="center"
      alignItems="center"
      height={20}
      width={20}
      borderWidth={isSelected ? 2 : 1}
      borderRadius={'s12'}
      borderColor={isSelected ? 'primary' : 'onBackgroundGray2'}>
      <Box
        backgroundColor={isSelected ? 'primary' : undefined}
        height={12}
        width={12}
        borderRadius="s12"
      />
    </PressableBox>
  );
}
