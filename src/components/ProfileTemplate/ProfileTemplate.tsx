import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, postService, useUserGetById} from '@domain';
import {QueryKeys} from '@infra';

import {useAppNavigation} from '@hooks';

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
  const [publicationCount, setPublicationCount] = useState(0);

  const navigate = useAppNavigation();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Pressable
        onPress={() => {
          navigate.toPostDetails({
            postId: item.id,
            postAuthorId: item.author.id,
          });
        }}>
        <Image
          source={{uri: item.imageURL}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  }

  function renderListHeader() {
    if (!user) {
      return null;
    }
    return (
      <ProfileHeader
        userDetails={user}
        isMyProfile={isMyProfile}
        publicationCount={publicationCount.toString()}
      />
    );
  }

  async function getPostList(page: number) {
    const response = await postService.getList(page, userId);
    setPublicationCount(response.meta.total);
    return response;
  }

  return (
    <Screen flex={1} style={$screen}>
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
