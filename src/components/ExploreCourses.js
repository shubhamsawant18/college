import React, { useState } from "react";
import "../assets/styles/ExploreCourses.css";

const ExploreCourses = () => {
  const [activeTab, setActiveTab] = useState("Bachelors");

  const courses = [
    { name: "B.Com General", duration: "3 Years", fees: "69.59 K", colleges: "6745" },
    { name: "B.Ed General", duration: "2 Years", fees: "85.51 K", colleges: "5560" },
    { name: "BCA General", duration: "3 Years", fees: "1.47 L", colleges: "5178" },
    { name: "BA General", duration: "3 Years", fees: "48 K", colleges: "4078" },
  ];

  return (
    <div className="explore-courses">
      <h2>Explore Courses</h2>
      <div className="tabs">
        {["Bachelors", "Masters", "Doctorate", "Diploma", "Certification"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="coursee-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <p className="full-time">Full Time</p>
            <h3 className="course-title">{course.name}</h3>
            <div className="course-details">
              <div className="course-details-left">
                <p>Duration</p>
                <p>Total Avg. Fees</p>
                <p>Colleges</p>
              </div>
              <div className="course-details-right">
                <p><strong>{course.duration}</strong></p>
                <p><strong>{course.fees}</strong></p>
                <p><strong>{course.colleges}</strong></p>
              </div>
            </div>
            <div className="course-overview0">
            <p className="course-overview1">Course Overview →</p>
          </div></div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
