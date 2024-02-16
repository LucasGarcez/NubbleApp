import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {usePostCreate} from '@domain';
import {useToastService} from '@services';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
  navigation,
}: AppScreenProps<'PublishPostScreen'>) {
  const postImage = route.params.postImage;

  const [description, setDescription] = useState('');
  const {showToast} = useToastService();

  const {createPost} = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {
        screen: 'HomeScreen',
      });
      showToast({message: 'Foto publicada!', type: 'success'});
    },
  });

  function publishPost() {
    createPost({text: description, postImage});
  }

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: postImage.uri,
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
      <Button
        disabled={!description}
        mt="s56"
        title="Publicar post"
        onPress={publishPost}
      />
    </Screen>
  );
}
