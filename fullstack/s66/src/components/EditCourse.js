import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

import {Notyf} from 'notyf';

export default function EditCourse({course, fetchData}){

	const notyf = new Notyf();

	// console.log(course);
	const [courseId, setCourseId] = useState(course._id);
	const [name, setName] = useState(course.name);
	const [description, setDescription] = useState(course.description);
	const [price, setPrice] = useState(course.price);

	const [showEdit, setShowEdit] = useState(false);

	// function for opening the modal
	const openEdit = () => {
		setShowEdit(true);
	}

	const closeEdit = () => {
		setShowEdit(false);

		setName('');
		setDescription('');
		setPrice(0);
	}
	
	// function to update course
	const editCourse = (event, courseId) => {
		event.preventDefault();

		fetch(`http://localhost:4000/courses/${courseId}`, {
			method : "PATCH",
			headers : {
				"Content-Type" : 'application/json',
				"Authorization" : `Bearer ${localStorage.getItem('token')}`
			},
			// name: valueOfName and so on
			body : JSON.stringify({
				name,
				description,
				price
			})

		})
		.then(response => response.json())
		.then(data => {
			if(data.success === true){
				notyf.success("Successfully Updated!");


			} else {
				notyf.error("Something went wrong!");
			}

			fetchData();
			closeEdit();
		})
	}

	return(
		<>
			<Button variant = "primary" size = "sm" onClick = {()=> openEdit()}>Edit</Button>

			{/* Modal */}
			<Modal show={showEdit} onHide = {closeEdit}>
			   <Modal.Header closeButton>
			     <Modal.Title>Modal heading</Modal.Title>
			   </Modal.Header>

			   <Modal.Body>
			     <Form onSubmit = {event => editCourse(event, courseId)}>

			     	{/*name*/}
			       <Form.Group className="mb-3">
			         <Form.Label>Name</Form.Label>
			         <Form.Control
			                type="text"
			                value = {name}
			              	onChange = {(event) => setName(event.target.value)}
			                required
			              />
			       </Form.Group>

			   		{/* description*/}
			   		<Form.Group className="mb-3">
			   		  <Form.Label>Description</Form.Label>
			   		  <Form.Control
			   		        type="text"
			   		        value = {description}
			                onChange = {(event) => setDescription(event.target.value)}
			                required
			   		       />
			   		</Form.Group>

			   		{/*price*/}
			   		<Form.Group className="mb-3">
			   		  <Form.Label>Price</Form.Label>
			   		  <Form.Control 
			   		  		type="text"
			   		  		value = {price}
			                onChange = {(event) => setPrice(event.target.value)}
			                required
			   		       />
			   		</Form.Group>

			   		<Button variant="secondary" onClick = {closeEdit} className = "ms-auto">
			   		       Close
			   		</Button>

			   		<Button variant="primary" type = 'submit' className = "ms-1">
			   		       Submit
			   		</Button>

			     </Form>
			   </Modal.Body>
			</Modal>
		</>
		)
}