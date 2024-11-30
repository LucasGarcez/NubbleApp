import {useState} from 'react';

import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {useFollowUser} from '..';
import {followService} from '../followService';

export function useUnfollowUser(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();
  const [savedUserId, setSavedUserId] = useState<number | null>(null);

  const {followUser} = useFollowUser();

  const {mutate, isLoading} = useMutation({
    mutationFn: followService.unfollowUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.MyFollowingList]});
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

  function unFollowUser(userId: number, followId: number) {
    console.log({userId, followId});
    setSavedUserId(userId);
    mutate(followId);
  }

  function undo() {
    if (savedUserId) {
      console.log('undo:', savedUserId);
      followUser(savedUserId);
    }
  }

  return {
    unFollowUser,
    undo,
    isLoading,
  };
}
