import React from "react";
import grass from "../../assets/grass_w_less_dirt.png";
import grassOverflow from "../../assets/grass_repeat.png";
import dogSit from "../../assets/Sitting.gif";
import dogJump from "../../assets/Jumping.gif";

const Footers = () => {
  const footerStyle = {
    backgroundImage: `url(${grass}), url(${grassOverflow})`,
    backgroundSize: "contain", //cover
    backgroundPosition: "center",
    imageRendering: "pixelated",
    backgroundRepeat: "no-repeat, repeat-x",
    margin: "0",
    position: "fixed", //or relative
    bottom: 0,
    left: 0,
    width: "100%",
    height: "130px",
  };

  const dogSitStyle = {
    zIndex: 2,
    position: "fixed",
    top: "18px",
    left: "30%",
    position: "absolute",
    width: "120px",
    height: "auto",
    postion: "absolute",
  };

  const dogJumpStyle = {
    zIndex: 1,
    position: "fixed",
    top: "10px",
    left: "50%",
    position: "absolute",
    width: "120px",
    height: "auto",
    postion: "absolute",
    animation: "moveAndFlip",
    animationDuration: "30s",
    animationFillMode: "alternate",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  };

  return (
    <div>
      <div style={footerStyle}>
        <img src={dogSit} alt="Walking Dog" style={dogSitStyle} />
        <img src={dogJump} alt="Jump Dog" style={dogJumpStyle} />
      </div>
      <style>
        {`
        @keyframes moveAndFlip {
            0% {
                left: 0%;
                transform: rotateY(0deg);
            }
            49% {
                transform: rotateY(0deg);
            }
            50% {
                left: 90%;
                transform: rotateY(180deg);
            }
            99% {
                transform: rotateY(180deg);
            }
            100% {
                left: 0%;
                transform: rotateY(0deg);
            }
        }
      `}
      </style>
    </div>
  );
};

export default Footers;