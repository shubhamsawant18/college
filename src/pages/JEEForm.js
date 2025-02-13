import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import "../assets/styles1/CATForm.css"; 
import "../assets/styles1/JEEForm.css"; 
import axios from 'axios';
import { Album01Icon, VideoReplayIcon } from "hugeicons-react";
import { Mail, MessageCircle, FileText } from "lucide-react";
import Footer from '../components/Footer';
import { collapseClasses } from "@mui/material";

const MarksVsPercentile = [
  { marksRange: "288-294", percentileRange: "99.9983 - 99.9989" },
  { marksRange: "280-284", percentileRange: "99.9962 - 99.9979" },
  { marksRange: "270-279", percentileRange: "99.9903 - 99.9942" },
  { marksRange: "252-268", percentileRange: "99.9523 - 99.9902" },
  { marksRange: "231-249", percentileRange: "99.8739 - 99.9503" },
  { marksRange: "215-230", percentileRange: "99.7452 - 99.8706" },
  { marksRange: "202-214", percentileRange: "99.5750 - 99.7393" },
  { marksRange: "190-200", percentileRange: "99.3932 - 99.5602" },
  { marksRange: "175-189", percentileRange: "99.0215 - 99.3488" },
  { marksRange: "161-174", percentileRange: "98.5282 - 98.9967" },
  { marksRange: "149-159", percentileRange: "98.0746 - 98.4980" },
  { marksRange: "132-148", percentileRange: "97.0110 - 97.9751" },
  { marksRange: "120-131", percentileRange: "96.0687 - 96.9372" },
];

const Predictortabledata = [
  ["JAC Delhi College Predictor", "IIT JEE (Advanced) College Predictor", "JAC Chandigarh College Predictor"],
];

const PercentileVsRank = [
  { percentile: "99.9", marksRange: "278-215" },
  { percentile: "99.8", marksRange: "270-197" },
  { percentile: "99.7", marksRange: "265-184" },
  { percentile: "99.6", marksRange: "259-178" },
  { percentile: "99.5", marksRange: "254-171" },
  { percentile: "99.4", marksRange: "250-165" },
  { percentile: "99.3", marksRange: "245-162" },
  { percentile: "99.2", marksRange: "242-158" },
  { percentile: "99.1", marksRange: "239-154" },
  { percentile: "99", marksRange: "236-151" },
  { percentile: "98.5", marksRange: "223-139" },
  { percentile: "98", marksRange: "213-131" },
  { percentile: "97.5", marksRange: "204-124" },
];

const MarksvsPercentilevsRank = [
  { marksRange: "222-258", percentile: "99.9", rank: "<825" },
  { marksRange: "208-241", percentile: "99.8", rank: "<1650" },
  { marksRange: "196-231", percentile: "99.7", rank: "<2470" },
  { marksRange: "190-228", percentile: "99.6", rank: "<3300" },
  { marksRange: "174-217", percentile: "99.5", rank: "<4120" },
  { marksRange: "170-210", percentile: "99.4", rank: "<4950" },
  { marksRange: "165-205", percentile: "99.3", rank: "<5770" },
  { marksRange: "161-200", percentile: "99.2", rank: "<8590" },
  { marksRange: "158-196", percentile: "99.1", rank: "<7420" },
  { marksRange: "155-193", percentile: "99", rank: "<8240" },
  { marksRange: "146-176", percentile: "98.5", rank: "<12360" },
  { marksRange: "132-166", percentile: "98", rank: "<16480" },
  { marksRange: "125-155", percentile: "97.5", rank: "<20600" },
];
const instituteData =
  [
    { name: "NITs & IIEST Shibpur", count: 32 },
    { name: "IIITs", count: 26 },
    { name: "Other-GFTIs", count: 33 },
  ];

