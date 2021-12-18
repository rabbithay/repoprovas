import {
  Route, Routes as Switch,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/Home';
import AddExam from './pages/AddExam';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/add-exam" element={<AddExam />} />
    </Switch>
  );
}
