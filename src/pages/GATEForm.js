import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path

const GATEForm = () => {
  const [formData, setFormData] = useState({
    score: "",
    reservation: "",
    stream: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC/ST">SC/ST</option>
                <option value="NTC">NTC</option>
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
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Chemical Engineering">Chemical Engineering</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form-unique-button">
            Check Results
          </button>
        </form>
      </div>
    </div>
  );
};

export default GATEForm;