const nitRankingsAndCutoffs = [
  {
    nirfRanking: 9,
    collegeName: "NIT Trichy",
    cutoffRange: "358 - 29390",
    cutoffText: "NIT Trichy JEE Main Cut off",
    link: "/college/nit-trichy", // Added link
  },
  {
    nirfRanking: 12,
    collegeName: "NIT Surathkal",
    cutoffRange: "3109 - 32713",
    cutoffText: "NIT Surathkal JEE Main Cut off",
    link: "/college/nit-surathkal", // Added link
  },
  {
    nirfRanking: 16,
    collegeName: "NIT Rourkela",
    cutoffRange: "379 - 40386",
    cutoffText: "NIT Rourkela JEE Main Cut off",
    link: "/college/nit-rourkela", // Added link
  },
  {
    nirfRanking: 21,
    collegeName: "NIT Warangal",
    cutoffRange: "2971 - 35027",
    cutoffText: "NIT Warangal JEE Main Cut off",
    link: "/college/nit-warangal", // Added link
  },
  {
    nirfRanking: 23,
    collegeName: "NIT Calicut",
    cutoffRange: "163 - 39074",
    cutoffText: "NIT Calicut JEE Main Cut off",
    link: "/college/nit-calicut", // Added link
  },
  {
    nirfRanking: 37,
    collegeName: "NIT Jaipur",
    cutoffRange: "1551 - 11385",
    cutoffText: "NIT Jaipur JEE Main Cut off",
    link: "/college/nit-jaipur", // Added link
  },
  {
    nirfRanking: 40,
    collegeName: "NIT Silchar",
    cutoffRange: "21683 - 62165",
    cutoffText: "NIT Silchar JEE Main Cut off",
    link: "/college/nit-silchar", // Added link
  },
  {
    nirfRanking: 41,
    collegeName: "NIT Nagpur",
    cutoffRange: "626 - 48866",
    cutoffText: "NIT Nagpur JEE Main Cut off",
    link: "/college/nit-nagpur", // Added link
  },
  {
    nirfRanking: 43,
    collegeName: "NIT Durgapur",
    cutoffRange: "8875 - 43804",
    cutoffText: "NIT Durgapur JEE Main Cut off",
    link: "/college/nit-durgapur", // Added link
  },
  {
    nirfRanking: 46,
    collegeName: "NIT Jalandhar",
    cutoffRange: "14058 - 67372",
    cutoffText: "NIT Jalandhar JEE Main Cut off",
    link: "/college/nit-jalandhar", // Added link
  },
];

const iiitData = {
  "IIIT Cutoffs": [
    {
      collegeName: "IIIT Gwalior",
      cutoffRange: "6995 - 15923",
      cutoffText: "IIIT Gwalior JEE Main Cut off",
      link: "/college/iiit-gwalior" // Example link
    },
    {
      collegeName: "IIIT Allahabad",
      cutoffRange: "4817 - 8428",
      cutoffText: "IIIT Allahabad JEE Main Cut off",
      link: "/college/iiit-allahabad" // Example link
    },
    {
      collegeName: "IIIT Dharwad",
      cutoffRange: "28403 - 33435",
      cutoffText: "IIIT Dharwad JEE Main Cut off",
      link: "/college/iiit-dharwad" // Example link
    },
    {
      collegeName: "IIIT Bhagalpur",
      cutoffRange: "32166 - 41629",
      cutoffText: "IIIT Bhagalpur JEE Main Cut off",
      link: "/college/iiit-bhagalpur" // Example link
    },
    {
      collegeName: "IIIT Jabalpur",
      cutoffRange: "13100 - 41945",
      cutoffText: "IIIT Jabalpur JEE Main Cut off",
      link: "/college/iiit-jabalpur" // Example link
    },
    {
      collegeName: "IIITDM Kancheepuram",
      cutoffRange: "14605 - 25598",
      cutoffText: "IIITDM Kancheepuram JEE Main Cut off",
      link: "/college/iiitdm-kancheepuram" // Example link
    },
    {
      collegeName: "IIIT Nagpur",
      cutoffRange: "21070 - 30978",
      cutoffText: "IIIT Nagpur JEE Main Cut off",
      link: "/college/iiit-nagpur" // Example link
    },
    {
      collegeName: "IIIT Pune",
      cutoffRange: "14966 - 18945",
      cutoffText: "IIIT Pune JEE Main Cut off",
      link: "/college/iiit-pune" // Example link
    },
    {
      collegeName: "IIIT Vadodara",
      cutoffRange: "19404 - 28849", // Corrected cutoff range
      cutoffText: "IIIT Vadodara JEE Main Cut off",
      link: "/college/iiit-vadodara" // Example link
    },
    {
      collegeName: "IIIT Guwahati",
      cutoffRange: "18011 - 25806", // Corrected cutoff range
      cutoffText: "IIIT Guwahati JEE Main Cut off",
      link: "/college/iiit-guwahati" // Example link
    },
  ],
};

