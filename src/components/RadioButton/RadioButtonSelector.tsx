import React from 'react';

import {Box} from '../Box/Box';
import {Separator} from '../Separator/Separator';

import {RadioButtonItem, RadioButtonItemProps} from './RadioButtonItem';

export function RadioButtonSelector({items}: {items: RadioButtonItemProps[]}) {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem {...item} />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
}
