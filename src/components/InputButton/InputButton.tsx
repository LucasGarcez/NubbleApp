import React from 'react';

import {Box, PressableBox, PressableBoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

type InputButtonProps = PressableBoxProps & {
  label: string;
  value: string;
};
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
      <Text mb="s8">{label}</Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text>{value}</Text>
        <Icon name="chevronRight" color="backgroundContrast" />
      </Box>
    </PressableBox>
  );
}
