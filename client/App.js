import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import HomePage from "./Homepage";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import DogInputPage from "./Doggo";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme({
  typography: {

  },
  palette: {
    primary: {
      main: "#6a994e",
    },
    secondary: {
      main: "#9c6644",
    },
  },
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

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<SignIn id="signin" />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/addDog" element={<DogInputPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
