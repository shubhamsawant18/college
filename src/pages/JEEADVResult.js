import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const JEEADVResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const error = location.state?.error || "";

  useEffect(() => {
    console.log("JEEADVResult location state:", location.state);
    // Redirect to the form if no state is found.
    if (!location.state) {
      navigate("/jeeadvform");
    }
  }, [location, navigate]);

  if (!location.state) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="results-container">
        {error ? (
          <p className="error-message">{error}</p>
        ) : results.length > 0 ? (
          <>
            <h3>Filtered Colleges</h3>
            <table className="results-table">
              <thead>
                <tr>
                  <th>College Name</th>
                  <th>Rank</th>
                  <th>Category</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {results.map((college) => (
                  <tr key={college._id}>
                    <td>{college.collegename}</td>
                    <td>{college.rank}</td>
                    <td>{college.category}</td>
                    <td>{college.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default JEEADVResult;
