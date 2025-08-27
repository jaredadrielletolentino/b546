import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PreviewCourses(props){

	// props is used here to get the data and breakPoint from the FeaturedCourses.js
	const { breakPoint, data } = props;

	// Destructure the courses data here
	const { _id, name, description, price } = data;

	return(
		<Col xs={12} md={ breakPoint }>
			{/*Adding the class cardHighlight for min-height*/}
			{/*Add spacing for x-axis*/}
			<Card className="cardHighlight mx-2">
				<Card.Body>
					<Card.Title className="text-center">
						{/*Add the specific details of course link*/}
						<Link to={`/courses/${_id}`}>{ name }</Link>
					</Card.Title>
					<Card.Text>{ description }</Card.Text>
					
				</Card.Body>
				<Card.Footer>
					<h5 className="text-center">₱{ price }</h5>
					<Link className="btn btn-primary d-block" to={`/courses/${	_id}`}>Details</Link>
				</Card.Footer>
			</Card>
		</Col>
	)
}