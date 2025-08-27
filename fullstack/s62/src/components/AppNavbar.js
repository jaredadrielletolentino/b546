import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// NavLink is a way on how we can implement linking in our Navbar with the use of the react-router-dom.
import {NavLink, Link} from 'react-router-dom';

import {useState} from 'react';

export default function AppNavbar() {
	// getItem
	const [user, setUser] = useState(localStorage.getItem("token"));

	return (
		<Navbar expand="lg" className="bg-light">
	      <Container className="ms-0">
	        <Navbar.Brand as = {Link} to = "/">Zuitt Booking</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	          <Nav className="ms-auto">
	            <Nav.Link as = {NavLink} to = "/">Home</Nav.Link>
	            <Nav.Link as = {NavLink} to = "/courses">Courses</Nav.Link>
	            {
	            	(user !== null)
	            	?
	            		<Nav.Link as = {NavLink} to = "/logout">Logout</Nav.Link>
	            	:
	            	<>
	            		<Nav.Link as = {NavLink} to = "/login">Login</Nav.Link>
	            		<Nav.Link as = {NavLink} to = "/register">Register</Nav.Link>
	            	</>
	            }
	          </Nav>
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>
	)
}