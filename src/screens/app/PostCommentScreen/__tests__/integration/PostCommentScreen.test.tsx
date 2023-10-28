import React from 'react';

import {renderScreen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );
  });
});
