import React from 'react';
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
import {useNavigation} from '@react-navigation/native';

import {InfinityScrollList, Screen} from '@components';

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

export function ProfilePage({userId, isMyProfile}: Props) {
  const {user} = useUserGetById(userId);
  const navigation = useNavigation();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    //TODO: Add image placeholder to indicate loading
    return (
      <Pressable
        onPress={() => {
          console.log({item});
          navigation.navigate('PostCommentScreen', {
            postId: item.id,
            postAuthorId: item.author.id,
            showPost: true,
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
      return <ProfileHeader user={user} isMyProfile={isMyProfile} />;
    }
    return null;
  }

  // TODO: move settings button to Screen Header
  return (
    <Screen
      flex={1}
      noPaddingHorizontal
      style={$screen}
      canGoBack={!isMyProfile}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList, userId]}
        getList={page => postService.getList(page, userId)}
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