const counsellingData = {
  "State Counselling": [
    {
      state: "Uttar Pradesh",
      counselling: "UPTAC BTech",
      predictorLink: "/predictor/up", // Example link
    },
    {
      state: "Haryana",
      counselling: "HSTES BTech",
      predictorLink: "/predictor/haryana", // Example link
    },
    {
      state: "Uttarakhand",
      counselling: "UKTU BTech",
      predictorLink: null, // No link
    },
    {
      state: "Odisha",
      counselling: "OJEE B.Tech",
      predictorLink: "/predictor/odisha", // Example link
    },
    {
      state: "Punjab",
      counselling: "Punjab B.Tech",
      predictorLink: null, // No link
    },
    {
      state: "Delhi",
      counselling: "JAC Delhi",
      predictorLink: "/predictor/delhi", // Example link
    },
    {
      state: "Chandigarh",
      counselling: "JAC Chandigarh",
      predictorLink: "/predictor/chandigarh", // Example link
    },
    {
      state: "Maharashtra",
      counselling: "MHT CAP Counselling",
      predictorLink: "/predictor/maharashtra", // Example link
    },
  ],
};

const nitFeesData = {
  "NIT Fees": [
    { rank: 9, name: "NIT Trichy", fees: "1.75 LPA" },
    { rank: 12, name: "NIT Surathkal", fees: "1.57 LPA" },
    { rank: 16, name: "NIT Rourkela", fees: "2.23 LPA" },
    { rank: 21, name: "NIT Warangal", fees: "2.07 LPA" },
    { rank: 23, name: "NIT Calicut", fees: "3.08 LPA" },
    { rank: 37, name: "MNIT Jaipur", fees: "1.81 LPA" },
    { rank: 40, name: "NIT Silchar", fees: "1.39 LPA" },
    { rank: 41, name: "VNIT Nagpur", fees: "1.49 LPA" },
    { rank: 43, name: "NIT Durgapur", fees: "1.79 LPA" },
    { rank: 46, name: "NIT Jalandhar", fees: "85,680 PA" },
  ],
};

const universityFeesData = {
  "University Fees": [
    { rank: 19, name: "Amrita Vishwa Vidyapeetham, Coimbatore", fees: "3.5-6 LPA" },
    { rank: 20, name: "Thapar Institute of Engineering and Technology, Patiala", fees: "4-6 LPA" },
    { rank: 27, name: "Siksha 'O' Anusandhan, Bhubaneswar", fees: "2.3-2.9 LPA" },
    { rank: 34, name: "Shanmugha Arts Science Technology & Research Academy, Thanjavur", fees: "1.67 LPA" },
    { rank: 36, name: "Kalasalingam Academy of Research and Education, Srivilliputtur", fees: "1.2-1.4 LPA" },
    { rank: 38, name: "Chandigarh University, Punjab", fees: "2-2.7 LPA" },
    { rank: 50, name: "Lovely Professional University, Punjab", fees: "2.8-3.4 LPA" },
    { rank: 54, name: "UPES, Dehradun", fees: "2.6-4 LPA" },
    { rank: 68, name: "Banasthali Vidyapith, Rajasthan", fees: "1.54 LPA" },
    { rank: 76, name: "Manipal University Jaipur", fees: "3.3-3.9 LPA" },
  ],
};

