import React from 'react';

import {UserPreference, useSettingsService, useUsePreference} from '@services';

import {RadioButtonSelector, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

type Option = {
  label: string;
  description?: string;
  value: UserPreference;
};
const options: Option[] = [
  {
    label: 'Ativado',
    value: 'dark',
  },
  {
    label: 'Desativado',
    value: 'light',
  },
  {
    label: 'Padrão do sistema',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
    value: 'system',
  },
];

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  // const [selectedItem, setSelectedItem] = React.useState<Option | null>(null);
  const {setUserPreference} = useSettingsService();
  const userPreference = useUsePreference();

  const selectedItem = options.find(option => option.value === userPreference);
  console.log(selectedItem);
  const setSelectedItem = (item: Option) => {
    setUserPreference(item.value);
  };

  return (
    <Screen flex={1} canGoBack title="Modo Escuro">
      <RadioButtonSelector
        items={options}
        labelKey="label"
        descriptionKey="description"
        valueKey="value"
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
      <Text mt="s48">{JSON.stringify(selectedItem, null, 2)}</Text>
    </Screen>
  );
}
