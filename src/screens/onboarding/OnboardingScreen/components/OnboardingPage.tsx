import React from 'react';

import {Box} from '@components';

export function OnboardingPage() {
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={4} backgroundColor="error" />
      <Box flex={5} backgroundColor="carrotSecondary" />
      <Box flex={1} backgroundColor="success" />
    </Box>
  );
}
