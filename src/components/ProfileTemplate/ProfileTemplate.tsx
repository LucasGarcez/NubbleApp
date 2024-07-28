import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList, useUserGetById} from '@domain';

import {Screen} from '@components';

import {ProfileHeader} from './components/ProfileHeader';

type Props = {
  userId: number;
  isMyProfile?: boolean;
};

export function ProfileTemplate({userId, isMyProfile}: Props) {
  const {user} = useUserGetById(userId);

  const {list} = usePostList();

  function renderListHeader() {
    if (user) {
      return <ProfileHeader user={user} isMyProfile={isMyProfile} />;
    }
    return null;
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Image source={{uri: item.imageURL}} style={{width: 100, height: 100}} />
    );
  }

  return (
    <Screen
      flex={1}
      noPaddingHorizontal
      style={$screen}
      canGoBack={!isMyProfile}>
      <FlatList
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeader}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
