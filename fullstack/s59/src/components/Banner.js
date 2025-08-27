// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// Deconstruction
import {Row, Col, Button} from 'react-bootstrap';

export default function Banner(){
	return(
		<Row>
			<Col>
				<h1>Zuitt Coding Bootcamp</h1>
				<p>Opportunities for everyone, everywhere.</p>
				<Button varian = "primary">Enroll now!</Button>
			</Col>
		</Row>
		);
}