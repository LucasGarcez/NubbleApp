import {act, renderHook, waitFor} from 'test-utils';

import {postReactionService, useReactToPost} from '..';

import {
  mockedPostWithLike,
  mockedPostWithoutLike,
} from './mockedData/mockedPost';

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
  test('when react to post fails, hasReacted and reactionCount should be reverted to the original values', async () => {
    const errorMessage = 'API error';
    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockRejectedValueOnce(new Error(errorMessage));

    const mockedOnError = jest.fn();

    const {result} = renderHook(() =>
      useReactToPost({
        post: mockedPostWithLike.post,
        postReactionType: 'like',
        options: {onError: mockedOnError},
      }),
    );

    expect(result.current.hasReacted).toBe(true);
    expect(result.current.reactionCount).toBe(
      mockedPostWithLike.post.reactionCount,
    );

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => expect(result.current.hasReacted).toBe(true));
    await waitFor(() =>
      expect(result.current.reactionCount).toBe(
        mockedPostWithLike.post.reactionCount,
      ),
    );

    expect(mockedOnError).toHaveBeenCalledWith(errorMessage);
  });
});
