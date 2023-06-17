import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, SettingsScreen} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
