import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ChatScreen({}: AppScreenProps<'ChatScreen'>) {
  return (
    <Screen title="Chat" canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Chat Screen</Text>
      </Box>
    </Screen>
  );
}
