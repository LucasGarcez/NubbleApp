import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {ActivityIndicator, Box} from '@components';

// import {AppStack} from './AppStack';
// import {AuthStack} from './AuthStack';
import {OnboardingStack} from './OnboardingStack';

export function Router() {
  // const {authCredentials, isLoading} = useAuthCredentials();
  const {isLoading} = useAuthCredentials();

  if (isLoading) {
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

  return (
    <NavigationContainer>
      {/* {authCredentials ? <AppStack /> : <AuthStack />} */}
      <OnboardingStack />
    </NavigationContainer>
  );
}
