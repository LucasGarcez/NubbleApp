import React from 'react';

import {useUserGetById} from '@domain';
import {useToastService} from '@services';

import {Button, InputButton, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditProfileForm, EditProfileFormRef} from './EditProfileForm';

export function EditProfileScreen({
  route,
  navigation,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  // const [setFormState] = React.useState({
  //   isLoading: false,
  //   isValid: false,
  // });

  const formRef = React.useRef<EditProfileFormRef>(null);

  const {showToast} = useToastService();

  function submitForm() {
    formRef.current?.submitForm();
  }

  function onSuccess() {
    showToast({message: 'Perfil atualizado com sucesso', type: 'success'});
    navigation.goBack();
  }

  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      {user && (
        <EditProfileForm
          ref={formRef}
          user={user}
          // onFormStateChange={setFormState}
          onSuccess={onSuccess}
        />
      )}

      <InputButton label="E-mail" value="email@gmail.com" mb="s20" />
      <InputButton
        label="Senha"
        value="••••••••"
        onPress={() => navigation.navigate('EditPasswordScreen')}
      />

      <Button
        // loading={formState.isLoading}
        // disabled={!formState.isValid}
        mt="s40"
        onPress={submitForm}
        title="Salvar Alterações"
      />
    </Screen>
  );
}
