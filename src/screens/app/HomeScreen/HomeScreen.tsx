import React, {useEffect} from 'react';

import {postService} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

//TODO:
// 1 - passar imagem do unsplash para link pessoal (Github?)
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  useEffect(() => {
    postService.getList().then(list => console.log(list[0]));
  }, []);

  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Favorite"
        mt="s14"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}
