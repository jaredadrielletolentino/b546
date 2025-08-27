import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import AddCourse from './pages/AddCourse';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import News from './pages/News';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {

  // State hook for the user state is defined here to allow it to have a global scope
  // This can be achieved using prop drilling or via react context
  // This will be used to store the user information and will be used for validating if a user is logged in on the app or not
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  // Function for clearing localStorage on logout
  function unsetUser(){
    localStorage.clear();
  };

  useEffect(()=> {
    // fetch request to our backedn application
      fetch('http://localhost:4000/users/details', {
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => response.json())
      .then(data => {
        // console.log("This is data:")
        // console.log(data);

        // 1. JWT malformed = yung token is invalid and kapag walang token
        if(data.auth === "Failed"){
          setUser({
            id : null,
            isAdmin: null
          })
        }
        // 2. Kapag valid yung token = tama yung token
        else{
          setUser({
            id: data._id,
            isAdmin: data.isAdmin
          })
        }
        // changing the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application.
        // setUser({
        //   id: data._id,
        //   isAdmin:  data.isAdmin
        // })

        // console.log(user);
      });


  }, [])

  // Used to check if the user information is properly stored upon login and the localStorage information is cleared upon logout
  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addCourse" element={<AddCourse />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseView />} />
              <Route path="*" element={<Error />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/news" element={<News />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  )
}

export default App