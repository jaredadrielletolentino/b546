import { Form, Button } from 'react-bootstrap';

export default function Register() {

    return (
        
        <Form>
        <h1 className="my-5 text-center">Register</h1>
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Last Name" 
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Email" 
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mobile No:</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter 11 Digit No." 
                    required  
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Password" 
                    required 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password" 
                    required 
                />
            </Form.Group>
            <Button variant="primary" type="submit" id="submitBtn">
                    Submit
            </Button>
                
        </Form>
    )

}