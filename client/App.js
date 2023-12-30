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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";import { useEffect } from 'react';



const theme = createTheme({
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
    MuiCssBaseline: {},
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
              <Route path="/homepage/:userId" element={<HomePage />} />
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
