import {
  Route, Routes as Switch,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/Home';
import SendExam from './pages/SendExam';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/send-exam" element={<SendExam />} />
    </Switch>
  );
}
