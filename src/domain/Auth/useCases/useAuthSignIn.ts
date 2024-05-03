import {MutationOptions} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';
import {errorUtils} from '@utils';

import {authService} from '../authService';
import {AuthCredentials} from '../authTypes';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, unknown, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        const message = errorUtils.getErrorMessage(error);
        options.onError(message);
      }
    },
    onSuccess: authCredentials => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
