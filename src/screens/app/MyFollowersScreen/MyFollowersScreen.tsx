import React from 'react';
import {ListRenderItemInfo} from 'react-native';

import {User, followService} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList, Screen, Text} from '@components';

export function MyFollowersScreen() {
  function renderItem({item}: ListRenderItemInfo<User>) {
    return <Text>{item.username}</Text>;
  }
  return (
    <Screen flex={1} title="Seguidores" canGoBack>
      <InfinityScrollList
        queryKey={[QueryKeys.MyFollowersList]}
        getList={followService.getMyFollowersList}
        renderItem={renderItem}
        emptyListProps={{
          emptyMessage: 'você ainda não tem seguidores',
          errorMessage: 'erro ao carregar lista',
        }}
      />
    </Screen>
  );
}
