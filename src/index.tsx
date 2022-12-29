import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import countdownImage from './img/countdown.jpg';
import CountDown from './components/CountDown';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <CountDown />,
);
