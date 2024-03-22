import React from 'react';

import {Box, ProgressIndicator, Text} from '@components';

import {OnboardingPageItem} from '../onboardingData';

type ContentProps = Omit<OnboardingPageItem, 'image'>;
export function Content({title, subtitle, total, index}: ContentProps) {
  return (
    <Box>
      <ProgressIndicator
        total={total}
        currentIndex={index}
        marginBottom="s24"
      />
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
      <Text mt="s16" preset="paragraphLarge">
        {subtitle}
      </Text>
    </Box>
  );
}
