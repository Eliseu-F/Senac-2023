import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterApp from './route';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Div.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);



