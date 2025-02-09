import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiFillHome } from "react-icons/ai";
import '../assets/coursescss/BSC.css';


const filterOptions = {
  subStream: [
    "Nursing",
    "Medical Laboratory Technology",
    "Medical Technology",
    "Anaesthisia",
    "Optometry",
    "Radiotherapy",
    "Opthalmic Technology",
    "Pediatrics",
    "Cardiac Technology",
    "Neurophysiology",
    "Radiography",
  ],
  state: [
    "Punjab",
    "Karnataka",
    "Tamil Nadu",
    "Chandigarh",
    "Uttar Pradesh",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "West Bengal",
    "Delhi",
    "Gujarat",
    "Uttarakhand",
    "Rajasthan",
    "Haryana",
    "Jharkhand",
    "Bihar",
    "Andhra Pradesh",
    "Chhattisgarh",
  ],
  stream: [
    "Paramedical",
    "Science",
    "Computer Applications",
    "Management",
    "Engineering",
    "Commerce",
    "Arts",
    "Education",
    "Pharmacy",
    "Vocational Courses",
    "Medical",
    "Design",
    "Agriculture",
    "Hotel Management",
    "Mass Communications",
    "Law",
    "Architecture",
  ],
  city: [
    "Amritsar",
    "Ludhiana",
    "Patiala",
    "Mohali",
    "Chandigarh",
    "Jalandhar",
    "Bathinda",
    "Sangrur",
    "Faridkot",
    "Fatehgarh Sahib",
    "Gurdaspur",
    "Hoshiarpur",
    "Moga",
    "Gobindgarh",
  ],
  course: [
    "B.Sc (Nursing)",
    "GNM",
    "ANM",
    "M.Sc (Nursing)",
    "DMLT",
    "BMLT",
    "M.Phil/Ph.D in Paramedical",
  ],
  programType: ["Full Time", "On Campus"],
  typeOfCollege: ["Private", "Government"],
  entranceExam: ["NEET"],
  avgFeePerYear: ["0 - 25K", "25 - 50K", "50 - 75K", "75K - 1L", "1 - 2L", "Above 2L"],
  courseType: ["Degree"],
  agency: [
    "IIRF",
    "The Week",
    "Outlook",
    "Indiatoday",
    "NIRF Innovation",
    "US News",
    "CWUR",
    "NIRF",
    "QS I-GAUGE",
    "QS",
    "THE",
  ],
  affiliation: [
    "Baba Farid University of Health Sciences - [BFUHS], Faridkot",
    "I.K. Gujral Punjab Technical University - [IKG-PTU], Jalandhar",
    "Maharaja Ranjit Singh Punjab Technical University, Bathinda",
    "Post Graduate Institute of Medical Education & Research - [PGIMER], Chandigarh",
  ],
  approval: ["INC"],
  courseDuration: ["4 Years", "2 Years", "3 Years"],
  collegeCategory: ["AIIMS"],
  genderAccepted: ["Coed", "Girls"],
};

