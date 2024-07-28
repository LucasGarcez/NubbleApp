import React from 'react';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {BackButton, Box, Button, Icon, ProfileAvatar, Text} from '@components';

import {ProfileMetadata} from './ProfileMetadata';

type Props = {
  user: User;
  isMyProfile?: boolean;
  publicationCount: string;
};
export function ProfileHeader({user, isMyProfile, publicationCount}: Props) {
  const navigation = useNavigation();
  return (
    <Box paddingHorizontal="s24">
      <Box alignItems="center">
        <ProfileAvatar
          imageURL={user?.profileUrl}
          size={100}
          borderRadius={40}
        />
        <Text preset="headingMedium" mt="s16">
          {user.fullName}
        </Text>
        <Text preset="paragraphLarge" mt="s4" color="gray1">
          @{user.username}
        </Text>
        <ProfileMetadata
          followersCount={user.meta.followersCount}
          followingCount={user.meta.followingCount}
          publicationCount={publicationCount}
        />
        {isMyProfile ? (
          <Box position="absolute" alignSelf="flex-end">
            <Icon
              size={30}
              name="settings"
              onPress={() => navigation.navigate('SettingsScreen')}
            />
          </Box>
        ) : (
          <Box position="absolute" alignSelf="flex-start" left={-24}>
            <BackButton />
          </Box>
        )}
      </Box>
      <Button title="TO DO" marginVertical="s24" />
    </Box>
  );
}
