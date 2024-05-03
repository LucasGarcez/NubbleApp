import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';
import {errorUtils} from '@utils';

import {EditUserParams, User, userService} from '..';

export function useUserEdit(options?: MutationOptions<User>) {
  const {mutate, isLoading} = useMutation<User, unknown, EditUserParams>({
    mutationFn: params => userService.editUser(params),
    retry: false,
    onError: error => {
      if (options?.onError) {
        const message = errorUtils.getErrorMessage(error);
        options.onError(message);
      }
    },
    onSuccess: user => {
      if (options?.onSuccess) {
        options?.onSuccess(user);
      }
    },
  });

  return {
    editUser: (params: EditUserParams) => mutate(params),
    isLoading,
  };
}
