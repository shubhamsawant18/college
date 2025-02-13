import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const GATEResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const error = location.state?.error || "";

  useEffect(() => {
    // If no state is present, redirect back to the GATE form page
    if (!location.state) {
      navigate("/gateform");
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
            <h3>GATE College Results</h3>
            <table className="results-table">
              <thead>
                <tr>
                  <th>College Name</th>
                  <th>Score</th>
                  <th>Category</th>
                  <th>Stream</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result._id}>
                    <td>{result.name}</td>
                    <td>{result.score}</td>
                    <td>{result.category}</td>
                    <td>{result.stream}</td>
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

export default GATEResult;
