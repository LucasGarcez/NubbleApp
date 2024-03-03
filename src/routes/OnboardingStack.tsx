import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnboardingScreen} from '@screens';

export type OnboardingStackParamList = {
  OnboardingScreen: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="OnboardingScreen">
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
