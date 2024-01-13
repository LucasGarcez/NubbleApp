import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');
  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: route.params.imageUri,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui..."
        containerProps={{borderWidth: 0}}
      />
      <Button mt="s56" title="Publicar post" />
    </Screen>
  );
}
