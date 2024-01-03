import React from 'react';
import cloud_1 from '../../assets/cloud_1.png';
import cloud_2 from '../../assets/cloud_2.png';
import cloud_3 from '../../assets/cloud_3.png';
import cloud_4 from '../../assets/cloud_4.png';
import {
  skyStyle,
  cloudStyle1,
  cloudStyle2,
  cloudStyle3,
  cloudStyle4,
  cloudStyle5,
  cloudAnimation,
} from '../stylesheets/SkyStyle';

const Sky = () => {
  animationPlayState: 'pause';

  return (
    <div style={skyStyle}>
      <div>
        <img
          src={cloud_1}
          alt='cloud1'
          style={{ ...cloudStyle1, ...cloudAnimation }}
        />
        <img
          src={cloud_2}
          alt='cloud2'
          style={{ ...cloudStyle2, ...cloudAnimation }}
        />
        <img
          src={cloud_3}
          alt='cloud3'
          style={{ ...cloudStyle3, ...cloudAnimation }}
        />
        <img
          src={cloud_3}
          alt='cloud4'
          style={{ ...cloudStyle4, ...cloudAnimation }}
        />
        <img
          src={cloud_4}
          alt='cloud5'
          style={{ ...cloudStyle5, ...cloudAnimation }}
        />
      </div>
      <style>
        {`
        @keyframes move {
            0% { left: -10%; }
            100% { left: 110%; }
        }
      `}
      </style>
    </div>
  );
};

export default Sky;
