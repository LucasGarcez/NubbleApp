import React from 'react';

import {followService} from '@domain';
import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowersScreen({}: AppScreenProps<'MyFollowersScreen'>) {
  return (
    <UserListTemplate
      screenTitle="Seguidores"
      emptyMessage="Você ainda não está seguindo ninguém"
      totalText="seguindo"
      queryKey={QueryKeys.MyFollowersList}
      getUserList={followService.getMyFollowersList}
      button={{
        title: 'Remover',
        onPress: followUser => console.log({followUser}),
      }}
    />
  );
}
