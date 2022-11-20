import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import './index.css';
import Aleatorio from './pages/Aleatorio/Aleatorio';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path='previsao-aleatoria' element={<Aleatorio />} />
      </Route>
    </Routes>
  </HashRouter>
);