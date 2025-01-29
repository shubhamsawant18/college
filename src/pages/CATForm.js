import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure the correct path to the CSS file

const CATForm = () => {
  const [formData, setFormData] = useState({
    percentile: "",
    reservation: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("*********Clicked");
    e.preventDefault();
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
      </div>
    </div>
  );
};

export default CATForm;
