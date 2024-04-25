import React from 'react';
import {ListRenderItemInfo, Image, Dimensions} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {PressableBox, Screen, Text} from '@components';
import {InfinityScrollList} from '@components';
import {AppTabScreenProps} from '@routes';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 16;

const ITEM_WITH =
  (SCREEN_WIDTH - ITEM_MARGIN - SCREEN_PADDING * 2) / NUM_COLUMNS;

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  const navigation = useNavigation();

  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <PressableBox
        onPress={
          // If it is just one line, it isn't worth extracting to a function
          () => navigation.navigate('PostDetailsScreen', {postId: item.post.id})
        }>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_WITH, height: ITEM_WITH}}
        />
        <Text semiBold>{item.author.username}</Text>
      </PressableBox>
    );
  }

  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: ITEM_MARGIN},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
