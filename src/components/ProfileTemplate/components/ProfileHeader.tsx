import React from 'react';

import {User} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

import {ProfileMetadata} from './ProfileMetadata';

type Props = {
  user: User;
};
export function ProfileHeader({user}: Props) {
  return (
    <Box alignItems="center">
      <ProfileAvatar imageURL={user?.profileUrl} size={100} borderRadius={40} />
      <Text preset="headingMedium" mt="s16">
        {user.fullName}
      </Text>
      <Text preset="paragraphLarge" mt="s4" color="gray1">
        @{user.username}
      </Text>
      <ProfileMetadata
        followersCount="105"
        followingCount="300"
        publicationCount="34"
      />
    </Box>
  );
}
