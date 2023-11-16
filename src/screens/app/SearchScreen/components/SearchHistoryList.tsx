import React from 'react';
import {ListRenderItemInfo, FlatList} from 'react-native';

import {User} from '@domain';
import {useSearchHistoryService, useSearchHistoryUserList} from '@services';

import {Box, Icon, ProfileUser} from '@components';

export function SearchHistoryList() {
  const userList = useSearchHistoryUserList();
  const {deleteUser} = useSearchHistoryService();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s16">
        <ProfileUser
          id={item.id}
          profileUrl={item.profileUrl}
          username={item.username}
        />
        <Icon name="trash" onPress={() => deleteUser(item.id)} />
      </Box>
    );
  }

  return (
    <FlatList
      data={userList}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}
