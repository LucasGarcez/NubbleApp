import React from 'react';
import {Image} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  const {list} = useCameraRoll();
  return (
    <Screen scrollable>
      <Text preset="headingSmall">New Post Screen</Text>
      {list.map(photo => (
        <Image
          key={photo}
          source={{uri: photo}}
          style={{width: 200, height: 200}}
        />
      ))}
    </Screen>
  );
}
