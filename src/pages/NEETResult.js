import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const NEETResult = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const error = location.state?.error || "";

  return (
    <div>
      <Navbar />
      <div className="results-container">
        {error && <p className="error-message">{error}</p>}
        {results.length > 0 && (
          <table className="results-table">
            <thead>
              <tr>
                <th>College Name</th>
                <th>City</th>
                <th>Rank</th>
                <th>Course</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {results.map((college) => (
                <tr key={college._id}>
                  <td>{college.collegename}</td>
                  <td>{college.cityid?.name || "N/A"}</td>
                  <td>{college.rank}</td>
                  <td>
                    {college.courses
                      .map((course) => course.coursename)
                      .join(", ")}
                  </td>
                  <td>
                    {college.category
                      .map((cat) => cat.categoryname)
                      .join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NEETResult;