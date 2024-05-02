import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';

type MainButtonVariants = 'myProfile' | 'isFollowing' | 'isNotFollowing';

const mainButtonVariants: Record<
  MainButtonVariants,
  Pick<ButtonProps, 'title' | 'preset'>
> = {
  myProfile: {
    title: 'Editar Perfil',
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

type MainButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
};

export function MainButton({
  isFollowing,
  isMyProfile,
  userId,
}: MainButtonProps) {
  const navigation = useNavigation();
  const buttonProps =
    mainButtonVariants[getVariant({isMyProfile, isFollowing})];

  function handleOnPress() {
    if (isMyProfile) {
      navigation.navigate('EditProfileScreen', {userId});
    } else if (isFollowing) {
      // TODO: change UI to have two buttons (message and unfollow)
    }
  }

  return <Button mt="s24" {...buttonProps} onPress={handleOnPress} />;
}

function getVariant({
  isMyProfile,
  isFollowing,
}: {
  isMyProfile?: boolean;
  isFollowing?: boolean;
}): MainButtonVariants {
  if (isMyProfile) {
    return 'myProfile';
  }
  return isFollowing ? 'isFollowing' : 'isNotFollowing';
}
