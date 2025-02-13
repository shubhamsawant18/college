import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../assets/styles1/ResultTable.css';

const CATResult = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const error = location.state?.error || "";

  return (
    <div>
      <Navbar />
      
      <div className="results-container">
        {error && <p className="error-message">{error}</p>}
        {results.length >= 0 && (
          <>
          <h3>CAT College Results</h3>
          <table className="results-table">
            <thead>
              <tr>
                <th>College Name</th>
                <th>Category</th>
                <th>Percentile</th>
                <th>Courses</th>
              </tr>
            </thead>
            <tbody>
              {results.map((college) => (
                <tr key={college._id}>
                  <td>{college.collegename}</td>
                  <td>{college.category.map((cat) => cat.categoryname).join(", ")}</td>
                  <td>{college.percentile}</td>
                  <td>{college.courses.map((course) => course.coursename).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </>
        )}
      </div>
    </div>
  );
};

export default CATResult;
