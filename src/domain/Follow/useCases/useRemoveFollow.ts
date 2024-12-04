import {useState} from 'react';

import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {useFollowUser} from '..';
import {followService} from '../followService';

export function useRemoveFollow(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();
  const [savedUsedId, setSavedUsedId] = useState<null | number>(null);

  const {followUser} = useFollowUser();

  const {mutate, isLoading} = useMutation({
    mutationFn: followService.removeFollow,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.MyFollowingList]});
      queryClient.invalidateQueries({queryKey: [QueryKeys.MyFollowersList]});
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.UserGetById],
      });
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

  function removeFollow({
    followId,
    userId,
  }: {
    followId: number;
    userId?: number;
  }) {
    if (userId) {
      setSavedUsedId(userId);
    }
    mutate(followId);
  }

  function undoRemoveFollow() {
    if (savedUsedId) {
      followUser(savedUsedId);
    }
  }

  return {
    removeFollow,
    isLoading,
    undoRemoveFollow,
  };
}
