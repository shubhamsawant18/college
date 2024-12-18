// RegistrationModal.js
import React from "react";
import "../assets/styles/RegistrationModal.css";


const RegistrationModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="leadform-header">
          <div className="lead-hdr-img rounded-circle">
            <img
              src="https://image-static.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&amp;w=50&amp;mode=stretch"
              alt="Collegedunia Logo"
            />
          </div>
          <div className="lead-hdr-info">
            <h3>Register Now To Apply</h3>
            <p>Get details and latest updates</p>
          </div>
        </div>

        <form className="registration-form">
          <input type="text" placeholder="Full Name *" required />
          <input type="email" placeholder="Email Address *" required />
          <div className="mobile-input-container">
            <span className="country-code">+91</span>
            <input type="tel" placeholder="Mobile Number *" required />
          </div>
          <input type="text" placeholder="City You Live In *" required />
          <select required>
            <option value="">Course Interested In *</option>
            <option value="BA">BA - Bachelors (Arts)</option>
            {/* Add other courses here */}
          </select>
          <div className="checkbox-container">
            <input type="checkbox" id="onlineCourse" />
            <label htmlFor="onlineCourse">
              Looking For Online/Distance Course?
            </label>
          </div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
        <p className="login-link">
          Already Registered? <a href="/login">Click Here To Login</a>.
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;