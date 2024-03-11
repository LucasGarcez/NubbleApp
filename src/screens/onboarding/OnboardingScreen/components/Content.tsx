import React from 'react';

import {Box, ProgressIndicator, Text} from '@components';

import {OnboardingPageType} from '../onboardingPages';

type ContentProps = Omit<OnboardingPageType, 'image'>;
export function Content({title, subtitle, total, index}: ContentProps) {
  return (
    <Box>
      <ProgressIndicator pages={total} currentPage={index} mt="s48" mb="s24" />
      <Text preset="headingLarge">
        {title.map((text, _index) => (
          <Text
            key={_index}
            preset="headingLarge"
            color={text.highlight ? 'carrotSecondary' : 'backgroundContrast'}>
            {text.text}
          </Text>
        ))}
      </Text>
      <Text mt="s16" color="onBackgroundGray1" preset="paragraphLarge">
        {subtitle}
      </Text>
    </Box>
  );
}