const acceptingCollegeList = [
  {
    name: "NIT Trichy, Tiruchirappalli",
    link: "/college/nit-trichy", // Replace with actual link
    course: "B.Arch",
    closingRank: "2024-50",
    fees: "₹1,80,000 (1st Year Fees)",
  },
  {
    name: "National Institute of Technology (NITK), Surathkal",
    link: "/college/nitk-surathkal", // Replace with actual link
    course: "B.Tech Computer Science Engineering",
    closingRank: "2024-1423",
    fees: "₹1,63,700 (1st Year Fees)",
  },
  {
    name: "NIT Warangal, Warangal",
    link: "/college/nit-warangal", // Replace with actual link
    course: "B.Tech Computer Science Engineering",
    closingRank: "2024-1899",
    fees: "₹2,07,000 (1st Year Fees)",
  },
  {
    name: "Indian Institute of Information Technology - [IIIT], Allahabad",
    link: "/college/iiit-allahabad", // Replace with actual link
    course: "B.Tech Information Technology",
    closingRank: "2024-4778",
    fees: "₹1,77,380 (1st Year Fees)",
  },
  {
    name: "Netaji Subhas University of Technology - [NSUT], New Delhi",
    link: "/college/nsut-new-delhi", // Replace with actual link
    course: "B.Tech Artificial Intelligence",
    closingRank: "2024-2473",
    fees: "₹2,40,000 (1st Year Fees)",
  },
  {
    name: "MNNIT Allahabad - Motilal Nehru National Institute of Technology - [MNNIT], Allahabad",
    link: "/college/mnnit-allahabad", // Replace with actual link
    course: "B.Tech Computer Science Engineering",
    closingRank: "2024-3975",
    fees: "₹1,68,000 (1st Year Fees)",
  },
  {
    name: "National Institute of Technology- [NITC], Calicut",
    link: "/college/nitc-calicut", // Replace with actual link
    course: "B.Arch",
    closingRank: "2024-138",
    fees: "₹2,04,286 (1st Year Fees)",
  },
  {
    name: "National Institute of Technology - [NIT], Rourkela",
    link: "/college/nit-rourkela", // Replace with actual link
    course: "B.Arch",
    closingRank: "2024-255",
    fees: "₹2,25,500 (1st Year Fees)",
  },
  {
    name: "National Institute of Technology [NIT], New Delhi",
    link: "/college/nit-new-delhi", // Replace with actual link
    course: "B.Tech Aerospace Engineering",
    closingRank: "2024-6370",
    fees: "₹1,61,600 (1st Year Fees)",
  },
  {
    name: "Delhi Technological University - [DTU], New Delhi",
    link: "/college/dtu-new-delhi", // Replace with actual link
    course: "B.Tech Computer Engineering",
    closingRank: "2024-3440",
    fees: "₹2,36,700 (1st Year Fees)",
  },
  {
    name: "Indraprastha Institute of Information Technology - [IIITD], New Delhi",
    link: "/college/iiitd-new-delhi", // Replace with actual link
    course: "B.Tech Computer Science Engineering",
    closingRank: "2024-1223",
    fees: "₹4,62,000 (1st Year Fees)",
  },
];

