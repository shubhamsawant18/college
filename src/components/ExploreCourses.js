import React, { useState } from "react";
import "../assets/styles/ExploreCourses.css";

const ExploreCourses = () => {
  const [activeTab, setActiveTab] = useState("Bachelors");

  const courseData = {
    Bachelors: [
      { name: "B.Com General", duration: "3 Years", fees: "69.59 K", colleges: "6745" },
      { name: "B.Ed General", duration: "2 Years", fees: "85.51 K", colleges: "5560" },
      { name: "BCA General", duration: "3 Years", fees: "1.47 L", colleges: "5178" },
      { name: "BA General", duration: "3 Years", fees: "48 K", colleges: "4078" },
    ],
    Masters: [
      { name: "M.Com General", duration: "2 Years", fees: "85 K", colleges: "4745" },
      { name: "M.Ed General", duration: "2 Years", fees: "95 K", colleges: "3560" },
      { name: "MCA General", duration: "2 Years", fees: "1.75 L", colleges: "3178" },
      { name: "MA General", duration: "2 Years", fees: "70 K", colleges: "3078" },
    ],
    Doctorate: [
      { name: "PhD in Commerce", duration: "3 Years", fees: "1.5 L", colleges: "2745" },
      { name: "PhD in Education", duration: "3 Years", fees: "2 L", colleges: "2560" },
      { name: "PhD in CS", duration: "3 Years", fees: "2.5 L", colleges: "2178" },
      { name: "PhD in Arts", duration: "3 Years", fees: "1.2 L", colleges: "2078" },
    ],
    Diploma: [
      { name: "Diploma in Management", duration: "1 Year", fees: "50 K", colleges: "1745" },
      { name: "Diploma in Educat", duration: "1 Year", fees: "55 K", colleges: "1560" },
      { name: "Diploma in C.A", duration: "1 Year", fees: "60 K", colleges: "1178" },
      { name: "Diploma in Arts", duration: "1 Year", fees: "40 K", colleges: "1078" },
    ],
    Certification: [
      { name: "Business Analytics", duration: "6 Months", fees: "25 K", colleges: "745" },
      { name: "Education", duration: "6 Months", fees: "30 K", colleges: "560" },
      { name: "Web Development", duration: "6 Months", fees: "35 K", colleges: "478" },
      { name: "Graphics Designing", duration: "6 Months", fees: "20 K", colleges: "378" },
    ],
  };

  const courses = courseData[activeTab];

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
              <span className="course-overview1">Course Overview </span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
      <div className="image-container1">
        <img src="assets/images/explorecourseimage.webp" alt="Course Image" />
      </div>
    </div>
  );
};

export default ExploreCourses;
