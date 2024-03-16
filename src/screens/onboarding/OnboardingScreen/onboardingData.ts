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
const page2: OnboardingPageItem = {
  title: 'Compartilhe suas histórias com seus amigos próximos',
  subtitle: 'Tenha sua linha do tempo personalizada',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnboardingPageItem = {
  title: 'Interaja em tempo real com as pessoas',
  subtitle: 'Curta, comente e favorite os conteúdos que você mais gostar',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3];
