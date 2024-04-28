import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number, enabled: boolean) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.PostGetById, id],
    queryFn: () => postService.getById(id),
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
