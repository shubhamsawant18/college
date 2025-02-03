import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path

const JEEADVForm = () => {
  const [formData, setFormData] = useState({
    rank: "",
    reservation: "",
    gender: "",
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryString = new URLSearchParams({
        rank: formData.rank,
        category: formData.reservation,
        gender: formData.gender,
      }).toString();

      const response = await fetch(`http://localhost:5000/api/jeeadvcollege/query?${queryString}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResults(data.data);
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-unique-container">
        <h1 className="form-unique-title">JEE Advanced College Predictor 2025</h1>
        <form onSubmit={handleSubmit} className="form-unique">
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="rank" className="form-unique-label">
                Enter your rank
              </label>
              <input
                type="number"
                id="rank"
                name="rank"
                value={formData.rank}
                onChange={handleInputChange}
                className="form-unique-input"
                min="0"
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
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC/ST">SC/ST</option>
                <option value="NTC">NTC</option>
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label className="form-unique-label">Select Gender</label>
              <div className="form-unique-radio-group">
                <label htmlFor="male" className="form-unique-radio-label">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
                    className="form-unique-radio-input"
                    required
                  />
                  Male
                </label>
                <label htmlFor="female" className="form-unique-radio-label">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
                    className="form-unique-radio-input"
                    required
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="form-unique-button">
            Check Results
          </button>
        </form>
        {results && (
          <div className="results-container">
            <h2>Filtered Colleges</h2>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default JEEADVForm;
