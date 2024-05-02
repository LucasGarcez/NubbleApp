import React from 'react';

import {useUserGetById} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormTextInput,
  InputButton,
  PressableBox,
  ProfileAvatar,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AppScreenProps} from '@routes';

import {EditProfileSchema, editProfileSchema} from './editProfileSchema';

// const resetParam: AuthStackParamList['SuccessScreen'] = {
//   title: 'Sua conta foi criada com sucesso!',
//   description: 'Agora é só fazer login na nossa plataforma',
//   icon: {
//     name: 'checkRound',
//     color: 'success',
//   },
// };

const defaultValues: EditProfileSchema = {
  username: '',
  firstName: '',
  lastName: '',
};

export function EditProfileScreen({
  route,
  navigation,
}: AppScreenProps<'EditProfileScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const userId = route.params.userId;
  const {user} = useUserGetById(userId);

  // Initial value is user Props
  // split in Screen (Container) and Form component
  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<EditProfileSchema>({
      resolver: zodResolver(editProfileSchema),
      defaultValues,
      mode: 'onChange',
    });
  function submitForm(formValues: EditProfileSchema) {
    // submit
  }

  function navigateToUpdateProfilePicture() {
    // TODO:
  }

  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      {user && (
        <PressableBox
          onPress={navigateToUpdateProfilePicture}
          flexDirection="row"
          alignItems="center"
          mb="s24">
          <ProfileAvatar
            size={64}
            borderRadius={24}
            imageURL={user.profileUrl}
          />
          <Text ml="s16" color="primary" preset="paragraphMedium" bold>
            Alterar foto
          </Text>
        </PressableBox>
      )}
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        // errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        // RightComponent={
        //   usernameValidation.isFetching ? (
        //     <ActivityIndicator size="small" />
        //   ) : undefined
        // }
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

      <InputButton label="E-mail" value="email@gmail.com" mb="s20" />
      <InputButton
        label="Senha"
        value="••••••••"
        onPress={() => navigation.navigate('EditPasswordScreen')}
      />

      <Button
        // loading={isLoading}
        // disabled={
        //   !formState.isValid ||
        //   usernameValidation.notReady ||
        //   emailValidation.notReady
        // }
        mt="s40"
        onPress={handleSubmit(submitForm)}
        title="Salvar Alterações"
      />
    </Screen>
  );
}
