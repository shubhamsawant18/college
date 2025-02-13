import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css";
import "../assets/styles1/GATEForm.css";
import { Album01Icon, VideoReplayIcon } from "hugeicons-react";
import { Mail, MessageCircle, FileText } from "lucide-react";

const QuickLinks = [
  {
    link1: "#", // Replace with actual link
    text1: "GATE Cut off for IITs",
    link2: "#", // Replace with actual link
    text2: "GATE Cut off for NITs"
  },
  {
    link1: "#", // Replace with actual link
    text1: "GATE Counselling",
    link2: "#", // Replace with actual link
    text2: "PSU Recruitment through GATE"
  },
];

const instituteRankData = [
  { institute: 'IISc Bangalore', gateRank: 'Rank < 100; in some of the courses rank ≤ 600' },
  { institute: 'IIT Bombay', gateRank: 'Rank < 100; in some of the courses rank ≤600' },
  { institute: 'IIT Delhi', gateRank: 'Rank < 100; in some of the courses rank ≤ 300' },
  { institute: 'IIT Kanpur', gateRank: 'Rank < 100; in some of the courses rank ≤ 300' },
  { institute: 'IIT Kharagpur', gateRank: 'Rank ≤ 600' },
  { institute: 'IIT Madras', gateRank: 'Rank < 100; in some of the courses rank ≤ 300' },
  { institute: 'IIT Hyderabad', gateRank: 'Rank ≤ 1500' },
  { institute: 'IIT Roorkee', gateRank: 'AIR ≤ 1000' },
  { institute: 'IIT Guwahati', gateRank: 'AIR ≤ 1000' },
  { institute: 'IIT BHU', gateRank: 'AIR ≤ 1000' },
  { institute: 'NITs', gateRank: 'Rank ≤ 1500' },
  { institute: 'IIT Patna', gateRank: 'Rank ≤ 1500' },
  { institute: 'GFTIs (National and State-level)', gateRank: 'Rank ≤ 2500' },
];

const cutoffRange = [
  { paperCode: 'CS', testPaper: 'Computer Science and Information Technology', genCutoff: 27.6, obcCutoff: 24.8, scCutoff: 18.4 },
  { paperCode: 'DA', testPaper: 'Data Science and Artificial Intelligence', genCutoff: 37.1, obcCutoff: 33.3, scCutoff: 24.7 },
  { paperCode: 'EC', testPaper: 'Electronics and Communication Engineering', genCutoff: 25, obcCutoff: 22.5, scCutoff: 16.6 },
  { paperCode: 'EE', testPaper: 'Electrical Engineering', genCutoff: 25.7, obcCutoff: 23.1, scCutoff: 17.1 },
  { paperCode: 'CE', testPaper: 'Civil Engineering', genCutoff: 28.3, obcCutoff: 25.4, scCutoff: 18.8 },
  { paperCode: 'ME', testPaper: 'Mechanical Engineering', genCutoff: 28.6, obcCutoff: 25.7, scCutoff: 19 },
  { paperCode: 'AE', testPaper: 'Aerospace Engineering', genCutoff: 33.3, obcCutoff: 29.9, scCutoff: 22.1 },
  { paperCode: 'AG', testPaper: 'Agricultural Engineering', genCutoff: 25, obcCutoff: 22.5, scCutoff: 16.6 },
  { paperCode: 'AR', testPaper: 'Architecture and Planning', genCutoff: 41.5, obcCutoff: 37.3, scCutoff: 27.6 },
  { paperCode: 'BM', testPaper: 'Biomedical Engineering', genCutoff: 25, obcCutoff: 22.5, scCutoff: 16.6 },
  { paperCode: 'BT', testPaper: 'Biotechnology', genCutoff: 38.9, obcCutoff: 35, scCutoff: 25.9 },
  { paperCode: 'CH', testPaper: 'Chemical Engineering', genCutoff: 25, obcCutoff: 22.5, scCutoff: 16.6 },
];

