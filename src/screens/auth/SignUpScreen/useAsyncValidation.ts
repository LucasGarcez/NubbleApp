import {useAuthIsEmailAvailable, useAuthIsUsernameAvailable} from '@domain';
import {UseFormWatch, UseFormGetFieldState} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
      isFetching: usernameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'e-mail indisponível'
        : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
