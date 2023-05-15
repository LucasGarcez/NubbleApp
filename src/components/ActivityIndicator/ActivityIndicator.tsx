import {useTheme} from '@shopify/restyle';
import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
export function ActivityIndicator({color}: Props) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} />;
}
