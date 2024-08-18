import React, {useState} from 'react';

import {useUserGetById} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditProfileForm} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  function submitForm() {
    //TODO:
  }
  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} />
      {user && <EditProfileForm user={user} onChangeIsValid={setFormIsValid} />}

      <Button
        mt="s40"
        title="Salvar Alterações"
        onPress={submitForm}
        disabled={!formIsValid}
      />
    </Screen>
  );
}
