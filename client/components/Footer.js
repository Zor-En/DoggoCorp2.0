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

// const Footers = () => {

//   const footerStyle = {
//     backgroundImage: `url(${image}), url(${image2})`,
//     backgroundSize: "contain", //cover
//     backgroundPosition: "center",
//     imageRendering: "pixelated",
//     backgroundRepeat: "no-repeat, repeat-x",
//     height: "130px",
//     width: "100%",
//     margin: "0",
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     position: "fixed",
//   };

//   const dogJumpStyle = {
//     zIndex: 2,
//     position: "fixed",
//     top: "10px",
//     left: "50%",
//     bottom: "10%",
//     position: "absolute",
//     width: "120px",
//     height: "auto",
//     postion: "absolute",
//     //   bottom: "100%",
//     //   left: "25px",
//     //   top: "50px",
//   };
//   const dogSitStyle = {
//     zIndex: 2,
//     position: "fixed",
//     top: "19px",
//     left: "420px",
//     position: "absolute",
//     width: "120px",
//     height: "auto",
//     postion: "absolute",
//     //   bottom: "100%",
//     //   left: "25px",
//     //   top: "50px",
//   };
//   return (
//     <div style={footerStyle}>
//       <img src={imageDog} alt="Walking Dog" style={dogSitStyle} />
//       <img src={dogJump} alt="Walking Dog" style={dogJumpStyle} />
//     </div>
//   );
// };

// export default Footers;

// // const Footer = () => {

// // tile_sheet: {
// //         image: new Image(),

// //         columns: 6,
// //         tile_height: 16,
// //         tile_width: 16

// //     }
// // //tree: 29, 35
// // //flower: 28,
// // //bush: 34
// // //sign: 33
// // //grass: 19
// // //blank: 36?
// //     world = {
// //         map: [36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 29,
// //               33, 28, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 34, 35],

// //         columns: 16,
// //         height: 10,
// //         width: 124

// //     }

// //     const footerImage = () => {
// //         for (let i = world.map.length - 1; i > -1; --i) {
// //             const val = world.map[i];
// //             let x = (val % this.tile_sheet.columns) * this.tile_sheet.tile_width;
// //             let y = Math.floor(val / this.tile_sheet.columns) * this.tile_sheet.tile_height;

// //             let drawX = (i % world.columns) * this.tile_sheet.tile_width;
// //             let drawY = Math.floor(i / world.columns) * this.tile_sheet.tile_width;

// //             this.buffer.drawImage(this.tile_sheet.image, x, y, this.tile_sheet.tile_width, this.tile_sheet.tile_height)
// //         }
// //         return

// //     }

// //   const footerStyle = {
// //     backgroundImage: `url(${image})`,
// //     backgroundRepeat: 'repeat',
// //     height: '100px',
// //     width: '100%',
// //     // Additional styling
// //   };

// //   return (
// //     <div style={footerStyle}>
// //       <img src={image} alt="Footer background" />
// //     </div>
// //   );

// // };

// // export default Footer;

// //

// // import React from "react";
// // import tilesetImage from "../../assets/grass tileset.png";

// // const Footer = () => {
// //   const tileSheet = {
// //     image: tilesetImage,
// //     columns: 6,
// //     tileHeight: 16,
// //     tileWidth: 16,
// //   };

// //   const world = {
// //     map: [
// //       33, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 29, 19, 19,
// //       19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 34, 35,
// //     ],
// //     columns: 16,
// //     height: 80,
// //     width: 124,
// //   };

// //   const renderTiles = () => {
// //     return world.map.map((val, index) => {
// //       // Skip rendering for -1 (indicating blank space)
// //       if (val === -1) {
// //         return null;
// //       }

// //       const x = (val % tileSheet.columns) * tileSheet.tileWidth;
// //       const y = Math.floor(val / tileSheet.columns) * tileSheet.tileHeight;
// //       const style = {
// //         width: `${tileSheet.tileWidth}px`,
// //         height: `${tileSheet.tileHeight}px`,
// //         display: "inline-block",
// //         backgroundImage: `url(${tileSheet.image})`,
// //         backgroundPosition: `-${x}px -${y}px`,
// //       };

