import React from 'react';
import {Dimensions, Image} from 'react-native';

import {images} from '@assets';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export function ImageHeader() {
  return (
    <Image source={images.onboardingDark1} style={{width: SCREEN_WIDTH}} />
  );
}
