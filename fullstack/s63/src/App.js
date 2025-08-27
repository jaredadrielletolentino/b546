import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import {useState, useEffect} from 'react';

import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Courses from './pages/Courses';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import News from './pages/News';
import Register from './pages/Register';

// The UserProvider to feed property or data to our UserContext.
import {UserProvider} from './context/UserContext.js';

function App() {

  const [user, setUser] = useState({id: null, isAdmin: null});

  function unsetUser(){
    localStorage.clear();
  }

  useEffect(() => {

    console.log(user);
    console.log(localStorage);

  }, [user]);

  useEffect(()=> {
    fetch('http://localhost:4000/users/details', {
      headers : {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("This is data:");
      console.log(data);

      // Data is JWT Malformed
      if(data.auth === "Failed"){
        setUser({
          id: null,
          isAdmin: null
        })
      }
      // Valid token
      else {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      }
      // Changeing the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application.

      /*setUser({
        id: data._id,
        isAdmin: data.isAdmin
      })*/
    })
  }, [])

  return (
    <>
      <UserProvider value = {{user, setUser, unsetUser}}>
        <Router>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="*" element={<Error />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/news" element={<News />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  )
}

export default App