import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri: string;
  imageWidth: number;
}
export function Header({imageUri, imageWidth}: Props) {
  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={[
          {
            width: imageWidth,
            height: imageWidth,
          },
          styles.imageBackground,
        ]}>
        <Button preset="ghost" title="Escolher essa" mb="s24" />
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
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
