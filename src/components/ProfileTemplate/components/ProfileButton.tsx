import React from 'react';

import {useFollowUser} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';

type ButtonVariants =
  | 'myProfile'
  | 'isFollowing'
  | 'isNotFollowing'
  | 'loading';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset' | 'loading'>
> = {
  myProfile: {
    title: 'Editar perfil',
    preset: 'gray',
  },
  isFollowing: {
    title: 'Mensagem',
    preset: 'primary',
  },
  isNotFollowing: {
    title: 'Seguir',
    preset: 'outline',
  },
  loading: {
    title: 'Carregando...',
    preset: 'outline',
    loading: true,
  },
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
};
export function ProfileButton({
  isFollowing,
  isMyProfile,
  userId,
}: ProfileButtonProps) {
  const navigation = useNavigation();
  const {followUser, isLoading} = useFollowUser();

  const variant = getVariant({isFollowing, isMyProfile, isLoading});
  const buttonProps = buttonVariants[variant];

  function handleOnPress() {
    switch (variant) {
      case 'isFollowing':
        // navigation.navigate('ChatScreen', {userId});
        break;
      case 'isNotFollowing':
        followUser(userId);
        break;
      case 'myProfile':
        navigation.navigate('EditProfileScreen', {userId});
    }
  }

  return (
    <Button marginVertical="s24" onPress={handleOnPress} {...buttonProps} />
  );
}

function getVariant({
  isFollowing,
  isMyProfile,
  isLoading,
}: Pick<ProfileButtonProps, 'isFollowing' | 'isMyProfile'> & {
  isLoading: boolean;
}): ButtonVariants {
  if (isLoading) {
    return 'loading';
  }
  if (isMyProfile) {
    return 'myProfile';
  }
  if (isFollowing) {
    return 'isFollowing';
  }

  return 'isNotFollowing';
}
