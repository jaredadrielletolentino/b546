import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Error from './pages/Error';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import AddGame from './pages/AddGame';

import './App.css';
import {UserProvider} from './UserContext';

function App() {

    const [user, setUser] = useState({
      id: null
    });

    const unsetUser = () => {

      localStorage.clear();

    };

    useEffect(() => {

    fetch('http://localhost:4000/users/details', {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (typeof data.user !== "undefined") {

        setUser({
          id: data.user._id,
          isAdmin: data.user.isAdmin
        });

      } else {

        setUser({
          id: null
        });

      }

    })

    }, []);

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/addGame" element={<AddGame />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;