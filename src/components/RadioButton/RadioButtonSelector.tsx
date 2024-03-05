import React from 'react';

import {Box} from '../Box/Box';
import {Divider} from '../Divider/Divider';

import {RadioButtonItem} from './RadioButtonItem';

type RadioButtonSelectorProps<ItemT extends Record<string, any>> = {
  items: ItemT[];
  selectedItem?: ItemT | null;
  valueKey: keyof ItemT;
  labelKey: keyof ItemT;
  descriptionKey?: keyof ItemT;
  onSelect: (item: ItemT) => void;
};

export function RadioButtonSelector<ItemT extends Record<string, any>>({
  items,
  valueKey,
  labelKey,
  descriptionKey,
  onSelect,
  selectedItem,
}: RadioButtonSelectorProps<ItemT>) {
  function handleOnPress(item: ItemT) {
    onSelect(item);
  }
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item[valueKey]}>
          <RadioButtonItem
            label={item[labelKey]}
            description={descriptionKey ? item[descriptionKey] : undefined}
            onPress={() => handleOnPress(item)}
            isSelected={
              !!selectedItem && item[valueKey] === selectedItem[valueKey]
            }
          />
          {(index === 0 || index < items.length - 1) && <Divider />}
        </Box>
      ))}
    </Box>
  );
}
