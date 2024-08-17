import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';

type ButtonVariants = 'myProfile' | 'isFollowing' | 'isNotFollowing';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset'>
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
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
};
export function ProfileButton({isFollowing, isMyProfile}: ProfileButtonProps) {
  const navigation = useNavigation();
  const variant = getVariant({isFollowing, isMyProfile});
  const buttonProps = buttonVariants[variant];

  function handleOnPress() {
    if (isMyProfile) {
      navigation.navigate('EditProfileScreen');
    }
  }

  return (
    <Button marginVertical="s24" onPress={handleOnPress} {...buttonProps} />
  );
}

function getVariant({
  isFollowing,
  isMyProfile,
}: Pick<ProfileButtonProps, 'isFollowing' | 'isMyProfile'>): ButtonVariants {
  if (isMyProfile) {
    return 'myProfile';
  }
  if (isFollowing) {
    return 'isFollowing';
  }

  return 'isNotFollowing';
}
