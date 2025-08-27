import Container from 'react-bootstrap/Container';

import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Courses from './pages/Courses';
import Home from './pages/Home';
import News from './pages/News';
import Register from './pages/Register';

function App() {
  return (
    <>
        <AppNavbar />
        <Container>
          <Home />
          <Courses />
          <News />
          <Register />
        </Container>
    </>
  )
}

export default App