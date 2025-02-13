import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles1/NEETForm.css';
import Footer from '../components/Footer';
import { Album01Icon, VideoReplayIcon } from "hugeicons-react";

// const CollegeRanKList = require('../../public/assets/college-rank-list/NEET_College_List_Rank_Wise_01_e1704f98f7317beeff12f6c1d26bff77.webp');


import { useEffect } from 'react'; // React and hooks are imported here
import { Mail, MessageCircle, FileText } from "lucide-react"; // Separate imports for icons
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; // For making HTTP requests


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

// State for "Show More" toggles (one for each card)

const Predictortabledata = [
  ["Gujarat NEET College Predictor 2024", "Bihar NEET College Predictor 2024", "AYUSH NEET College Predictor 2024", "Karnataka NEET College Predictor 2024"],
  ["Rajasthan NEET College Predictor 2024", "Punjab NEET College Predictor 2024", "Haryana NEET College Predictor 2024", "Kerala NEET College Predictor 2024"],
  ["Andhra Pradesh NEET College Predictor 2024", "West Bengal NEET College Predictor 2024", "Odisha NEET College Predictor 2024", "UP NEET College Predictor 2024"]
];

const Mbbstabledata = [
  ["AIIMS Delhi", 57, 258, 255, 989, 1624, 1018],
  ["Maulana Azad Medical College, New Delhi", 85, 321, 397, 1225, 3171, 148285],
  ["VMMC, New Delhi", 107, 338, 461, 2084, 3252, 250990],
  ["JIPMER Puducherry", 277, 1350, 591, 3630, 11584, 49182],
  ["AIIMS Bhubaneswar", 491, 1617, 1017, 6199, 17653, "-"],
  ["Seth G.S. Medical College, Mumbai", 656, 2856, 2879, 14361, 15397, 345116],
  ["SMS Medical College Jaipur", 1057, 2013, 1884, 18444, 14079, 4411],
  ["AIIMS Patna", 1417, 2239, 2085, 15079, 39688, 78395],
  ["BJMC Pune", 1892, 4743, 4548, 30836, 57650, 146897],
  ["Kolkata Medical College", 2103, 4593, 3961, 14792, 57498, 560873]
];

