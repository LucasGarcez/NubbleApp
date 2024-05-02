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

import {InfinityScrollList, Screen} from '@components';
import {useAppCustomNavigation} from '@hooks';

import {ProfileHeader} from './components/ProfileHeader';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WITH = SCREEN_WIDTH / NUM_COLUMNS;

/**
 * TODO:
 * - [ ] Double check fetch logic (queryKeys with id). Cache invalidation
 */

type Props = {
  userId: number;
  isMyProfile?: boolean;
};

//TODO: render settings page even when has error
// maybe add a button to the error screen to navigate to settings
export function ProfilePage({userId, isMyProfile}: Props) {
  const {user} = useUserGetById(userId);
  const [postCount, setPostCount] = useState<number>();
  const navigate = useAppCustomNavigation();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    //TODO: Add image placeholder to indicate loading
    return (
      <Pressable
        onPress={() => {
          console.log({item});
          navigate.toPostDetails({
            postId: item.id,
            postAuthorId: item.author.id,
          });
        }}>
        <Image
          source={{uri: item.imageURL}}
          style={{width: ITEM_WITH, height: ITEM_WITH}}
        />
      </Pressable>
    );
  }

  function renderListHeader() {
    if (user) {
      return (
        <ProfileHeader
          postCount={postCount}
          user={user}
          isMyProfile={isMyProfile}
        />
      );
    }
    return null;
  }

  async function getPostList(page: number) {
    const response = await postService.getList(page, userId);
    setPostCount(response.meta.total);
    return response;
  }

  // TODO: move settings button to Screen Header
  // TODO: Move Screen to screen level and move settings to header
  return (
    <Screen
      flex={1}
      noPaddingHorizontal
      style={$screen}
      canGoBack={!isMyProfile}>
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
  flex: 1,
};