const cardData = [
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIT Bombay (Replace with actual image if available)
    title: "IIT Bombay - Indian Institute of Technology - [IITB]",
    subtitle: "Mumbai, Maharashtra",
    badge: "AICTE ACCREDITED",
    rankings: ["#3 out of 300 in NIRF", "#2 out of 31 in India Today"],
    courses: [
      {
        title: "M.Tech Petroleum Geoscience",
        desc: "Round 1, General, Closing rank-325",
        fee: "₹66,700",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.Tech Geoexploration",
        desc: "Round 1, General, Closing rank-325",
        fee: "₹66,700",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIT Delhi (Replace with actual image if available)
    title: "IIT Delhi - Indian Institute of Technology - [IITD]",
    subtitle: "New Delhi, Delhi NCR",
    badge: "AICTE ACCREDITED",
    rankings: ["#2 out of 300 in NIRF", "#1 out of 31 in India Today"],
    courses: [
      {
        title: "M.Tech Textile Technology",
        desc: "Round 1, General, Closing rank-400",
        fee: "₹1,90,300",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIT Madras (Replace with actual image if available)
    title: "IIT Madras - Indian Institute of Technology - [IITM]",
    subtitle: "Chennai, Tamil Nadu",
    badge: "AICTE ACCREDITED",
    rankings: ["#1 out of 300 in NIRF", "#1 out of 25 in Outlook"],
    courses: [
      {
        title: "M.Tech Clinical Engineering",
        desc: "Round 1, General, Closing rank-359",
        fee: "₹24,600",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.Tech Industrial Catalysis",
        desc: "Round 1, General, Closing rank-404",
        fee: "₹24,600",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIT Kanpur (Replace with actual image if available)
    title: "IIT Kanpur - Indian Institute of Technology - [IITK]",
    subtitle: "Kanpur, Uttar Pradesh",
    badge: "UGC ACCREDITED",
    rankings: ["#4 out of 300 in NIRF", "#3 out of 31 in India Today"],
    courses: [
      {
        title: "M.Tech Chemical Engineering",
        desc: "Round 4, General, Closing rank-560",
        fee: "₹1,18,910",
        feeDesc: "Total Fees",
      },
      {
        title: "M.Tech Chemical Engineering",
        desc: "Round 2, General, Closing rank-561",
        fee: "₹1,18,910",
        feeDesc: "Total Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIT Kharagpur (Replace with actual image if available)
    title: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    subtitle: "Kharagpur, West Bengal",
    badge: "AICTE ACCREDITED",
    rankings: ["#5 out of 300 in NIRF", "#4 out of 31 in India Today"],
    courses: [
      {
        title: "M.Tech Cryogenic Engineering",
        desc: "Round 1, General, Closing rank-379",
        fee: "₹27,650",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.Tech Metallurgical & Materials....",
        desc: "Round 1, General, Closing rank-381",
        fee: "₹27,650",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIT Guwahati (Replace with actual image if available)
    title: "IIT Guwahati - Indian Institute of Technology - [IITG]",
    subtitle: "Guwahati, Assam",
    badge: "AICTE ACCREDITED",
    rankings: ["#7 out of 300 in NIRF", "#6 out of 31 in India Today"], // Corrected ranking
    courses: [
      {
        title: "M.Tech Computer Science and Engi...",
        desc: "Round 1, General, Closing rank-650",
        fee: "₹98,250",
        feeDesc: "1st Year Fees",
      },
    ],
  },
];

const acceptingCollegeList = [
  {
    name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
    link: "/college/iit-bombay", // Replace with actual link
    course: "M.Tech Petroleum Geoscience",
    closingRank: "2024-325",
    fees: "₹66,700 (1st Year Fees)",
  },
  {
    name: "IIT Kharagpur-Indian Institute of Technology - [IITKGP], Kharagpur",
    link: "/college/iit-kharagpur", // Replace with actual link
    course: "M.Tech Cryogenic Engineering",
    closingRank: "2024-379",
    fees: "₹27,650 (1st Year Fees)",
  },
  {
    name: "IIT Delhi-Indian Institute of Technology [IITD], New Delhi",
    link: "/college/iit-delhi", // Replace with actual link
    course: "M.Tech Textile Technology",
    closingRank: "2024-400",
    fees: "₹1,90,300 (1st Year Fees)",
  },
  {
    name: "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
    link: "/college/iit-madras", // Replace with actual link
    course: "MA English", // Or the specific M.Tech course if applicable
    closingRank: "2024-224", // Or the correct closing rank
    fees: "₹24,600 (1st Year Fees)",
  },
  {
    name: "IIT Kanpur - Indian Institute of Technology - [IITK), Kanpur",
    link: "/college/iit-kanpur", // Replace with actual link
    course: "M.Tech Chemical Engineering",
    closingRank: "2024-560",
    fees: "₹1,18,910 (Total Fees)", // Note: Total fees, not 1st year
  },
  {
    name: "IIT Guwahati-Indian Institute of Technology - [IITG], Guwahati",
    link: "/college/iit-guwahati", // Replace with actual link
    course: "M.Tech Computer Science and Engineering",
    closingRank: "2024-650",
    fees: "₹98,250 (1st Year Fees)",
  },
  {
    name: "NIT Trichy, Tiruchirappalli",
    link: "/college/nit-trichy", // Replace with actual link
    course: "M.Tech Industrial Safety",
    closingRank: "2024-350",
    fees: "₹1,31,000 (1st Year Fees)",
  },
  {
    name: "National Institute of Technology-[NITK], Surathkal",
    link: "/college/nitk-surathkal", // Replace with actual link
    course: "M.Tech Chemical Engineering",
    closingRank: "2024-351",
    fees: "₹1,13,235 (1st Year Fees)",
  },
  {
    name: "ISM Dhanbad - Indian Institute of Technology - [IITISM], Dhanbad",
    link: "/college/iitism-dhanbad", // Replace with actual link
    course: "M.Tech Metallurgical Engineering",
    closingRank: "2024-146",
    fees: "₹91,250 (1st Year Fees)",
  },
  {
    name: "NIT Warangal, Warangal",
    link: "/college/nit-warangal", // Replace with actual link
    course: "M.Tech Material Engineering",
    closingRank: "2024-350",
    fees: "₹1,34,000 (1st Year Fees)",
  },
  {
    name: "Indian Institute of Information Technology - [IIIT], Allahabad",
    link: "/college/iiit-allahabad", // Replace with actual link
    course: "M.Tech Biomedical Engineering",
    closingRank: "2024-351",
    fees: "₹1,61,060 (1st Year Fees)",
  },
];

const catcardData = [
  {
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXQRSg8aw6iT8CKANTBpCe5d0YtG8.png", // Replace with AIDAT logo
    title: "AIDAT 2024",
    timeline: [
      { heading: "Application form", date: "14 Feb 25" },
      { heading: "Examination", date: "15 Feb 25" },
    ],
    buttonLabel: "Download Exam Details",
  },
  {
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXQRSg8aw6iT8CKANTBpCe5d0YtG8.png", // Replace with MAH M ARCH CET 2025 logo
    title: "MAH M ARCH CET 2025",
    timeline: [
      { heading: "Application form", date: null }, // Or add date if available
      { heading: "Examination", date: "11 Mar 25" },
    ],
    buttonLabel: "Download Exam Details",
  },
];



const GATEForm = () => {

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
    score: "",
    reservation: "",
    stream: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.score || !formData.reservation || !formData.stream) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const queryString = new URLSearchParams({
      score: formData.score,
      category: formData.reservation.toLowerCase(),
      stream: formData.stream.toLowerCase(),
    }).toString();

    try {
      const response = await fetch(
        `http://localhost:5000/api/gatecollege/filter?${queryString}`
      );

      if (!response.ok) throw new Error("Failed to fetch results");

      const data = await response.json();

      console.log("API Response:", data); // Debugging

      // Check if data.data exists and is not empty
      if (Array.isArray(data.data) && data.data.length > 0) {
        console.log("Results found:", data.data);
        navigate("/gateresult", { state: { results: data.data } });
      } else {
        console.log("No results found");
        navigate("/gateresult", { state: { error: "No results found." } });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      navigate("/gateresult", { state: { error: "An error occurred while fetching results." } });
    }
  };



  return (
    <div>
      <Navbar />
      <div className="gate-main-container">
        <div className="gate-left-container">
          <h1 className="form-unique-title">GATE College Predictor 2025</h1>
          <div className="form-unique-container">
            <form onSubmit={handleSubmit} className="form-unique">
              <div className="form-unique-row">
                <div className="form-unique-group">
                  <label htmlFor="score" className="form-unique-label">
                    Enter your Score (out of 1000)
                  </label>
                  <input
                    type="number"
                    id="score"
                    name="score"
                    value={formData.score}
                    onChange={handleInputChange}
                    className="form-unique-input"
                    min="0"
                    max="1000"
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
                    <option value="general">General</option>
                    <option value="obc">OBC</option>
                    <option value="sc/st">SC/ST</option>
                    <option value="ntc">NTC</option>
                  </select>
                </div>
              </div>
              <div className="form-unique-row">

              </div>
              <div className="form-unique-row">
                <div className="form-unique-group">
                  <label htmlFor="stream" className="form-unique-label">
                    Select Stream
                  </label>
                  <select
                    id="stream"
                    name="stream"
                    value={formData.stream}
                    onChange={handleInputChange}
                    className="form-unique-select"
                    required
                    style={{ width: '36%' }}
                  >
                    <option value="">Select Stream</option>
                    <option value="computer science">Computer Science</option>
                    <option value="information technology">Information Technology</option>
                    <option value="chemical engineering">Chemical Engineering</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="form-unique-button">
                Check Results
              </button>
            </form>
          </div>
          <div className="gate-info-section">
            <h3>GATE College Predictor 2025: Know your M.Tech Colleges based on GATE Scores</h3>
            <p>GATE College Predictor 2025 by Collegedunia is specially designed to help candidates predict the top M.Tech colleges they can be admitted to based on expected GATE scores. With the approximate score, you can get a list of all the IITs, NITs, and GFTIs that will accept your scores before participating in the counselling process. The tool uses previous year data on qualifying and admission cutoff for GATE exam to predict the colleges. Check GATE Cutoff.</p>
            {isExpanded && (
              <div className="gate-info-section">
                <p>IIT Roorkee will declare GATE 2025 result in March 2025. Those looking for admission to IIT must register for GATE COAP while those looking for other colleges such as NITs/ IIITs must register through GATE CCMT. The table below mentions the list of colleges with the GATE scores they accept for M.Tech admissions:</p>
                <table className="gatecustom-table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: '#8bbdc4' }}>Institute</th>
                      <th style={{ backgroundColor: '#7c9cab' }}>GATE Rank (Expected)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {instituteRankData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.institute}</td>
                        <td>{item.gateRank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h3>GATE Cut off 2025: Qualifying Marks for CSE, DA, EE, ECE, ME</h3>
                <p>The cut off for 2025 will be available after the results are released. Students can check the cut off of previous year:</p>
                <table className="gatecustom-table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: '#8bbdc4' }}>Paper Code</th>
                      <th style={{ backgroundColor: '#7c9cab' }}>Test Paper</th>
                      <th style={{ backgroundColor: '#6a8795' }}>Cut-off (GEN)</th>
                      <th style={{ backgroundColor: '#4c6c7b' }}>Cut-off (OBC-NCL/EWS)</th>
                      <th style={{ backgroundColor: '#6a879a' }}>Cut-off (SC/ST/PWD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cutoffRange.map((item, index) => (
                      <tr key={index}>
                        <td>{item.paperCode}</td>
                        <td>{item.testPaper}</td>
                        <td>{item.genCutoff}</td>
                        <td>{item.obcCutoff}</td>
                        <td>{item.scCutoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Ouick Links:</p>


                <table className="gate-links-table">
                  <tbody>
                    {QuickLinks.map((item, index) => (
                      <tr key={index} className="gate-links-row">
                        <td className="gate-link-cell">
                          <a href={item.link1} target="_blank" rel="noopener noreferrer" className="gate-link">
                            {item.text1}
                          </a>
                        </td>
                        <td className="gate-link-cell">
                          <a href={item.link2} target="_blank" rel="noopener noreferrer" className="gate-link">
                            {item.text2}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
          {/* card section starts here */}
          <div className="cardContainer">
            <h3 style={{ marginBottom: '0' }}>Top Engineering colleges accepting GATE</h3>
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

          <div>
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
          </div>

          <div className="gateAcceptingCollegeList">
            <h3>Top Engineering colleges accepting JEE Main</h3>
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

        </div> {/*  left container ends here */}
        <div className="gate-right-container">
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
                  <li><a href="#">GATE Overview</a></li>
                  <li><a href="#">GATE Registration</a></li>
                  <li><a href="#">GATE Exam Pattern</a></li>
                  <li><a href="#">GATE Preparation</a></li>
                  <li><a href="#">GATE Question Papers</a></li>
                  <li><a href="#">GATE Mock Test</a></li>
                  <li><a href="#">GATE Cutoff</a></li>
                  <li><a href="#">GATE Result</a></li>
                  <li><a href="#">GATE PSU Predictor</a></li>
                  <li><a href="#">GATE News</a></li>
                  <li><a href="#">GATE Q&A</a></li>
                  <li><a href="#">GATE Participating Colleges</a></li>

                </ul>
              </div>

              <div className="neet-exam-neetcard">
                <h3>Category wise exam pages</h3>
                <ul>
                  <li><a href="#">ME/M.Tech</a></li>
                  <li><a href="#">M.Des</a></li>
                  <li><a href="#">M.Arch</a></li>
                  <li><a href="#">BE/B.TECH</a></li>
                  <li><a href="#">MBBS</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>{/*  end fo right container */}
      </div> {/*  main container ends here */}
    </div>
  );
};

export default GATEForm;
