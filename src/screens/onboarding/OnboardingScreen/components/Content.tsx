import React from 'react';

import {Box, Text} from '@components';

import {OnboardingPage} from '../onboardingPages';

type ContentProps = Omit<OnboardingPage, 'image'>;
export function Content({title, subtitle}: ContentProps) {
  return (
    <Box>
      <Text preset="headingLarge">
        {title.map((text, index) => (
          <Text
            key={index}
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
