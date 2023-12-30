import React from "react";
import { blue } from "@mui/material/colors";
import cloud_1 from "../../assets/cloud_1.png";
import cloud_2 from "../../assets/cloud_2.png";
import cloud_3 from "../../assets/cloud_3.png";
import cloud_4 from "../../assets/cloud_4.png";

const Sky = () => {
  const skyColor = blue[200];
//   const skyColor = '#81d4fa';

  const skyStyle = {
    position: "fixed", // or absolute?
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    // paddingTop: "50px",
    backgroundColor: skyColor,
    zIndex: -1,
  };

  //cloud styles
  const cloudStyle1 = {
    position: "fixed",
    top: "830px",
    imageRendering: "pixelated",
    width: "260px",
    height: "auto",
    animation: "move",
    animationDelay: "-25s",
  };

  const cloudStyle2 = {
    position: "fixed",
    top: "650px",
    imageRendering: "pixelated",
    width: "250px",
    height: "auto",
    animation: "move",
    animationDelay: "-60s",
    
  };

  const cloudStyle3 = {
    position: "fixed",
    top: "500px",
    imageRendering: "pixelated",
    width: "280px",
    height: "auto",
    animation: "move",
    animationDelay: "-01s",
    transform: "scaleX(-1)",
  };

  const cloudStyle4 = {
    position: "fixed",
    top: "300px",
    imageRendering: "pixelated",
    width: "250px",
    height: "auto",
    animation: "move",
    animationDelay: "-75s",
  };

  const cloudStyle5 = {
    position: "fixed",
    top: "90px",
    imageRendering: "pixelated",
    width: "250px",
    height: "auto",
    animation: "move",
    animationDelay: "-30s",
  };

  const cloudAnimation = {
    animation: "move",
    animationDuration: "120s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  };

  animationPlayState: "pause";

  return (
    <div style={skyStyle}>
      <div>
        <img
          src={cloud_1}
          alt="cloud1"
          style={{ ...cloudStyle1, ...cloudAnimation }}
        />
        <img
          src={cloud_2}
          alt="cloud2"
          style={{ ...cloudStyle2, ...cloudAnimation }}
        />
        <img
          src={cloud_3}
          alt="cloud3"
          style={{ ...cloudStyle3, ...cloudAnimation }}
        />
        <img
          src={cloud_3}
          alt="cloud4"
          style={{ ...cloudStyle4, ...cloudAnimation }}
        />
        <img
          src={cloud_4}
          alt="cloud5"
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
