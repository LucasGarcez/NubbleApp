import React, {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSettingsService} from '@services';

import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';

import {OnboardingPage} from './components/OnboardingPage';
import {OnboardingPageItem, onboardingPages} from './onboardingData';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const [pageIndex, setPageIndex] = useState(0);

  const flatListRef = useRef<FlatList<OnboardingPageItem>>(null);

  const {finishOnboarding} = useSettingsService();

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (isLastPage) {
      finishOnboarding();
    } else {
      const nextIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setPageIndex(nextIndex);
    }
  }

  function renderItem({item}: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        pageItem={item}
        onPressNext={onPressNext}
        onPressSkip={finishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} backgroundColor="background">
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={onboardingPages}
      />
    </Box>
  );
}
