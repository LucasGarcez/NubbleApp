import {Post, PostReactionType, postReactionService} from '@domain';

type Params = {
  post: Post;
  postReactionType: PostReactionType;
};
export function useReactToPost({post, postReactionType}: Params) {
  const hasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReactionType,
  );

  return {
    hasReacted,
  };
}
