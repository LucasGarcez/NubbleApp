import {useTheme} from '@shopify/restyle';
import {Theme} from '../theme/theme';

export function useAppTheme() {
  return useTheme<Theme>();
}
