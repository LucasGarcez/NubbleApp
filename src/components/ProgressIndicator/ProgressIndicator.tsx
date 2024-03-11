import React from 'react';

import {Box, BoxProps} from '@components';

type ProgressIndicator = BoxProps & {
  pages: number;
  currentPage: number;
};

export function ProgressIndicator({
  pages,
  currentPage,
  ...boxProps
}: ProgressIndicator) {
  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      {Array.from({length: pages}, (_, index) => (
        <Box
          key={index}
          width={index === currentPage ? 14 : 8}
          height={index === currentPage ? 14 : 8}
          borderRadius={'s12'}
          mr="s12"
          backgroundColor={
            index === currentPage ? 'primary' : 'onBackgroundGray2'
          }
        />
      ))}
    </Box>
  );
}
