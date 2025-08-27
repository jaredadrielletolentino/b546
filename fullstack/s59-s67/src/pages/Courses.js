import { useEffect, useState, useContext } from 'react';
import CourseCard from '../components/CourseCard';
import UserContext from '../context/UserContext';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import PriceRangeSearch from '../components/PriceRangeSearch'; // Add this import

export default function Courses() {
    const { user } = useContext(UserContext);
    const [courses, setCourses] = useState([]);
    const [displayedCourses, setDisplayedCourses] = useState([]);

    const fetchData = () => {
        let fetchUrl = user.isAdmin === true ? 
            "http://localhost:4000/courses/all" : 
            "http://localhost:4000/courses/";

        fetch(fetchUrl, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setDisplayedCourses(data); // Initialize displayed courses with all courses
        });
    }

    useEffect(() => {
        fetchData();
    }, [user]);

    const handleSearchComplete = (results) => {
        setDisplayedCourses(results);
    };

    const resetSearch = () => {
        setDisplayedCourses(courses);
    };

    return (
        <>
            {
                (user.isAdmin === true) ?
                    <AdminView coursesData={courses} fetchData={fetchData} />
                    :
                    <>
                       
                        <UserView coursesData={displayedCourses} />
                    </>
            }
        </>
    )
}