import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path

const GATEForm = () => {
  const [formData, setFormData] = useState({
    score: "",
    reservation: "",
    stream: "",
  });

  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const queryString = new URLSearchParams({
      score: formData.score,
      category: formData.reservation.toLowerCase(),
      stream: formData.stream.toLowerCase()
    }).toString();

    try {
      const response = await fetch(`http://localhost:5000/api/gatecollege/filter?${queryString}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-unique-container">
        <h1 className="form-unique-title">GATE College Predictor 2025</h1>
        <form onSubmit={handleSubmit} className="form-unique">
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="score" className="form-unique-label">
                Enter your Score (out of 1000)
              </label>
              <input
                type="number"
                id="score"
                name="score"
                value={formData.score}
                onChange={handleInputChange}
                className="form-unique-input"
                min="0"
                max="1000"
                required
              />
            </div>
          </div>
          <div className="form-unique-row">
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
                <option value="sc/st">SC/ST</option>
                <option value="ntc">NTC</option>
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="stream" className="form-unique-label">
                Select Stream
              </label>
              <select
                id="stream"
                name="stream"
                value={formData.stream}
                onChange={handleInputChange}
                className="form-unique-select"
                required
              >
                <option value="">Select Stream</option>
                <option value="computer science">Computer Science</option>
                <option value="information technology">Information Technology</option>
                <option value="chemical engineering">Chemical Engineering</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form-unique-button">
            Check Results
          </button>
        </form>
        {results.length > 0 && (
          <div className="results-container">
            <h2>Results</h2>
            <table>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default GATEForm;
