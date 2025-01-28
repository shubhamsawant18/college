import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Keep Navbar as is
import "../assets/styles1/NEETForm.css";
import axios from "axios";

const NEETForm = () => {
  const [formData, setFormData] = useState({
    rank: "",
    city: "",
    reservation: "", // Default to 'General' category ID
    course: "",
  });

  const [results, setResults] = useState([]); // State to store API results
  const [error, setError] = useState(""); // State to handle errors

  // Predefined cities, reservations, and courses
  const [cities] = useState([]);

  const [reservations] = useState([]);

  const [courses] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const selectedOption =
      name === "city"
        ? cities.find((city) => city._id === value)
        : name === "reservation"
        ? reservations.find((res) => res._id === value)
        : courses.find((course) => course._id === value);
    setFormData({ ...formData, [name]: selectedOption._id });
  };

  const handleSubmit = async (e) => {
    console.log("*********Clicked");
    e.preventDefault();
    setError(""); // Clear previous errors
    var queryParam = {};
    if (formData.rank) {
      queryParam["rank"] = formData.rank;
    }
    if (formData.reservation) {
      queryParam["category"] = formData.reservation;
    }
    if (formData.course) {
      queryParam["course"] = formData.course;
    }
    if (formData.city) {
      queryParam["city"] = formData.city;
      // queryParam["city"] = "679742528144d9a79d4493f4";
    }
    try {
      // Fetch data from the filter API
      const queryParams = new URLSearchParams(queryParam).toString();
      // const queryParams = new URLSearchParams({
      //   // rank: formData.rank,
      //   // category: formData.reservation,
      //   // course: formData.course,
      //   // city: formData.city,
      //   rank: 1,
      //   category: '60b8c4ae5f484b6f6d7c6d4c',
      //   course: '60b8c4ae5f484b6f6d7c6d4d',
      //   city: '679742528144d9a79d4493f4',

      // }).toString();

      const response = await axios.get(
        `http://localhost:5000/api/college/filter?${queryParams}`
      );
      const data = response.data;

      if (response.status === 200 && data.success) {
        setResults(data.data); // Update results with fetched colleges
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
          NEET College Predictor 2025: Predict Top MBBS/BDS Colleges based on
          your Rank and Scores
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
                    <td>{college.cityid?.name || "N/A"}</td>
                    <td>{college.rank}</td>
                    <td>
                      {college.courses
                        .map((course) => course.coursename)
                        .join(", ")}
                    </td>
                    <td>   {college.category
                        .map((cat) => cat.categoryname)
                        .join(", ")}</td>
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
