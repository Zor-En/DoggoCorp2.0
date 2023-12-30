import React, {useEffect} from "react";
import  Header  from "./components/Header";
import './stylesheets/LandingPage.css'
import { CssBaseline } from "@mui/material";
import setupPixiBackground from "./components/SpriteAnimator";
// import PixiContainer from "./components/PixieContainer";
// import backgroundImage from '../assets/0iQTf0.png';



const LandingPage = () => {
  useEffect(() => {
    const app = setupPixiBackground();

    // Cleanup function will be called on component unmount
    return () => {
      app.destroy(true);
    };
  }, []);


  return (
    <div className="landing-page" style={{  }}>
      {/* <setupPixiBackground /> */}
      <CssBaseline />
      <Header />
      {/* <PixiContainer /> */}
    </div>
  );
};


  export default LandingPage;
