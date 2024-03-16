import React from 'react';

import {Box, Text} from '@components';

import {OnboardingPageItem} from '../onboardingData';

type ContentProps = Omit<OnboardingPageItem, 'image'>;
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
      <Text preset="paragraphLarge">{subtitle}</Text>
    </Box>
  );
}
