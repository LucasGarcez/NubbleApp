import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function BookmarkFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2.82051C2 1.26279 3.26279 0 4.82051 0H15.0769C16.6347 0 17.8974 1.26279 17.8974 2.82051V19.2308C17.8974 19.5122 17.7438 19.7711 17.4968 19.9059C17.2498 20.0408 16.9489 20.03 16.7122 19.8778L10.642 15.9756C10.2197 15.7041 9.67779 15.704 9.25551 15.9755L3.18519 19.8778C2.94849 20.03 2.6476 20.0408 2.40062 19.9059C2.15364 19.7711 2 19.5122 2 19.2308V2.82051Z"
        fill={color}
      />
    </Svg>
  );
}
