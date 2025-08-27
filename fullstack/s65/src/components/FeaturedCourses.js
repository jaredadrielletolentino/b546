import { CardGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import PreviewCourses from './PreviewCourses';

export default function FeaturedCourses(){
	
	const [previews, setPreviews] = useState([]);

	// Adding a useEffect to fetch the list of courses from our backend application.

	useEffect(()=> {
		fetch("http://localhost:4000/courses")
		.then(response => response.json())
		.then(data => {
			console.log(data);

			// two new empty arrays
			const numbers = [];
			const featured = [];

			// creating a function that will randomize a number based on the length on the number of courses in our collection.
			const generateRandomNums = () => {
				// Math.random start with 0 randmize the number
					// Math.floor to make sure its a whole number
				// 0 - length of our data array
				let randomNum = Math.floor(Math.random() * data.length);
				// It will make sure no duplicate of randomize index number
				// -1 means not existing in numbers array
				if(numbers.indexOf(randomNum) === -1){
					numbers.push(randomNum);
				} else {
					// This function will not stop unless it find a new element or index
					generateRandomNums();
				}
			}

			for(let i = 0; i < 5; i++){
				// 0 - length of our data array
				generateRandomNums();

				console.log(data[numbers[i]]);

				featured.push(
						<PreviewCourses data = {data[numbers[i]]} key = {data[numbers[i]]._id}/>
					)
			}

			setPreviews(featured);

		})

	}, [])

	return(
			<>
				<h2 className = "text-center">Featured Courses</h2>
				<CardGroup className = "justify-content-center">
					{previews}
				</CardGroup>
			</>
		)
}