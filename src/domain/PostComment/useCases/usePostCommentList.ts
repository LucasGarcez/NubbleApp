import {usePaginatedList} from '@domain';

import {postCommentService} from '../postCommentService';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}
