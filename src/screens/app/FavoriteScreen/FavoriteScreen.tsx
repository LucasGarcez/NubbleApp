import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  );
}
