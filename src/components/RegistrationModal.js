import React from "react";
import "../assets/styles/RegistrationModal.css";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCity, FaCheckCircle, FaRegAddressCard } from "react-icons/fa";

const RegistrationModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="leadform-header">
          <div className="lead-hdr-img">
            <FaRegAddressCard size={33} color="#ff6600" />
          </div>
          <div className="lead-hdr-info">
            <h3>Register Now To Apply</h3>
            <p>Get details and latest updates</p>
          </div>
        </div>
        <form className="registration-form">
          <div className="input-group">
            <FaUser className="react-icons" />
            <input type="text" placeholder="Full Name *" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="react-icons" />
            <input type="email" placeholder="Email Address *" required />
          </div>
          <div className="input-group">
            <FaPhoneAlt className="react-icons" />
            <input type="tel" placeholder="Mobile Number *" required />
          </div>
          <div className="input-group">
            <FaCity className="react-icons" />
            <input type="text" placeholder="City You Live In *" required />
          </div>
          <div className="input-group">
            <select required>
              <option value="">Course Interested In *</option>
              <option value="BA">BA - Bachelors (Arts)</option>
              {/* Add other courses here */}
            </select>
          </div>
          <div class="checkbox-container">
  <input type="checkbox" id="onlineCourse" />
  <label for="onlineCourse">Looking For Online/Distance Course?</label>
</div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
        <p className="login-link">
          Already Registered? <a href="/login">Click Here To Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;
