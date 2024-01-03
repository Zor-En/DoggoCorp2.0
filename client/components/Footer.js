import React from 'react';
import dogSit from '../../assets/Sitting.gif';
import dogJump from '../../assets/Jumping.gif';
import '../stylesheets/Footers.css';

const Footers = () => {
  return (
    <div>
      <div className='footer'>
        <img src={dogSit} alt='Walking Dog' className='dog sit' />
        <img src={dogJump} alt='Jump Dog' className='dog jump' />
      </div>
    </div>
  );
};

export default Footers;
