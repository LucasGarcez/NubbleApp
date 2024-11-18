import React from 'react';
import {ListRenderItemInfo} from 'react-native';

import {User, followService} from '@domain';
import {QueryKeys} from '@infra';

import {Button, InfinityScrollList, ProfileUser, Screen} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: //route,
AppScreenProps<'MyFollowingScreen'>) {
  // TODO: add following count: // const {} = useUser

  function unFollowUser() {
    // TODO:
  }

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        alignItems="center"
        RightComponent={
          <Button title="seguindo" preset="gray" onPress={unFollowUser} />
        }
      />
    );
  }
  return (
    <Screen flex={1} title="Seguindo" canGoBack>
      <InfinityScrollList
        queryKey={[QueryKeys.MyFollowersList]}
        getList={followService.geMyFollowingList}
        renderItem={renderItem}
        emptyListProps={{
          emptyMessage: 'você ainda não segue ninguém',
          errorMessage: 'erro ao carregar lista',
        }}
      />
    </Screen>
  );
}
