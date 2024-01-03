import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import App from '../client/App';
// import DogInputPage from '../client/Doggo';

describe('Testing App component', () => {
  describe('Test routes in App', () => {
    test('App should render to screen', () => {
      render(<App />);
      screen.debug();

      // expect(render(<Route path="/" element={<LandingPage />} />));
    });
  });
});
