import React from 'react';

import {Box} from '../Box/Box';
import {Separator} from '../Separator/Separator';

import {RadioButtonItem} from './RadioButtonItem';

type ItemTConstraint = Record<string, any>;
export type RadioButtonSelectorProps<ItemT extends ItemTConstraint> = {
  items: ItemT[];
  selectedItem?: ItemT;
  onSelect: (item: ItemT) => void;
  labelKey: keyof ItemT;
  descriptionKey: keyof ItemT;
  valueKey: keyof ItemT;
};
export function RadioButtonSelector<ItemT extends ItemTConstraint>({
  items,
  selectedItem,
  onSelect,
  labelKey,
  descriptionKey,
  valueKey,
}: RadioButtonSelectorProps<ItemT>) {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem
            label={item[labelKey]}
            description={item[descriptionKey]}
            onPress={() => onSelect(item)}
            isSelected={
              !!selectedItem && selectedItem[valueKey] === item[valueKey]
            }
          />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
}