const BDSTabledata = [
  { college: "Maulana Azad Institute of Dental Sciences, New Delhi", rank: 8862 },
  { college: "Government Dental College and Hospital, Jaipur", rank: 12117 },
  { college: "UP King George’s University of Dental Science, Lucknow", rank: 18319 },
  { college: "SCB Dental College and Hospital, Cuttack", rank: 19706 },
  { college: "Government Dental College and Hospital, Nagpur", rank: 21095 },
  { college: "Nair Hospital Dental College, Mumbai", rank: 24595 },
];
const CollegeTable = [
  {
    name: "All India Institute of Medical Sciences - [AIIMS], New Delhi",
    course: "M.B.B.S.",
    rank: "47",
    fees: "₹ 1,628 (1st Year Fees)",
  },
  {
    name: "Banaras Hindu University - [BHU], Varanasi",
    course: "M.B.B.S.",
    rank: "1098",
    fees: "₹ 13,410 (1st Year Fees)",
  },
  {
    name: "Kasturba Medical College - [KMC], Manipal",
    course: "M.B.B.S.",
    rank: "37269",
    fees: "₹ 70,88,500 (Total Fees)",
  },
  {
    name: "Jawaharlal Institute of Post Graduate Medical Education and Research - [JIPMER], Pondicherry",
    course: "M.B.B.S.",
    rank: "350",
    fees: "₹ 14,920 (1st Year Fees)",
  },
  {
    name: "King George’s Medical University - [KGMU], Lucknow",
    course: "M.B.B.S.",
    rank: "1352",
    fees: "₹ 54,900 (1st Year Fees)",
  },
  {
    name: "Maulana Azad Institute of Dental Sciences - [MAIDS], New Delhi",
    course: "BDS",
    rank: "4385",
    fees: "₹ 5,000 (1st Year Fees)",
  },
  {
    name: "All India Institute of Medical Sciences - [AIIMS], Patna",
    course: "M.B.B.S.",
    rank: "1297",
    fees: "₹ 5,856 (Total Fees)",
  },
  {
    name: "Institute of Medical Sciences - [IMS BHU], Varanasi",
    course: "M.B.B.S.",
    rank: "1014",
    fees: "₹ 13,410 (1st Year Fees)",
  },
  {
    name: "Manipal College of Dental Sciences - [MCODS], Mangalore",
    course: "BDS",
    rank: "247261",
    fees: "₹ 19,70,000 (Total Fees)",
  },
  {
    name: "Nair Hospital Dental College, Mumbai",
    course: "BDS",
    rank: "28068",
    fees: "₹ 1,03,900 (1st Year Fees)",
  },
  {
    name: "Government Dental College & Hospital, Mumbai",
    course: "BDS",
    rank: "31804",
    fees: "₹ 82,100 (1st Year Fees)",
  },
  {
    name: "Maulana Azad Medical College - [MAMC], New Delhi",
    course: "M.B.B.S.",
    rank: "145",
    fees: "₹ 4,445 (1st Year Fees)",
  },
  {
    name: "A B Shetty Memorial Institute of Dental Sciences - [ABSMIDS], Mangalore",
    course: "BDS",
    rank: "338859",
    fees: "₹ 5,13,500 (1st Year Fees)",
  },
  {
    name: "Vardhman Mahavir Medical College - [VMMC], New Delhi",
    course: "M.B.B.S.",
    rank: "141",
    fees: "₹ 50,000 (1st Year Fees)",
  },
  {
    name: "Govt. Dental College & Hospital - [GDCH], Nagpur",
    course: "	BDS",
    rank: "34085",
    fees: "₹ 58,350 (1st Year Fees)",
  },
  {
    name: "University College of Medical Sciences - [UCMS], New Delhi",
    course: "M.B.B.S.",
    rank: "331",
    fees: "₹ 30,750 (1st Year Fees)",
  },
  {
    name: "Regional Institute of Medical Sciences, Imphal",
    course: "M.B.B.S.",
    rank: "13316",
    fees: "₹ 17,700 (1st Year Fees)",
  },
  {
    name: "Sri Venkateswara Institute of Medical Sciences - [SVIMS], Tirupati",
    course: "M.B.B.S.",
    rank: "10579",
    fees: "₹ 67,900 (1st Year Fees)",
  },
  {
    name: "Jamia Millia Islamia University-[JMI], New Delhi",
    course: "BDS",
    rank: "29296",
    fees: "₹ 31,100 (1st Year Fees)",
  },
];

const MarksRankTabledata = [
  { marks: "720", rank: "1" },
  { marks: "716", rank: "3" },
  { marks: "715", rank: "4 - 19" },
  { marks: "712", rank: "20" },
  { marks: "711", rank: "21 - 26" },
  { marks: "710", rank: "27 - 50" },
  { marks: "707-699", rank: "32 - 129" },
  { marks: "698-688", rank: "130 - 380" },
  { marks: "687-679", rank: "381 - 842" },
  { marks: "678-668", rank: "850 - 1698" },
  { marks: "667-658", rank: "1700 - 2945" },
  { marks: "657-649", rank: "3065 - 4869" },
  { marks: "648-638", rank: "5073 - 7357" },
  { marks: "637-629", rank: "7643 - 10545" },
  { marks: "628-618", rank: "10877 - 14353" },
  { marks: "617-609", rank: "14766 - 18807" },
  { marks: "600 -598", rank: "19277 - 24533" },
];

const data = [
  { category: "Very Good", scoreRange: "650-700" },
  { category: "Good", scoreRange: "649-500" },
  { category: "Average", scoreRange: "510-430" },
  { category: "Low", scoreRange: "529-200" },
];


