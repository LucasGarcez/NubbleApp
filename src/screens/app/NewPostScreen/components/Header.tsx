import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {images} from '@assets';
import {PostImage} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri?: string;
  imageWidth: number;
  image?: PostImage;
}
export function Header({image, imageWidth}: Props) {
  const navigation = useNavigation();

  function navigateToPublishPost() {
    if (image) {
      navigation.navigate('PublishPostScreen', {postImage: image});
    }
  }

  function navigateToCamera() {
    navigation.navigate('CameraScreen');
  }
  return (
    <Box>
      <ImageBackground
        source={image?.uri ? {uri: image.uri} : images.imagePlaceholder}
        style={[
          {
            width: imageWidth,
            height: imageWidth,
          },
          styles.imageBackground,
        ]}>
        {Boolean(image?.uri) && (
          <Button
            onPress={navigateToPublishPost}
            preset="ghost"
            title="Escolher essa"
            mb="s24"
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" onPress={navigateToCamera} />
      </Box>
    </Box>
  );
}

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
