import React from 'react';

import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';

import {BottomMenu} from './components/BottomMenu';
import {Content} from './components/Content';
import {ImageHeader} from './components/ImageHeder';
import {OnboardingPage, onboardingPages} from './onboardingPages';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const currentPage: OnboardingPage = onboardingPages[0];

  function onPressNext() {
    console.log('onPressNext');
  }

  function onPressSkip() {
    console.log('onPressSkip');
  }

  return (
    <Box flex={1}>
      <Box flex={4}>
        <ImageHeader image={currentPage.image} />
      </Box>
      <Box flex={5} paddingHorizontal="s16">
        <Content {...currentPage} />
      </Box>
      <Box flex={1} paddingHorizontal="s16">
        <BottomMenu onPressNext={onPressNext} onPressSkip={onPressSkip} />
      </Box>
    </Box>
  );
}

/**
 *
 *
 * 1) Pensar na estrutura de flexbox da Tela!  com as cores
 * 2) Componente básico de Imagem, Content e Bottom Menu
 */
