import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Keep Navbar as is
import '../assets/styles1/NEETForm.css'; // Keep the path and file name as is

const NEETForm = () => {
  const [formData, setFormData] = useState({
    rank: '',
    state: '',
    reservation: 'General',
    course: 'MBBS',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="form-unique-container">
        <h1 className="form-unique-title">
          NEET College Predictor 2025: Predict Top MBBS/BDS Colleges based on your Rank and Scores
        </h1>
        <form onSubmit={handleSubmit} className="form-unique">
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="rank" className="form-unique-label">
                Enter your rank
              </label>
              <input
                type="text"
                id="rank"
                name="rank"
                value={formData.rank}
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
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC/ST">SC/ST</option>
                <option value="NT">NT</option>
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="state" className="form-unique-label">
                Select District
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="form-unique-select"
              >
                <option value="">Select State</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Satara">Satara</option>
              </select>
            </div>
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
                <option value="MBBS">MBBS</option>
                <option value="BSC (Nursing)">BSC (Nursing)</option>
                <option value="BDS">BDS</option>
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

export default NEETForm;
