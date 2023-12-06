import React from 'react';
import {ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Button, Icon, Text} from '@components';

interface Props {
  imageUri?: string;
  imageWidth: number;
}
export function Header({imageUri, imageWidth}: Props) {
  const navigation = useNavigation();

  function navigateToPublish() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', {
        imageUri,
      });
    }
  }

  return (
    <Box>
      <ImageBackground
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: imageWidth,
          height: imageWidth,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        source={{uri: imageUri}}>
        <Button
          disabled={!imageUri}
          preset="ghost"
          marginBottom="s24"
          title="Escolher essa"
          onPress={navigateToPublish}
        />
      </ImageBackground>
      <Box
        paddingHorizontal="s24"
        paddingVertical="s16"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text preset="headingSmall">Sua Galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}
