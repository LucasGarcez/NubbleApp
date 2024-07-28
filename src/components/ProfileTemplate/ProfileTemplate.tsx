import React from 'react';
import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, postService, useUserGetById} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList} from '../InfinityScrollList/InfinityScrollList';
import {Screen} from '../Screen/Screen';

import {ProfileHeader} from './components/ProfileHeader';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

type Props = {
  userId: number;
  isMyProfile?: boolean;
};
export function ProfileTemplate({userId, isMyProfile}: Props) {
  const {user} = useUserGetById(userId);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Image
        source={{uri: item.imageURL}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }

  function renderListHeader() {
    if (!user) {
      return null;
    }
    return <ProfileHeader user={user} isMyProfile={isMyProfile} />;
  }

  async function getPostList(page: number) {
    const response = await postService.getList(page, userId);
    return response;
  }

  return (
    <Screen canGoBack={!isMyProfile} flex={1} style={$screen}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList, userId]}
        getList={getPostList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
          numColumns: NUM_COLUMNS,
        }}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  // flex: 1,
};
