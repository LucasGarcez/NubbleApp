import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  return (
    <Screen flex={1} title="Seguindo">
      <Text>Seguindo </Text>
    </Screen>
  );
}
