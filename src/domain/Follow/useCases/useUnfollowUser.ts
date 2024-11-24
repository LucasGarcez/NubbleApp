import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {followService} from '../followService';

export function useUnfollowUser(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: followService.unfollowUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.MyFollowingList]});
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'erro ao deixar de seguir');
      }
    },
  });

  function unFollowUser(userId: number) {
    mutate(userId);
  }

  return {
    unFollowUser,
    isLoading,
  };
}
