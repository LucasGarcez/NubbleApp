import React from 'react';
import {ListRenderItemInfo, Image} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

import {Screen, Text} from '@components';
import {InfinityScrollList} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Image
        source={{uri: item.post.imageURL}}
        style={{width: 300, height: 300}}
      />
    );
  }

  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
