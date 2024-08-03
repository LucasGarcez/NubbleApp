import React from 'react';
import {Image, Pressable} from 'react-native';

import {useAppNavigation} from '@hooks';

export interface ProfileAvatarProps {
  imageURL: string;
  /** @default 32 */
  size?: number;
  /** @default 14 */
  borderRadius?: number;
  authorId?: number;
}
export function ProfileAvatar({
  imageURL,
  size = 32,
  borderRadius = 14,
  authorId,
}: ProfileAvatarProps) {
  const navigate = useAppNavigation();

  function handleOnPress() {
    if (authorId) {
      navigate.toProfile(authorId);
    }
  }

  return (
    <Pressable disabled={!authorId} onPress={handleOnPress}>
      <Image
        source={{uri: imageURL}}
        style={{width: size, height: size, borderRadius}}
      />
    </Pressable>
  );
}
