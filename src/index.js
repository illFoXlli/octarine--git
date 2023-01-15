import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/octarine--git/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