const NEETForm = () => {


  const [showMore, setShowMore] = useState(
    Array(cardData.length).fill(false) // Initialize with false for each card
  );

  // Toggle function for "Show More" per card
  const toggleShowMore = (index) => {
    setShowMore((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  const [showReadBtn, setShowReadBtn] = useState(true); // If it's a boolean state
  const [showInfo, setShowInfo] = useState(false);

  const [formData, setFormData] = useState({
    rank: "",
    city: "",
    reservation: "",
    course: "",
  });
  
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCategoryApi = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category');
        setCategories(response.data.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategoryApi();
  }, []);
  
  useEffect(() => {
    const fetchCoursesApi = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/course');
        setCourses(response.data.data);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };
    fetchCoursesApi();
  }, []);
  
  useEffect(() => {
    const fetchCityApi = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/city');
        setCities(response.data.data);
      } catch (err) {
        console.error('Error fetching cities:', err);
      }
    };
    fetchCityApi();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const selectedOption =
      name === "city"
        ? cities.find((city) => city._id === value)
        : name === "reservation"
          ? categories.find((res) => res._id === value)
          : courses.find((course) => course._id === value);
    setFormData({ ...formData, [name]: value });
  };
  const handleRankChange = (value) => {
    const newRank = Math.max(1, Number(formData.rank) + value);
    setFormData({ ...formData, rank: newRank });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.rank || !formData.city || !formData.reservation || !formData.course) {
      setError("Please fill all the fields before submitting the form.");
      return;
    }

    const queryParam = {
      rank: formData.rank,
      category: formData.reservation,
      course: formData.course,
      city: formData.city
    };
    
    console.log('Query parameters:', queryParam);
   
    try {
      const queryParams = new URLSearchParams(queryParam).toString();
      const response = await axios.get(
        `http://localhost:5000/api/college/filter?${queryParams}`
      );
      if (response.status === 200 && response.data.success) {
        setResults(response.data.data);
        navigate("/neet-result", { state: { results: response.data.data } });
      } else {
        setError(response.data.msg || "Failed to fetch colleges");
      }
    } catch (err) {
      setError("An error occurred while fetching results");
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="neet-main-container">
        <div className="neet-left-container">
          <h1 className="neet-form-unique-title" style={{ fontWeight: '600' }}>
            NEET College Predictor 2025: Predict Top MBBS/BDS Colleges based on your Rank and Scores
          </h1>
          <div className="neet-form-unique-container" >
            <form onSubmit={handleSubmit} className="form-unique" style={{gap: '1.5rem'}}>
              <div className="neet-form-unique-row">
                <div className="neet-form-unique-group">
                  <label htmlFor="rank" className="form-unique-label">
                    Enter your rank
                  </label>
                  <input
                    type="number"
                    id="rank"
                    name="rank"
                    value={formData.rank}
                    onChange={handleInputChange}
                    className="neet-form-unique-input"
                    min="1"
                  />
                </div>
                <div className="neet-form-unique-group">
                  <label htmlFor="reservation" className="neet-form-unique-label">
                    Reservation Category
                  </label>
                  <select
                    id="reservation"
                    name="reservation"
                    value={formData.reservation}
                    onChange={handleSelectChange}
                    className="neet-form-unique-select"
                  >
                    <option value="">Select Reservation</option>
                    {categories && categories.length > 0 ? (
                      categories.map((res) => (
                        <option key={res._id} value={res._id}>
                          {res.categoryname}
                        </option>
                      ))
                    ) : (
                      <option disabled>No categories available</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="neet-form-unique-row">
                <div className="neet-form-unique-group">
                  <label htmlFor="city" className="form-unique-label">
                    Select City
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleSelectChange}
                    className="neet-form-unique-select"
                  >
                    <option value="">Select City</option>
                    {cities && cities.length > 0 ? (
                      cities.map((city) => (
                        <option key={city._id} value={city._id}>
                          {city.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>No cities available</option>
                    )}
                  </select>
                </div>
                <div className="neet-form-unique-group">
                  <label htmlFor="course" className="form-unique-label">
                    Select Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleSelectChange}
                    className="neet-form-unique-select"
                  >
                    <option value="">Select Course</option>
                    {courses && courses.length > 0 ? (
                      courses.map((course) => (
                        <option key={course._id} value={course._id}>
                          {course.coursename}
                        </option>
                      ))
                    ) : (
                      <option disabled>No courses available</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="check-result-container">
                <button type="submit" className="neet-form-unique-button">
                  Check results
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>


          <div className="neet-info-section">
            <p>
              NEET College Predictor 2024: <strong>NEET 2024 result is out on June 4, 2024.</strong>{' '}
              Using our college predictor tool, you can predict your admission chances to the top MBBS/ BDS/ BAMS/ BHMS/ BUMS/ B.Sc Nursing colleges based on NEET scores. Just input the AIR obtained in the exam, your category and course preference to use NEET 2024 college predictor.
            </p>
          </div>
          {!showInfo && (
            <button
              style={{
                display: 'block', // Ensures the button takes up full width
                width: '100%',
                textAlign: 'center',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#4a90e2', // Light blue text
                backgroundColor: '#f6f7f7', // Very light gray background
                border: 'none',
                padding: '0.8rem 0',
                cursor: 'pointer',
                margin: '0.5rem 0 0', // Reduced top margin
              }}
              onClick={() => setShowInfo(true)}
              onMouseOver={(e) => {
                e.target.style.textDecoration = 'underline'; // Adds underline on hover
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = 'none'; // Removes underline
              }}
            >
              Read More
            </button>
          )}
          {showInfo && (
            <div className="neet-info-section">
              <p>
                <strong>
                  NEET College Predictor 2024 provides results based on NEET Cut off data of 560 MBBS, 246 BDS, 36 BAMS, 30 BHMS, 5 BUMS, and 17 B.Sc Nursing colleges
                </strong>
                . NEET cut off for admission to medical/ dental colleges is the closing rank obtained from the seat allotment result of NEET counselling. In 2023, the round 1 closing ranks for AIIMS Delhi and VMMC Delhi were 57 and 107 respectively. Our NEET college predictor uses this data to provide you with the most accurate results.
              </p>
              {/* <div className='CollegeRanKList'>
                <h3>NEET College List Rank-wise</h3>
                <img src={CollegeRanKList} alt="unable to render the image"></img>
              </div> */}
              <div className="predictor-info">
                <h3 style={{ color: '#7f92bd' }}>State-wise NEET College Predictor 2024</h3>
                <div className="neet-neettable-container">
                  <table className="neet-neettable">
                    <tbody>
                      {Predictortabledata.map((row, rowIndex) => (
                        <tr key={rowIndex} className="neet-neettable-row">
                          {row.map((item, colIndex) => (
                            <td key={colIndex} className="neet-neettable-cell">
                              {item}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mbbs-info">
                <h3 style={{ color: '#7f92bd' }}>NEET UG Cutoff for MBBS Government Colleges</h3>
                <p>
                  We have provided below NEET UG Cutoff for MBBS Government Colleges. Based on previous year cutoff trends, <strong>you need NEET 2024 rank below 100 to get admission to AIIMS Delhi & MAMC Delhi and rank below 200 for MBBS admission to VMMC Delhi & JIPMER Puducherry.</strong> NEET Cutoff for MBBS Government Colleges below is the last year closing ranks for 15% AIQ Seats.
                </p>
                <div className="neet-neettable-container">
                  <table className="neet-mbbs-neettable">
                    <thead>
                      <tr>
                        <th className="neet-neettable-header">College Name</th>
                        <th className="neet-neettable-header">General</th>
                        <th className="neet-neettable-header">EWS</th>
                        <th className="neet-neettable-header">OBC</th>
                        <th className="neet-neettable-header">SC</th>
                        <th className="neet-neettable-header">ST</th>
                        <th className="neet-neettable-header">PwD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Mbbstabledata.map((row, rowIndex) => (
                        <tr key={rowIndex} className="neet-neettable-row">
                          {row.map((item, colIndex) => (
                            <td key={colIndex} className="neet-neettable-cell">{item}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bds-info">
                <h3 style={{ color: '#7f92bd' }}>NEET UG Cutoff for BDS Government Colleges</h3>
                <p>
                  NEET UG Cutoff for BDS Government Colleges usually ranges between 762 to 20,041. You can check the table below to check NEET BDS cutoff for top Government Colleges.
                </p>
                <div className="BDS-neettable-container">
                  <table className="BDS-styled-neettable">
                    <thead>
                      <tr>
                        <th>BDS Government College</th>
                        <th>Closing Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BDSTabledata.map((row, index) => (
                        <tr key={index}>
                          <td>{row.college}</td>
                          <td>{row.rank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="predictScore-info">
                <h3>How to predict colleges with NEET scores?</h3>
                <p>
                  NEET college predictor 2024 tool provided above uses your rank in NEET UG exam to predict top medical colleges for admission. However, to predict colleges with NEET scores, you can use the NEET 2024 marks vs rank analysis provided below.
                </p>
                <p>
                  Based on the NEET 2024 marks vs rank analysis, you can calculate the equivalent rank for your NEET score.
                </p>
                <p>
                  For example, let’s assume you score a NEET score of 650. Based on the marks vs rank analysis below, your equivalent NEET rank is expected to be between 3065-4869. You can now enter a rank in between this range in the NEET college predictor tool above and predict colleges with NEET scores.
                </p>
              </div>
              <div className="marksVsRanks">
                <h3 style={{ color: '#7f92bd' }}>NEET College Predictor 2024: Marks vs Rank</h3>
                <p>
                  Given below is the NEET Marks vs Rank analysis based on this year’s result data to help candidates get an idea of the rank range they can expect based on their marks.
                </p>
                <div className="neet-neettable-container">
                  <table className="neet-marks-rank-neettable">
                    <thead>
                      <tr>
                        <th>Marks</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MarksRankTabledata.map((row, index) => (
                        <tr key={index}>
                          <td>{row.marks}</td>
                          <td>{row.rank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="scoreRange">
                <h3 style={{ color: '#7f92bd' }}>What is a Good Score in NEET 2024?</h3>
                <p>
                  650 to 710 is a very good score in NEET 2024. With these scores you can easily get MBBS admission to top medical colleges such as AIIMS, JIPMER, MAMC, VMMC, etc.
                </p>
                <p>
                  430-510 is a good score for admission to private medical colleges in India. However, 550-650 scores can easily get you any government MBBS/ BDS college. Based on a previous year analysis we have provided you a range of good score in NEET 2024 for MBBS/ BDS admissions. You can also check NEET college list rank-wise in the article below.
                </p>
                <div className="category-neettable-container">
                  <table className="category-score-neettable">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Score Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr key={index}>
                          <td>{row.category}</td>
                          <td>{row.scoreRange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {showInfo && (
                <button
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    color: '#4a90e2',
                    backgroundColor: '#f6f7f7',
                    border: 'none',
                    padding: '0.8rem 0',
                    cursor: 'pointer',
                    margin: '0.5rem 0 0', // Reduced top margin
                  }}
                  onClick={() => setShowInfo(false)}
                  onMouseOver={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  Read Less
                </button>
              )}
            </div>
          )}

          <div className="acceptingColleges">
            <h3>Top Medical colleges accepting NEET</h3>

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
                    <button
                      onClick={() => toggleShowMore(cardIndex)}
                      className="neetcard-toggle"
                    >
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
          <div className="AcceptingNEETColleges">
            <h3>List of Colleges Accepting NEET</h3>
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
                  {CollegeTable.map((college, index) => (
                    <tr key={index}>
                      <td>
                        <span className="neet-college-name">{college.name}</span>
                      </td>
                      <td>
                        <strong>{college.course}</strong>
                        <br />
                        <span className="neet-closing-rank">Closing rank 2024 - {college.rank}</span>
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
        </div>
        <div className="neet-right-container">
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
                  <li><a href="#">NEET Overview</a></li>
                  <li><a href="#">NEET Result</a></li>
                  <li><a href="#">NEET Cut off</a></li>
                  <li><a href="#">NEET Question Papers</a></li>
                  <li><a href="#">NEET Syllabus</a></li>
                  <li><a href="#">NEET Mock Test</a></li>
                  <li><a href="#">NEET City Intimation Slip</a></li>
                  <li><a href="#">NEET Preparation Tips</a></li>
                  <li><a href="#">NEET News</a></li>
                  <li><a href="#">NEET Q&A</a></li>
                  <li><a href="#">NEET Participating Colleges</a></li>
                </ul>
              </div>

              <div className="neet-exam-neetcard">
                <h3>Category wise exam pages</h3>
                <ul>
                  <li><a href="#">MBBS</a></li>
                  <li><a href="#">BUMS</a></li>
                  <li><a href="#">BHMS</a></li>
                  <li><a href="#">BAMS</a></li>
                  <li><a href="#">BDS</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <Footer />

    </div>

  );
};

export default NEETForm;
