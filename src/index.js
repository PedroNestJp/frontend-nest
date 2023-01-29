import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cors from 'cors'

App.use(cors())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

