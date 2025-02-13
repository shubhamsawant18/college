import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";

const JEEResult = () => {
  const location = useLocation();
  const { results, error } = location.state || {};

  return (
    <div>
      <Navbar />
      
      <div className="results-container">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          results && results.length > 0 ? (
            <>
              <h3>JEE Main College Results</h3>
              <table className="results-table">
                <thead>
                  <tr>
                    <th>College Name</th>
                    <th>District</th>
                    <th>Category</th>
                    <th>Rank</th>
                    <th>Courses</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(college => (
                    <tr key={college._id}>
                      <td>{college.collegename}</td>
                      <td>{college.districtid?.name || "N/A"}</td>
                      <td>{college.category.map(cat => cat.categoryname).join(', ')}</td>
                      <td>{college.rank}</td>
                      <td>{college.courses.map(course => course.coursename).join(', ')}</td>
                      <td>{college.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p>No results found</p>
          )
        )}
      </div>
    </div>
  );
};

export default JEEResult;
