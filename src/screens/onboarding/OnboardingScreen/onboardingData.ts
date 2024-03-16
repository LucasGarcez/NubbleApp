import {ImageProps} from 'react-native';

import {images} from '@assets';

export type OnboardingPageItem = {
  title: string;
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
};

const page1: OnboardingPageItem = {
  title: 'Uma rede social de conexões reais',
  subtitle:
    'Fique por dentro do que acontece com as pessoas que você mais gosta',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1];
