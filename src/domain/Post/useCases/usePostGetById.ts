import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '..';

export function usePostGetById(postId: number, enabled?: boolean) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.PostGetById, postId],
    queryFn: () => postService.getById(postId),
    staleTime: 1000 * 30, // 30 seconds
    enabled,
  });

  return {
    post: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
