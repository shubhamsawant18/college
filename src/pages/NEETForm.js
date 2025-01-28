import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Keep Navbar as is
import '../assets/styles1/NEETForm.css';
import axios from 'axios';

const NEETForm = () => {
  const [formData, setFormData] = useState({
    rank: '',
    city: '',
    reservation: '67974b97114034b38e1b71f1',  // Default to 'General' category ID
    course: '',
  });

  const [results, setResults] = useState([]); // State to store API results
  const [error, setError] = useState(''); // State to handle errors

  // Predefined cities, reservations, and courses
  const [cities] = useState([
    { _id: '679742528144d9a79d4493f4', name: 'Satara' },
    { _id: '6797435b798748a613b211f3', name: 'Mumbai' },
    { _id: '67977ed2de4e5932ec336ea8', name: 'Nagpur' },
    { _id: '6798a85d103c5a2e747cbeb0', name: 'Pune' },
  ]);

  const [reservations] = useState([
    { _id: '67974b80114034b38e1b71eb', name: 'SC/ST' },
    { _id: '67974b97114034b38e1b71f1', name: 'General' },
    { _id: '67974bfa114034b38e1b71f3', name: 'OBC' },
    { _id: '67974c45114034b38e1b71f5', name: 'NTC' },
  ]);

  const [courses] = useState([
    { _id: '6797593d622cc4b6a046a25c', coursename: 'B.Sc Nursing' },
    { _id: '6798afe056edfdb1bae1e7c9', coursename: 'BDS' },
    { _id: '6798b006b2b599f4a28ac59a', coursename: 'MBBS' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const selectedOption = name === 'city' ? cities.find(city => city._id === value) 
                          : name === 'reservation' ? reservations.find(res => res._id === value)
                          : courses.find(course => course._id === value);
    setFormData({ ...formData, [name]: selectedOption._id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Fetch data from the filter API
      const queryParams = new URLSearchParams({
        rank: formData.rank,
        category: formData.reservation,
        course: formData.course,
        city: formData.city,
      }).toString();

      const response = await axios.get(`http://localhost:5000/api/college/filter?${queryParams}`);
      const data = response.data;

      if (response.status === 200 && data.success) {
        setResults(data.data); // Update results with fetched colleges
      } else {
        setError(data.msg || 'Failed to fetch colleges');
      }
    } catch (err) {
      setError('An error occurred while fetching results');
    }
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
                onChange={handleSelectChange}
                className="form-unique-select"
              >
                {reservations.map((res) => (
                  <option key={res._id} value={res._id}>
                    {res.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="city" className="form-unique-label">
                Select City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleSelectChange}
                className="form-unique-select"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city._id} value={city._id}>
                    {city.name}
                  </option>
                ))}
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
                onChange={handleSelectChange}
                className="form-unique-select"
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.coursename}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="form-unique-button">
            Check results
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
                  <th>Rank</th>
                  <th>Course</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {results.map((college) => (
                  <tr key={college._id}>
                    <td>{college.collegename}</td>
                    <td>{college.cityid?.name || 'N/A'}</td>
                    <td>{college.rank}</td>
                    <td>
                      {college.courses.map((course) => course.coursename).join(', ')}
                    </td>
                    <td>{college.categoryid?.categoryname || 'N/A'}</td>
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

export default NEETForm;
