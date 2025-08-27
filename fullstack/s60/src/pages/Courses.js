// import {Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard'
// import CourseCard2 from '../components/CourseCard2'
// import CourseCard3 from '../components/CourseCard3'
// import CourseCard4 from '../components/CourseCard4'
// Import mock database
import coursesData from '../data/coursesData';

export default function Courses() {

    // to automatically assign a CourseCard component to a course in the mock database, we will be using map().

    // courses - this is an array
        // its elements are the courseCards
    const courses = coursesData.map(course => {
        return(
                <CourseCard key = {course.id} coursesProp = {course}/>
            )
    })

	return (
        <>
        {/*<Row className='mt-5 text-center'>
			<Col className='pt-md-5 mt-5'>
				<h1>Courses</h1>
				<p>Select a course to enroll in!</p>
			</Col>
        </Row>
        <CourseCard />*/}
            <h1>Courses</h1>
            {courses}
        </>

	)
}