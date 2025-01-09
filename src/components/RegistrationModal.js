import React, { useState } from "react";
import '../assets/styles/RegistrationModal.css';

const RegistrationModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    onlineCourse: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full Name is required";
      valid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
      valid = false;
    }
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number is invalid";
      valid = false;
    }
    if (!formData.city.trim()) {
      formErrors.city = "City is required";
      valid = false;
    }
    if (!formData.course.trim()) {
      formErrors.course = "Course is required";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Sending the form data to the backend
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        alert("Registration successful");
        onClose(); // Close modal after success
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error during registration");
    }
  };

  if (!show) return null;

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>

          <div className="leadform-header">
            <div className="lead-hdr-img">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/leadform_logo.webp"}
                alt="Lead Form Logo"
              />
            </div>
            <div className="lead-hdr-info">
              <h3>Register Now To Apply</h3>
              <p>Create your account below</p>
            </div>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <span className="react-icons"></span>
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <span className="react-icons"></span>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
              <span className="react-icons"></span>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
              <span className="react-icons"></span>
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Course"
                required
              />
              <span className="react-icons"></span>
              {errors.course && <p className="error">{errors.course}</p>}
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="onlineCourse"
                checked={formData.onlineCourse}
                onChange={handleChange}
              />
              <label>Online Course</label>
            </div>

            <button type="submit" className="submit-button">
              Register
            </button>
          </form>

          <div className="login-link">
            Already have an account? <a href="/login">Login here</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
