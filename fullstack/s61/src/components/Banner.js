// import Button from 'react-bootstrap/Button';
// Bootstrap grid system components
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// Destructured modules
import { Button, Row, Col } from 'react-bootstrap';

export default function Banner() {
	return (
        <Row>
        	<Col>
                <h1>Zuitt Coding Bootcamp</h1>
                <p>Opportunities for everyone, everywhere.</p>
                <Button variant="primary">Enroll now!</Button>
            </Col>
        </Row>
	)
}