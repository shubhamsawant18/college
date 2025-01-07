import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";
import AdminPage from "./components/AdminPage";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const IndexPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="index-page">
      <Navbar />
      <div className="image-container">
        <img
          src="/assets/images/clg-22.jpg"
          alt="Description"
          className="full-width-image"
        />
        <div className="search-container">
          <h1>Find Over 11000+ Courses in India</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for colleges, exams, courses and more..."
            />
            <button className="search-button">Search</button>
          </div>
          <button className="counselling-button" onClick={openModal}>
            Need Counselling
          </button>
        </div>
      </div>
      <Footer />
      {/* Remove App if unnecessary */}
      <RegistrationModal show={isModalVisible} onClose={closeModal} />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
