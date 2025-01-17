import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";
import AdminPage from "./components/AdminPage";
import StudyGoals from "./components/StudyGoals";
import ExplorePrograms from "./components/ExplorePrograms";
import TopColleges from "./components/TopColleges";
import BannerTable from "./components/BannerTable";
import Divider from "./components/Divider";
import Topstudy from "./components/Topstudy";
import Login from "./components/Login";
import CardImages from "./components/CardImages";
import reportWebVitals from "./reportWebVitals";
import ExploreCourses from "./components/ExploreCourses";
import CBSE from "./components/CBSE";

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

      <StudyGoals />
      <Divider />
      <ExplorePrograms />
      <Divider />
      <TopColleges />
      <Divider />
      <CardImages />
      <Divider />
      <BannerTable />
      <Topstudy />
      <Divider />
      <ExploreCourses />
      <CBSE />
      
      <Footer />
      <RegistrationModal show={isModalVisible} onClose={closeModal} />
    </div>
  );
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/admin" element={authenticated ? <AdminPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
