import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import {
  Grommet,
} from 'grommet';
import Routes from './Routes';
import { theme } from './styles/theme';

export default function App() {
  return (
    <Grommet theme={theme} full>
      <Router>
        <Routes />
      </Router>
    </Grommet>
  );
}
