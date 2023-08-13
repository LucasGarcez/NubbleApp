import React from 'react';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isError, isLoading, user} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}
