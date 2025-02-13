import React, { useState } from "react";

import "../assets/styles/CollegePredictor.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const COURSES = ["BE/B.Tech", "MBA/PGDM", "MBBS", "ME/M.Tech", "B.Sc"];

const STATES = [
  "Andhra Pradesh",
  "Bihar",
  "Chhattisgarh",
  "Delhi NCR",
  "Gujarat",
];

const EXAMS = [
  {
    id: 1,
    name: "NEET 2025 College Predictor",
    icon: "./assets/CollagePredictor/neet.webp",
    collegesParticipating: 1175,
    examDate: "23 June 2025",
    examLevel: "National",
  },
  {
    id: 2,
    name: "JEE Advanced 2025 College Predictor",
    icon: "./assets/CollagePredictor/JEEAdv.webp",
    collegesParticipating: 69,
    examDate: "18 May 2025",
    examLevel: "National",
  },
  {
    id: 3,
    name: "JEE Main 2025 College Predictor",
    icon: "./assets/CollagePredictor/JEEMain.webp",
    collegesParticipating: 1698,
    examDate: "22 Jan 2025",
    examLevel: "National",
  },
  {
    id: 4,
    name: "CAT 2025 College Predictor",
    icon: "./assets/CollagePredictor/Cat.webp",
    collegesParticipating: 1446,
    examDate: "24 Nov 2024",
    examLevel: "National",
  },
  {
    id: 5,
    name: "NMAT 2025 College Predictor",
    icon: "./assets/CollagePredictor/Nmat.webp",
    collegesParticipating: 110,
    examDate: "5 Nov 2025",
    examLevel: "National",
  },
  {
    id: 6,
    name: "MAT 2025 College Predictor",
    icon: "./assets/CollagePredictor/Mat.webp",
    collegesParticipating: 1269,
    examDate: "23 Mar 2025",
    examLevel: "National",
  },
  {
    id: 7,
    name: "GATE 2025 College Predictor",
    icon: "./assets/CollagePredictor/Gate.webp",
    collegesParticipating: 110,
    examDate: "15 Feb 2025",
    examLevel: "National",
  },
  {
    id: 8,
    name: "XAT 2025 College Predictor",
    icon: "./assets/CollagePredictor/Xat.webp",
    collegesParticipating: 813,
    examDate: "5 Jan 2025",
    examLevel: "National",
  },
  {
    id: 9,
    name: "BITSAT 2025 College Predictor",
    icon: "./assets/CollagePredictor/Bitsat.webp",
    collegesParticipating: 3,
    examDate: "26 May 2025",
    examLevel: "National",
  },
  {
    id: 10,
    name: "IIT JAM 2025 College Predictor",
    icon: "./assets/CollagePredictor/IitJam.webp",
    collegesParticipating: 52,
    examDate: "2 Feb 2025",
    examLevel: "National",
  },
  {
    id: 11,
    name: "WBJEE 2025 College Predictor",
    icon: "./assets/CollagePredictor/Wbjee.webp",
    collegesParticipating: 121,
    examDate: "27 Apr 2025",
    examLevel: "West Bengal",
  },
  {
    id: 12,
    name: "KEAM 2025 College Predictor",
    icon: "./assets/CollagePredictor/Keam.webp",
    collegesParticipating: 229,
    examDate: "24 Apr 2025",
    examLevel: "Kerala",
  },
];

