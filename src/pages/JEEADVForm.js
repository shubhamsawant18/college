import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; 
import "../assets/styles1/JEEADVForm.css";
import "../assets/styles1/NEETForm.css";
import { Album01Icon, VideoReplayIcon } from "hugeicons-react";
import { Mail, MessageCircle, FileText } from "lucide-react";
import Footer from '../components/Footer';

const acceptingCollegeList = [
  {
    college: "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
    cutoff: "Closing rank 2024 - 159",
    fees: "₹ 2,42,000 (1st Year Fees)",
  },
  {
    college: "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
    cutoff: "Closing rank 2024 - 414",
    fees: "₹ 2,62,360 (1st Year Fees)",
  },
  {
    college: "IIT Delhi - Indian Institute of Technology [IITD], New Delhi",
    cutoff: "Closing rank 2024 - 116",
    fees: "₹ 2,28,650 (1st Year Fees)",
  },
  {
    college: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
    cutoff: "Closing rank 2024 - 68",
    fees: "₹ 2,30,700 (1st Year Fees)",
  },
  {
    college: "IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur",
    cutoff: "Closing rank 2024 - 248",
    fees: "₹ 2,29,970 (1st Year Fees)",
  },
  {
    college: "IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
    cutoff: "Closing rank 2024 - 481",
    fees: "₹ 2,30,100 (1st Year Fees)",
  },
  {
    college: "IIT Guwahati - Indian Institute of Technology - [IITG], Guwahati",
    cutoff: "Closing rank 2024 - 607",
    fees: "₹ 2,88,250 (1st Year Fees)",
  },
  {
    college: "IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad",
    cutoff: "Closing rank 2024 - 649",
    fees: "₹ 2,41,888 (1st Year Fees)",
  },
  {
    college: "IIT BHU - Indian Institute of Technology, Varanasi",
    cutoff: "Closing rank 2024 - 1015",
    fees: "₹ 2,27,815 (1st Year Fees)",
  },
  {
    college: "IIT Indore - Indian Institute of Technology - [IITI], Indore",
    cutoff: "Closing rank 2024 - 1354",
    fees: "₹ 2,99,400 (1st Year Fees)",
  },
  {
    college: "ISM Dhanbad - Indian Institute of Technology - [IITISM], Dhanbad",
    cutoff: "Closing rank 2024 - 3594",
    fees: "₹ 2,45,250 (1st Year Fees)",
  },
];

const cutOffTableData = [
  { category: "Common Rank List (CRL)", 2024: "35%", 2023: "23.89%", 2022: "15.28%" },
  { category: "GEN-EWS", 2024: "31.5%", 2023: "21.50%", 2022: "13.89%" },
  { category: "OBC-NCL", 2024: "31.5%", 2023: "21.50%", 2022: "13.89%" },
  { category: "SC", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "ST", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "Common-PwD", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "GEN-EWS-PwD", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "OBC-NCL-PwD", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "SC-PwD", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "ST-PwD", 2024: "17.5%", 2023: "11.94%", 2022: "7.78%" },
  { category: "Preparatory Course", 2024: "8.75%", 2023: "5.97%", 2022: "3.89%" },
];

