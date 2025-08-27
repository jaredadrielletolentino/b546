import Container from 'react-bootstrap/Container';

import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';

function App() {
  return (
    <>
        <AppNavbar />
        <Container>
          <Home />
          <Courses />
          <Register />
        </Container>
    </>
  )
}

export default App