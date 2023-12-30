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
    <AuthProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<SignIn id="signin" />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/addDog" element={<DogInputPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
    </AuthProvider>
  );
}

export default App;
