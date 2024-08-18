import React, {useEffect, useImperativeHandle} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {User, authService} from '@domain';
import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {FormTextInput} from '@components';

import {EditProfileSchema, editProfileSchema} from '../editProfileSchema';

type Props = {
  user: User;
  onChangeIsValid: (isValid: boolean) => void;
};

export type EditProfileFormRef = {
  onSubmit: () => void;
};

export function EditProfileFormComponent(
  {user, onChangeIsValid}: Props,
  ref: React.Ref<EditProfileFormRef>,
) {
  const {control, watch, getFieldState, formState, handleSubmit} =
    useForm<EditProfileSchema>({
      resolver: zodResolver(editProfileSchema),
      defaultValues: {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      mode: 'onChange',
    });

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'username',
    errorMessage: 'username indisponível',
    isAvailableFunc: authService.isUserNameAvailable,
  });

  useEffect(() => {
    onChangeIsValid(formState.isValid && !usernameValidation.notReady);
  }, [formState.isValid, onChangeIsValid, usernameValidation.notReady]);

  useImperativeHandle(ref, () => ({
    onSubmit: () => {
      handleSubmit(formValues => console.log(formValues))();
    },
  }));

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
}

export const EditProfileForm = React.forwardRef(EditProfileFormComponent);
