import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importation of reactbootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// createRoot method assigns the element to be managed by React with its Virtual DOM
// render displays the react components/elements into the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);


