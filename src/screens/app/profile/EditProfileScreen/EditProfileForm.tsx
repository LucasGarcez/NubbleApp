import React, {useImperativeHandle} from 'react';
import {View} from 'react-native';

import {User, authService, useUserEdit, userService} from '@domain';
import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, FormTextInput} from '@components';

import {EditProfileSchema, editProfileSchema} from './editProfileSchema';

type EditProfileFormProps = {
  user: User;
  onFormStateChange?: (state: {isLoading: boolean; isValid: boolean}) => void;
  onSuccess?: (user: User) => void;
};

export type EditProfileFormRef = {
  submitForm: () => void;
};

export const EditProfileForm = React.forwardRef<
  EditProfileFormRef,
  EditProfileFormProps
>((props, ref) => {
  const {showToast} = useToastService();

  const {editUser} = useUserEdit({
    onError: message => {
      showToast({message, type: 'error'});
    },
    onSuccess: data => {
      if (props.onSuccess) {
        props.onSuccess(data);
      }
    },
  });

  const {control, handleSubmit, watch, getFieldState} =
    useForm<EditProfileSchema>({
      resolver: zodResolver(editProfileSchema),
      defaultValues: {
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        username: props.user.username,
      },
      mode: 'onChange',
    });

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      handleSubmit(formValues => {
        editUser(userService.updateUserHelper(props.user, formValues));
      })();
    },
  }));

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    asyncValidateFunc: authService.isUserNameAvailable,
    fieldName: 'username',
    errorMessage: 'username indisponível',
  });

  return (
    <View>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />
    </View>
  );
});
