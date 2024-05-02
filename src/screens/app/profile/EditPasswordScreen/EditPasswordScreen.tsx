import React from 'react';

import {useAuthUpdatePassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Button, FormPasswordInput, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditPasswordSchema, editPasswordSchema} from './editPasswordSchema';

const defaultValues: EditPasswordSchema = {
  currentPassword: '',
  newPassword: '',
  confirmedNewPassword: '',
};

export function EditPasswordScreen({
  navigation,
}: AppScreenProps<'EditPasswordScreen'>) {
  const {showToast} = useToastService();

  const {isLoading, updatePassword} = useAuthUpdatePassword({
    onError: message => {
      // TODO: add position: 'bottom' and fix toast message
      // https://github.com/LucasGarcez/NubbleApp/pull/11
      showToast({message, type: 'error'});
    },
    onSuccess: message => {
      showToast({message, type: 'success'});
      navigation.goBack();
    },
  });

  const {control, formState, handleSubmit} = useForm<EditPasswordSchema>({
    resolver: zodResolver(editPasswordSchema),
    defaultValues,
    mode: 'onChange',
  });
  function submitForm(formValues: EditPasswordSchema) {
    updatePassword({
      currentPassword: formValues.currentPassword,
      newPassword: formValues.newPassword,
    });
  }

  return (
    <Screen canGoBack scrollable title="Alterar senha">
      <FormPasswordInput
        control={control}
        name="currentPassword"
        label="Senha Atual"
        placeholder="Digite sua senha atual"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="newPassword"
        label="Nova Senha"
        placeholder="Digite sua nova senha"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="confirmedNewPassword"
        label="Confirme a nova senha"
        placeholder="Digite novamente sua nova senha"
        boxProps={{mb: 's20'}}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        mt="s40"
        onPress={handleSubmit(submitForm)}
        title="Salvar Alterações"
      />
    </Screen>
  );
}
