import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Home from './components/Home';
import OperatorList from './components/OperatorList';
import Operator from './components/Operator';
import OperatorStats from './components/Operator/Stats';
import OperatorSkills from './components/Operator/Skills';
import OperatorSkill from './components/Operator/Skill';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operators" element={<OperatorList />} />
        <Route path="/operators/:operator" element={<Operator />}>
          <Route index element={<OperatorStats />} />
          <Route path="skills" element={<OperatorSkills />}>
            <Route path=":skill" element={<OperatorSkill level={1} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
