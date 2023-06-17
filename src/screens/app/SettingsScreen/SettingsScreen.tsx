import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}
