import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ExplorePrograms.css';

const ExplorePrograms = () => {
  const [selectedCourse, setSelectedCourse] = useState('All');
  const navigate = useNavigate();

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
      predictor: ['CET (MBA)', 'CAT', 'XAT', 'MAT', 'NMAT', 'GMAT', 'CMAT'],
      exams: ['CAT', 'MAT', 'XAT', 'CET (MBA)', 'NMAT', 'GMAT', 'CMAT'],
      courses: ['MBA/PGDM - 1141', 'Executive MBA - 1023', 'Online MBA - 1342'],
      findColleges: ['Best MBA colleges in India', 'Best MBA colleges in Mumbai'],
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
      predictor: ['JEE Main', 'JEE Advanced', 'GATE', 'BITSAT', 'VITEEE', 'COMEDK', 'SRMJEEE'],
      exams: ['JEE Main', 'JEE Advanced', 'GATE', 'BITSAT', 'VITEEE', 'SRMJEEE', 'COMEDK'],
      courses: ['BE/B.Tech - 1009', 'B.Tech IT - 1234', 'B.Tech CSE - 1456', 'B.Tech ECE - 1678'],
      findColleges: ['Best BTech colleges in India', 'Best BTech colleges in Mumbai'],
    },
    MBBS: {
      ranking: [
        { source: "Indiatoday", rank: 1600 },
        { source: "Collegedunia", rank: 1400 },
        { source: "IIRF", rank: 1500 },
        { source: "NIRF", rank: 1300 },
      ],
      comparison: [
        { colleges: ["AIIMS Delhi", "CMC Vellore"] },
        { colleges: ["JIPMER Pondicherry", "KMC Manipal"] },
      ],
      predictor: ["NEET", "AIIMS MBBS", "JIPMER", "AFMC", "AMU MBBS", "CMC Vellore", "BHU MBBS"],
      exams: ["NEET", "AIIMS MBBS", "JIPMER", "AFMC", "AMU MBBS", "CMC Vellore", "BHU MBBS"],
      courses: ["MBBS - 1453", "BDS - 1134", "BAMS - 1225", "BHMS - 1346"],
      findColleges: ["Best MBBS colleges in India", "Best MBBS colleges in Mumbai"],
    },
    ME_MTech: {
      ranking: [
        { source: "Indiatoday", rank: 1800 },
        { source: "Collegedunia", rank: 1450 },
        { source: "IIRF", rank: 1550 },
        { source: "NIRF", rank: 1350 },
      ],
      comparison: [
        { colleges: ["IIT Madras", "IIT Delhi"] },
        { colleges: ["IIT Mumbai", "IIT Kanpur"] },
      ],
      predictor: ["GATE", "TANCET", "BITS HD", "SRMJEEE PG", "VITMEE", "CUCET", "IIITH PGEE"],
      exams: ["GATE", "TANCET", "BITS HD", "SRMJEEE PG", "VITMEE", "CUCET", "IIITH PGEE"],
      courses: ["ME/M.Tech - 1223", "M.Tech IT - 1234", "M.Tech CSE - 1456", "M.Tech ECE - 1678"],
      findColleges: ["Best ME/MTech colleges in India", "Best ME/MTech colleges in Mumbai"],
    },
    BSc: {
      ranking: [
        { source: "Indiatoday", rank: 1700 },
        { source: "Collegedunia", rank: 1400 },
        { source: "IIRF", rank: 1500 },
        { source: "NIRF", rank: 1300 },
      ],
      comparison: [
        { colleges: ["St. Stephen's College", "Hindu College"] },
        { colleges: ["Miranda House", "Hansraj College"] },
      ],
      predictor: ["CUCET", "NPAT", "SET", "DUET", "BHU UET", "IPU CET", "JMI Entrance Exam"],
      exams: ["CUCET", "NPAT", "SET", "DUET", "BHU UET", "IPU CET", "JMI Entrance Exam"],
      courses: ["B.Sc Physics - 1234", "B.Sc Chemistry - 1456", "B.Sc Biology - 1678", "B.Sc Mathematics - 1890"],
      findColleges: ["Best B.Sc colleges in India", "Best B.Sc colleges in Mumbai"],
    },
    BA: {
      ranking: [
        { source: "Indiatoday", rank: 1650 },
        { source: "Collegedunia", rank: 1500 },
        { source: "IIRF", rank: 1450 },
        { source: "NIRF", rank: 1400 },
      ],
      comparison: [
        { colleges: ["St. Xavier's College", "Lady Shri Ram College"] },
        { colleges: ["Hindu College", "Miranda House"] },
      ],
      predictor: ["CUET", "DUET", "IPU CET", "BHU UET", "JMI Entrance Exam"],
      exams: ["CUET", "DUET", "IPU CET", "BHU UET", "JMI Entrance Exam"],
      courses: ["BA English - 1200", "BA History - 1350", "BA Psychology - 1500", "BA Economics - 1400"],
      findColleges: ["Best BA colleges in India", "Best BA colleges in Delhi"],
    },
    
    BCom: {
      ranking: [
        { source: "Indiatoday", rank: 1600 },
        { source: "Collegedunia", rank: 1450 },
        { source: "IIRF", rank: 1550 },
        { source: "NIRF", rank: 1350 },
      ],
      comparison: [
        { colleges: ["SRCC Delhi", "Lady Shri Ram College"] },
        { colleges: ["Hindu College", "Hansraj College"] },
      ],
      predictor: ["DU JAT", "NPAT", "SET", "IPU CET", "BHU UET", "CUCET", "Christ University Entrance Test"],
      exams: ["DU JAT", "NPAT", "SET", "IPU CET", "BHU UET", "CUCET", "Christ University Entrance Test"],
      courses: ["B.Com General - 1134", "B.Com Honors - 1234", "B.Com Accounting - 1456", "B.Com Finance - 1678"],
      findColleges: ["Best B.Com colleges in India", "Best B.Com colleges in Mumbai"],
    },
    BCA: {
      ranking: [
        { source: 'Indiatoday', rank: 1600 },
        { source: 'Collegedunia', rank: 1500 },
        { source: 'IIRF', rank: 1450 },
        { source: 'NIRF', rank: 1400 },
      ],
      comparison: [
        { colleges: ['Christ University', 'Loyola College'] },
        { colleges: ['St. Xavier’s Kolkata', 'Amity University'] },
      ],
      predictor: ['IPU CET', 'SET', 'DUET', 'BHU UET', 'JMI Entrance Exam'],
      exams: ['IPU CET', 'SET', 'DUET', 'BHU UET', 'JMI Entrance Exam'],
      courses: ['BCA General - 1200', 'BCA Honors - 1300'],
      findColleges: ['Best BCA colleges in India', 'Best BCA colleges in Bangalore'],
    },

          BBA: {
            ranking: [
              { source: 'Indiatoday', rank: 1500 },
              { source: 'Collegedunia', rank: 1400 },
              { source: 'IIRF', rank: 1350 },
              { source: 'NIRF', rank: 1250 },
            ],
            comparison: [
              { colleges: ['Shaheed Sukhdev College of Business Studies', 'Christ University'] },
              { colleges: ['NMIMS Mumbai', 'Amity University'] },
            ],
            predictor: ['IPMAT', 'NPAT', 'SET', 'DU JAT'],
            exams: ['IPMAT', 'NPAT', 'SET', 'DU JAT'],
            courses: ['BBA - 1500', 'BMS - 1400'],
            findColleges: ['Best BBA colleges in India', 'Best BMS colleges in Mumbai'],
          },
         " BSc(Nursing)": {
            ranking: [
              { source: 'Indiatoday', rank: 1700 },
              { source: 'Collegedunia', rank: 1650 },
              { source: 'IIRF', rank: 1600 },
              { source: 'NIRF', rank: 1550 },
            ],
            comparison: [
              { colleges: ['AIIMS Delhi', 'CMC Vellore'] },
              { colleges: ['JIPMER Pondicherry', 'KMC Manipal'] },
            ],
            predictor: ['NEET', 'AIIMS Nursing', 'JIPMER Nursing'],
            exams: ['NEET', 'AIIMS Nursing', 'JIPMER Nursing'],
            courses: ['B.Sc (Nursing) - 1300', 'M.Sc (Nursing) - 1400'],
            findColleges: ['Best B.Sc Nursing colleges in India', 'Best B.Sc Nursing colleges in Mumbai'],
          },
  };
  useEffect(() => {
    // Display all courses information by default on initial load
    setSelectedCourse('All');
  }, []);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
  };

  const handlePredictorClick = (predictor) => {
    if (predictor === 'NEET') {
        navigate('/neet'); // Navigate to NEETForm page
    } else if (predictor === 'CAT') {
        navigate('/cat'); // Navigate to CATForm page
    } else if (predictor === 'JEE Main') {
        navigate('/jeem'); // Navigate to JEEMForm page 
    }
    else if(predictor === 'JEE Advanced'){
        navigate('/jeea')
    }
};


  const currentCourseData = courseData[selectedCourse];

  return (
    <div className="explore-programs container">
      <h2 className="expro-text-center">Explore Programs</h2>
      <div className="program-buttons">
        {Object.keys(courseData).map((course) => (
          <button
            key={course}
            onClick={() => handleCourseChange(course)}
            className={selectedCourse === course ? 'active' : ''}
          >
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
                <div key={index} onClick={() => handlePredictorClick(exam)}>
                  {exam}
                </div>
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