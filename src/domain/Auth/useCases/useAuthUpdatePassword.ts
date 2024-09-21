import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {EditPasswordParams} from '..';
import {authService} from '../authService';

export function useAuthUpdatePassword(options?: MutationOptions<string>) {
  const {mutate, isLoading} = useMutation<string, unknown, EditPasswordParams>({
    mutationFn: params => authService.updatePassword(params),
    retry: false,
    onSuccess: message => {
      if (options?.onSuccess) {
        options?.onSuccess(message);
      }
    },
  });

  return {
    updatePassword: (params: EditPasswordParams) => mutate(params),
    isLoading,
  };
}
