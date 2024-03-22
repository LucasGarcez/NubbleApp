import React from 'react';

import {Box, BoxProps} from '../Box/Box';

type ProgressIndicatorProps = BoxProps & {
  total: number;
  currentIndex: number;
};

export function ProgressIndicator({
  total,
  currentIndex,
  ...boxProps
}: ProgressIndicatorProps) {
  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      {Array.from({length: total}).map((_, index) => (
        <Box
          key={index}
          width={index === currentIndex ? 14 : 8}
          height={index === currentIndex ? 14 : 8}
          borderRadius="s12"
          mr="s12"
          backgroundColor={index === currentIndex ? 'carrotSecondary' : 'gray2'}
        />
      ))}
    </Box>
  );
}
