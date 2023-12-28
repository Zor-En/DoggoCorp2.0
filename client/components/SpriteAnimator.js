// import * as PIXI from 'pixi.js';

// const setupPixiBackground = () => {
//   // Set up PIXI Application for the background
// //   let canvasSize = 40;
// //   const canvas = d
//   const app = new PIXI.Application({
//     // view: canvas,
//     width: window.innerWidth,
//     height: window.innerHeight,
//     backgroundColor: 0x000000,
//   });

//   document.body.appendChild(app.view);

//   // Create a container for the background
//   const backgroundContainer = new PIXI.Container();
//   app.stage.addChild(backgroundContainer);

//   // Create a sprite for the background image
//   const backgroundImage = new PIXI.Sprite(PIXI.Texture.from('../../assets/0iQTf0.png'));
//   backgroundContainer.addChild(backgroundImage);

//   // Set initial position
//   backgroundImage.position.set(0.5, 1);
//   backgroundImage.position.set(0, window.innerHeight)

//   // Set up animation
//   app.ticker.add((delta) => {
//     // Update sprite position based on delta time
//     backgroundImage.x += 2 * delta; // Adjust the speed as needed

//     // Check if the background image has moved off-screen, then reset its position
//     if (backgroundImage.x > window.innerWidth + backgroundImage.width / 2) {
//       backgroundImage.x = -backgroundImage.width / 2;
//     }
//   });

//   // Handle window resize
//   const handleResize = () => {
//     app.renderer.resize(window.innerWidth, window.innerHeight);

//     // Update sprite position based on new window size
//     backgroundImage.y = (window.innerHeight - backgroundImage.height) / 2;
//   };

//   window.addEventListener('resize', () => {
//     app.renderer.resize(window.innerWidth, window.innerHeight);
//     backgroundImage.y = window.innerHeight;
//   } );

//   // Return PIXI Application
//   return app;
// };


// export default setupPixiBackground;
