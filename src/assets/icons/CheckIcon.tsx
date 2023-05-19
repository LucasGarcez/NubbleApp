import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function CheckIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6837 4.31632C19.1054 4.73808 19.1054 5.42191 18.6837 5.84368L8.60364 15.9237C8.18187 16.3454 7.49816 16.3454 7.07633 15.9237L1.31632 10.1636C0.894559 9.74186 0.894559 9.05815 1.31632 8.63637C1.73808 8.2146 2.42191 8.2146 2.84368 8.63637L7.84001 13.6326L17.1564 4.31632C17.5782 3.89456 18.2619 3.89456 18.6837 4.31632Z"
        fill={color}
      />
    </Svg>
  );
}
