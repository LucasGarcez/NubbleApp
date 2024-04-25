import {act, renderHook, waitFor} from 'test-utils';

import {postReactionService, useReactToPost} from '..';

import {mockedPostWithoutLike} from './mockedData/mockedPost';

describe('useReactToPost', () => {
  test('when react to post, hasReacted and reactionCount should be updated', async () => {
    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockResolvedValueOnce(mockedPostWithoutLike.response);

    const {result} = renderHook(() =>
      useReactToPost({
        post: mockedPostWithoutLike.post,
        postReactionType: 'like',
      }),
    );

    expect(result.current.hasReacted).toBe(false);
    expect(result.current.reactionCount).toBe(
      mockedPostWithoutLike.post.reactionCount,
    );

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => expect(result.current.hasReacted).toBe(true));
    await waitFor(() =>
      expect(result.current.reactionCount).toBe(
        mockedPostWithoutLike.post.reactionCount + 1,
      ),
    );
  });
});
