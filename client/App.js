import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import HomePage from './Homepage';
import SignUp from './SignUp';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import './stylesheets/App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  // typography: {
  //   fontFamily: 'Poppins', //change
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: 15,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // '@font-face': {
        //   fontFamily: 'Poppins',
        // },
      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;