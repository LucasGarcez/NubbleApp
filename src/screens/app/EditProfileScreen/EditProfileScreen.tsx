import React, {useRef, useState} from 'react';

import {useUserGetById} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  EditProfileForm,
  EditProfileFormRef,
} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  function submitForm() {
    formRef.current?.onSubmit();
  }
  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} />
      {user && (
        <EditProfileForm
          ref={formRef}
          user={user}
          onChangeIsValid={setFormIsValid}
        />
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
