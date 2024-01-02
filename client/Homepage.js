import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import MainCard from "./components/MainCard";
// import Menu from "./components/Menu";
import HeaderDog from "./components/HeaderDog";
import Sky from "./components/Sky";
import Footers from "./components/Footer";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./components/Authorization";



const theme = createTheme({
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => "none",
  },
  typography: {},
  palette: {
    primary: {
      main: "#6a994e",
    },
    secondary: {
      main: "#9c6644",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          transition: "none !important",
          animation: "none !important",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true,
      },

      root: {
        borderRadius: 30,
        padding: 15,
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pixelify Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Pixelify Sans'), @import
          url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&family=Pixelify+Sans:wght@700&display=swap');
        }`,
    },
  },
});


const HomePage = () => {
  const [value, setValue] = useState("");
  const { user } = useAuth();
  console.log('Homepage User:', user);
  return (
    <div>
      <Sky />
      <HeaderDog />
      {/* <Box sx={{ minWidth: "100vw" }}> */}
       <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh" // Full screen height
          // sx={{ backgroundColor: 'pink' }}
        >
        {/* Centered Container */}
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          marginTop="3rem"
          sx={{ minHeight: "calc(100vh - 3.5rem)" }}
        >
          {/* calc 100vh - the header */}
          <Grid item xs={10} md={8} lg={7}>
            <Grid
              container
              alignItems="flex-start"
              justifyContent="space-between"
            ></Grid>
            {/* MainCard */}
            <MainCard sx={{ mt: 1.75 }}>
              <Stack spacing={1.5} sx={{ mb: -12 }}></Stack>
            </MainCard>
          </Grid>
        </Grid>
      </Box>
      <Footers />
    </div>
  );
};

export default HomePage;


//  <Grid
//    container
//    item
//    xs={12}
//    sx={{
//      position: "fixed",
//      top: 0,
//      width: "100%",
//      height: { xs: "5%", md: "5%" },
//    }}
//  >
//    <Grid
//      container
//      alignItems="center"
//      justifyContent="space-between"
//      marginTop={-1}
//    >
//      <Grid item>{/* <Menu /> */}</Grid>
//      <Grid item>
//        <Button size="small" color="secondary" variant="text">
//          Button 1
//        </Button>
//        <Button size="small" color="secondary" variant="text">
//          Button 2
//        </Button>
//      </Grid>
//    </Grid>
//  </Grid>;
