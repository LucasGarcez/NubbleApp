import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

type BottomMenuProps = {
  onPressSkip: () => void;
  onPressNext: () => void;
};
export function BottomMenu({onPressNext, onPressSkip}: BottomMenuProps) {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text>Pular</Text>
      </PressableBox>
      <Icon name="arrowRight" color="carrotSecondary" onPress={onPressNext} />
    </Box>
  );
}