// //       return <div key={index} style={style}></div>;
// //     });
// //   };

// //   const footerStyle = {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     width: `${world.columns * tileSheet.tileWidth}px`, // Adjust based on the number of columns
// //     height: `${world.height}px`, // Adjust based on the desired height
// //   };

// //   return <div style={footerStyle}>{renderTiles()}</div>;
// // };

// // export default Footer;

// // import React from "react";
// // import tilesetImage from "../../assets/grass tileset.png";

// // const Footer = () => {
// //   const tileSheet = {
// //     image: tilesetImage,
// //     columns: 6,
// //     tileHeight: 16,
// //     tileWidth: 16,
// //   };

// //   const world = {
// //     map: [
// //       33, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 29, 19, 19,
// //       19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 34, 35,
// //     ],
// //     columns: 16, // Adjust this to match the screen width
// //     height: 80, // Adjust this based on your desired footer height
// //     width: 124,
// //   };

// //   const renderTiles = () => {
// //     return world.map.map((val, index) => {
// //       // Skip rendering for -1 (indicating blank space)
// //       if (val === -1) {
// //         return null;
// //       }

// //       const x = (val % tileSheet.columns) * tileSheet.tileWidth;
// //       const y = Math.floor(val / tileSheet.columns) * tileSheet.tileHeight;
// //       const style = {
// //         width: `${tileSheet.tileWidth}px`,
// //         height: `${tileSheet.tileHeight}px`,
// //         display: "inline-block",
// //         backgroundImage: `url(${tileSheet.image})`,
// //         backgroundPosition: `-${x}px -${y}px`,
// //       };

// //       return <div key={index} style={style}></div>;
// //     });
// //   };

// //   const footerStyle = {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     width: "100%", // Width based on the number of columns
// //     height: `${world.height}px`, // Height of the footer
// //   };

// //   return <div style={footerStyle}>{renderTiles()}</div>;
// // };

// // export default Footer;

// import React, { useEffect, useState } from "react";
// import tilesetImage from "../../assets/grass tileset.png";

// const Footers = () => {
//   const tileSheet = {
//     image: tilesetImage,
//     columns: 6,
//     tileHeight: 16,
//     tileWidth: 16,
//   };

//   const [tiles, setTiles] = useState([]);

//   useEffect(() => {
//     const calculateTiles = () => {
//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const numRows = 2; // Number of rows you want at the bottom
//       const tileAreaHeight = numRows * tileSheet.tileHeight; // Total height of the tile area
//       const columns = Math.ceil(screenWidth / tileSheet.tileWidth);
//       const rows = Math.ceil((screenHeight - tileAreaHeight) / tileSheet.tileHeight);

//       const newTiles = [];
//       for (let row = rows; row < rows + numRows; row++) {
//         for (let col = 0; col < columns; col++) {
//           const tileIndex = /* logic to determine the tile index based on col and row */
//           newTiles.push(tileIndex);
//         }
//       }
//       return newTiles;
//     };

//     setTiles(calculateTiles());
//   }, []);

//   const renderTile = (tileIndex, key) => {
//     const x = (tileIndex % tileSheet.columns) * tileSheet.tileWidth;
//     const y = Math.floor(tileIndex / tileSheet.columns) * tileSheet.tileHeight;
//     const style = {
//       width: `${tileSheet.tileWidth}px`,
//       height: `${tileSheet.tileHeight}px`,
//       display: "inline-block",
//       backgroundImage: `url(${tileSheet.image})`,
//       backgroundPosition: `-${x}px -${y}px`,
//     };
//     return <div key={key} style={style}></div>;
//   };

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {tiles.map((tile, index) => renderTile(tile, index))}
//     </div>
//   );
// };

// export default Footers;
