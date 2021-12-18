import {
  Route, Routes as Switch,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<HomePage />} />
    </Switch>
  );
}
