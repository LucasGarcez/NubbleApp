import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function HeartFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M9.99999 2.48508C11.0896 1.53305 12.4816 1 13.9331 1C15.5596 1 17.1112 1.66923 18.2466 2.84717C19.3734 4.01549 20 5.58939 20 7.22297C20 8.8567 19.3733 10.4308 18.2464 11.599C17.5219 12.3503 16.797 13.1204 16.0675 13.8954C14.5825 15.4728 13.0782 17.0709 11.518 18.574L11.5135 18.5784C10.6392 19.4085 9.25469 19.3786 8.41753 18.5104L1.75311 11.5989C-0.584363 9.17471 -0.584378 5.27123 1.75311 2.84706C4.00454 0.512137 7.60876 0.391471 9.99999 2.48508Z"
      />
    </Svg>
  );
}
