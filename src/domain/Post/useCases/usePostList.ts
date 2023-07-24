import {Post, postService, usePaginatedList} from '@domain';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
