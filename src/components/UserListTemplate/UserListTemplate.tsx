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

type Props<IUser extends User> = {
  getUserList: (page: number) => Promise<Page<IUser>>;
  queryKey: QueryKeys;
  buttonProps: Pick<ButtonProps, 'title'>;
  onPressButton: (user: IUser) => void;
  emptyMessage: string;
  screenTitle: string;
  countText: string;
};

export function UserListTemplate<IUser extends User>({
  queryKey,
  getUserList,
  buttonProps,
  emptyMessage,
  screenTitle,
  onPressButton,
  countText,
}: Props<IUser>) {
  const [usersCount, setUsersCount] = useState<null | number>(null);

  async function getList(page: number) {
    const response = await getUserList(page);
    setUsersCount(response.meta.total);
    return response;
  }

  function renderItem({item}: ListRenderItemInfo<IUser>) {
    return (
      <ProfileUser
        user={item}
        alignItems="center"
        RightComponent={
          <Button
            preset="gray"
            title={buttonProps.title}
            onPress={() => onPressButton(item)}
          />
        }
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
