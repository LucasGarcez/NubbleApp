import React from 'react';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ProfileAvatar, Text} from '@components';

import {ProfileMetadata} from './ProfileMetadata';

type Props = {
  user: User;
  isMyProfile?: boolean;
};
export function ProfileHeader({user, isMyProfile}: Props) {
  const navigation = useNavigation();
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
      {isMyProfile && (
        <Box position="absolute" alignSelf="flex-end">
          <Icon
            size={30}
            name="settings"
            onPress={() => navigation.navigate('SettingsScreen')}
          />
        </Box>
      )}
    </Box>
  );
}
