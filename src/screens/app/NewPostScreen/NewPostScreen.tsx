import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {Box, Button, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width;

const imageList = [
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post14.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post13.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post12.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post11.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post10.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post9.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post8.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post7.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post6.jpg',
  'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post5.jpg',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => setSelectedImage(item)}>
        <Image
          style={{width: IMAGE_WIDTH / 4, height: IMAGE_WIDTH / 4}}
          source={{uri: item}}
        />
      </Pressable>
    );
  }
  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <ImageBackground
              style={{
                width: IMAGE_WIDTH,
                height: IMAGE_WIDTH,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              source={{uri: selectedImage}}>
              <Button preset="ghost" marginBottom="s24" title="Escolher essa" />
            </ImageBackground>
            <Box
              paddingHorizontal="s24"
              paddingVertical="s16"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text preset="headingSmall"> Sua Galeria</Text>
              <Icon name="camera" />
            </Box>
          </>
        }
        numColumns={4}
        data={imageList}
        renderItem={renderItem}
      />
    </Screen>
  );
}
