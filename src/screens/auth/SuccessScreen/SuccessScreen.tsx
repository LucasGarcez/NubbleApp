import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    // TODO: navegar para a tela de login
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