const cardData = [
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop",
    title: "University College of Medical Sciences [UCMS]",
    subtitle: "New Delhi, Delhi NCR",
    badge: "MCI ACCREDITED",
    rankings: ["#32 out of 50 in NIRF", "#10 out of 55 in India Today"],
    courses: [
      {
        title: "M.B.B.S.",
        desc: "Round 2, General, AI, Closing rank - 331",
        fee: "₹30,750",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.B.B.S.",
        desc: "Round 2, General, AI, Closing rank - 331",
        fee: "₹30,750",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop",
    title: "University College of Medical Sciences [UCMS]",
    subtitle: "New Delhi, Delhi NCR",
    badge: "MCI ACCREDITED",
    rankings: ["#32 out of 50 in NIRF", "#10 out of 55 in India Today"],
    courses: [
      {
        title: "M.B.B.S.",
        desc: "Round 2, General, AI, Closing rank - 331",
        fee: "₹30,750",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.B.B.S.",
        desc: "Round 2, General, AI, Closing rank - 331",
        fee: "₹30,750",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop",
    title: "All India Institute of Medical Sciences [AIIMS]",
    subtitle: "Delhi, India",
    badge: "MCI ACCREDITED",
    rankings: ["#1 in NIRF", "#1 in India Today"],
    courses: [
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.D.",
        desc: "Round 1, General, AI, Closing rank - 120",
        fee: "₹2,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop",
    title: "All India Institute of Medical Sciences [AIIMS]",
    subtitle: "Delhi, India",
    badge: "MCI ACCREDITED",
    rankings: ["#1 in NIRF", "#1 in India Today"],
    courses: [
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.D.",
        desc: "Round 1, General, AI, Closing rank - 120",
        fee: "₹2,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop",
    title: "All India Institute of Medical Sciences [AIIMS]",
    subtitle: "Delhi, India",
    badge: "MCI ACCREDITED",
    rankings: ["#1 in NIRF", "#1 in India Today"],
    courses: [
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.D.",
        desc: "Round 1, General, AI, Closing rank - 120",
        fee: "₹2,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop",
    title: "All India Institute of Medical Sciences [AIIMS]",
    subtitle: "Delhi, India",
    badge: "MCI ACCREDITED",
    rankings: ["#1 in NIRF", "#1 in India Today"],
    courses: [
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.B.B.S.",
        desc: "Round 1, General, AI, Closing rank - 57",
        fee: "₹1,628",
        feeDesc: "1st Year Fees",
      },
      {
        title: "M.D.",
        desc: "Round 1, General, AI, Closing rank - 120",
        fee: "₹2,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
];

const closingRanksTableData = [
  {
    institute: "IIT Bombay",
    cse2023: 66,
    cse2022: 67,
    ece2023: 1420,
    ece2022: 1453,
  },
  {
    institute: "IIT Delhi",
    cse2023: 100,
    cse2022: 105,
    ece2023: 1800,
    ece2022: 1850,
  },
  {
    institute: "IIT Kanpur",
    cse2023: 240,
    cse2022: 250,
    ece2023: 2300,
    ece2022: 2350,
  },
  {
    institute: "IIT Madras",
    cse2023: 160,
    cse2022: 170,
    ece2023: 1900,
    ece2022: 1950,
  },
  {
    institute: "IIT Kharagpur",
    cse2023: 290,
    cse2022: 300,
    ece2023: 2500,
    ece2022: 2550,
  },
];

const Predictortabledata = [
  ["JAC Delhi College Predictor", "JEE Main 2025 College Predictor", "JAC Chandigarh College Predictor"],
];

const coursewise = [
  {
    iit: "IIT Madras JEE Advanced Cut off",
    link: "#", // Replace with the actual link later
  },
  {
    iit: "IIT Delhi JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Bombay JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Kanpur JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Roorkee JEE Advanced Cut off 2",
    link: "#",
  },
  {
    iit: "IIT Kharagpur JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Guwahati JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Hyderabad JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Indore JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT BHU JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Jodhpur JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Dhanbad JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Mandi JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Gandhinagar JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Patna JEE Advanced Cut off 2",
    link: "#",
  },
  {
    iit: "IIT Ropar JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Bhubaneswar JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Tirupati JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Bhilai JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Jammu JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Dharwad JEE Advanced Cut off",
    link: "#",
  },
  {
    iit: "IIT Palakkad JEE Advanced Cut off",
    link: "#",
  },
];

const data = [
  { marks: "Very Good", CRL: "650-700" },
  { marks: "Good", CRL: "649-500" },
  { marks: "Average", CRL: "510-430" },
  { marks: "Low", CRL: "529-200" },
];

const catagoryCutoffData = [
  { rankList: "CRL", minSubject: 10.0, minAggregate: 35.0 },
  { rankList: "Gen-EWS", minSubject: 9.0, minAggregate: 31.5 },
  { rankList: "OBC-NCL", minSubject: 9.0, minAggregate: 31.5 },
  { rankList: "SC", minSubject: 5.0, minAggregate: 17.5 },
  { rankList: "ST", minSubject: 5.0, minAggregate: 17.5 },
  { rankList: "PwD", minSubject: 5.0, minAggregate: 17.5 },
  { rankList: "Preparatory Course", minSubject: 2.5, minAggregate: 8.75 },
];

const marksVRanksData = [
  {
    rankRange: "1-500",
    expectedScore: "190+",
  },
  {
    rankRange: "501-1000",
    expectedScore: "190-170",
  },
  {
    rankRange: "1001-1500",
    expectedScore: "170-155",
  },
  {
    rankRange: "1501-2000",
    expectedScore: "154-145",
  },
  {
    rankRange: "2001-2500",
    expectedScore: "146-135",
  },
  {
    rankRange: "2501-3000",
    expectedScore: "136-130",
  },
  {
    rankRange: "3001-3500",
    expectedScore: "129-125",
  },
  {
    rankRange: "3501-4000",
    expectedScore: "124-120",
  },
  {
    rankRange: "4001-4500",
    expectedScore: "119-115",
  },
  {
    rankRange: "4501-5000",
    expectedScore: "114-110",
  },
];

const AdvCutOof = [
  {
    course: "CSE",
    iitBombay: 67,
    iitDelhi: 118,
    iitMadras: 148,
    iitKanpur: 238,
    iitRoorkee: 412,
  },
  {
    course: "Mechanical",
    iitBombay: 1736,
    iitDelhi: 1791,
    iitMadras: 2572,
    iitKanpur: 2940,
    iitRoorkee: 3854,
  },
  {
    course: "Electrical",
    iitBombay: 481,
    iitDelhi: 582,
    iitMadras: 964,
    iitKanpur: 1349,
    iitRoorkee: 2037,
  },
  {
    course: "Civil",
    iitBombay: 4371,
    iitDelhi: 4362,
    iitMadras: 6132,
    iitKanpur: 6116,
    iitRoorkee: 7100,
  },
];

const jeeAdvancedCollegeData = []

const JEEADVForm = () => {
  const [isJeeInfoExpanded, setIsJeeInfoExpanded] = useState(false);
  const [expandedColleges, setExpandedColleges] = useState(jeeAdvancedCollegeData.map(() => false));
  const jeeAdvancedStyles = `
    .jee-info-container {
      position: relative;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
    }
    
    .jee-info-container:not(.jee-info-expanded) {
      max-height: 400px;
    }
    
    .jee-info-container.jee-info-expanded {
      max-height: none;
    }
    
    .jee-info-container:not(.jee-info-expanded)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(transparent, white);
      pointer-events: none;
    }
    
    .jee-toggle-info-btn {
      display: block;
      margin: 20px auto;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    
    .jee-toggle-info-btn:hover {
      background-color: #0056b3;
    }
  `

  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.innerHTML = jeeAdvancedStyles
    document.head.appendChild(styleElement)
    return () => styleElement.remove()
  }, [])

  const toggleCollegeInfo = (collegeIndex) => {
    const updatedExpandedColleges = [...expandedColleges]
    updatedExpandedColleges[collegeIndex] = !updatedExpandedColleges[collegeIndex]
    setExpandedColleges(updatedExpandedColleges)
  }

  const [showMore, setShowMore] = useState(cardData.map(() => false)); // Initialize correctly

  const toggleShowMore = (cardIndex) => {
    const updatedShowMore = [...showMore]; // Create a copy
    updatedShowMore[cardIndex] = !updatedShowMore[cardIndex]; // Toggle the value
    setShowMore(updatedShowMore); // Update the state
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const chunkedData = []; // Array to hold the data in chunks of 2

  // Chunk the data into pairs
  for (let i = 0; i < coursewise.length; i += 2) {
    chunkedData.push(coursewise.slice(i, i + 2));
  }

  const [formData, setFormData] = useState({
    rank: "",
    reservation: "",
    gender: "",
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryString = new URLSearchParams({
        rank: formData.rank,
        category: formData.reservation,
        gender: formData.gender,
      }).toString();

      const response = await fetch(
        `http://localhost:5000/api/jeeadvcollege/query?${queryString}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        // Navigate to the JEEADVResult page and pass the results via state
        navigate("/jeeadvresult", { state: { results: data.data } });
      } else {
        console.error(data.msg);
        // Optionally, navigate with an error message
        navigate("/jeeadvresult", { state: { error: data.msg || "No colleges found." } });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      navigate("/jeeadvresult", { state: { error: "An error occurred while fetching results." } });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="jee-main-container">
        <div className="jee-left-container">
        <h1 className="form-unique-title">JEE Advanced College Predictor 2025</h1>
      <div className="form-unique-container">
        <form onSubmit={handleSubmit} className="form-unique">
          <div className="form-unique-row">
            <div className="form-unique-group">
              <label htmlFor="rank" className="form-unique-label">
                Enter your rank
              </label>
              <input
                type="number"
                id="rank"
                name="rank"
                value={formData.rank}
                onChange={handleInputChange}
                className="form-unique-input"
                min="0"
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
              <label className="form-unique-label">Select Gender</label>
              <div className="form-unique-radio-group">
                <label htmlFor="male" className="form-unique-radio-label">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
                    className="form-unique-radio-input"
                    required
                  />
                  Male
                </label>
                <label htmlFor="female" className="form-unique-radio-label">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
                    className="form-unique-radio-input"
                    required
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="form-unique-button">
            Check Results
          </button>
        </form>
      </div>
      <div className="jeeAdvInfoSec  neet-info-section" style={{ lineHeight: '1.6' }}>
            <p style={{ marginBottom: '10px' }}>
              JEE Advanced College Predictor 2025 is a free tool that helps you predict your admission chances at IITs based on your JEE Advanced ranks without login. Collegedunia’s JEE Advanced College Predictor 2025 tool uses the previous year JoSAA opening and closing ranks and an advanced algorithm to get you a comprehensive list of IITs accepting your admission scores. You will have to enter your rank, gender, and category to predict your IIT institution and course based on JEE Advanced Marks vs Rank.
            </p>
            {isExpanded && (
              <div className="jeeAdvInfoSec  neet-info-section" style={{ lineHeight: '1.6' }}>
                <p style={{ marginBottom: '10px' }}>
                  JEE Advanced College Predictor 2025 covers list of IITs and IISc Bangalore that accept IIT JEE Adv ranks for B.Tech admission. Based on the previous year cutoff ranks, you need ranks below 300 to get CSE at top IITs. The Indian Institute of Technology (IIT) Kanpur will conduct the Joint Entrance Examination (JEE) Advanced 2025. The exam is scheduled for May 18, 2025. The JEE Advanced 2025 result will be declared on June 2nd. You can use your rank mentioned in the rank card to predict your admission chances. Some of the most in demand courses include:
                </p>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '10px' }}>
                  <li>Computer Science (CSE) is the most competitive branch, with closing ranks within 500 in most top IITs</li>
                  <li>Electrical & Electronics Engineering (ECE) and Mechanical Engineering (ME) see slightly higher ranks (1000 and above) but are highly sought after.</li>
                  <li>Newer IITs like IIT Bhilai, IIT Goa, and IIT Jammu have higher closing ranks but are gaining popularity.</li>
                </ul>
                <p style={{ marginBottom: '10px' }}>Given the high level of competition and previous year’s statistics, to secure a rank below 5000, you need a minimum score of 150+ in JEE Advanced. The analysis of past trends predict marks above 300 to get AIR below 10</p>
                <p style={{ marginBottom: '10px' }}>Quick Links:</p>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '10px', color: '#555' }}>
                  <li><a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>JEE Advanced Question Paper</a></li>
                  <li><a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>JEE Advanced Preparation Tips</a></li>
                  <li><a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>JEE Advanced Answer Key</a></li>
                  <li><a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>JEE Advanced Cutoff 2025 Expected</a></li>
                </ul>
                <div className="Cut-Off-Trends">
                  <p>In 2024, the qualifying cut-off for the Common Rank List (CRL) was 35%, a significant increase from 23.89% in 2023 and 15.28% in 2022. We have provided a table below for you to understand the changes over the years. The table shows the minimum percentage of aggregate marks required for inclusion in the rank list for the years 2024, 2023, and 2022:</p>
                  <div className="neet-neettable-container">
                    <table className="neet-marks-rank-neettable">
                      <thead>
                        <tr>
                          <th rowSpan="2" className="neet-neettable-header" style={{ backgroundColor: '#8bbdc4' }}>
                            Category
                          </th>
                        </tr>
                        <tr>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#7c9cab' }}>2024</th>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#6a8795' }}>2023</th>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#4c6c7b' }}>2022</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cutOffTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="neet-neettable-cell">{row.category}</td>
                            <td className="neet-neettable-cell">{row[2024]}</td>
                            <td className="neet-neettable-cell">{row[2023]}</td>
                            <td className="neet-neettable-cell">{row[2022]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ marginBottom: '10px' }}>Must Check:</p>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li><a href="#" style={{ color: '#007bff', textDecoration: 'none', listStyleType: 'disc', marginBottom: '10px' }}>IIT Bombay Cutoff</a></li>
                    <li><a href="#" style={{ color: '#007bff', textDecoration: 'none', listStyleType: 'disc', marginBottom: '10px' }}>IIT Indore Cutoff</a></li>
                    <li><a href="#" style={{ color: '#007bff', textDecoration: 'none', listStyleType: 'disc', marginBottom: '10px' }}>IIT Roorkee Cutoff</a></li>
                    <li><a href="#" style={{ color: '#007bff', textDecoration: 'none', listStyleType: 'disc', marginBottom: '10px' }}>IIT KGP Cut off</a></li>
                    <li><a href="#" style={{ color: '#007bff', textDecoration: 'none', listStyleType: 'disc', marginBottom: '10px' }}>IIT Hyderabad Cut off</a></li>
                  </ul>
                  <p>The closing ranks of few IITS are provided below:</p>
                  <div className="neet-neettable-container">
                    <table className="neet-marks-rank-neettable">
                      <thead>
                        <tr>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#8bbdc4' }}>Institute</th>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#7c9cab' }}>CSE Closing Rank (2023)</th>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#6a8795' }}>CSE Closing Rank (2022)</th>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#4c6c7b' }}>ECE Closing Rank (2023)</th>
                          <th className="neet-neettable-header" style={{ backgroundColor: '#6a879a' }}>ECE Closing Rank (2022)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {closingRanksTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="neet-neettable-cell">{row.institute}</td>
                            <td className="neet-neettable-cell">{row.cse2023}</td>
                            <td className="neet-neettable-cell">{row.cse2022}</td>
                            <td className="neet-neettable-cell">{row.ece2023}</td>
                            <td className="neet-neettable-cell">{row.ece2022}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="Predictor">
                    {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=56I2rxRPRLY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe> */}
                    <p>You can use the below-mentioned steps to use JEE Advanced college predictor 2025 free and know your admission chances at IITs.</p>
                    <ul style={{ listStyleType: 'disc', marginBottom: '10px' }}>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>Enter JEE Advanced 2025 All India Category Rank.</li>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>Select your reservation category and Gender.</li>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>Click on the ‘Check Result’ tab.</li>
                    </ul>
                    <p style={{ marginBottom: '10px', color: '#ff2020' }}>Looking for B.Tech Admissions, Also check: </p>
                    <table className="neet-neettable">
                      <tbody>
                        {Predictortabledata.map((row, rowIndex) => (
                          <tr key={rowIndex} className="neet-neettable-row">
                            {row.map((item, colIndex) => (
                              <td key={colIndex} className="neet-neettable-cell" style={{ backgroundColor: '#f9f9f9' }}>
                                {item}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <h3 style={{ color: '#7f92bd' }}>Can I get IIT with 18,000 rank?</h3>
                    <p>Getting into IIT with a rank of 18,000 is difficult for general category students. However, students from the SC, ST or OBC category have a chance of admission with 18,000 rank in JEE Advanced. </p>
                    <h3 style={{ color: '#7f92bd' }}>Is 7000 rank good in JEE Advanced?</h3>
                    <p>JEE Advanced with a 7,000 ranking is not a decent rank, but is it "good", it depends on what you target. If you are looking for admission to IITs:</p>
                    <ul>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>A general category ranking of 7000 You can find branches in new IIts (eg Iit Bhilai, Iit Goa, Iit Jammu, etc.).</li>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>You can also find branches such as metallurgy, bio-Engineering or environmental science in older Iits (eg Iit BHU, Iit Dhanbad, Iit Mandi, etc.).</li>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>CS, ECE or Mechanical in Top IIt -er (IIT Bombay, IIT Delhi, Iit Madras, etc.) are unlikely.</li>
                    </ul>
                    <h3 style={{ color: '#7f92bd' }}>What rank is 70 marks in JEE Advanced?</h3>
                    <p>If you get 70 in JEE Advanced, it is not considered a good score. You might end up getting a rank of almost 18,000 – 20,000. Here is an example:</p>
                    <div className="category-neettable-container">
                      <table className="category-score-neettable">
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: '#8bbdc4' }}>JEE Advanced Marks out of 360</th>
                            <th style={{ backgroundColor: '#7c9cab' }}>JEE Advanced Rank in Common Rank List (CRL)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, index) => (
                            <tr key={index}>
                              <td>{row.marks}</td>
                              <td>{row.CRL}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p style={{ marginBottom: '10px' }}> Also check: </p>
                    <ul>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px', color: '#555' }}><a href="#">JEE Advanced 2025: Supreme Court Allows Third Attempt for Candidates</a></li>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px', color: '#555' }}><a href="#">What is top 20 Percentile in JEE Main 2025?</a></li>
                      <li style={{ listStyleType: 'disc', marginBottom: '10px', color: '#555' }}><a href="#">Check branch-wise JoSAA closing ranks for all IITs</a></li>
                    </ul>
                    <h3 style={{ color: '#7f92bd' }}>JEE Advanced Cutoff 2025: Minimum Marks Required to Qualify IIT JEE</h3>
                    <div className="neet-neettable-container">
                      <table className="neet-marks-rank-neettable">
                        <thead>
                          <tr>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#8bbdc4' }}>Rank List</th>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#7c9cab' }}>Minimum % Marks in Each Subject</th>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#6a8795' }}>Minimum % Aggregate Marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {catagoryCutoffData.map((row, index) => (
                            <tr key={index}>
                              <td className="neet-neettable-cell">{row.rankList}</td>
                              <td className="neet-neettable-cell">{row.minSubject}</td>
                              <td className="neet-neettable-cell">{row.minAggregate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <h3 style={{ color: '#7f92bd' }}>JEE Advanced College Predictor by Marks</h3>
                    <p>The Collegedunia JEE Advanced College Predictor 2025 is a tool that uses your JEE ranks to predict IITs. We have provided a marks vs rank analysis below for those looking for JEE Advanced College Predictor by marks. This JEE Advanced marks vs rank analysis can be used to first calculate your ranks based on marks and thereafter predict IITs accepting those scores.

                      For example, let’s assume your JEE Advanced 2025 marks is 190 out of 360. You can use JEE Advanced marks vs rank predictor below to predict your rank. Based on the analysis below your JEE Advanced rank is expected to be below 500. You can now use JEE Advanced College Predictor 2025 free above, enter this rank, select your category and gender and click on ‘Check Result’. The tool will predict the list of IITs based on your JEE Advanced marks.</p>
                    <h3 style={{ color: '#7f92bd' }}>JEE Advanced Rank Predictor 2025</h3>
                    <p>JEE Advanced rank predictor 2025 tool can predict your ranks based on marks obtained in JEE Advanced 2025. We have provided you JEE Advanced marks vs rank predictor 2025 below which shows the expected ranks for your IIT JEE scores based on the previous year analysis.

                      For example, a 190+ score is required to get AIR below 500. With these marks and rank you can easily get CSE at any of the top IIT including Bombay, Delhi, Kanpur, Madras, and Roorkee.</p>
                    <h3 style={{ color: '#7f92bd' }}>JEE Advanced 2025 Expected Marks vs Rank</h3>
                    <div className="category-neettable-container">
                      <table className="category-score-neettable">
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: '#8bbdc4' }}>Ranks</th>
                            <th style={{ backgroundColor: '#7c9cab' }}>Expected Scores</th>
                          </tr>
                        </thead>
                        <tbody>
                          {marksVRanksData.map((row, index) => (
                            <tr key={index}>
                              <td>{row.expectedScore}</td>
                              <td>{row.rankRange}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <h3 style={{ color: '#7f92bd' }}>JEE Advanced Cut off for IIT</h3>
                    <div className="table-container">
                      <table className="neet-marks-rank-neettable"> {/* Use neet table class */}
                        <thead>
                          <tr>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#8bbdc4' }}>Courses</th> {/* Use neet header class */}
                            <th className="neet-neettable-header" style={{ backgroundColor: '#7c9cab' }}>IIT Bombay</th>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#6a8795' }}>IIT Delhi</th>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#4c6c7b' }}>IIT Madras</th>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#6a879a' }}>IIT Kanpur</th>
                            <th className="neet-neettable-header" style={{ backgroundColor: '#2f8886' }}>IIT Roorkee</th>
                          </tr>
                        </thead>
                        <tbody>
                          {AdvCutOof.map((row, index) => (
                            <tr key={index} className="neet-table-row"> {/* Use neet row class */}
                              <td className="neet-neettable-cell">{row.course}</td> {/* Use neet cell class */}
                              <td className="neet-neettable-cell">{row.iitBombay}</td>
                              <td className="neet-neettable-cell">{row.iitDelhi}</td>
                              <td className="neet-neettable-cell">{row.iitMadras}</td>
                              <td className="neet-neettable-cell">{row.iitKanpur}</td>
                              <td className="neet-neettable-cell">{row.iitRoorkee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p>For further category-wise and course-wise JEE Advanced cutoff you can check the links provided below.</p>
                    <div className="neet-neettable-container">
                      <table className="neet-neettable">
                        <tbody>
                          {chunkedData.map((rowChunk, rowIndex) => (
                            <tr key={rowIndex} className="neet-neettable-row">
                              {rowChunk.map((item, colIndex) => (
                                <td key={colIndex} className="neet-neettable-cell">
                                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.iit}
                                  </a>
                                </td>
                              ))}
                              {/* Add an empty cell if there's only one item in the chunk */}
                              {rowChunk.length === 1 && <td className="neet-neettable-cell"></td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
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
          </div>{/* info section ends here     */}
          <div>
            <h3>Top Colleges Accepting JEE Advance</h3>
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

          </div>{/*  card section ends here */}

          <div className="AcceptingNEETColleges">
            <h3>List of Colleges Accepting JEE Advance</h3>
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
                        <span className="neet-college-name">{college.college}</span>
                      </td>
                      <td>
                        <p className="collegeCourseName">B.Tech Computer Science Engineering</p>
                        <span className="neet-closing-rank"><strong>{college.cutoff}</strong></span>
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

        </div>{/*  end of left contianer */}
        <div className="jee-right-container">
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
                  <li><a href="#">JEE Advanced Overview</a></li>
                  <li><a href="#">JEE Advanced Exam Date</a></li>
                  <li><a href="#">JEE Advanced Syllabus</a></li>
                  <li><a href="#">JEE Advanced Question Papers</a></li>
                  <li><a href="#">JEE Advanced Preparation Tips</a></li>
                  <li><a href="#">JEE Advanced Results</a></li>
                  <li><a href="#">JEE Advanced Cutoff</a></li>
                  <li><a href="#">JEE Advanced Mock Test</a></li>
                  <li><a href="#">JEE Advanced News</a></li>
                  <li><a href="#">JEE Advanced Participating Colleges</a></li>

                </ul>
              </div>

              <div className="neet-exam-neetcard">
                <h3>Category wise exam pages</h3>
                <ul>
                  <li><a href="#">BE/B.Tech</a></li>
                  <li><a href="#">BS</a></li>
                  <li><a href="#">B.Arch</a></li>
                  <li><a href="#">MBBS</a></li>
                  <li><a href="#">B.SC</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>{/*  end fo right container */}
      </div>{/*  main contianer ends here */}
    </div>
  );
};

export default JEEADVForm;
