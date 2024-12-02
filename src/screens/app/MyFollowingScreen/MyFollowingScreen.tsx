import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {FollowUser, followService} from '@domain';
import {QueryKeys} from '@infra';

import {
  Button,
  InfinityScrollList,
  ProfileUser,
  Screen,
  Text,
} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  const [totalUser, setTotalUser] = useState<number | null>(null);
  function renderItem({item}: ListRenderItemInfo<FollowUser>) {
    return (
      <ProfileUser
        user={item}
        RightComponent={
          <Button
            title="Seguindo"
            onPress={() => console.log('remove')}
            preset="gray"
          />
        }
      />
    );
  }

  function renderListHeader() {
    if (!totalUser) {
      return null;
    }

    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {totalUser} seguindo
      </Text>
    );
  }

  async function getList(page: number) {
    const response = await followService.geMyFollowingList(page);
    setTotalUser(response.meta.total);
    return response;
  }

  return (
    <Screen flex={1} title="Seguindo" canGoBack>
      <InfinityScrollList
        renderItem={renderItem}
        getList={getList}
        queryKey={[QueryKeys.MyFollowingList]}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
      />
    </Screen>
  );
}
