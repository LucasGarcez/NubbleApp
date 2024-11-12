import React from 'react';
import {Pressable} from 'react-native';

import {User} from '@domain';

import {Box, BoxProps, ProfileAvatar, Text} from '@components';

type Props = {
  user?: User;
} & BoxProps;
export function EditProfileHeader({user, ...boxProps}: Props) {
  if (!user) {
    return null;
  }

  function navigateToPhoto() {
    //TODO: add navigate to edit photo
    console.log('navigate to edit photo ');
  }

  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      <ProfileAvatar imageURL={user?.profileUrl} size={64} borderRadius={24} />

      <Pressable hitSlop={12} onPress={navigateToPhoto}>
        <Text preset="paragraphMedium" color="primary" bold ml="s16">
          Alterar foto
        </Text>
      </Pressable>
    </Box>
  );
}
