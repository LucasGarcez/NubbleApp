import {dateUtils} from '@utils';

import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    createdAt: postCommentAPI.created_at,
    createdAtRelative: dateUtils.formatRelative(postCommentAPI.created_at),
    author: {
      id: postCommentAPI.user.id,
      name: postCommentAPI.user.full_name,
      profileURL: postCommentAPI.user.profile_url,
      userName: postCommentAPI.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
