import React from 'react';

import {RadioButtonSelector, Screen} from '@components';
import {AppScreenProps} from '@routes';

const items = [
  {
    label: 'Ativado',
    onPress: () => {},
    isSelected: false,
  },
  {
    label: 'Desativado',
    isSelected: true,
    onPress: () => {},
  },
  {
    label: 'Padrão do sistema',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
    onPress: () => {},
    isSelected: false,
  },
];

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector items={items} />
    </Screen>
  );
}