const CollegePredictor = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleStateToggle = (state) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const handleFindColleges = () => {
    console.log("Finding colleges with:", {
      course: selectedCourse,
      exam: selectedExam,
      states: selectedStates,
    });
  };
  const ExamCard = ({ exam }) => {
    return (
      <div className="cs-exam-card">
        <div className="cs-exam-header">
          <div className="cs-icon-wrapper">
            <img src={exam.icon} alt={exam.name} className="cs-exam-icon" />
          </div>
          <h3>{exam.name}</h3>
        </div>
        <div className="cs-exam-details">
          <div className="cs-detail-item">
            <span>Colleges Participating</span>
            <span>{exam.collegesParticipating}</span>
          </div>
          <div className="cs-detail-item">
            <span>Exam Date</span>
            <span>{exam.examDate}</span>
          </div>
          <div className="cs-detail-item">
            <span>Exam Level</span>
            <span>{exam.examLevel}</span>
          </div>
        </div>
        <div className="cs-exam-actions">
          <button className="cs-action-btn">Exam Info</button>
          <button className="cs-action-btn">Cutoff</button>
          <button className="cs-action-btn">Practice Tests</button>
          <button className="cs-action-btn cs-predict-btn">Predict Now</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="cs-college-predictor">
        <div className="cs-app-container">
          <div className="cs-content-wrapper">
            <header className="cs-header">
              <h1>
                College Predictor 2025 for JEE Main, NEET, DU and other top
                Universities and Exams
              </h1>
            </header>

            <section className="cs-search-section">
              <div className="cs-search-grid">
                <select
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  className="cs-select-input"
                >
                  <option value="">Select Course</option>
                  {COURSES.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedExam}
                  onChange={handleExamChange}
                  className="cs-select-input"
                >
                  <option value="">Select Exam/University</option>
                  {EXAMS.map((exam) => (
                    <option key={exam.id} value={exam.id}>
                      {exam.name}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleFindColleges}
                  className="cs-find-colleges-btn"
                >
                  Find Colleges
                </button>
              </div>
            </section>

            <section className="cs-filters-section">
              <div className="cs-filter-group">
                <span className="cs-filter-label">SELECT COURSE TAG:</span>
                <div className="cs-tags-wrapper">
                  {COURSES.map((course) => (
                    <button
                      key={course}
                      onClick={() => setSelectedCourse(course)}
                      className={`cs-tag ${
                        selectedCourse === course ? "cs-active" : ""
                      }`}
                    >
                      {course}
                    </button>
                  ))}
                  <span className="cs-more-tag">+99 more</span>
                </div>
              </div>

              <div className="cs-filter-group">
                <span className="cs-filter-label">SELECT STATE:</span>
                <div className="cs-tags-wrapper">
                  {STATES.map((state) => (
                    <button
                      key={state}
                      onClick={() => handleStateToggle(state)}
                      className={`cs-tag ${
                        selectedStates.includes(state) ? "cs-active" : ""
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                  <span className="cs-more-tag">+11 more</span>
                </div>
              </div>
            </section>

            <h2 className="cs-section-title">Top Exams</h2>
            <div className="cs-exams-grid">
              {EXAMS.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
            <div className="cs-line"> </div>

            <section className="cs-how-to-use">
              <p className="cs-how-to-title">
                How To Use Collegedunia Admission Predictor?
              </p>
              <div className="cs-description">
                <p>
                  Done with your Exam? Well, we know you are not quite done yet!
                  The anxiety of results must be keeping you up at nights. Not
                  anymore folks- Get your expected rank and colleges with our
                  Rank Predictor.
                </p>
              </div>
              <h3 className="cs-steps-title">
                Follow these steps to check your rank with our College Predictor
              </h3>
              <div className="cs-steps-container">
                <div className="cs-step-item">
                  <div className="cs-step-icon">
                    <svg
                      width="71"
                      height="54"
                      viewBox="0 0 71 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.663 1H4.43A3.429 3.429 0 0 0 1 4.429v17.418a3.429 3.429 0 0 0 3.429 3.428h62.234a3.429 3.429 0 0 0 3.429-3.428V4.429A3.429 3.429 0 0 0 66.663 1Z"
                        fill="#fff"
                      />
                      <path
                        d="M66.663 1.429H4.428a3 3 0 0 0-3 3v17.418a3 3 0 0 0 3 3h62.235a3 3 0 0 0 3-3V4.429a3 3 0 0 0-3-3Z"
                        stroke="#999"
                      />
                      <path
                        d="M13.138 19.674a6.536 6.536 0 1 0 0-13.071 6.536 6.536 0 0 0 0 13.071Z"
                        fill="#999"
                      />
                      <path
                        d="M25.276 10.337H64.49M25.276 15.94H51.42"
                        stroke="#999"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="cs-step-content">
                    <h4>Step 1</h4>
                    <p>Choose Your Exam</p>
                  </div>
                </div>

                <div className="cs-step-item">
                  <div className="cs-step-icon">
                    <svg
                      width="70"
                      height="62"
                      viewBox="0 0 70 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.143 1H4.429A3.429 3.429 0 0 0 1 4.429V57.57A3.429 3.429 0 0 0 4.429 61h61.714a3.429 3.429 0 0 0 3.428-3.429V4.43A3.429 3.429 0 0 0 66.143 1Z"
                        fill="#fff"
                      />
                      <path
                        d="M66.143 1.429H4.429a3 3 0 0 0-3 3v53.143a3 3 0 0 0 3 3h61.714a3 3 0 0 0 3-3V4.429a3 3 0 0 0-3-3Z"
                        stroke="#999"
                      />
                      <path
                        d="M23.562 10.337h38.571M23.562 16.337h25.714"
                        stroke="#999"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.428 7h-8.57c-.948 0-1.715.768-1.715 1.714v8.572c0 .947.767 1.714 1.714 1.714h8.572c.946 0 1.714-.767 1.714-1.714V8.714c0-.946-.768-1.714-1.715-1.714Z"
                        fill="#FF7900"
                      />
                    </svg>
                  </div>
                  <div className="cs-step-content">
                    <h4>Step 2</h4>
                    <p>Provide Your Details</p>
                  </div>
                </div>

                <div className="cs-step-item">
                  <div className="cs-step-icon">
                    <svg
                      width="66"
                      height="63"
                      viewBox="0 0 66 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.27 15.4a.884.884 0 0 0-.697.856v44.572h-6.857V29.114a.89.89 0 0 0-.857-.858h-12a.842.842 0 0 0-.16 0 .885.885 0 0 0-.697.858v31.714h-6.857V37.685a.89.89 0 0 0-.857-.857h-12a.842.842 0 0 0-.16 0 .885.885 0 0 0-.697.857v23.143H.859a.802.802 0 0 0-.857.857.924.924 0 0 0 .857.857h64a.857.857 0 1 0 0-1.714H58.31V18.155a.885.885 0 0 0-.697-.856Z"
                        fill="#4C9AFF"
                      />
                    </svg>
                  </div>
                  <div className="cs-step-content">
                    <h4>Step 3</h4>
                    <p>Predict your rank</p>
                  </div>
                </div>
              </div>
              <div className="cs-final-description">
                <p>
                  Choose your Exam from the list and enter necessary details
                  such as your name, registration number, preferred location.
                  Enter your expected marks in the next step and let us do the
                  rest for you.
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="cs-line"> </div>
      </div>

      <Footer />
    </>
  );
};

export default CollegePredictor;
