import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const HeaderStyle = {
  theme: createTheme({
    //this shit is not working
    typography: {
      fontFamily: ['Pixelify Sans', 'sans-serif'].join(','),
    },
  }),
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
};

export const typographyStyle = {
  style: {
    color: 'pink',
    textShadow:
      '-1px -1px white, 1px 1px hotpink, 2px 2px hotpink, 3px 3px 3px #9e9e9e',
  },
};

export const HeaderDogStyle = {
  theme: createTheme({
    transitions: {
      // So we have `transition: none;` everywhere
      create: () => 'none',
    },
    typography: {},
    palette: {
      primary: {
        main: '#6a994e',
      },
      secondary: {
        main: '#9c6644',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*, *::before, *::after': {
            transition: 'none !important',
            animation: 'none !important',
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
  }),
  buttonStyle: {
    variant: 'contained',
    style: { backgroundColor: 'transparent', boxShadow: 'none' },
    sx: {
      fontFamily: 'Pixelify Sans',
      fontSize: '30px',
      color: 'white',
      boxShadow: 'none',
      textShadow:
        '1px 1px #ffc2df, 2px 2px #ffc2df, 3px 3px #ffc2df, 3px 3px 3px #9e9e9e',
      '&:hover': {
        boxShadow: '0',
        textShadow:
          '1px 1px #ffc2df, 2px 2px #ffc2df, 3px 3px #ffc2df, 3px 3px 3px #9e9e9e, 1px 1px 10px white, -1px -1px 10px white',
      },
      '&:active': {
        variant: 'contained',
        boxShadow: '0',
        boxShadow: 'none',
        position: 'relative',
        top: '2px',
        left: '2px',
        textShadow: '1px 1px #ffc2df, 3px 3px 3px #9e9e9e',
        disableElevation: 'true',
      },
    },
  },
  // buttonStyle: {
  //   fontFamily: 'Pixelify Sans',
  //   fontSize: '30px',
  //   color: 'white',
  //   boxShadow: 'none',
  //   textShadow:
  //     '1px 1px #ffc2df, 2px 2px #ffc2df, 3px 3px #ffc2df, 3px 3px 3px #9e9e9e',
  //   '&:hover': {
  //     boxShadow: '0',
  //     textShadow:
  //       '1px 1px #ffc2df, 2px 2px #ffc2df, 3px 3px #ffc2df, 3px 3px 3px #9e9e9e, 1px 1px 10px white, -1px -1px 10px white',
  //   },
  //   '&:active': {
  //     variant: 'contained',
  //     boxShadow: '0',
  //     boxShadow: 'none',
  //     position: 'relative',
  //     top: '2px',
  //     left: '2px',
  //     textShadow: '1px 1px #ffc2df, 3px 3px 3px #9e9e9e',
  //     disableElevation: 'true',
  //   },
  // },
};
