import React from 'react';

import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  const {showToast} = useToastService();
  const {removeFollow, undoRemoveFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        message: 'Deixou de seguir',
        type: 'success',
        position: 'bottom',
        action: {
          title: 'Desfazer',
          onPress: undoRemoveFollow,
        },
      });
    },
  });

  return (
    <UserListTemplate
      screenTitle="Seguindo"
      emptyMessage="Você ainda não está seguindo ninguém"
      totalText="seguindo"
      queryKey={QueryKeys.MyFollowingList}
      getUserList={followService.geMyFollowingList}
      button={{
        title: 'Seguindo',
        onPress: followUser =>
          removeFollow({followId: followUser.followId, userId: followUser.id}),
      }}
    />
  );
}
