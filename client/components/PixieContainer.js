import React, { useRef, useEffect } from "react";
import { app, sprite1, sprite2 } from "./SpriteCollision";
import setupPixiBackground from "../components/SpriteAnimator";

const PixiContainer = () => {
  const pixiContainerRef = useRef(null);

  useEffect(() => {
    const pixiApp = setupPixiBackground();
    pixiContainerRef.current.appendChild(pixiApp.view);

    return () => {
      pixiApp.destroy(true);
    };
  }, []);

  return <div ref={pixiContainerRef}></div>;
};

export default PixiContainer;