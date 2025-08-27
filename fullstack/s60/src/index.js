import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js'
import './index.css'

/*
createRoot - assigns the element to be managed by React with its Virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
render() - displays the react elements/components into the root.
App component is our mother component, this is the component we use as entry point and where we can render all other components or pages.
<React.StrictMode> - component from React that manages future or possible conflicts. It allows us extend or expand certain error messages.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
