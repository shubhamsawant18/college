import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import TopExams from "./components/TopExams";
import LatestNews from "./components/LatestNews";
import NEET from "./pages/NEETForm";
import CATForm from "./pages/CATForm";
import JEEForm from "./pages/JEEForm"; // Updated import path
import JEEADVForm from "./pages/JEEADVForm";

const IndexPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const handlePredictorClick = (predictor) => {
    if (predictor === 'NEET') {
      navigate('/neet'); // Navigate to NEETForm page
    } else if (predictor === 'CAT') {
      navigate('/cat'); // Navigate to CATForm page
    } else if (predictor === 'JEE Main') {
      navigate('/jeem'); // Navigate to JEEForm page
    }else if (predictor === 'JEE Advanced'){
      navigate('jeea');
    }

  };

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
          <button onClick={() => handlePredictorClick('NEET')}>NEET Predictor</button>
          <button onClick={() => handlePredictorClick('CAT')}>CAT Predictor</button>
          <button onClick={() => handlePredictorClick('JEE MAIN')}>JEE Main Predictor</button>
          <button onClick={() => handlePredictorClick('JEE Advanced')}>JEE Main Predictor</button>

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
      <Divider />
      <Topstudy />
      <Divider />
      <ExploreCourses />
      <Divider />
      <CBSE />
      <TopExams />
      <LatestNews />
      <Divider />
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
        <Route path="/neet" element={<NEET />} /> {/* NEET page route */}
        <Route path="/cat" element={<CATForm />} /> {/* CAT page route */}
        <Route path="/jeem" element={<JEEForm />} /> {/* JEEForm page route */}
        <Route path="/jeea" element={<JEEADVForm />} /> {/* JEEForm page route */}

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
