import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

// import the UserContext
	// user
	// setUser
	// unsetUser
import UserContext from '../context/UserContext.js';

export default function Login() {

	// State hooks to store the values of the input fields
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(true);

    // Let us use the user and setUser from the global context
    	// We can now use the user state and the setUser function
    const {user, setUser} = useContext(UserContext);

    // console.log(user);

	function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();
		fetch('http://localhost:4000/users/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({

				email: email,
				password: password

			})
		})
		.then(res => res.json())
		.then(data => {

			if(data.access !== undefined){

				// console.log(data.access);

				// Set the token of the authenticated user in the local storage
	        	// Syntax
	        	// localStorage.setItem('propertyName', value);
				localStorage.setItem('token', data.access);

				// instead of directly adding the fetch here
				retrieveUserDetails(data.access);

				// Clear input fields after submission
				setEmail('');
				setPassword('');

				alert(`You are now logged in`);
			
			} else if (data.message === "Incorrect email or password") {

				alert(`Incorrect email or password`);

			} else {

				alert(`${email} does not exist`);
			}

		})

    }

    function retrieveUserDetails(token){
    	// fetch request to our backend application
    	fetch('http://localhost:4000/users/details', {
    		headers : {
    			Authorization: `Bearer ${token}`
    		}
    	})
    	.then(response => response.json())
    	.then(data => {
    		// console.log(data);

    		// Changeing the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application.

    		setUser({
    			id: data._id,
    			isAdmin: data.isAdmin
    		})
    	})
    }

	useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

    }, [email, password]);

    return (
    	/*(localStorage.getItem("token") !== null) 
    		?
    		<Navigate to="/courses" />
    		:*/
    		(user.id !== null)
    		?
    		<Navigate to = "/courses" />
    		:
	        <Form onSubmit={(e) => authenticate(e)}>
	        	<h1 className="my-5 text-center">Login</h1>
	            <Form.Group>
	                <Form.Label>Email address</Form.Label>
	                <Form.Control 
	                    type="email" 
	                    placeholder="Enter email" 
	                    required
	                    value={email}
	        			onChange={(e) => setEmail(e.target.value)}
	                />
	            </Form.Group>

	            <Form.Group className="mb-3">
	                <Form.Label>Password</Form.Label>
	                <Form.Control 
	                    type="password" 
	                    placeholder="Password" 
	                    required
	                    value={password}
	        			onChange={(e) => setPassword(e.target.value)}
	                />
	            </Form.Group>

	            { isActive ? 
	                <Button variant="primary" type="submit" id="loginBtn">
	                    Login
	                </Button>
	                : 
	                <Button variant="danger" type="submit" id="loginBtn" disabled>
	                    Login
	                </Button>
	            }
        </Form>       
    )
}