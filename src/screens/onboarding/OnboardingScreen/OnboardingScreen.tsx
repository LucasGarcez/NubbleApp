import React from 'react';
import {FlatList} from 'react-native';

import {Post} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Box, Screen, Text} from '@components';
import {OnboardingScreenProps} from '@routes';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  return (
    <Screen flex={1}>
      <Box flex={1} backgroundColor="error">
        <Text>Image box</Text>
      </Box>
      <Box flex={1} backgroundColor="success">
        <Text>Text and content box</Text>
      </Box>
      <Box flex={1} backgroundColor="carrotSecondary">
        <Text>Menu box</Text>
      </Box>
    </Screen>
  );
}
