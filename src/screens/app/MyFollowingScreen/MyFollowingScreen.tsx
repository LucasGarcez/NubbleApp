import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {User, followService} from '@domain';
import {QueryKeys} from '@infra';

import {
  Button,
  InfinityScrollList,
  ProfileUser,
  Screen,
  Text,
} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: //route,
AppScreenProps<'MyFollowingScreen'>) {
  const [followingTotal, setFollowingTotal] = useState<null | number>(null);

  function unFollowUser() {
    // TODO:
  }

  async function getList(page: number) {
    const response = await followService.geMyFollowingList(page);
    setFollowingTotal(response.meta.total);
    return response;
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

  function renderListHeader() {
    if (!followingTotal) {
      return null;
    }
    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {followingTotal} seguidores
      </Text>
    );
  }

  return (
    <Screen flex={1} title="Seguindo" canGoBack>
      <InfinityScrollList
        queryKey={[QueryKeys.MyFollowersList]}
        getList={getList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
        emptyListProps={{
          emptyMessage: 'você ainda não segue ninguém',
          errorMessage: 'erro ao carregar lista',
        }}
      />
    </Screen>
  );
}
