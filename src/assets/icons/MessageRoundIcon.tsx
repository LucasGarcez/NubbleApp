import React from 'react';

import {Svg, Path, Circle} from 'react-native-svg';

import {palette} from '@theme';

import {IconBase} from '../../components/Icon/Icon';

export function MessageRoundIcon({
  size = 48,
  color = palette.greenPrimary,
  fillColor = palette.grayWhite,
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />

      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fillColor}
        d="M32 20.5021L25.173 24.7367C25.1303 24.7632 25.0855 24.7877 25.0389 24.81C25.0243 24.8201 25.0091 24.83 24.9935 24.8397C24.4862 25.1543 23.6338 25.1404 23.0992 24.8088L16 20.4054V28C16 29.1 16.9 30 18 30H30C31.1 30 32 29.1 32 28V20.5021ZM24.078 23.1278L16.9727 18.7206C16.8651 18.6538 16.7445 18.5999 16.6166 18.559C16.9765 18.2132 17.4646 18 18 18H30C30.5555 18 31.06 18.2295 31.4233 18.5984C31.3429 18.6308 31.2665 18.6689 31.1959 18.7127L24.078 23.1278ZM30 16H18C15.7875 16 14 17.7875 14 20V28C14 30.2125 15.7875 32 18 32H30C32.2125 32 34 30.2125 34 28V20C34 17.7875 32.2125 16 30 16Z"
      />
    </Svg>
  );
}
