import React from 'react';

import {followService} from '@domain';
import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';

export function MyFollowersScreen() {
  function removeFollower() {
    //TODO: remove follower
  }
  return (
    <UserListTemplate
      screenTitle="Seguidores"
      getUserList={followService.getMyFollowersList}
      countText="seguidores"
      emptyMessage="Você ainda não tem seguidores"
      queryKey={QueryKeys.MyFollowersList}
      buttonProps={{title: 'remover', onPress: removeFollower}}
    />
  );
}
