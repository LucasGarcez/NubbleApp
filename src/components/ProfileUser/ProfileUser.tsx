import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  PressableBox,
  PressableBoxProps,
  Text,
  ProfileAvatar,
} from '@components';

type Props = Pick<User, 'id' | 'profileUrl' | 'username'> &
  Omit<PressableBoxProps, 'id'>;
export function ProfileUser({
  id,
  profileUrl,
  username,
  onPress,
  ...pressableBoxProps
}: Props) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', {userId: id});
  }

  return (
    <PressableBox
      onPress={handleOnPress}
      flexDirection="row"
      alignItems="center"
      {...pressableBoxProps}>
      <ProfileAvatar imageURL={profileUrl} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {username}
      </Text>
    </PressableBox>
  );
}
