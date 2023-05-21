import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';
import {Alert} from 'react-native';

type LoginFormType = {
  email: string;
  password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export function LoginScreen({navigation}: ScreenProps) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [emailErrorMessage, setEmailErrorMessage] = useState('');

  // useEffect(() => {
  //   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  //   setEmailErrorMessage(isValidEmail ? '' : 'E-mail inválido');
  // }, [email]);

  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function submitForm({email, password}: LoginFormType) {
    Alert.alert(`Email: ${email} ${`\n`} Senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      {/* <PasswordInput
        value={password}
        onChangeText={setPassword}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      /> */}

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        // disabled={!!emailErrorMessage || password.length < 6}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
