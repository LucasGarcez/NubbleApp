import React, {useRef, useState} from 'react';

import {useUserGetById} from '@domain';

import {Button, InputButton, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  EditProfileForm,
  EditProfileFormRef,
} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
  navigation,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  function submitForm() {
    formRef.current?.onSubmit();
  }
  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} mb="s24" />
      {user && (
        <EditProfileForm
          ref={formRef}
          user={user}
          onChangeIsValid={setFormIsValid}
        />
      )}

      {user && (
        <>
          <InputButton
            label="email"
            value={user?.email}
            mb="s16"
            onPress={() =>
              navigation.navigate('EditEmailScreen', {
                userId: route.params.userId,
              })
            }
          />
          <InputButton
            label="Senha"
            value="•••••••"
            onPress={() =>
              navigation.navigate('EditPasswordScreen', {
                userId: route.params.userId,
              })
            }
          />
        </>
      )}

      <Button
        mt="s40"
        title="Salvar Alterações"
        onPress={submitForm}
        disabled={!formIsValid}
      />
    </Screen>
  );
}
