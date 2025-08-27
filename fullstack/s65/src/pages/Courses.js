import { useState, useEffect, useContext } from 'react';
import CourseCard from '../components/CourseCard';
// import coursesData from '../data/coursesData';

import UserContext from '../context/UserContext';

export default function Courses() {

	const {user} = useContext(UserContext);

	// Checks to see if the mock data was captured
	// console.log(coursesData);
	// console.log(coursesData[0]);

	const [courses, setCourses] = useState([]);

	// The "map" method loops through the individual course objects in our array and returns a component for each course
	// Multiple components created through the map method must have a unique key that will help React JS identify which components/elements have been changed, added or removed
	// Everytime the map method loops through the data, it creates a "CourseCard" component and then passes the current element in our coursesData array using the courseProp
	// const courses = coursesData.map(course => {
	//     return (
	//         <CourseCard key={course.id} courseProp={course}/>
	//     );
	// })

	useEffect(() => {
		fetch("http://localhost:4000/courses/")
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setCourses(data.map(course => {
				return (
						<CourseCard key={course._id} courseProp={course}/>
					)
			}))
		})
	}, [])


	return (
		<>
		<h1>Courses</h1>
		{courses}
		</>
	)
}