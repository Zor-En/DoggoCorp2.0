import { blue } from '@mui/material/colors';

const skyColor = blue[200];

export const skyStyle = {
  position: 'fixed', // or absolute?
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '100%',
  // paddingTop: "50px",
  backgroundColor: skyColor,
  zIndex: -1,
};

//cloud styles
export const cloudStyle1 = {
  position: 'fixed',
  top: '830px',
  imageRendering: 'pixelated',
  width: '260px',
  height: 'auto',
  animation: 'move',
  animationDelay: '-25s',
};

export const cloudStyle2 = {
  position: 'fixed',
  top: '650px',
  imageRendering: 'pixelated',
  width: '250px',
  height: 'auto',
  animation: 'move',
  animationDelay: '-60s',
};

export const cloudStyle3 = {
  position: 'fixed',
  top: '500px',
  imageRendering: 'pixelated',
  width: '280px',
  height: 'auto',
  animation: 'move',
  animationDelay: '-01s',
  transform: 'scaleX(-1)',
};

export const cloudStyle4 = {
  position: 'fixed',
  top: '300px',
  imageRendering: 'pixelated',
  width: '250px',
  height: 'auto',
  animation: 'move',
  animationDelay: '-75s',
};

export const cloudStyle5 = {
  position: 'fixed',
  top: '90px',
  imageRendering: 'pixelated',
  width: '250px',
  height: 'auto',
  animation: 'move',
  animationDelay: '-30s',
};

export const cloudAnimation = {
  animation: 'move',
  animationDuration: '120s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
};
