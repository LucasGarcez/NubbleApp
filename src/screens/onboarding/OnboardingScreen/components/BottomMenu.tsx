import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressNext' | 'onPressSkip'
> & {
  isLast: boolean;
};
export function BottomMenu({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) {
  const nexText = isLast ? 'Começar' : 'Próximo';
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text semiBold color="gray2">
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        onPress={onPressNext}
        flexDirection="row"
        alignItems="center">
        <Text bold mr="s4">
          {nexText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
