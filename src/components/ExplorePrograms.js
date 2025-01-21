import React, { useState, useEffect } from 'react';
import '../assets/styles/ExplorePrograms.css';

const ExplorePrograms = () => {
  const [selectedCourse, setSelectedCourse] = useState('All');

  const courseData = {
    All: {
      ranking: [
        { source: 'Indiatoday', rank: 1743 },
        { source: 'Collegedunia', rank: 1328 },
        { source: 'IIRF', rank: 1451 },
        { source: 'NIRF', rank: 1299 },
      ],
      comparison: [
        { colleges: ['IIT Madras', 'IIT Delhi'] },
        { colleges: ['IIT Mumbai', 'IIT Kolkata'] },
      ],
      predictor: ['NEET', 'JEE Advanced', 'JEE Main', 'CAT', 'GATE', 'NMAT', 'MAT', 'XAT'],
      exams: ['B.Com', 'B.Sc', 'B.Sc (Nursing)', 'BA', 'BBA/BMS', 'BCA', 'BE/B.Tech'],
      courses: ['BE/B.Tech - 1009', 'MBA/PGDM - 1141', 'ME/M.Tech - 1223', 'MBBS - 1453'],
      findColleges: ['Best MBA colleges in India', 'Best BTech colleges in India'],
    },
    MBA: {
      ranking: [
        { source: 'Indiatoday', rank: 1500 },
        { source: 'Collegedunia', rank: 1350 },
        { source: 'IIRF', rank: 1400 },
        { source: 'NIRF', rank: 1250 },
      ],
      comparison: [
        { colleges: ['IIM Bangalore', 'IIM Mumbai'] },
        { colleges: ['IIM Ahmedabad', 'IIM Kolkata'] },
      ],
      predictor: ['CET (MBA)', 'CAT', 'XAT'],
      exams: ['CAT', 'MAT', 'XAT'],
      courses: ['MBA/PGDM - 1141'],
      findColleges: ['Best MBA colleges in India'],
    },
    BE_BTech: {
      ranking: [
        { source: 'Indiatoday', rank: 1743 },
        { source: 'Collegedunia', rank: 1328 },
        { source: 'IIRF', rank: 1451 },
        { source: 'NIRF', rank: 1299 },
      ],
      comparison: [
        { colleges: ['IIT Madras', 'IIT Delhi'] },
        { colleges: ['IIT Mumbai', 'IIT Kolkata'] },
      ],
      predictor: ['JEE Main', 'JEE Advanced', 'GATE'],
      exams: ['JEE Main', 'JEE Advanced', 'GATE'],
      courses: ['BE/B.Tech - 1009'],
      findColleges: ['Best BTech colleges in India'],
    },
    // Add other courses similarly...
  };

  useEffect(() => {
    // Display all courses information by default on initial load
    setSelectedCourse('All');
  }, []);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
  };

  const currentCourseData = courseData[selectedCourse];

  return (
    <div className="explore-programs container">
      <h2 className="expro-text-center">Explore Programs</h2>
      <div className="program-buttons">
        {Object.keys(courseData).map((course) => (
          <button key={course} onClick={() => handleCourseChange(course)}>
            {course.replace('_', '/')}
          </button>
        ))}
      </div>

      <div className="program-cards-container">
        {/* Ranking Card */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
              <h3 className="h333">Ranking</h3>
              <p className="captions">College ranked based on real data</p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="ranking-sources">
              {currentCourseData.ranking.map((rank, index) => (
                <div key={index}>
                  <span>{`${rank.source} - ${rank.rank}`}</span>
                </div>
              ))}
            </div>
            <a className="endings" href="#">Top Ranked Colleges in India</a>
          </div>
        </div>

        {/* Find Colleges Card */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
              <h3 className="h333">Find Colleges</h3>
              <p className="captions">Discover 19000+ colleges via preferences</p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="best-colleges">
              {currentCourseData.findColleges.map((college, index) => (
                <div key={index}>{college}</div>
              ))}
            </div>
            <a className="endings" href="#">Discover Top Colleges in India</a>
          </div>
        </div>

        {/* Compare Colleges Card */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
              <h3 className="h333">Compare Colleges</h3>
              <p className="captions">Compare on the basis of rank, fees, etc.</p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="comparison">
              {currentCourseData.comparison.map((comp, index) => (
                <div key={index}>
                  {comp.colleges.map((college, idx) => (
                    <section key={idx}>{college}</section>
                  ))}
                </div>
              ))}
            </div>
            <a className="endings" href="#">Compare Colleges</a>
          </div>
        </div>

        {/* Exams Card */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
              <h3 className="h333">Exams</h3>
              <p className="captions">Know more about your exams</p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="exam-list">
              {currentCourseData.exams.map((exam, index) => (
                <div key={index}>{exam}</div>
              ))}
            </div>
            <a className="endings" href="#">Check All Entrance Exams in India</a>
          </div>
        </div>

        {/* College Predictor Card */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
              <h3 className="h333">College Predictor</h3>
              <p className="captions">Know your college admission chances</p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="predictor-exams">
              {currentCourseData.predictor.map((exam, index) => (
                <div key={index}>{exam}</div>
              ))}
            </div>
            <a className="endings" href="#">Find Where you may get Admission</a>
          </div>
        </div>

        {/* Course Finder Card */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
              <h3 className="h333">Course Finder</h3>
              <p className="captions">Top courses in Indian Colleges 2024</p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="course-list">
              {currentCourseData.courses.map((course, index) => (
                <div key={index}>{course}</div>
              ))}
            </div>
            <a className="endings" href="#">Explore Courses</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePrograms;
