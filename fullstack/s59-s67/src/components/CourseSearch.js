import React, { useState } from 'react';

import CourseCard from './CourseCard';

const CourseSearch = () => {
  const [courseName, setCourseName] = useState('');
  const [courseResult, setCourseResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCourseResult(null);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/courses/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ courseName })
      });

      const data = await response.json();

      if (response.ok) {
        setCourseResult(data); // assuming API returns the course details
      } else {
        setError(data.message || 'Course not found.');
      }
    } catch (err) {
      setError('An error occurred while searching.');
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4">Search Course by Name</h3>

      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      <h3>Search Result:</h3>

      <ul>
        {
          courseResult !== null 
          ?
          courseResult.map(course => {
            return <CourseCard courseProp = {course} key = {course._id} />
          })
          :
          <>
          
          </>
        }
      </ul>

      {error && <div className="alert alert-danger mt-4">{error}</div>}
    </div>
  );
};

export default CourseSearch;
