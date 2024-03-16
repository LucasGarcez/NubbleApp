import React from 'react';

import {Box} from '@components';

import {ImageHeader} from './ImageHeader';

export function OnboardingPage() {
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={4} backgroundColor="error">
        <ImageHeader />
      </Box>
      <Box flex={5} backgroundColor="carrotSecondary" />
      <Box flex={1} backgroundColor="success" />
    </Box>
  );
}
