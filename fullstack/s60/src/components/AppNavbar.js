import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function AppNavbar() {
	return (
		<Navbar expand="lg" className="bg-primary navbar-dark">
	      <Container className="ms-0">
	        <Navbar.Brand href="#home">Zuitt Booking</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	          <Nav className="me-auto">
	            <Nav.Link href="#home">Home</Nav.Link>
	            <Nav.Link href="#courses">Courses</Nav.Link>
				<Nav.Link href="#register">Register</Nav.Link>
	          </Nav>
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>
	)
}