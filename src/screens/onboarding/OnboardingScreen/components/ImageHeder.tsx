import React from 'react';
import {Dimensions, Image} from 'react-native';

import {useAppColor} from '@services';

import {OnboardingPageType} from '../onboardingPages';

const SCREEN_WIDTH = Dimensions.get('window').width;

type ImageHeaderProps = {
  image: OnboardingPageType['image'];
};
export function ImageHeader({image}: ImageHeaderProps) {
  const appColor = useAppColor();
  const imageSource = appColor === 'dark' ? image.dark : image.light;
  return (
    <Image source={imageSource} style={{width: SCREEN_WIDTH, flexShrink: 1}} />
  );
}
