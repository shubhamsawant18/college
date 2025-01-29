import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure the correct path to the CSS file
import axios from "axios";  // Ensure axios is imported for API calls

const CATForm = () => {
  const [formData, setFormData] = useState({
    percentile: "",
    reservation: "",
    course: "",
  });
  
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("*********Clicked");
    e.preventDefault();
    setError("");
    
    const queryParam = {};
    
    if (formData.percentile) {
      queryParam["percentile"] = formData.percentile;
    }
    if (formData.reservation) {
      queryParam["category"] = formData.reservation;
    }
    if (formData.course) {
      queryParam["course"] = formData.course;
    }

    try {
      const queryParams = new URLSearchParams(queryParam).toString();
      const response = await axios.get(
        `http://localhost:5000/api/cat/colleges?${queryParams}`
      );
      const data = response.data;
      if (response.status === 200 && data.success) {
        setResults(data.data);
      } else {
        setError(data.msg || "Failed to fetch colleges");
      }
    } catch (err) {
      setError("An error occurred while fetching results");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-unique-container">
        <h1 className="form-unique-title">
          CAT College Predictor 2025, IIM & Non-IIM Call Predictor
        </h1>
        <form onSubmit={handleSubmit} className="form-unique">
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="percentile" className="form-unique-label">
                Enter your percentile
              </label>
              <input
                type="text"
                id="percentile"
                name="percentile"
                value={formData.percentile}
                onChange={handleInputChange}
                className="form-unique-input"
              />
            </div>
            <div className="form-unique-group">
              <label htmlFor="reservation" className="form-unique-label">
                Reservation Category
              </label>
              <select
                id="reservation"
                name="reservation"
                value={formData.reservation}
                onChange={handleInputChange}
                className="form-unique-select"
              >
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="scst">SC/ST</option>
                <option value="ntc">NTC</option>
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="course" className="form-unique-label">
                Select Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="form-unique-select"
              >
                <option value="">Select Course</option>
                <option value="mba">MBA/PGDM</option>
                <option value="exec-mba">Executive MBA</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form-unique-button">
            Check results
          </button>
        </form>

        {/* Display results */}
        <div className="results-container">
          {error && <p className="error-message">{error}</p>}
          {results.length > 0 && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>College Name</th>
                  <th>City</th>
                  <th>Percentile Range</th>
                  <th>Course</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {results.map((college) => (
                  <tr key={college._id}>
                    <td>{college.collegename}</td>
                    <td>{college.city || "N/A"}</td>
                    <td>{college.percentilerange}</td>
                    <td>{college.course}</td>
                    <td>{college.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CATForm;
