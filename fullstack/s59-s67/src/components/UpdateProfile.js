import { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf';

export default function UpdateProfile({ userDetails, onUpdateSuccess }) {
    const notyf = new Notyf();
    const { user } = useContext(UserContext);
    
    const [formData, setFormData] = useState({
        firstName: userDetails.firstName || '',
        lastName: userDetails.lastName || '',
        mobileNo: userDetails.mobileNo || ''
    });
    
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch('http://localhost:4000/users/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    mobileNumber: formData.mobileNo
                })
            });

            const data = await response.json();

            if (response.ok) {
                notyf.success('Profile updated successfully!');
                if (onUpdateSuccess) {
                    onUpdateSuccess(data.user); // Pass updated data back to parent
                }
            } else {
                throw new Error(data.message || 'Failed to update profile');
            }
        } catch (error) {
            notyf.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container className="mt-4 p-4 border rounded">
            <h3>Update Profile Information</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="mobileNo">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{11}"
                        title="Mobile number must be 11 digits"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? 'Updating...' : 'Update Profile'}
                </Button>
            </Form>
        </Container>
    );
}