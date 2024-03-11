import React from 'react';
import {FlatList} from 'react-native';

import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';

import {OnboardingPage} from './components/OnboardingPage';
import {OnboardingPageType, onboardingPages} from './onboardingPages';

const LAST_PAGE = onboardingPages.length - 1;

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const [pageIndex, setPageIndex] = React.useState(0);
  const flatRef = React.useRef<FlatList<OnboardingPageType>>(null);

  function onPressNext() {
    if (pageIndex === LAST_PAGE) {
      handleFinishOnboarding();
    } else {
      const newIndex = pageIndex + 1;
      setPageIndex(newIndex);
      flatRef.current?.scrollToIndex({index: newIndex, animated: true});
    }
  }

  function handleFinishOnboarding() {
    // TODO: Implementar
    console.log('Finish Onboarding');
  }

  function renderItem({item}: {item: OnboardingPageType}) {
    return (
      <OnboardingPage
        currentPage={item}
        onPressNext={onPressNext}
        onPressSkip={handleFinishOnboarding}
      />
    );
  }

  return (
    <Box flex={1}>
      <FlatList
        ref={flatRef}
        data={onboardingPages}
        horizontal
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={item => item.index.toString()}
      />
    </Box>
  );
}

/**
 *
 *
 * 1) Pensar na estrutura de flexbox da Tela!  com as cores
 * 2) Componente básico de Imagem, Content e Bottom Menu
 */
