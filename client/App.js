import React from 'react';
import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import HomePage from './Homepage';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import DogInputPage from './Doggo';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AuthProvider } from './components/Authorization';
import './stylesheets/App.css';
import { appTheme } from './stylesheets/AppStyle';

//cursor html
// https://cur.cursors-4u.net/cursors/cur-2/cur113.cur (funny dog)
//https://cur.cursors-4u.net/nature/nat-10/nat984.cur (paw)

function App() {
  return (
    <>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={appTheme}>
            <Router>
              <div className='App'>
                <Routes>
                  <Route path='/' element={<LandingPage />} />
                  <Route path='/signin' element={<SignIn id='signin' />} />
                  <Route path='/homepage' element={<HomePage />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/addDog' element={<DogInputPage />} />
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
