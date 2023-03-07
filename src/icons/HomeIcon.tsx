import React from 'react';
import Svg, { G } from 'react-native-svg';

export default function HomeIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <G fill="#000000">
        <path d="M12,2L1,10V22H8V14H16V22H23V10L12,2Z" />
        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13Z" />
      </G>
    </Svg>
  );
}
