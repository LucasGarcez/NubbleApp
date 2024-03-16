import React from 'react';

import {Box, Icon, Text} from '@components';

export function BottomMenu() {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text>Pular</Text>
      <Box flexDirection="row" alignItems="center">
        <Text mr="s4">Próximo</Text>
        <Icon name="arrowRight" />
      </Box>
    </Box>
  );
}
