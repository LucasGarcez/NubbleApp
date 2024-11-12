import React from 'react';

import {Box, PressableBox, PressableBoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

export type InputButtonProps = {
  label: string;
  value: string;
} & PressableBoxProps;

export function InputButton({
  label,
  value,
  ...pressableBoxProps
}: InputButtonProps) {
  return (
    <PressableBox
      borderBottomColor="gray4"
      borderBottomWidth={1}
      paddingBottom="s8"
      {...pressableBoxProps}>
      <Text preset="paragraphMedium" mb="s8">
        {label}
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text color="gray2">{value}</Text>
        <Icon name="chevronRight" color="backgroundContrast" />
      </Box>
    </PressableBox>
  );
}
