import React from 'react';

import {followService, useUnfollowUser} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  const {showToast} = useToastService();

  const {unFollowUser, undo} = useUnfollowUser({
    onSuccess: () => {
      showToast({
        message: 'Deixou de seguir',
        type: 'success',
        position: 'bottom',
        action: {
          title: 'Desfazer',
          onPress: undo,
        },
      });
    },
  });

  return (
    <UserListTemplate
      screenTitle="Seguindo"
      countText="seguidores"
      emptyMessage="Você ainda não está seguindo ninguém"
      getUserList={followService.geMyFollowingList}
      queryKey={QueryKeys.MyFollowingList}
      onPressButton={user => unFollowUser(user)}
      buttonProps={{title: 'seguindo'}}
    />
  );
}
