import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path

const JEEForm = () => {
  const [formData, setFormData] = useState({
    rank: "",
    reservation: "",
    course: "",
    district: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you will handle form submission when the API is ready
  };

  return (
    <div>
      <Navbar />
      <div className="form-unique-container">
        <h1 className="form-unique-title">
          JEE Main College Predictor 2025
        </h1>
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
                <option value="B.E/B.Tech">B.E/B.Tech</option>
                <option value="B.Pharmacy">B.Pharmacy</option>
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="district" className="form-unique-label">
                Select District
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="form-unique-select"
                required
              >
                <option value="">Select District</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label className="form-unique-label">
                Select Gender
              </label>
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
      </div>
    </div>
  );
};

export default JEEForm;
