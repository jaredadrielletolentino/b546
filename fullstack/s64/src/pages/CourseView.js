import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';

import UserContext from '../context/UserContext';

// Import npm install notyf
import {Notyf} from 'notyf';

export default function CourseView() {

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	const { user } = useContext(UserContext);

	// Contain the useNavigate hook to the navigate variable
	const navigate = useNavigate();

	// This is for notyfication
	const notyf = new Notyf();

	// This is how we can decontruct the url params using the useParams() from react-router-dom
	const { courseId } = useParams();

	useEffect(() => {

			fetch(`http://localhost:4000/courses/specific/${courseId}`)
			.then(response => response.json())
			.then(data => {
			
				setName(data.name);
				setDescription(data.description);
				setPrice(data.price);
				
			})
			
	}, [courseId]);

	// We will be creating an enroll function that will enroll the authenticated user in the course.
		// course parameter is the id of the course to be enrolled by the user
	function enroll(course){
		// console.log(course);
		// This fetch will enroll our user to a specific course:
		fetch('http://localhost:4000/users/enroll', 
		{
			method: "POST",
			headers: {
				"Content-Type" : "application/json",
				Authorization : `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				enrolledCourses: [{courseId: course}],
				totalPrice: price
			})
		})
		.then(response => response.json())
		.then(data => {
			// console.log(data);
			if(data.message === "Admin is forbidden") {
				notyf.error("Admin Forbidden!");

			} else if(data.message === "Enrolled successfully") {
				notyf.success("Enrollment Successful!");

				// useNavigate allows us to redirect the user to a different page and is an easier approach rather than using the Navigate Component.
				navigate('/courses');

			} else {
				notyf.error("Internal Server Error. Notify System Admin.");
			}
		})
	}


	return (
		<Container className="mt-5">
			<Row>
		        <Col lg={{ span: 6, offset: 3 }}>
		            <Card>
		                <Card.Body className="text-center">
		                    <Card.Title>{name}</Card.Title>
		                    <Card.Subtitle>Description:</Card.Subtitle>
		                    <Card.Text>{description}</Card.Text>
		                    <Card.Subtitle>Price:</Card.Subtitle>
		                    <Card.Text>PhP {price}</Card.Text>
		                    <Card.Subtitle>Class Schedule</Card.Subtitle>
		                    <Card.Text>8 am - 5 pm</Card.Text>
		                    {
		                    	(user.id !== null) ?
		                    	<Button variant="primary" block="true" onClick = {()=>enroll(courseId)}>Enroll</Button>
		                    	:
		                    	<Link className = "btn btn-primary" to = "/login">Login to Enroll</Link>
		                    }
		                </Card.Body>        
		            </Card>
		        </Col>
		    </Row>
		</Container>
		)
}

