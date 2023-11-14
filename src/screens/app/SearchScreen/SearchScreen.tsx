import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {AppScreenProps} from '@routes';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');

  const {list} = useUserSearch(search);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        id={item.id}
        profileUrl={item.profileUrl}
        username={item.username}
      />
    );
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon color="gray3" name="search" />}
        />
      }>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
}
