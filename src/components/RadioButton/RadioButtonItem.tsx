import React from 'react';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {RadioButton, RadioButtonProps} from './RadioButton';

export type RadioButtonItemProps = RadioButtonProps & {
  label: string;
  description?: string;
};
export function RadioButtonItem({
  label,
  description,
  ...radioButtonProps
}: RadioButtonItemProps) {
  return (
    <Box paddingVertical="s16">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text preset="paragraphMedium" semiBold>
          {label}
        </Text>
        <RadioButton {...radioButtonProps} />
      </Box>
      {description && (
        <Text mt="s4" color="gray1">
          {description}
        </Text>
      )}
    </Box>
  );
}
