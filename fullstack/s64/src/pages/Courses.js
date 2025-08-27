import CourseCard from '../components/CourseCard';
// import coursesData from '../data/coursesData';
import {useState, useEffect} from 'react';

export default function Courses() {

	// Checks to see if the mock data was captured
	// console.log(coursesData);
	// console.log(coursesData[0]);

	const [courses, setCourse] = useState([]);

	// The "map" method loops through the individual course objects in our array and returns a component for each course
	// Multiple components created through the map method must have a unique key that will help React JS identify which components/elements have been changed, added or removed
	// Everytime the map method loops through the data, it creates a "CourseCard" component and then passes the current element in our coursesData array using the courseProp
	// const courses = coursesData.map(course => {
	//     return (
	//         <CourseCard key={course.id} courseProp={course}/>
	//     );
	// })

	// We will be fetching all the active courses
	useEffect(() => {
		// Fetching
		fetch("http://localhost:4000/courses/")
		.then(response => response.json())
		.then(data => {
			setCourse(data.map(course => {
				return (<CourseCard key={course._id} courseProp={course}/>)
			}));
		})

	}, [])

	return(
		<>
			<h1>Courses</h1>
			{courses}
		</>
	)
}