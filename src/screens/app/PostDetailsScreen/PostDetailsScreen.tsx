// PostDetailsScreen

import React from 'react';

import {usePostGetById} from '@domain';

import {PostItem, Screen} from '@components';
import {AppScreenProps} from '@routes';

export function PostDetailsScreen({
  route,
}: AppScreenProps<'PostDetailsScreen'>) {
  const {post} = usePostGetById(route.params.postId);

  return (
    <Screen noPaddingHorizontal title="Post" canGoBack>
      {post && <PostItem hideCommentActions post={post} />}
    </Screen>
  );
}
