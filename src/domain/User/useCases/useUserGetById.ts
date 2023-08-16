import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30, // 10 seconds
    // cacheTime: 5000,
  });

  return {
    user: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
