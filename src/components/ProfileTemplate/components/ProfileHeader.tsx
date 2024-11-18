import React from 'react';

import {UserDetails} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {BackButton, Box, Icon, ProfileAvatar, Text} from '@components';

import {ProfileButton} from './ProfileButton';
import {ProfileMetadata} from './ProfileMetadata';

type Props = {
  userDetails: UserDetails;
  isMyProfile?: boolean;
  publicationCount: string;
};
export function ProfileHeader({
  userDetails,
  isMyProfile,
  publicationCount,
}: Props) {
  const navigation = useNavigation();
  return (
    <Box paddingHorizontal="s24">
      <Box alignItems="center">
        <ProfileAvatar
          imageURL={userDetails?.profileUrl}
          size={100}
          borderRadius={40}
        />
        <Text preset="headingMedium" mt="s16">
          {userDetails.fullName}
        </Text>
        <Text preset="paragraphLarge" mt="s4" color="gray1">
          @{userDetails.username}
        </Text>
        <ProfileMetadata
          followersCount={userDetails.meta.followersCount}
          followingCount={userDetails.meta.followingCount}
          publicationCount={publicationCount}
          isMyProfile={isMyProfile}
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

      <ProfileButton
        userId={userDetails.id}
        isMyProfile={isMyProfile}
        isFollowing={userDetails.isFollowing}
      />
    </Box>
  );
}
