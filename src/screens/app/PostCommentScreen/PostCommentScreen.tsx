import React from 'react';

import {usePostCommentList} from 'src/domain/PostComment/useCases/usePostCommentList';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
