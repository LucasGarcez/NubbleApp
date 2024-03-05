import React, {useMemo} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthSignOut} from '@domain';

import {Button, Divider, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {MenuItem, MenuitemProps} from './components/MenuItem';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();

  const menuItems: MenuitemProps[] = useMemo(
    () => [
      {label: 'Termos de uso', onPress: () => {}},
      {label: 'Política de privacidade', onPress: () => {}},
      {
        label: 'Mode escuro',
        onPress: () => navigation.navigate('DarkModeScreen'),
      },
    ],
    [navigation],
  );

  function renderItem({item}: ListRenderItemInfo<MenuitemProps>) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        ItemSeparatorComponent={Divider}
        bounces={false}
        ListFooterComponent={
          <Button
            loading={isLoading}
            title="Sair da conta"
            onPress={signOut}
            mt="s48"
          />
        }
      />
    </Screen>
  );
}
