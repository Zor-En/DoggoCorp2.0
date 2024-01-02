import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./SignIn";
import HomePage from "./Homepage";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import DogInputPage from "./Doggo";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthProvider } from "./components/Authorization";
import './stylesheets/App.css';


  //cursor html
  // https://cur.cursors-4u.net/cursors/cur-2/cur113.cur (funny dog)
  //https://cur.cursors-4u.net/nature/nat-10/nat984.cur (paw)

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
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
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&family=Pixelify+Sans:wght@700&display=swap');

      @font-face {
          font-family: 'Pixelify Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Pixelify Sans'), url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&family=Pixelify+Sans:wght@700&display=swap')
          format('woff2');

          @font-face {
          font-family: 'Oswald';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Oswald'), url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&display=swap') format('woff2');

        }`,
    },
  },
});

function App() {
  return (
  <>
    <AuthProvider>
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
    </AuthProvider>
    </>
  );
}

export default App;
