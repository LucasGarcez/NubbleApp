import React from 'react';
import {Dimensions, Image} from 'react-native';

import {useAppColor} from '@services';

import {OnboardingPageItem} from '../onboardingData';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type ImageHeaderProps = {
  image: OnboardingPageItem['image'];
};
export function ImageHeader({image}: ImageHeaderProps) {
  const appColor = useAppColor();

  const source = appColor === 'light' ? image.light : image.dark;

  return <Image source={source} style={{width: SCREEN_WIDTH, height: '90%'}} />;
}
