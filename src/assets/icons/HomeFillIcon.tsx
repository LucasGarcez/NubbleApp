import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function HomeFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M11.877 0.724404C10.416 -0.241468 8.58404 -0.241467 7.12302 0.724402L2.20911 3.97308C0.837662 4.87977 0 6.50206 0 8.25142V14.9973C0 17.7602 2.05326 20 4.5861 20H6V16.5C6 14.567 7.567 13 9.5 13C11.433 13 13 14.567 13 16.5V20H14.4139C16.9467 20 19 17.7602 19 14.9973V8.25142C19 6.50206 18.1623 4.87977 16.7909 3.97308L11.877 0.724404Z"
      />
    </Svg>
  );
}
