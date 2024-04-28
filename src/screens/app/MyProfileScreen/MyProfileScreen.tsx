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
import {useAuthCredentials} from '@services';

import {InfinityScrollList, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {ProfileHeader} from './components/ProfileHeader';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WITH = SCREEN_WIDTH / NUM_COLUMNS;

/**
 * TODO:
 * - [ ] Move to a ProfilePage component to reuse in ProfileScreen
 * - [ ] Double check fetch logic (queryKeys with id). Cache invalidation
 */
export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCredentials();
  const {user} = useUserGetById(authCredentials?.user.id);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Pressable>
        <Image
          source={{uri: item.imageURL}}
          style={{width: ITEM_WITH, height: ITEM_WITH}}
        />
      </Pressable>
    );
  }

  function renderListHeader() {
    if (user) {
      return <ProfileHeader user={user} />;
    }
    return null;
  }

  return (
    <Screen flex={1} noPaddingHorizontal style={$screen}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList, user?.id]}
        getList={page => postService.getList(page, user?.id)}
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
