import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

type BottomMenuProps = {
  onPressSkip: () => void;
  onPressNext: () => void;
  isLast: boolean;
};
export function BottomMenu({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) {
  const nextText = isLast ? 'Começar' : 'Próximo';
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text color="gray2">Pular</Text>
      </PressableBox>
      <PressableBox
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Text bold mr="s4">
          {nextText}
        </Text>

        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
