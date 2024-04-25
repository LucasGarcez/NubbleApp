import {useState} from 'react';

import {
  Post,
  PostReactionBase,
  PostReactionType,
  postReactionService,
} from '@domain';
import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

type Params = {
  post: Post;
  postReactionType: PostReactionType;
  options?: MutationOptions<PostReactionBase>;
};
export function useReactToPost({post, postReactionType, options}: Params) {
  const initialHasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReactionType,
  );

  const initialReactionCount =
    postReactionType === 'like' ? post.reactionCount : post.favoriteCount;

  const [reactionState, setReactionState] = useState({
    hasReacted: initialHasReacted,
    reactionCount: initialReactionCount,
  });

  const {mutate} = useMutation<PostReactionBase, Error>({
    mutationFn: () =>
      postReactionService.reactToPost(post.id, postReactionType),
    onSuccess: () => {
      // TODO:
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function reactToPost() {
    setReactionState(prev => ({
      hasReacted: !prev.hasReacted,
      reactionCount: prev.hasReacted
        ? prev.reactionCount - 1
        : prev.reactionCount + 1,
    }));
    mutate();
  }

  return {
    hasReacted: reactionState.hasReacted,
    reactionCount: reactionState.reactionCount,
    reactToPost,
  };
}
