import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; // Ensure correct path
import axios from "axios";
import { Album01Icon, VideoReplayIcon } from "hugeicons-react";
import { Mail, MessageCircle, FileText } from "lucide-react";

const catPercentileVsScore = [
  { percentile: "100", scoreRange: "98-102" },
  { percentile: "99+", scoreRange: "80-85" },
  { percentile: "98-99", scoreRange: "75-78" },
  { percentile: "95+", scoreRange: "55-58" },
  { percentile: "90+", scoreRange: "46-48" },
  { percentile: "85+", scoreRange: "40-42" },
  { percentile: "80+", scoreRange: "37-39" },
];

const iimCutoffs = [
  {
    iim: "IIM Ahmedabad",
    link: "/iim/ahmedabad", // Example link - replace with your actual links
    general: 80,
    obc: 75,
    ews: 80,
    sc: 70,
    st: 60,
  },
  {
    iim: "IIM Bangalore",
    link: "/iim/bangalore", // Example link
    general: 85,
    obc: 75,
    ews: 75,
    sc: 70,
    st: 65,
  },
  {
    iim: "IIM Kozhikode",
    link: "/iim/kozhikode", // Example link
    general: 85,
    obc: 75,
    ews: 75,
    sc: 65,
    st: 55,
  },
  {
    iim: "IIM Calcutta",
    link: "/iim/calcutta", // Example link
    general: 85,
    obc: 75,
    ews: 75,
    sc: 70,
    st: 65,
  },
  {
    iim: "IIM Lucknow",
    link: "/iim/lucknow", // Example link
    general: 90,
    obc: 82,
    ews: 82,
    sc: 65,
    st: 60,
  },
  {
    iim: "IIM Mumbai",
    link: "/iim/mumbai", // Example link
    general: 85,
    obc: 75,
    ews: 75,
    sc: 70,
    st: 65,
  },
  {
    iim: "IIM Indore",
    link: "/iim/indore", // Example link
    general: 90,
    obc: 80,
    ews: 90,
    sc: 60,
    st: 50,
  },
  {
    iim: "IIM Raipur",
    link: "/iim/raipur", // Example link
    general: 92,
    obc: 74,
    ews: 70,
    sc: 54,
    st: 40,
  },
  {
    iim: "IIM Rohtak",
    link: "/iim/rohtak", // Example link
    general: 95,
    obc: 78,
    ews: 90,
    sc: 55,
    st: 30,
  },
  {
    iim: "IIM Udaipur",
    link: "/iim/udaipur", // Example link
    general: 92,
    obc: 74,
    ews: 70,
    sc: 54,
    st: 40,
  },
];

