import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll, usePermission} from '@services';

import {PermissionManager, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Header} from './components/Header';

const IMAGE_WIDTH = Dimensions.get('screen').width;

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const permission = usePermission('photoLibrary');
  const isGranted = permission.status === 'granted';
  const {photoList, fetchNextPage} = useCameraRoll(isGranted, setSelectedImage);

  const flatListRef = React.useRef<FlatList<string>>(null);

  function onSelectItem(item: string) {
    setSelectedImage(item);
    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectItem(item)}>
        <Image
          style={{width: IMAGE_WIDTH / 4, height: IMAGE_WIDTH / 4}}
          source={{uri: item}}
        />
      </Pressable>
    );
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita o Nubble acessar as images da sua galeria">
      <Screen canGoBack title="Novo post" noPaddingHorizontal>
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={
            <Header imageWidth={IMAGE_WIDTH} imageUri={selectedImage} />
          }
          numColumns={4}
          data={photoList}
          renderItem={renderItem}
        />
      </Screen>
    </PermissionManager>
  );
}
