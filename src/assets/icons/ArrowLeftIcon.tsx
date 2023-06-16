import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function ArrowLeftIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.70052 16.6027C9.18799 17.1324 8.35701 17.1324 7.84448 16.6027L2.3844 10.9592C1.87187 10.4294 1.87187 9.57056 2.3844 9.04081L7.84448 3.39731C8.35701 2.86756 9.18798 2.86756 9.70052 3.39731C10.213 3.92706 10.213 4.78595 9.70052 5.3157L6.48088 8.6435L16.6876 8.6435C17.4124 8.6435 18 9.25082 18 10C18 10.7492 17.4124 11.3565 16.6876 11.3565L6.48088 11.3565L9.70052 14.6843C10.213 15.2141 10.213 16.0729 9.70052 16.6027Z"
        fill={color}
      />
    </Svg>
  );
}
