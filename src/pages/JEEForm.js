import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path
import axios from 'axios';

const JEEForm = () => {
  const [formData, setFormData] = useState({
    rank: "",
    reservation: "",
    course: "",
    district: "",
    gender: "",
  });
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('http://localhost:5000/api/jeemcollege/query', {
        params: {
          rank: formData.rank,
          category: formData.reservation,
          courses: formData.course,
          district: formData.district,
          gender: formData.gender
        }
      });

      setResults(response.data.data);
    } catch (err) {
      setError('Error fetching results');
    } finally {
      setLoading(false);
    }
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
                <option value="B.E/BTech">B.E/BTech</option>
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
                <option value="Satara">Satara</option>
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
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {results.length > 0 && (
          <div className="results-container">
            <h2>Results</h2>
            <table className="results-table">
              <thead>
                <tr>
                  <th>College Name</th>
                  <th>District</th>
                  <th>Category</th>
                  <th>Rank</th>
                  <th>Courses</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {results.map((college) => (
                  <tr key={college._id} className="result-item">
                    <td>{college.collegename}</td>
                    <td>{college.districtid.name}</td>
                    <td>{college.category.map(cat => cat.categoryname).join(', ')}</td>
                    <td>{college.rank}</td>
                    <td>{college.courses.map(course => course.coursename).join(', ')}</td>
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

export default JEEForm;
