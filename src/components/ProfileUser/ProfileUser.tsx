import React from 'react';
import {Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, ProfileAvatar} from '@components';

type Props = Pick<User, 'id' | 'profileUrl' | 'username'>;
export function ProfileUser({id, profileUrl, username}: Props) {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate('ProfileScreen', {userId: id});
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {username}
        </Text>
      </Box>
    </Pressable>
  );
}
