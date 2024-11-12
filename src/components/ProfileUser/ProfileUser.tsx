import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';

import {
  Text,
  ProfileAvatar,
  PressableBox,
  PressableBoxProps,
  ProfileAvatarProps,
  Box,
} from '@components';
import {useAppNavigation} from '@hooks';

type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;
export function ProfileUser({
  user,
  avatarProps,
  RightComponent,
  onPress,
  ...pressableBoxProps
}: ProfileUserProps) {
  const navigate = useAppNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigate.toProfile(user.id);
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar
          {...avatarProps}
          imageURL={user.profileUrl}
          authorId={user.id}
        />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}
