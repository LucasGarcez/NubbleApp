import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {QueryKeys} from '@infra';
import {Page} from '@types';

import {
  Button,
  ButtonProps,
  InfinityScrollList,
  ProfileUser,
  Screen,
  Text,
} from '@components';

type Props = {
  getUserList: (page: number) => Promise<Page<User>>;
  queryKey: QueryKeys;
  buttonProps: Pick<ButtonProps, 'title' | 'onPress'>;
  emptyMessage: string;
  screenTitle: string;
  countText: string;
};

export function UserListTemplate({
  queryKey,
  getUserList,
  buttonProps,
  emptyMessage,
  screenTitle,
  countText,
}: Props) {
  const [usersCount, setUsersCount] = useState<null | number>(null);

  async function getList(page: number) {
    const response = await getUserList(page);
    setUsersCount(response.meta.total);
    return response;
  }

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        alignItems="center"
        RightComponent={<Button preset="gray" {...buttonProps} />}
      />
    );
  }

  function renderListHeader() {
    if (!usersCount) {
      return null;
    }
    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {usersCount} {countText}
      </Text>
    );
  }

  return (
    <Screen flex={1} title={screenTitle} canGoBack>
      <InfinityScrollList
        queryKey={[queryKey]}
        getList={getList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
        emptyListProps={{
          emptyMessage,
          errorMessage: 'erro ao carregar lista',
        }}
      />
    </Screen>
  );
}
