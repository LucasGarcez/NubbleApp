import React from 'react';

import {followService, useUnfollowUser} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';

export function MyFollowersScreen() {
  const {showToast} = useToastService();

  const {unFollowUser} = useUnfollowUser({
    onSuccess: () => {
      showToast({
        message: 'Seguidor Removido',
        type: 'success',
        position: 'bottom',
      });
    },
  });

  return (
    <UserListTemplate
      screenTitle="Seguidores"
      getUserList={followService.getMyFollowersList}
      countText="seguidores"
      emptyMessage="Você ainda não tem seguidores"
      queryKey={QueryKeys.MyFollowersList}
      onPressButton={user => unFollowUser(user.id, user.followId)}
      buttonProps={{title: 'remover'}}
    />
  );
}