const cardData = [
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NIT Trichy
    title: "NIT Trichy",
    subtitle: "Tiruchirappalli, Tamil Nadu",
    badge: "AICTE ACCREDITED",
    rankings: ["#16 out of 300 in NIRF", "#4 out of 30 in India Today"],
    courses: [
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 1, General, OS, Closing rank-1019",
        fee: "₹1,80,000",
        feeDesc: "1st Year Fees",
      },
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 2, General, OS, Closing rank-1128",
        fee: "₹1,80,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NIT Surathkal
    title: "National Institute of Technology - [NITK]",
    subtitle: "Surathkal, Karnataka",
    badge: "AICTE ACCREDITED",
    rankings: ["#17 out of 300 in NIRF", "#15 out of 30 in India Today"],
    courses: [
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 1, General, OS, Closing rank-1423",
        fee: "₹1,63,700",
        feeDesc: "1st Year Fees",
      },
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 2, General, OS, Closing rank-1423", // Corrected rank
        fee: "₹1,63,700",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NIT Warangal
    title: "NIT Warangal",
    subtitle: "Warangal, Telangana",
    badge: "AICTE ACCREDITED",
    rankings: ["#21 out of 300 in NIRF", "#40 out of 254 in India Today"],
    courses: [
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 1, General, OS, Closing rank-1899",
        fee: "₹2,07,000",
        feeDesc: "1st Year Fees",
      },
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 2, General, OS, Closing rank-2011",
        fee: "₹2,07,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // IIIT Allahabad
    title: "Indian Institute of Information Technology - [IIIT]",
    subtitle: "Allahabad, Uttar Pradesh",
    badge: "AICTE ACCREDITED",
    rankings: ["#87 out of 300 in NIRF", "#10 out of 31 in India Today"],
    courses: [
      {
        title: "B.Tech Information Technology",
        desc: "Round 1, General, AI, Closing rank-4778",
        fee: "₹1,77,380",
        feeDesc: "1st Year Fees",
      },
      {
        title: "B.Tech Information Technology",
        desc: "Round 2, General, AI, Closing rank-4854",
        fee: "₹1,77,380",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // NSUT
    title: "Netaji Subhas University of Technology - [NSUT]",
    subtitle: "New Delhi, Delhi NCR",
    badge: "AICTE ACCREDITED",
    rankings: ["#57 out of 300 in NIRF", "#7 out of 31 in India Today"],
    courses: [
      {
        title: "B.Tech Artificial Intelligence",
        desc: "Round 1, General, OS, Closing rank-2473",
        fee: "₹2,40,000",
        feeDesc: "1st Year Fees",
      },
      {
        title: "B.Tech Data Science",
        desc: "Round 1, General, OS, Closing rank-3634",
        fee: "₹2,40,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/11128_UCMS_New.jpg?h=260&w=360&mode=crop", // MNNIT Allahabad
    title: "MNNIT Allahabad - Motilal Nehru National Institute of Technology - [MNNIT]",
    subtitle: "Allahabad, Uttar Pradesh",
    badge: "AICTE ACCREDITED",
    rankings: ["#60 out of 300 in NIRF", "#14 out of 30 in India Today"],
    courses: [
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 1, General, DS, Closing rank-3975",
        fee: "₹1,68,000",
        feeDesc: "1st Year Fees",
      },
      {
        title: "B.Tech Computer Science Engineering",
        desc: "Round 2, General, OS, Closing rank-4050",
        fee: "₹1,68,000",
        feeDesc: "1st Year Fees",
      },
    ],
  },
];

const JEEForm = () => {

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
    rank: "",
    reservation: "",
    course: "",
    district: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const queryParams = {
      rank: formData.rank,
      category: formData.reservation,
      courses: formData.course,
      district: formData.district,
      gender: formData.gender
    };

    console.log("Query Params:", queryParams); // Debugging

    try {
      const response = await axios.get('http://localhost:5000/api/jeemcollege/query', { params: queryParams });

      console.log('API Response:', response.data); // Debugging API response

      if (response.data.success && response.data.data.length > 0) {
        navigate("/jeeresult", { state: { results: response.data.data } });
      } else {
        navigate("/jeeresult", { state: { error: "No results found" } });
      }
    } catch (err) {
      console.error('Error fetching results:', err);
      setError('Error fetching results');
      navigate("/jeeresult", { state: { error: "An error occurred while fetching results." } });
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      <Navbar />
      <div className="jee-main-container">
        <div className="jee-left-container">
          <h1 className="form-unique-title">
            JEE Main College Predictor 2025-Predict your Admission Chances at NIT, IIITs, Top Govt B.Tech Colleges
          </h1>
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
                  <label htmlFor="course" className="form-unique-label">
                    Select Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="form-unique-select"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="B.E/BTech">B.E/BTech</option>
                    <option value="B.Pharmacy">B.Pharmacy</option>
                  </select>
                </div>
                <div className="form-unique-group">
                  <label htmlFor="district" className="form-unique-label">
                    Select District
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="form-unique-select"
                    required
                  >
                    <option value="">Select District</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Satara">Satara</option>
                  </select>
                </div>
              </div>
              <div className="form-unique-row">
                <div className="form-unique-group">
                  <label className="form-unique-label">
                    Select Gender
                  </label>
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
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div>
          <div className="jee-info-section">

            <p>The <b> JEE Main College Predictor 2025</b> is a cutting-edge tool designed to help students estimate their chances of securing admission to engineering colleges based on their JEE Main performance.<b> JEE Main College Predictor 2025 covers the data of 1623 B.Tech and 53 B.Arch colleges. Candidates just need to enter their rank/ percentile and gender to get the results through the JEE Main College Predictor.</b> Based on previous year trends, candidates with JEE Main rank below 5000 can get admission to the top five NITs in India. Check JEE Main Cut off</p>
            {isExpanded && (
              <div className="jeeContentSection">
                <ul>
                  <li>Collegedunia’s predictor tool stands out with its ±10% accuracy rate, achieved by analyzing multiple data points, including past cut-off trends, reservation policies, and seat matrices.</li>
                  <li>In JEE Main 2024, the predictor successfully estimated closing ranks for top NIT branches like Computer Science at NIT Surathkal (closing rank: ~3,500 for the General category) with remarkable precision.</li>
                </ul>
                <p style={{ color: '#ff1919' }}>Latest News JEE Main College Predictor</p>
                <ul>
                  <li><a href="#" className="jeeATag">JEE Main 2025 Marks vs Rank</a></li>
                  <li><a href="#" className="jeeATag">JEE Main Result 2025 Date, Check Cutoffs, Percentiles, Ranks, and Toppers</a></li>
                </ul>
                <div className="markPerc">
                  <h3 style={{ fontSize: '1.25rem', color: '#363636', fontWeight: '700' }}>Expected Marks vs Percentile for JEE Main 2025</h3>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>Marks Range (out of 300)</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>Percentile Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        {MarksVsPercentile.map((row, index) => (
                          <tr key={index}>
                            <td>{row.marksRange}</td>
                            <td>{row.percentileRange}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <ul>
                    <li><p><b>Normalization Process:</b> NTA's normalization ensures that variations in difficulty levels across different sessions do not disadvantage any candidate. This process translates raw scores into percentile scores, indicating the percentage of candidates who scored equal to or below a particular score.</p></li>
                    <li><p><b>Non-Linear Relationship:</b> The marks vs percentile relationship is non-linear, especially at higher scores. Small increments in marks can lead to significant jumps in percentile, highlighting the competitive nature of the exam.</p></li>
                    <li><p><b>Strategic Preparation:</b> Understanding this correlation helps candidates set target scores to achieve desired percentiles, aiding in focused preparation and goal setting.</p></li>
                  </ul>
                  <p style={{ color: '#ff1919' }}>Also Check:</p>
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
                </div>
                <div className="Predictor">
                  <h3>How To Use JEE Main College Predictor 2025?</h3>
                  <p>To use Collegedunia’s JEE Main College Predictor tool, you just need to follow a few simple steps. You can use JEE Main college predictor by entering either the percentile score or the rank obtained in JEE Mains.</p>
                  <h4>JEE Main College Predictor by Percentile</h4>
                  <p>Use JEE college predictor 2024 to check the list of probable colleges based on your percentile. </p>
                  <ul>
                    <li>Enter your JEE Main 2024 percentile</li>
                    <li>Select category, state, gender, and course choice and click on ‘Check results’ tab</li>
                    <li>The list of the top colleges along with the links to check all the details will be displayed on the screen.</li>
                  </ul>
                  <h4>JEE Main College Predictor by Rank</h4>
                  <p>Use JEE college predictor 2025 to check the list of probable colleges based on your rank. </p>
                  <ul>
                    <li>Enter your JEE Main 2025 rank</li>
                    <li>Select your category, gender, state, course (B.E/ B.Tech/ B.Planning/ B.Arch) and click on ‘Check results’ tab</li>
                    <li>You will see the list of the top colleges along with the links to check all the details on the screen.</li>
                  </ul>
                </div>
                <div className="whyPredictor">
                  <h3>Why Use JEE Main 2025 College Predictor?</h3>
                  <p>JEE Main college predictor is designed to help you make an informed decision regarding the selection of the colleges for B.Tech/ B.Arch/ B.Planning admissions. It helps in narrowing down the list of colleges based on your preferences and scores. Consequently, this saves your time in individual searches for each college accepting JEE Main results.</p>
                  <p>Soon after the declaration of results, students often have the stress to know which college they can get admission to at the secured rank. Using JEE Main college predictor relieves from such stress and provides the much-needed clarity and guidance.</p>
                </div>
                <div className="marksVsPercentile">
                  <h3>Marks vs Percentile JEE Mains 2025 Session 1</h3>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>Percentile</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PercentileVsRank.map((row, index) => (
                          <tr key={index}>
                            <td>{row.percentile}</td>
                            <td>{row.marksRange}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h4>JEE Main Rank Predictor 2025</h4>
                  <p>JEE Main rank predictor 2025 provides the estimated rank based on your JEE Main percentile and marks. We have provided below JEE Main Marks vs Percentile vs Rank to help you predict your rank in JEE Main 2025 from your percentile and marks. </p>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>JEE Main Marks (out of 300)</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>JEE Main %ile</th>
                          <th style={{ backgroundColor: '#4c6c7b' }}>JEE Main Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        {MarksvsPercentilevsRank.map((row, index) => (
                          <tr key={index}>
                            <td>{row.marksRange}</td>
                            <td>{row.percentile}</td>
                            <td>{row.rank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p><strong style={{ fontWeight: '600' }}>NOTE:</strong> <em> The above analysis on JEE Main Marks vs Percentile vs Rank is tentative in nature. There can be a ± of a few numbers in each of the data listed in the table above.</em> </p>
                </div>
                <div className="collegeList">
                  <h3>JEE Main Colleges 2025</h3>
                  <p>JEE Main 2025 college list consists of 31 NITs, IIEST Shibpur, 26 IIITs and 33 GFTIs. offering admission to 57,152 seats. After the declaration of JEE Mains 2025 result, JoSAA conducts 6 round of counselling for admission to these 114 participating colleges.</p>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>Participating Institutes</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>Number of Institutes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {instituteData.map((row, index) => (
                          <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h3>JEE Main College List Rank-wise</h3>
                  <p>Over 1500 colleges in India accept JEE Main scores for admission to B.E./B.Tech and B.Arch courses. Some of the top JEE Main college list based on NIRF Ranking 2023 have been mentioned below. You must note that this list contains only NIT, IIITs and GFTIs. No IIT has been included in this list since the final admission to IIT is based on JEE Advanced 2025 scores.</p>
                  <h4>JEE Main College List: Top NIT based on NIRF Ranking</h4>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>NIRF Ranking</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>College Name</th>
                          <th style={{ backgroundColor: '#6a8795' }}>Cutoff (JoSAA Closing Ranks)</th>
                          <th style={{ backgroundColor: '#4c6c7b' }}>Cut off</th>
                        </tr>
                      </thead>
                      <tbody>
                        {nitRankingsAndCutoffs.map((row, index) => (
                          <tr key={index}>
                            <td>{row.nirfRanking}</td>
                            <td>{row.collegeName}</td>
                            <td>{row.cutoffRange}</td>
                            <td><a className="jeeATag" href={row.link}> {/* Use the link from the data */}
                              {row.cutoffText}
                            </a></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h4>JEE Main College List: Top IIIT based on NIRF Ranking</h4>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#f9f9f9', color: '#333' }}>College Name</th>
                          <th style={{ backgroundColor: '#f9f9f9', color: '#333' }}>Cutoff (JoSAA Closing Ranks)</th>
                          <th style={{ backgroundColor: '#f9f9f9', color: '#333' }}>Cut off</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iiitData["IIIT Cutoffs"].map((row, index) => (
                          <tr key={index}>
                            <td>{row.collegeName}</td>
                            <td>{row.cutoffRange}</td>
                            <td>
                              <a className="jeeATag" href={row.link}>
                                {row.cutoffText}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h3>JEE Main College Predictor 2024: State-level B.Tech Admission</h3>
                  <p>As previously mentioned, JEE Main scores are also accepted at several stat-level colleges for B.Tech admission. Given below is the list of state level admission through JEE Mains. You can also use the college predictor links provided for each state level counselling below.</p>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>State</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>State Counselling for BTech</th>
                          <th style={{ backgroundColor: '#6a8795' }}>College Predictor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {counsellingData["State Counselling"].map((row, index) => (
                          <tr key={index}>
                            <td>{row.state}</td>
                            <td>{row.counselling}</td>
                            <td>
                              {row.predictorLink ? ( // Conditionally render the link
                                <a className="jeeATag" href={row.predictorLink}>Check here</a>
                              ) : (
                                "-" // Display "-" if no link
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h3>Top Government Colleges in India after JEE Mains</h3>
                  <p>There are over 1500 colleges in India accepting JEE Main scores for admission. 250+ of these are government colleges accepting JEE Main 2025 scores. You can find some of these top government colleges in India based on NIRF rankings. </p>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>Rank</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>Name</th>
                          <th style={{ backgroundColor: '#6a8795' }}>Fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        {nitFeesData["NIT Fees"].map((row, index) => (
                          <tr key={index}>
                            <td>{row.rank}</td>
                            <td>{row.name}</td>
                            <td>{row.fees}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h3>Top Private Colleges in India after JEE Mains</h3>
                  <p>We have already discussed that over 250 government colleges in India accept JEE Main scores. However, we also have 1200+ private colleges in India that accept JEE Mains score. You can find some of the top ranking private colleges in India based on NIRF ranking in the section below. </p>
                  <div className="category-neettable-container">
                    <table className="category-score-neettable">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: '#8bbdc4' }}>Rank</th>
                          <th style={{ backgroundColor: '#7c9cab' }}>Name</th>
                          <th style={{ backgroundColor: '#6a8795' }}>Fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityFeesData["University Fees"].map((row, index) => (
                          <tr key={index}>
                            <td>{row.rank}</td>
                            <td>{row.name}</td>
                            <td>{row.fees}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
          </div>

          <div className="cardContainer">
            <h3 style={{ marginBottom: '0' }}>Top Engineering colleges accepting JEE Main</h3>
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

          <div className="jeeAcceptingCollegeList">
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






        </div>
        {/* Left container ends here  on the above div*/}
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
                  <li><a href="#">JEE Main Overview</a></li>
                  <li><a href="#">JEE Main Result</a></li>
                  <li><a href="#">JEE Main Cutoff</a></li>
                  <li><a href="#">JEE Main Registration</a></li>
                  <li><a href="#">JEE Main Exam Pattern</a></li>
                  <li><a href="#">JEE Main Question Paper 2024</a></li>
                  <li><a href="#">JEE Main Preparation</a></li>
                  <li><a href="#">JEE Main Mock Test</a></li>
                  <li><a href="#">JEE Main News</a></li>
                  <li><a href="#">JEE Main Participating Colleges</a></li>

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

        </div>
        {/* Right container ends here on the above div*/}
      </div>
      <hr />
      {/* Main container ends here on the above div*/}
      <Footer />
    </div>
  );
};

export default JEEForm;
