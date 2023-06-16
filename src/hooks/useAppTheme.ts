import {useTheme} from '@shopify/restyle';

import {Theme} from '@theme';

export function useAppTheme() {
  return useTheme<Theme>();
}
