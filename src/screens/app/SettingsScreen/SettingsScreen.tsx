import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Screen, Text} from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting Screen</Text>
    </Screen>
  );
}
