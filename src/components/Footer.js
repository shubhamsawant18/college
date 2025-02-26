

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faWifi } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Additional Section */}
      <div className="row">
        <div className="col-md-12">
          <div className="subscription-container">
            <h2 className="Subscribe">Subscribe to our Newsletter</h2>
            <p className="get">Get College Notifications, Exam Notifications, and News Updates</p>
            <form className="subscription-form">
              <div className="form-group">
               
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                <small className="form-text text-muted">Please enter a valid email.</small>
              </div>
              <div className="form-group">

                <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" />
                <small className="form-text text-muted">Please enter a valid mobile number.</small>
              </div>
              <div className="form-group">

                <select className="form-control" id="course">
                  <option value="">Select a course</option>
                  <option value="mba">MBA</option>
                  <option value="btech">B.Tech</option>
                </select>
                <small className="form-text text-muted">Please select a valid value.</small>
              </div>
              <div className="form-group submit-btn">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Content Sections - Horizontal Layout */}
      <div className="row footer-sections">
        <div className="col-md-2">
          <h5>Top Colleges</h5>
          <ul>
            <li>M.B.A</li>
            <li>B.Tech/B.E</li>
            <li>MCA</li>
            <li>BCA</li>
            <li>M.Tech</li>
            <li>MA</li>
            <li>BA</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Top Universities</h5>
          <ul>
            <li>Engineering</li>
            <li>Management</li>
            <li>Medical</li>
            <li>Law</li>
            <li>Commerce</li>
            <li>Science</li>
            <li>Arts</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Top Exams</h5>
          <ul>
            <li>CAT</li>
            <li>GATE</li>
            <li>JEE-Main</li>
            <li>NEET</li>
            <li>XAT</li>
            <li>CLAT</li>
            <li>MAT</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Study Abroad</h5>
          <ul>
            <li>Canada</li>
            <li>USA</li>
            <li>UK</li>
            <li>UAE</li>
            <li>Australia</li>
            <li>Germany</li>
            <li>Sweden</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Countries</h5>
          <ul>
            <li>Ireland</li>
            <li>New Zealand</li>
            <li>Hong Kong</li>
            <li>Singapore</li>
            <li>Malaysia</li>
            <li>Netherlands</li>
            <li>Italy</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Board Exams</h5>
          <ul>
            <li>CBSE Class 12</li>
            <li>CBSE Class 12th Results</li>
            <li>CBSE Class 12th Syllabus</li>
            <li>CBSE Class 12th Exam Dates</li>
            <li>CBSE Class 10</li>
            <li>CBSE Class 10th Result</li>
            <li>CBSE Class 10th Syllabus</li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="other-links">
        <p className="other-links1">Other Links</p>
        <div className="links3">
          <a href="/contact-us">Contact Us</a>
          <a href="/advertising">Advertising</a>
          <a href="/career">Career</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="social-icons" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        
      </div>

      {/* Divider Line */}
      <div className="footer-divider"></div>

      {/* Footer */}
      <footer className="footer-d">
        <div className="footer-content" style={{ display: "flex", alignItems: "center" }}>
          <div className="logo2">
            <img src="/assets/logo-chanel.png" alt="Logo" />
          </div>
          <p className="copyright-text">
            © {new Date().getFullYear()} Shubham Sawant.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;