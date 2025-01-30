import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path
import axios from "axios";

const CATForm = () => {
  const [formData, setFormData] = useState({
    percentile: "",
    reservation: "",
    course: "",
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
    setLoading(true);

    if (!formData.percentile || !formData.reservation || !formData.course) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const queryParams = new URLSearchParams(formData).toString();

    try {
      const response = await axios.get(`http://localhost:5000/api/cat/colleges?${queryParams}`);
      if (response.status === 200 && response.data.success) {
        setResults(response.data.data);
      } else {
        setError(response.data.msg || "No colleges found.");
      }
    } catch (err) {
      setError("An error occurred while fetching results.");
    } finally {
      setLoading(false);
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
                type="number"
                id="percentile"
                name="percentile"
                value={formData.percentile}
                onChange={handleInputChange}
                className="form-unique-input"
                min="0"
                max="100"
                required
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
                required
              >
                <option value="">Select Category</option>
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
                required
              >
                <option value="">Select Course</option>
                <option value="mba">MBA/PGDM</option>
                <option value="exec-mba">Executive MBA</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form-unique-button" disabled={loading}>
            {loading ? "Fetching Results..." : "Check Results"}
          </button>
        </form>

        {/* Display Results */}
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
                {results.map((college, index) => (
                  <tr key={index}>
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
