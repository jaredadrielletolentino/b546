import Container from 'react-bootstrap/Container';
// This is for the routing
// BrowserRouter - It enable us to simulate page navigation by synchronizing the shown content and shown url in the web browser.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Courses from './pages/Courses';
import Home from './pages/Home';
import News from './pages/News';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/courses" element = {<Courses />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/logout" element = {<Logout />} />
            <Route path = "/register" element = {<Register />} />

          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App