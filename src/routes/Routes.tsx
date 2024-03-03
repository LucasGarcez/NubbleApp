import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnboardingStack} from './OnboardingStack';
import {Stacks, useRoute} from './useRoute';

function LoadingScreen() {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      justifyContent="center"
      alignItems="center">
      <ActivityIndicator size="large" />
    </Box>
  );
}

const stacks: Record<Stacks, React.ReactElement> = {
  Loading: <LoadingScreen />,
  App: <AppStack />,
  Auth: <AuthStack />,
  Onboarding: <OnboardingStack />,
};

export function Router() {
  const currentStack = useRoute();

  const Stack = stacks[currentStack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}
