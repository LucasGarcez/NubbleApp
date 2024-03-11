import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '@components';

import {OnboardingPageType} from '../onboardingPages';

import {BottomMenu} from './BottomMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeder';

const SCREEN_WIDTH = Dimensions.get('window').width;

type OnboardingPageProps = {
  currentPage: OnboardingPageType;
  onPressNext: () => void;
  onPressSkip: () => void;
};

export function OnboardingPage({
  currentPage,
  onPressNext,
  onPressSkip,
}: OnboardingPageProps) {
  return (
    <Box backgroundColor="background" width={SCREEN_WIDTH}>
      <Box flex={4}>
        <ImageHeader image={currentPage.image} />
      </Box>
      <Box flex={5} paddingHorizontal="s16">
        <Content {...currentPage} />
      </Box>
      <Box flex={1} paddingHorizontal="s16">
        <BottomMenu
          onPressNext={onPressNext}
          onPressSkip={onPressSkip}
          isLast={currentPage.total - 1 === currentPage.index}
        />
      </Box>
    </Box>
  );
}
