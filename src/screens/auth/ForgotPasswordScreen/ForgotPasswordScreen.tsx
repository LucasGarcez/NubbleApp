import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: `Enviamos as instruções ${'\n'}para seu e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'iconColor',
    fillColor: 'iconFillColor',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {showToast} = useToastService();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(values: ForgotPasswordSchema) {
    requestNewPassword(values.email);
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
