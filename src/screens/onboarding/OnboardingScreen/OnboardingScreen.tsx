import React from 'react';
import {FlatList} from 'react-native';

import {useSettingsService} from '@services';

import {Box} from '@components';
import {useAppSafeArea} from '@hooks';
import {OnboardingScreenProps} from '@routes';

import {OnboardingPage} from './components/OnboardingPage';
import {OnboardingPageType, onboardingPages} from './onboardingPages';

const LAST_PAGE = onboardingPages.length - 1;

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const [pageIndex, setPageIndex] = React.useState(0);
  const flatRef = React.useRef<FlatList<OnboardingPageType>>(null);

  const {finishOnboarding} = useSettingsService();

  const {bottom} = useAppSafeArea();

  function onPressNext() {
    if (pageIndex === LAST_PAGE) {
      finishOnboarding();
    } else {
      const newIndex = pageIndex + 1;
      setPageIndex(newIndex);
      flatRef.current?.scrollToIndex({index: newIndex, animated: true});
    }
  }

  function renderItem({item}: {item: OnboardingPageType}) {
    return (
      <OnboardingPage
        currentPage={item}
        onPressNext={onPressNext}
        onPressSkip={finishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} style={{paddingBottom: bottom}} backgroundColor="background">
      <FlatList
        showsHorizontalScrollIndicator={false}
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
