import {ImageProps} from 'react-native';

import {images} from '@assets';

export type RichText = {
  text: string;
  highlight: boolean;
};

export type OnboardingPageType = {
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  title: RichText[];
  subtitle: string;
  index: number;
  total: number;
};

type OnboardingPageWithoutMeta = Omit<OnboardingPageType, 'index' | 'total'>;

const page1: OnboardingPageWithoutMeta = {
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
  title: [
    {text: 'Uma  rede social de', highlight: false},
    {text: '\nconexões reais', highlight: true},
  ],
  subtitle:
    'Fique por dentro do que acontece com as pessoas que você mais gosta',
};

const page2: OnboardingPageWithoutMeta = {
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
  title: [
    {text: 'Compartilhe suas', highlight: false},
    {text: '\nhistórias ', highlight: true},
    {text: 'com seus amigos próximos', highlight: false},
  ],
  subtitle: 'Tenha sua linha do tempo personalizada',
};

const page3: OnboardingPageWithoutMeta = {
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
  title: [
    {text: 'Interaja ', highlight: true},
    {text: 'em tempo real com as pessoas', highlight: false},
  ],
  subtitle: 'Curta, comente e favorite os conteúdos que você mais gostar',
};

export const onboardingPages: OnboardingPageType[] = [page1, page2, page3].map(
  (page, index, array) => ({...page, index, total: array.length}),
);
