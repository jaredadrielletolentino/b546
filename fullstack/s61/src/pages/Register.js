import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Register() {
    // states for the inputs of our user in the form:
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ mobileNo, setMobileNo ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    // state will determine whether the submit button is enabled or not
    const [ isActive, setIsActive ] = useState(false);

    // Two way binding
    // console.log(firstName);

    // example of useEffect:
        // Syntax:
            /*
                useEffect(sideEffect/function, [dependency/ies]);
            */
    // isang dependency
        // The side effect will run when the component gets rendered
        // when the state of the dependency changed
    // Empty dependency
        // The side effect will run when the component gets rendered
    // Multiple dependency
        // The side effect will run when the component gets rendered
        // If one of the dependencies changes

    // This useEffect will activate or deactivate the submit button depending whether the inputs are complete or not
    useEffect(()=> {
        // console.log("I am from useEffect!")
        // console.log(firstName);
        if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== "" && confirmPassword !== "") && (password === confirmPassword) && (mobileNo.length === 11)) {

            setIsActive(true);

        } else {
            setIsActive(false);
        }

    }, [firstName, lastName, email, mobileNo, password, confirmPassword]);

    function registerUser(event){

        event.preventDefault();

        // fetching for registration of a user
        fetch('http://localhost:4000/users/register',
                {
                    method : 'POST',
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        mobileNo: mobileNo
                    })
                }
            )
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if(data.message === "User registered successfully") {
                setFirstName('');
                setLastName('');
                setEmail('');
                setMobileNo('');
                setPassword('');
                setConfirmPassword('');

                alert("Registration successfully!")
            }
            else if (data.message === "Email invalid") {

                alert("Email is invalid");

            } else if (data.message === "Mobile number is invalid") {

                alert("Mobile number is invalid");

            } else if (data.message === "Password must be atleast 8 characters long") {

                alert("Password must be at least 8 characters");

            } else {
                        
                alert("Something went wrong.");

            }
        })
    }

    return (
        
        <Form onSubmit = {event => registerUser(event)}>
        <h1 className="my-5 text-center">Register</h1>
        
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter First Name" 
                    required
                    value = {firstName}
                    onChange = {event => {setFirstName(event.target.value)}}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Last Name" 
                    required
                    value = {lastName}
                    onChange = {event => {setLastName(event.target.value)}}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Email" 
                    required
                    value = {email}
                    onChange = {event => {setEmail(event.target.value)}}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Mobile No:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter 11 Digit No." 
                    required  
                    value = {mobileNo}
                    onChange = {event => {setMobileNo(event.target.value)}}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Password" 
                    required
                    value = {password}
                    onChange = {event => {setPassword(event.target.value)}} 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password" 
                    required
                    value = {confirmPassword}
                    onChange = {event => {setConfirmPassword(event.target.value)}}
                />
            </Form.Group>
            {
                isActive 
                ?
                <Button variant="primary" type="submit" id="submitBtn">
                        Submit
                </Button>
                :
                <Button variant="primary" type="submit" id="submitBtn" disabled>
                        Submit
                </Button>
            } 
        </Form>
            
    )

}