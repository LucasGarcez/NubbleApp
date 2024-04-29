import React from 'react';
import {Image, Pressable} from 'react-native';

import {useNavigateToProfile} from '@hooks';

export interface ProfileAvatarProps {
  imageURL: string;
  /** @default 32 */
  size?: number;
  /** @default 14 */
  borderRadius?: number;
  /** if available, it will allow navigate to the author profile */
  authorId?: number;
}
export function ProfileAvatar({
  imageURL,
  size = 32,
  borderRadius = 14,
  authorId,
}: ProfileAvatarProps) {
  const navigateToProfile = useNavigateToProfile();

  function handlePress() {
    if (authorId) {
      navigateToProfile(authorId);
    }
  }
  return (
    <Pressable disabled={!authorId} onPress={handlePress}>
      <Image
        source={{uri: imageURL}}
        style={{width: size, height: size, borderRadius}}
      />
    </Pressable>
  );
}