const cardData = [
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NIT Trichy
    title: "IIMA - Indian Institute of Management", // Updated title
    subtitle: "Ahmedabad, Gujarat...", // Updated subtitle
    badge: "UGC ACCREDITED", // Updated badge
    rankings: ["#1 out of 125 in NIRF", "#1 out of 25 in Outlook"], // Updated rankings
    courses: [
      {
        title: "PG Programme in Food and Agri-Business Management", // Updated course title
        desc: "Round 1, General, Opening percentile - 99", // Updated description
        fee: "₹26,50,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
      {
        title: "PGPM", // Updated course title
        desc: "Round 1, General, Opening percentile-99", // Updated description
        fee: "₹26,50,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NIT Surathkal
    title: "IIM Bangalore - Indian Institute of Management", // Updated title
    subtitle: "Bangalore, Karnataka", // Updated subtitle
    badge: "AICTE ACCREDITED", // Updated badge
    rankings: ["#2 out of 125 in NIRF", "#2 out of 25 in Outlook"], // Updated rankings
    courses: [
      {
        title: "PG Programme in Business Analytics", // Updated course title
        desc: "Round 1, General, Opening percentile-99", // Updated description
        fee: "₹26,00,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
      {
        title: "PGPM", // Updated course title
        desc: "Round 1. General, Opening percentile-99", // Updated description
        fee: "₹26,00,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NIT Warangal
    title: "IIMC-Indian Institute of Management", // Updated title
    subtitle: "Kolkata, West Bengal", // Updated subtitle
    badge: "UGC ACCREDITED", // Updated badge
    rankings: ["#5 out of 125 in NIRF", "#1 out of 275 in India Today"], // Updated rankings
    courses: [
      {
        title: "MBA", // Updated course title
        desc: "Round 1, General, Opening percentile-99", // Updated description
        fee: "₹27,00,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
      {
        title: "PGPM", // Updated course title
        desc: "Round 1, General, Opening percentile-99", // Updated description
        fee: "₹27,00,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIIT Allahabad
    title: "FMS Delhi Faculty of Management Studies", // Updated title
    subtitle: "New Delhi, Delhi NCR", // Updated subtitle
    badge: "AICTE ACCREDITED", // Updated badge
    rankings: ["#35 out of 75 in NIRF", "#8 out of 272 in India Today"], // Updated rankings
    courses: [
      {
        title: "MBA", // Updated course title
        desc: "Round 1, General, Opening percentile-98", // Updated description
        fee: "₹1,16,000", // Updated fee
        feeDesc: "1st Year Fee", // Updated fee description
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NSUT
    title: "SP Jain [SPJIMR]", // Updated title
    subtitle: "Mumbai, Maharashtra", // Updated subtitle
    badge: "AICTE ACCREDITED", // Updated badge
    rankings: ["#20 out of 125 in NIRF", "#3 out of 275 in India Today"], // Updated rankings
    courses: [
      {
        title: "PGPM", // Updated course title
        desc: "Round 1, General, Opening percentile-85", // Updated description
        fee: "₹21,00,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
      {
        title: "PGDM-BM", // Updated course title
        desc: "Round 1, General, Opening percentile-85", // Updated description
        fee: "€22,50,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // MNNIT Allahabad
    title: "IIML-Indian Institute of Management", // Updated title
    subtitle: "Lucknow, Uttar Pradesh", // Updated subtitle
    badge: "UGC ACCREDITED", // Updated badge
    rankings: ["# out of 125 in NIRF", "#2 out of 275 in India Today"], // Updated rankings
    courses: [
      {
        title: "PGP-ABM", // Updated course title
        desc: "Round 1, General, Opening percentile-85", // Updated description
        fee: "₹10,95,000", // Updated fee
        feeDesc: "1st Year Fees", // Updated fee description
      },
      {
        title: "PG Programme in Sustainable Management", // Updated course title
        desc: "Round 1, General, Opening percentile-S", // Updated description
        fee: "€9,80,000", // Updated fee
        feeDesc: "Total Fees", // Updated fee description
      },
    ],
  },
];

const catcardData = [
  {
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXQRSg8aw6iT8CKANTBpCe5d0YtG8.png",
    title: "ATMA 2025",
    timeline: [
      { heading: "Application form", date: null },
      { heading: "Examination", date: "23 Feb 25" },
    ],
    buttonLabel: "Download Exam Details",
  },
  {
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXQRSg8aw6iT8CKANTBpCe5d0YtG8.png",
    title: "BTMA 2025",
    timeline: [
      { heading: "Registration", date: null },
      { heading: "Exam Date", date: "15 Mar 25" },
    ],
    buttonLabel: "Get Details",
  },
];

const acceptingCollegeList = [
  {
    name: "IIMA-Indian Institute of Management, Ahmedabad",
    link: "/college/iima-ahmedabad", // Replace with actual link
    course: "PG Programme in Food and Agri-Business Management (PGP-FABM)",
    closingRank: "2024-99", // Assuming this refers to percentile
    fees: "₹26,50,000 (Total Fees)",
  },
  {
    name: "IIM Bangalore-Indian Institute of Management, Bangalore",
    link: "/college/iim-bangalore",
    course: "PG Programme in Business Analytics",
    closingRank: "2024-99", // Assuming this refers to percentile
    fees: "₹26,00,000 (Total Fees)",
  },
  {
    name: "IIMC-Indian Institute of Management, Kolkata",
    link: "/college/iimc-kolkata",
    course: "MBA",
    closingRank: "2024-99", // Assuming this refers to percentile
    fees: "₹27,00,000 (Total Fees)",
  },
  {
    name: "FMS Delhi Faculty of Management Studies, New Delhi",
    link: "/college/fms-delhi",
    course: "MBA",
    closingRank: "2024-98", // Assuming this refers to percentile
    fees: "₹1,16,000 (1st Year Fees)",
  },
  {
    name: "SP Jain [SPJIMR], Mumbai",
    link: "/college/spjimr-mumbai",
    course: "PGPM",
    closingRank: "2024-85", // Assuming this refers to percentile
    fees: "₹21,00,000 (Total Fees)",
  },
  {
    name: "IIML-Indian Institute of Management, Lucknow",
    link: "/college/iiml-lucknow",
    course: "PGP-ABM",
    closingRank: "2024-85", // Assuming this refers to percentile
    fees: "₹10,95,000 (1st Year Fees)",
  },
  {
    name: "IIMI-Indian Institute of Management, Indore",
    link: "/college/iimi-indore",
    course: "PGPM",
    closingRank: "2024-90", // Assuming this refers to percentile
    fees: "₹10,50,679 (1st Year Fees)",
  },
  {
    name: "IIMK-Indian Institute of Management, Kozhikode",
    link: "/college/iimk-kozhikode",
    course: "PG Program in Management Finance",
    closingRank: "2024-97", // Assuming this refers to percentile
    fees: "₹20,50,000 (Total Fees)",
  },
  {
    name: "JBIMS Mumbai, Mumbai",
    link: "/college/jbims-mumbai",
    course: "MHRD",
    closingRank: "2024-96", // Assuming this refers to percentile
    fees: "₹3,50,000 (1st Year Fees)",
  },
  {
    name: "MDI Gurgaon, Gurgaon",
    link: "/college/mdi-gurgaon",
    course: "PGDM International Business",
    closingRank: "2024-95", // Assuming this refers to percentile
    fees: "₹29,58,200 (Total Fees)",
  },
  {
    name: "IIM Shillong Indian Institute of Management, Shillong",
    link: "/college/iim-shillong",
    course: "PGPM",
    closingRank: "2024-92", // Assuming this refers to percentile
    fees: "₹26,18,000 (Total Fees)",
  },
];

const CATForm = () => {

  const [showMore, setShowMore] = useState(
    Array(cardData.length).fill(false) // Initialize with false for each card
  );

  // Toggle function for "Show More" per card
  const toggleShowMore = (index) => {
    setShowMore((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const [formData, setFormData] = useState({
    percentile: "",
    reservation: "",
    course: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { percentile, reservation, course } = formData;

    if (!percentile || !reservation || !course) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/api/catcollege/filter", {
        params: { category: reservation, percentile, courses: course },
      });

      console.log("API Response:", response.data); 

      if (response.status === 200 && response.data.success) {
        navigate("/catresult", { state: JSON.parse(JSON.stringify({ results: response.data.data })) });
      } else {
        navigate("/catresult", { state: JSON.parse(JSON.stringify({ error: response.data.msg || "No colleges found." })) });
      }
    } catch (err) {
      console.error("API Error:", err); 
      navigate("/catresult", { state: JSON.parse(JSON.stringify({ error: "An error occurred while fetching results." })) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="cat-main-container">
        <div className="cat-left-container">
        <h1 className="form-unique-title">
          CAT College Predictor 2025, IIM & Non-IIM Call Predictor
        </h1>
      <div className="form-unique-container">
        <form onSubmit={handleSubmit} className="form-unique">
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="percentile" className="form-unique-label">
                Enter your percentile
              </label>
              <input
                type="number"
                id="percentile"
                name="percentile"
                value={formData.percentile}
                onChange={handleInputChange}
                className="form-unique-input"
                min="0"
                max="100"
                required
              />
            </div>
            <div className="form-unique-group">
              <label htmlFor="reservation" className="form-unique-label">
                Reservation Category
              </label>
              <select
                id="reservation"
                name="reservation"
                value={formData.reservation}
                onChange={handleInputChange}
                className="form-unique-select"
                required
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC/ST">SC/ST</option>
                <option value="NTC">NTC</option>
              </select>
            </div>
          </div>
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="course" className="form-unique-label">
                Select Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="catform-unique-select"
                required
              >
                <option value="">Select Course</option>
                <option value="MBA">MBA/PGDM</option>
                <option value="Executive MBA">Executive MBA</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form-unique-button" disabled={loading}>
            {loading ? "Fetching Results..." : "Check Results"}
          </button>
        </form>
      </div>
      <div className="cat-info-section">
            {/* content to be displayed always */}
            <p>CAT College Predictor 2024 is a tool designed by Collegedunia to assist you in predicting the chances of getting PI calls from 21 IIMs and 1000+ other MBA colleges. IIM Call Predictor uses last year’s admission data of applicants and CAT Cut offs of top MBA colleges to provide the most appropriate list of colleges. </p>
            {isExpanded && (
              <div className="cat-info-section">
                <p>With Collegedunia’s CAT College Predictor, you can know the list of colleges to expect a call from with 50, 60, 70, 80, 90, 95, 99+ percentile. You can access the details of all the eligible colleges including MBA fees, admission criteria, placements, and eligibility for all the courses offered.</p>
                <p>CAT 2024 Result has been released on Dec 19, 2024. Based on your scores calculated using the answer keys, you can predict your percentile and then use CAT College Predictor by Collegedunia to predict calls from IIMs and non-IIMs. </p>
                <h3>How to Use CAT College Predictor 2024?</h3>
                <p>Using IIM Call Predictor is very easy. All you need to do is to provide the CAT percentile (enter the expected percentile if using before result declaration) or CAT scores out of 198 followed by category (General/ EWS/ OBC-NCL/ SC/ ST) and choice of course (MBA/ PGDM or Executive MBA). Then just click on the ‘Check Results’ tab to get the list of MBA colleges accepting CAT percentile scores in the range you have mentioned.</p>
                <h3>CAT Score vs Percentile 2024: Predict Percentile Based on CAT Scores</h3>
                <p>You can check the expected percentile equivalent of your CAT scores based on the analysis provided below.</p>
                <div className="category-neettable-container">
                  <table className="category-score-neettable">
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: '#8bbdc4' }}>CAT Percentile</th>
                        <th style={{ backgroundColor: '#7c9cab' }}>CAT Score Out of 198</th>
                      </tr>
                    </thead>
                    <tbody>
                      {catPercentileVsScore.map((row, index) => (
                        <tr key={index}>
                          <td>{row.percentile}</td>
                          <td>{row.scoreRange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h3>CAT Score vs Percentile 2024: Predict Percentile Based on CAT Scores</h3>
                <p>You can check the expected percentile equivalent of your CAT scores based on the analysis provided below.</p>
                <div className="table-container">
                  <table className="neet-marks-rank-neettable"> {/* Use neet table class */}
                    <thead>
                      <tr>
                        <th className="neet-neettable-header" style={{ backgroundColor: '#8bbdc4' }}>IIMs (in order of NIRF 2023 Ranking)</th> {/* Use neet header class */}
                        <th className="neet-neettable-header" style={{ backgroundColor: '#7c9cab' }}>General</th>
                        <th className="neet-neettable-header" style={{ backgroundColor: '#6a8795' }}>OBC</th>
                        <th className="neet-neettable-header" style={{ backgroundColor: '#4c6c7b' }}>EWS</th>
                        <th className="neet-neettable-header" style={{ backgroundColor: '#6a879a' }}>SC</th>
                        <th className="neet-neettable-header" style={{ backgroundColor: '#2f8886' }}>ST</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iimCutoffs.map((row, index) => (
                        <tr key={index} className="neet-table-row"> {/* Use neet row class */}
                          <td className="neet-neettable-cell">{row.iim}</td> {/* Use neet cell class */}
                          <td className="neet-neettable-cell">{row.general}</td>
                          <td className="neet-neettable-cell">{row.obc}</td>
                          <td className="neet-neettable-cell">{row.ews}</td>
                          <td className="neet-neettable-cell">{row.sc}</td>
                          <td className="neet-neettable-cell">{row.st}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                backgroundColor: "#f6f6f6",
                border: "none",
                color: "#56bbde",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "10px",
                width: '98%',
                padding: '0.75rem'
              }}
            >
              {isExpanded ? "Read Less " : "Read More "}
            </button>
          </div>

          <div className="cardContainer">
            <h3 style={{ marginBottom: '0' }}>Top Engineering colleges accepting CAT</h3>
            <div className="neetcard-list">
              {cardData.map((data, cardIndex) => (
                <div className="neetcard" key={cardIndex}>
                  {/* Image Container with Overlay */}
                  <div className="neetcard-image-container">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="neetcard-image"
                    />
                    {/* Card Overlay */}
                    <div className="neetcard-overlay">
                      <h4 className="neetcard-title">{data.title}</h4>
                      <span className="neetcard-subtitle">{data.subtitle}</span>
                    </div>

                    {/* Badge */}
                    <span className="neetcard-badge">{data.badge}</span>

                    {/* Image and Video Icon Badges */}
                    <div className="icon-badges">
                      <div className="icon-badge">
                        <Album01Icon /> 09
                      </div>
                      <div className="icon-badge">
                        <VideoReplayIcon /> 01
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="neetcard-body">
                    {/* Rankings */}
                    <div className="neetcard-rankings scrollable-container">
                      {data.rankings.map((rank, index) => (
                        <span key={index} className="ranking-badge">
                          {rank}
                        </span>
                      ))}
                    </div>

                    {/* Courses */}
                    <div className="neetcard-courses">
                      {data.courses
                        .slice(0, showMore[cardIndex] ? data.courses.length : 2)
                        .map((course, index) => (
                          <div key={index} className="neetcard-course">
                            <div className="desc-left">
                              <span className="title-txt">{course.title}</span>
                              <span className="desc-txt">{course.desc}</span>
                            </div>
                            <div className="desc-right">
                              <span className="fee-txt">{course.fee}</span>
                              <span className="feeDesc-txt">{course.feeDesc}</span>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Show More / Show Less Button */}
                    <button onClick={() => toggleShowMore(cardIndex)} className="neetcard-toggle">
                      {showMore[cardIndex] ? "SHOW LESS" : "SHOW MORE"}
                    </button>

                    {/* Apply Button */}
                    <a href="#" className="neetcard-button">
                      APPLY NOW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3>Upcoming application form & date</h3>
          <div className="catexamCardContainer">
            <div className="cards-container">
              {catcardData.map((card, index) => (
                <div className="cat-card" key={index}>
                  <img src={card.logo} alt={`${card.title} logo`} className="cat-logo" />
                  <h2 className="cat-main-heading">{card.title}</h2>
                  <div className="cat-timeline">
                    <ul>
                      {card.timeline.map((item, idx) => (
                        <li key={idx}>
                          <div className="cat-timeline-item">
                            <h3 className="cat-application-heading">{item.heading}</h3>
                            {item.date && <p className="cat-date">{item.date}</p>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="catbutton">{card.buttonLabel}</button>
                </div>
              ))}
            </div>
          </div>

          <div className="catAcceptingCollegeList">
            <h3>Top Engineering colleges accepting CAT</h3>
            <div className="neet-neettable-container">
              <table className="neet-college-neettable">
                <thead>
                  <tr>
                    <th>College</th>
                    <th>Cutoff Round 1</th>
                    <th>Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {acceptingCollegeList.map((college, index) => (
                    <tr key={index}>
                      <td>
                        <a className="neet-college-name jeeATag">{college.name}</a>
                      </td>
                      <td>
                        <p className="collegeCourseName">{college.course}</p>
                        <span className="neet-closing-rank"><strong>Closing Rank {college.closingRank}</strong></span>
                      </td>
                      <td>{college.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='view-all-btn-container'>
              <button class="view-all-btn">View all</button>
            </div>
          </div>


        </div>  {/*  left container ends here  */}
        <div className="cat-right-container">
          <div className="neet-button-container">
            <button className="neet-btn btn-orange">
              GET MORE INFO
              <Mail className="icon-right" size={30} />
              {/* <span className="icon">📧</span> */}
            </button>

            <button className="neet-btn btn-white">
              ASK A QUESTION
              <MessageCircle className="icon-right" size={30} />
              {/* <span className="icon">👤</span> */}
            </button>

            <button className="neet-btn btn-teal">
              SAMPLE PAPERS
              <FileText className="icon-right" size={30} />
              {/* <span className="icon">📄</span> */}
            </button>
            <div className="neet-containe">
              <div className="neet-exam-neetcard">
                <h3>You can also check</h3>
                <ul>
                  <li><a href="#">CAT Overview</a></li>
                  <li><a href="#">CAT Admit Card</a></li>
                  <li><a href="#">CAT Question Papers</a></li>
                  <li><a href="#">CAT Exam Analysis</a></li>
                  <li><a href="#">CAT Preparation</a></li>
                  <li><a href="#">CAT Answer Key</a></li>
                  <li><a href="#">CAT Cut off</a></li>
                  <li><a href="#">CAT Mock Test</a></li>
                  <li><a href="#">CAT Percentile Predictor</a></li>
                  <li><a href="#">CAT News</a></li>
                  <li><a href="#">CAT Participating Colleges</a></li>

                </ul>
              </div>

              <div className="neet-exam-neetcard">
                <h3>Category wise exam pages</h3>
                <ul>
                  <li><a href="#">Executive MBA</a></li>
                  <li><a href="#">M.Phil/Ph.D in Management</a></li>
                  <li><a href="#">MBA/PGDM</a></li>
                  <li><a href="#">BE/B.TECH</a></li>
                  <li><a href="#">MBBS</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>{/*  right container ends here */}
      </div> {/*  main container ends here     */}
    </div>
  );
};

export default CATForm;
