import {
  Route, Routes as Switch,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/Home';
import SendExam from './pages/SendExam';
import Teachers from './pages/Teachers';
import Subjects from './pages/Subjects';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/enviar-prova" element={<SendExam />} />
      <Route exact path="/consultar-provas/professores" element={<Teachers />} />
      <Route exact path="/consultar-provas/disciplinas" element={<Subjects />} />
    </Switch>
  );
}
