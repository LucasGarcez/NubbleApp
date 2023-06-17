import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;
export function HomeScreen({navigation}: ScreenProps) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
