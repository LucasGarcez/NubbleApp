import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

const WIDTH = Dimensions.get('screen').width;

type Props = Pick<Post, 'imageURL'>;
export function PostImage({imageURL}: Props) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width: WIDTH,
        height: WIDTH,
        marginHorizontal: -24,
      }}
    />
  );
}
