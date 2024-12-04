import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {FollowUser} from '@domain';
import {QueryKeys} from '@infra';
import {Page} from '@types';

import {
  Button,
  InfinityScrollList,
  ProfileUser,
  Screen,
  Text,
} from '@components';

type Props = {
  getUserList: (page: number) => Promise<Page<FollowUser>>;
  screenTitle: string;
  totalText: string;
  emptyMessage: string;
  queryKey: QueryKeys;
  button: {
    title: string;
    onPress: (followUser: FollowUser) => void;
  };
};

export function UserListTemplate({
  button,
  getUserList,
  queryKey,
  screenTitle,
  emptyMessage,
  totalText,
}: Props) {
  const [totalUser, setTotalUser] = useState<number | null>(null);
  function renderItem({item}: ListRenderItemInfo<FollowUser>) {
    return (
      <ProfileUser
        user={item}
        RightComponent={
          <Button
            title={button.title}
            onPress={() => button.onPress(item)}
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
        {totalUser} {totalText}
      </Text>
    );
  }

  async function getList(page: number) {
    const response = await getUserList(page);
    setTotalUser(response.meta.total);
    return response;
  }

  return (
    <Screen flex={1} title={screenTitle} canGoBack>
      <InfinityScrollList
        renderItem={renderItem}
        getList={getList}
        queryKey={[queryKey]}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
        emptyListProps={{
          emptyMessage,
          errorMessage: 'Erro ao carregar lista',
        }}
      />
    </Screen>
  );
}
