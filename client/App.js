import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import HomePage from './Homepage';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import { createTheme, ThemeProvider } from '@mui/material';
import './stylesheets/App.css'


const theme = createTheme({
  palette: {
    primary: {
      main: '#6a994e',
    },
    secondary: {
      main: '#9c6644',
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
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn id="signin"/>} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
            {/* <Route path='/add_dog' element={<Doggo />} /> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
