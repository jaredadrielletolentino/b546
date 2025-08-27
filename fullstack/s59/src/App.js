// from react-bootstrap
import Container from 'react-bootstrap/Container';

// Components
import AppNavbar from './components/AppNavbar.js';
// import Banner from './components/Banner';

// pages
import Home from './pages/Home.js';
function App() {

  // console.log("Hi");

  return (
    <>
      <AppNavbar/>
      <Container>
          <Home/>
      </Container>
    </>
  );
}

export default App;
