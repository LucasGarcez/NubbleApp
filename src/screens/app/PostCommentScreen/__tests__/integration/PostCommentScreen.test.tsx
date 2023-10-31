import React from 'react';

import {server} from '@test';
import {renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
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

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();
  });
});