const initialColleges = [ 
  {
      rank: "#1",
      logo: "/assets/collegenamelogos/iitroorkee.webp",
      name: "St. Stephen's College",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/roorkee.webp",
      fees: "₹45,000 (1st Year Fees)",
      reviews: {
        rating: 4.9,
        count: 1500,
        badge: "Best in Science Education"
      },
      ranking: {
        position: 1,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#2",
      logo: "/assets/collegenamelogos/iitguwahati.webp",
      name: "Loyola College",
      location: "Chennai, Tamil Nadu",
      rankingLogo: "/assets/Rankinglogos/guwahati.webp",
      fees: "₹42,000 (1st Year Fees)",
      reviews: {
        rating: 4.8,
        count: 1400,
        badge: "Best in Research"
      },
      ranking: {
        position: 2,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Tamil Nadu",
      stream: "BSc",
      city: "Chennai",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#3",
      logo: "/assets/collegenamelogos/iimahmedabad.webp",
      name: "Christ University",
      location: "Bangalore, Karnataka",
      rankingLogo: "/assets/Rankinglogos/iima.webp",
      fees: "₹50,000 (1st Year Fees)",
      reviews: {
        rating: 4.7,
        count: 1300,
        badge: "Best in Academic Excellence"
      },
      ranking: {
        position: 3,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Karnataka",
      stream: "BSc",
      city: "Bangalore",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#4",
      logo: "/assets/collegenamelogos/iitdelhi.webp",
      name: "Miranda House",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/delhi.webp",
      fees: "₹48,000 (1st Year Fees)",
      reviews: {
        rating: 4.6,
        count: 1250,
        badge: "Best Women's College"
      },
      ranking: {
        position: 4,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#5",
      logo: "/assets/collegenamelogos/iitroorkee.webp",
      name: "St. Stephen's College",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/roorkee.webp",
      fees: "₹45,000 (1st Year Fees)",
      reviews: {
        rating: 4.9,
        count: 1500,
        badge: "Best in Science Education"
      },
      ranking: {
        position: 1,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#6",
      logo: "/assets/collegenamelogos/iitguwahati.webp",
      name: "Loyola College",
      location: "Chennai, Tamil Nadu",
      rankingLogo: "/assets/Rankinglogos/guwahati.webp",
      fees: "₹42,000 (1st Year Fees)",
      reviews: {
        rating: 4.8,
        count: 1400,
        badge: "Best in Research"
      },
      ranking: {
        position: 2,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Tamil Nadu",
      stream: "BSc",
      city: "Chennai",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#7",
      logo: "/assets/collegenamelogos/iimahmedabad.webp",
      name: "Christ University",
      location: "Bangalore, Karnataka",
      rankingLogo: "/assets/Rankinglogos/iima.webp",
      fees: "₹50,000 (1st Year Fees)",
      reviews: {
        rating: 4.7,
        count: 1300,
        badge: "Best in Academic Excellence"
      },
      ranking: {
        position: 3,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Karnataka",
      stream: "BSc",
      city: "Bangalore",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#8",
      logo: "/assets/collegenamelogos/iitdelhi.webp",
      name: "Miranda House",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/delhi.webp",
      fees: "₹48,000 (1st Year Fees)",
      reviews: {
        rating: 4.6,
        count: 1250,
        badge: "Best Women's College"
      },
      ranking: {
        position: 4,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#9",
      logo: "/assets/collegenamelogos/iitroorkee.webp",
      name: "St. Stephen's College",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/roorkee.webp",
      fees: "₹45,000 (1st Year Fees)",
      reviews: {
        rating: 4.9,
        count: 1500,
        badge: "Best in Science Education"
      },
      ranking: {
        position: 1,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#10",
      logo: "/assets/collegenamelogos/iitguwahati.webp",
      name: "Loyola College",
      location: "Chennai, Tamil Nadu",
      rankingLogo: "/assets/Rankinglogos/guwahati.webp",
      fees: "₹42,000 (1st Year Fees)",
      reviews: {
        rating: 4.8,
        count: 1400,
        badge: "Best in Research"
      },
      ranking: {
        position: 2,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Tamil Nadu",
      stream: "BSc",
      city: "Chennai",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#11",
      logo: "/assets/collegenamelogos/iimahmedabad.webp",
      name: "Christ University",
      location: "Bangalore, Karnataka",
      rankingLogo: "/assets/Rankinglogos/iima.webp",
      fees: "₹50,000 (1st Year Fees)",
      reviews: {
        rating: 4.7,
        count: 1300,
        badge: "Best in Academic Excellence"
      },
      ranking: {
        position: 3,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Karnataka",
      stream: "BSc",
      city: "Bangalore",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#12",
      logo: "/assets/collegenamelogos/iitdelhi.webp",
      name: "Miranda House",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/delhi.webp",
      fees: "₹48,000 (1st Year Fees)",
      reviews: {
        rating: 4.6,
        count: 1250,
        badge: "Best Women's College"
      },
      ranking: {
        position: 4,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#13",
      logo: "/assets/collegenamelogos/iitroorkee.webp",
      name: "St. Stephen's College",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/roorkee.webp",
      fees: "₹45,000 (1st Year Fees)",
      reviews: {
        rating: 4.9,
        count: 1500,
        badge: "Best in Science Education"
      },
      ranking: {
        position: 1,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#14",
      logo: "/assets/collegenamelogos/iitguwahati.webp",
      name: "Loyola College",
      location: "Chennai, Tamil Nadu",
      rankingLogo: "/assets/Rankinglogos/guwahati.webp",
      fees: "₹42,000 (1st Year Fees)",
      reviews: {
        rating: 4.8,
        count: 1400,
        badge: "Best in Research"
      },
      ranking: {
        position: 2,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Tamil Nadu",
      stream: "BSc",
      city: "Chennai",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#15",
      logo: "/assets/collegenamelogos/iimahmedabad.webp",
      name: "Christ University",
      location: "Bangalore, Karnataka",
      rankingLogo: "/assets/Rankinglogos/iima.webp",
      fees: "₹50,000 (1st Year Fees)",
      reviews: {
        rating: 4.7,
        count: 1300,
        badge: "Best in Academic Excellence"
      },
      ranking: {
        position: 3,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Karnataka",
      stream: "BSc",
      city: "Bangalore",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Private",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
    {
      rank: "#16",
      logo: "/assets/collegenamelogos/iitdelhi.webp",
      name: "Miranda House",
      location: "New Delhi, Delhi NCR",
      rankingLogo: "/assets/Rankinglogos/delhi.webp",
      fees: "₹48,000 (1st Year Fees)",
      reviews: {
        rating: 4.6,
        count: 1250,
        badge: "Best Women's College"
      },
      ranking: {
        position: 4,
        total: 50,
        year: 2024
      },
      subStream: "Science",
      state: "Delhi",
      stream: "BSc",
      city: "New Delhi",
      course: "Regular",
      programType: "Full Time",
      collegeType: "Government",
      entranceExam: "CUET",
      feesRange: "Below 50K",
      courseType: "Regular"
    },
];

const universities = [
  {
    imgSrc: "/assets/bscimages/caf1.webp",
    title: "Lovely Professional University - [LPU]",
    location: "Jalandhar, Punjab",
    description1: "NAAC A++ & NIRF Rank 2 | 3 Crore Highest Package",
    description2: "B.Sc",
    applyLink: "https://admission.lpu.in/?utm_source=collegedunia&utm_medium=liveformd&utm_campaign=online"
  },
  {
    imgSrc: "/assets/bscimages/caf2.webp",
    title: "Manipal Academy of Higher Education",
    location: "Manipal, Karnataka",
    description1: "57 LPA High CTC | 77 Cr Worth Scholarships",
    description2: "B.Sc",
    applyLink: "https://apply.manipal.edu/login?utm_source=Collegedunia&utm_medium=Liveform&utm_campaign=Online"
  },
  {
    imgSrc: "/assets/bscimages/caf3.webp",
    title: "MIT World Peace University - [MIT-WPU]",
    location: "Pune, Maharashtra",
    description1: "100% Placement Assistance | 51.36 LPA Highest CTC",
    description2: "B.Sc",
    applyLink: "https://admissions.mitwpu.edu.in/?utm_source=collegedunia&utm_medium=liveform&utm_campaign=online"
  },
  {
    imgSrc: "/assets/bscimages/caf4.webp",
    title: "Amity University",
    location: "Mohali, Punjab",
    description1: "1.10L 1st Year Fees",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/62559-amity-university-mohali?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/bscimages/caf5.webp",
    title: "Jain University",
    location: "Bangalore, Karnataka",
    description1: "₹1.25 L 1st Year Fees",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/25606-jain-university-ju-bangalore?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/bscimages/caf6.webp",
    title: "Galgotias University [GU]",
    location: "Greater Noida, Uttar Pradesh",
    description1: "₹65K 1st Year Fees",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/25940-galgotias-university-gu-greater-noida?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/bscimages/caf7.webp",
    title: "NIMS University",
    location: "Jaipur, Rajasthan",
    description1: "Top Ranked | High Placement Records",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/25833-nims-university-jaipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/bscimages/caf8.webp",
    title: "Lovely Professional University - [LPU]",
    location: "Jalandhar, Punjab",
    description1: "₹1.60L 1st Year Fees",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/25787-lovely-professional-university-lpu-jalandhar?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/bscimages/caf9.webp",
    title: "IIS [Deemed to be University] - [IISU]",
    location: "Jaipur, Rajasthan",
    description1: "₹65.50K 1st Year Fees",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/25807-iis-deemed-to-be-university-iisu-jaipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/bscimages/caf10.webp",
    title: "Sharada University",
    location: "Greater Noida, Uttar Pradesh",
    description1: "₹1.52 L 1st Year Fees",
    description2: "B.Sc",
    applyLink: "https://collegedunia.com/university/25972-sharda-university-greater-noida?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
];

const collections = [
  {
    title: "Best BSc IT colleges in Mumbai",
    image: "/assets/bscimages/university.jpg",
    count: " + 74 More",
  },
  {
    title: "Best BSc Forensic Science colleges in India",
    image: "/assets/bscimages/university.jpg",
    count: " + 138 More",
  },
  {
    title: "Best BSc colleges in Bangalore",
    image: "/assets/bscimages/university.jpg",
    count: " + 144 More",
  },
  {
    title: "Best BSc colleges in New Delhi",
    image: "/assets/bscimages/university.jpg",
    count: " + 302 More",
  },
  {
    title: "Best BSc colleges in Mumbai",
    image: "/assets/bscimages/university.jpg",
    count: " + 122 More",
  },
  {
    title: "Best BSc colleges in Ahmedabad",
    image: "/assets/bscimages/university.jpg",
    count: " + 18 More",
  },
  {
    title: "Best BSc Forensic Science colleges in Tamil Nadu",
    image: "/assets/bscimages/university.jpg",
    count: " + 10 More",
  },
  {
    title: "Best BSc Psychology colleges in India",
    image: "/assets/bscimages/university.jpg",
    count: " + 234 More",
  },
  {
    title: "Best BSc Biotechnology colleges in India",
    image: "/assets/bscimages/university.jpg",
    count: " + 1041 More",
  },
];


function BSC() {
  const [sortOption, setSortOption] = useState('Popularity');
  const [colleges] = useState(initialColleges);
  const [filters, setFilters] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(null);


  const handleSortChange = (option) => {
    setSortOption(option);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".filter-dropdown-container")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return college[key] === value;
      });
    });
  }, [colleges, filters]);

  const handleFilterClick = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value,
    }));
  };

  const clearFilters = () => {
    setFilters({});
    setActiveDropdown(null);
  };

  const renderFilterDropdowns = () => {
    return Object.entries(filterOptions).map(([filterType, options]) => (
      <div key={filterType} className="bsc_m_filter-dropdown-container">
        <button
          className={`bsc_m_dropdown-button ${filters[filterType] ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveDropdown(activeDropdown === filterType ? null : filterType);
          }}
        >
          {filterType.replace(/([A-Z])/g, " $1").trim()}
        </button>
        {activeDropdown === filterType && (
          <div className="bsc_m_filter-dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`bsc_m_filter-option ${filters[filterType] === option ? "selected" : ""}`}
                onClick={() => handleFilterClick(filterType, option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <Navbar />

      <div className='bsc_m_bba-container'>
        <div className='bsc_m_breadcrumb'>

          <a href='/' className='bsc_m_home-icon'>
            <AiFillHome />
          </a>
          <span className="bsc_m_breadcrumb-arrow">&gt;</span>
          <span className="bsc_m_breadcrumb-text">BSc Colleges</span>
        </div>

        {/* Title */}
        <h1 className="bsc_m_title">
          List of B.Sc Colleges in India Based on 2024 Ranking
        </h1>

        {/* Banner Section */}
        <div className="bsc_m_flex-container">
          <div className="bsc_m_banner">
            <div className="bsc_m_banner-content">
              <img src="/assets/bscimages/headerimg1.webp" />
            </div>
          </div>
          <div className="bsc_m_banner bsc_m_course-finder-banner">
            <div className="bsc_m_banner-content">
              <img src="/assets/bscimages/headerimg2.png" />
            </div>
          </div>
          <div className="bsc_m_banner bsc_m_college-predictor-banner">
            <div className="bsc_m_banner-content">
              <img src="/assets/bscimages/headerimg3.png" />
            </div>
          </div>
        </div>

        <div className="bsc_m_filter-bar bsc_m_sticky-filter-bar">
          <button className="bsc_m_filter-button" onClick={clearFilters}>
            <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
          </button>
          {renderFilterDropdowns()}
        </div>

        {Object.keys(filters).length > 0 && (
          <div className="bsc_m_active-filters">
            {Object.entries(filters).map(
              ([type, value]) =>
                value && (
                  <span key={type} className="bsc_m_filter-tag">
                    {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                    <button
                      className="bsc_m_remove-filter"
                      onClick={() => handleFilterClick(type, value)}
                    >
                      ×
                    </button>
                  </span>
                )
            )}
          </div>
        )}



        <div className='bsc_m_bba-container'>
          <div className="bsc_m_table-container">
            <div className='bsc_m_soring_bg'>
              <div className="bsc_m_sort-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6 className='bsc_m_heading'>Found {colleges.length} Colleges</h6>
                <div className="bsc_m_sort-options" style={{ display: 'flex', gap: '10px' }}>
                  <span><strong>Sort By:</strong></span>
                  {['Popularity', 'Rating', 'Highest Fees', 'Lowest Fees'].map(option => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="sort"
                        checked={sortOption === option}
                        onChange={() => handleSortChange(option)}
                      /> {option}
                    </label>
                  ))}
                </div>



                <div class="bsc_m_view-options">
                <button class="bsc_m_view-button active" aria-label="List view">
                  <svg class="bsc_m_view-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                  </svg>
                </button>
                <button class="bsc_m_view-button" aria-label="Grid view">
                  <svg class="bsc_m_view-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                  </svg>
                </button>
                <button class="bsc_m_view-button" aria-label="Compact view">
                  <svg class="bsc_m_view-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                  </svg>
                </button>
              </div>
              </div>

            </div>


            {/* ---------------------------------TABLE OF COLLEGES------------------------------------------------------ */}

            <div className="bsc_m_table-wrapper">
              <table className="bsc_m_college-table">
                <thead>
                  <tr>
                    <th>CD Rank</th>
                    <th>Colleges</th>
                    <th>Course Fees</th>
                    <th>User Reviews</th>
                    <th>Ranking</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredColleges.map((college, index) => (
                    <tr key={college.rank}>
                      <td className="bsc_m_cd-rank">{college.rank}</td>
                      <td>
                        <div className="bsc_m_college-info">
                          <img src={college.logo} alt={college.name} className="bsc_m_college-logo" />
                          <div className="bsc_m_college-details">
                            <div className="bsc_m_college-name">{college.name}</div>
                            <div className="bsc_m_college-location">{college.location}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="bsc_m_fees-info">
                          <div className="bsc_m_fees-amount">{college.fees}</div>
                          <div className="bsc_m_fees-note">1st Year Fees</div>
                        </div>
                      </td>
                      <td>
                        <div className="bsc_m_reviews-info">
                          <div className="bsc_m_rating-wrapper">
                            <span className="bsc_m_rating">{college.reviews.rating}</span>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <span className="bsc_m_rating-scale">/ 5</span>
                          </div>
                          <div className="bsc_m_review-count">Based on {college.reviews.count} reviews</div>
                          <div className="bsc_m_review-badge">{college.reviews.badge}</div>
                        </div>
                      </td>
                      <td>
                        <div className="bsc_m_ranking-info">
                          <div className="bsc_m_ranking-position">#{college.ranking.position}</div>
                          <div className="bsc_m_ranking-details">
                            /{college.ranking.total} in India {college.ranking.year}
                          </div>
                          <img src={college.rankingLogo} alt="ranking" className="bsc_m_college-ranking-logo" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

{/* ------------------------------------------BEST COLLEGES------------------------------------------------------- */}

            <div className="bsc_m_carousel-container">
              <h3>Colleges Application Forms 2025</h3>
              <div className="bsc_m_carousel-wrapper">
                {universities.map((university, index) => (
                  <div className="bsc_m_university-card" key={index}>
                    <img src={university.imgSrc} alt={university.title} className="bsc_m_university-image" />
                    <p className="bsc_m_green">Best in Infrastructure</p>
                    <h3 className="bsc_m_university-title">{university.title}</h3>
                    <div className="bsc_m_university-details">
                      <p className="bsc_m_university-location">{university.location}</p>
                      <p className="bsc_m_university-description bsc_m_green-text">{university.description1}</p>
                      <p className="bsc_m_university-description">{university.description2}</p>
                      <a href={university.applyLink} target="_blank" rel="noopener noreferrer" className="bsc_m_apply-link">
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>


{/* ----------------------------------TOP COLLEGES-------------------------------------------- */}


            <div className="bsc_m_scroll-container">
              <h2 className="text-xl font-semibold mb-4">Top Collections for B.Sc</h2>
              <div className="bsc_m_scroll-wrapper">
                {collections.map((item, index) => (
                  <div key={index} className="bsc_m_scroll-card">
                    <div className="bsc_m_scroll-card-image">
                      <img src={item.image} alt={item.title} />
                      <div className="bsc_m_overlay">
                        <h3 className="bsc_m_overlay-title">{item.title}</h3>

                        <div className="bsc_m_icon-container">
                          {/* Static Icons */}
                          <img src="/assets/collegenamelogos/iima.webp" alt="icon1" className="bsc_m_icon-circle" />
                          <img src="/assets/collegenamelogos/iimbbanglore.webp" alt="icon2" className="bsc_m_icon-circle" />
                          <img src="/assets/collegenamelogos/iitkanpur.webp" alt="icon3" className="bsc_m_icon-circle" />
                          <p className="bsc_m_overlay-subtitle">{item.count}</p>
                        </div>



                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


{/* ----------------------------- rating------------------------------------------------------- */}

            <div className="bsc_m_rating-container">
              <p className="bsc_m_rating-heading">
                How likely are you to recommend collegedunia.com to a friend or a colleague?
              </p>

              <div className="bsc_m_rating-options">
                <span className="bsc_m_rating-label bsc_m_first">Not so likely</span> 
                {[...Array(10)].map((_, index) => (
                  <button
                    key={index}
                    className={`bsc_m_rating-button 
                ${selectedRating === index + 1 ? "selected" : ""}
                ${hoveredRating >= index + 1 ? "hovered" : ""}`}
                    onClick={() => setSelectedRating(index + 1)}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(null)}
                  >
                    {index + 1}
                  </button>
                ))}
                <span className="bsc_m_rating-label bsc_m_last">Highly Likely</span> 
              </div>
            </div>

          </div>
        </div>
        <Footer />

      </div >
    </>
  );
}


export default BSC;