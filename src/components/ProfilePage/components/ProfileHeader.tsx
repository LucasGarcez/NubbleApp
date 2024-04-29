import React from 'react';
import {View} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ProfileAvatar, Text} from '@components';

import {MainButton} from './MainButton';
import {ProfileMetadata} from './ProfileMetadata';

type Props = {
  user: User;
  postCount?: number;
  isMyProfile?: boolean;
};
export function ProfileHeader({user, postCount, isMyProfile}: Props) {
  const navigation = useNavigation();

  return (
    <Box paddingHorizontal="s24" mb="s32">
      <Box mb="s12" alignSelf="flex-end">
        <Icon
          size={30}
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>

      <View>
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user?.profileUrl}
            size={100}
            borderRadius={40}
          />
          <Text mt="s16" preset="headingMedium">
            {user.fullName}
          </Text>
          <Text mt="s4" preset="paragraphLarge" color="gray1">
            @{user.username}
          </Text>
        </Box>
        <ProfileMetadata
          followingCount={user.meta.followingCount}
          followersCount={user.meta.followersCount}
          publicationCount={postCount?.toString()}
        />

        <MainButton isFollowing={false} isMyProfile={isMyProfile} />
      </View>
    </Box>
  );
}
