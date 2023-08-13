import {Post, postService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList);
}
