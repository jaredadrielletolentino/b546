import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import CourseSearch from './CourseSearch';
import PriceRangeSearch from './PriceRangeSearch'; // Import the new component
import { Notyf } from 'notyf';

export default function UserView({ coursesData }) {
    const notyf = new Notyf();
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [activeCourses, setActiveCourses] = useState([]);

    // Initialize with all active courses
    useEffect(() => {
        const active = coursesData.filter(course => course.isActive === true);
        setActiveCourses(active);
        setFilteredCourses(active);
    }, [coursesData]);

    const handleNameSearchResults = (results) => {
        setFilteredCourses(results);
    };

    const handlePriceSearchResults = (results) => {
        setFilteredCourses(results);
    };

    const resetSearch = () => {
        setFilteredCourses(activeCourses);
        notyf.success('Showing all active courses');
    };

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-md-6">
                    <CourseSearch onSearchComplete={handleNameSearchResults} />
                </div>
                <div className="col-md-6">
                    <PriceRangeSearch onSearchComplete={handlePriceSearchResults} />
                </div>
            </div>

            <button 
                onClick={resetSearch}
                className="btn btn-secondary mb-4"
            >
                Reset Search (Show All)
            </button>

            <div className="row">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <div key={course._id} className="col-md-4 mb-4">
                            <CourseCard courseProp={course} />
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="alert alert-info">
                            No courses found matching your criteria
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}