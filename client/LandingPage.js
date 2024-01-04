import React, { useEffect } from 'react';
import Header from './components/Header';
import './stylesheets/App.css';
import './stylesheets/LandingPage.css';
import { CssBaseline } from '@mui/material';
// import setupPixiBackground from "./components/SpriteAnimator";
// import PixiContainer from "./components/PixieContainer";

import backgroundImage from '../assets/0iQTf0.png';
import Sky from './components/Sky';
import HeaderDog from './components/HeaderDog';
import Footers from './components/Footer';

const LandingPage = () => {
  // import backgroundImage from '../assets/0iQTf0.png';
  // useEffect(() => {
  //   const app = setupPixiBackground();

  //   // Cleanup function will be called on component unmount
  //   return () => {
  //     app.destroy(true);
  //   };
  // }, []);

  return (
    <div className="landing-page" style={{}}>
      {/* <setupPixiBackground /> */}
      <CssBaseline />
      <Header />
      <Sky />
      <Footers />
      {/* <PixiContainer /> */}
    </div>
  );
};

export default LandingPage;
