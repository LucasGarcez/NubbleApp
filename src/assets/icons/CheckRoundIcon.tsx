import React from 'react';

import {Svg, Path, Circle} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';
import {palette} from '../../theme/theme';

export function CheckRoundIcon({
  size = 48,
  color = palette.greenSuccess,
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="white"
        d="M33.6485 17.3515C34.1172 17.8201 34.1172 18.5799 33.6485 19.0485L22.4485 30.2485C21.9799 30.7171 21.2202 30.7171 20.7515 30.2485L14.3515 23.8485C13.8828 23.3798 13.8828 22.6202 14.3515 22.1515C14.8201 21.6829 15.5799 21.6829 16.0485 22.1515L21.6 27.7029L31.9516 17.3515C32.4202 16.8828 33.1799 16.8828 33.6485 17.3515Z"
      />
    </Svg>
  );
}
