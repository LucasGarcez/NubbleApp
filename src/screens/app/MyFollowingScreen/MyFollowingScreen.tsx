import React from 'react';

import {followService} from '@domain';
import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: //route,
AppScreenProps<'MyFollowingScreen'>) {
  function unFollowUser() {
    // TODO:
  }

  return (
    <UserListTemplate
      screenTitle="Seguindo"
      countText="seguidores"
      emptyMessage="Você ainda não está seguindo ninguém"
      getUserList={followService.geMyFollowingList}
      queryKey={QueryKeys.MyFollowingList}
      buttonProps={{title: 'seguindo', onPress: unFollowUser}}
    />
  );
}
