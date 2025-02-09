import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../assets/coursescss/BA.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Filter from "../components/Filter";

const colleges = [
  {
    rank: "#1",
    logo: "/assets/coursesimg/ladyShriRamCollege.webp",
    name: "Lady Shri Ram College for Women - [LSR], New Delhi",
    location: "New Delhi, Delhi NCR",
    reviews: "⭐ 4.2/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#4 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 730",
    fees: "₹20,490 (1st Year Fees)",
    avgPack: "₹10,55,000",
    maxPack: "₹48,90,000",
    best: "Social Life",
  },
  {
    rank: "#2",
    logo: "/assets/coursesimg/loyola.webp",
    name: "Loyola College, Chennai",
    location: "Chennai, Tamil Nadu",
    reviews: "⭐ 4.3/5",
    rankingLogo: "/assets/Rankinglogos/tamilnadu.webp",
    ranking: "#8 out of 186 in India 2024",
    fees: "₹14,190 (1st Year Fees)",
    avgPack: "₹6,34,000",
    maxPack: "₹22,50,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "St. Xavier’s College, Mumbai",
    location: "Mumbai, Maharashtra",
    reviews: "⭐ 4.1/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#13 out of 186 in India 2024",
    fees: "₹13,971 (1st Year Fees)",
    avgPack: "₹6,00,000",
    maxPack: "₹21,00,000",
    best: "Academics",
  },
  {
    rank: "#4",
    logo: "/assets/coursesimg/christ.webp",
    name: "Christ University, Bangalore",
    location: "Bangalore, Karnataka",
    reviews: "⭐ 4.1/5",
    rankingLogo: "/assets/Rankinglogos/karnataka.webp",
    ranking: "#15 out of 186 in India 2024",
    fees: "₹90,000 (1st Year Fees)",
    maxPack: "₹20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#5",
    logo: "/assets/coursesimg/miranda.webp",
    name: "Miranda House, New Delhi",
    location: "New Delhi, Delhi NCR",
    reviews: "⭐ 4.3/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#3 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 717",
    fees: "₹14,160 (1st Year Fees)",
    maxPack: "₹21,50,000",
    best: "Infrastructure",
  },
  {
    rank: "#6",
    logo: "/assets/coursesimg/presidency.webp",
    name: "Presidency College, Chennai",
    location: "Chennai, Tamil Nadu",
    reviews: "⭐ 4/5",
    rankingLogo: "/assets/Rankinglogos/tamilnadu.webp",
    ranking: "#24 out of 50 in India 2019",
    fees: "₹1,295 (1st Year Fees)",
    best: "Faculty",
  },
  {
    rank: "#7",
    logo: "/assets/coursesimg/madras.webp",
    name: "Madras Christian College - [MCC], Chennai",
    location: "Chennai, Tamil Nadu",
    reviews: "⭐ 4.3/5",
    rankingLogo: "/assets/Rankinglogos/tamilnadu.webp",
    ranking: "#7 out of 186 in India 2024",
    fees: "₹22,000 (1st Year Fees)",
    avgPack: "₹2,31,200",
    maxPack: "₹3,00,000",
    best: "Social Life",
  },
  {
    rank: "#8",
    logo: "/assets/coursesimg/hindu.webp",
    name: "Hindu College, New Delhi",
    location: "New Delhi, Delhi NCR",
    reviews: "⭐ 4.2/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#1 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 742",
    fees: "₹26,870 (1st Year Fees)",
    avgPack: "₹8,40,000",
    maxPack: "₹36,50,000",
    best: "Social Life",
  },
  {
    rank: "#9",
    logo: "/assets/coursesimg/hansraj.webp",
    name: "Hansraj College - [HRC], New Delhi",
    location: "New Delhi, Delhi NCR",
    reviews: "⭐ 4.2/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#6 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 742",
    fees: "₹26,935 (1st Year Fees)",
    avgPack: "₹8,20,000",
    maxPack: "₹23,00,000",
    best: "Social Life",
  },
  {
    rank: "#10",
    logo: "/assets/coursesimg/fergusson.webp",
    name: "Fergusson College, Pune",
    location: "Pune, Maharashtra",
    reviews: "⭐ 4.1/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#1 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 742",
    fees: "₹12,800 (1st Year Fees)",
    avgPack: "",
    maxPack: "",
    best: "Infrastructure",
  },
  {
    rank: "#10",
    logo: "/assets/coursesimg/fergusson.webp",
    name: "Fergusson College, Pune",
    location: "Pune, Maharashtra",
    reviews: "⭐ 4.1/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#1 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 742",
    fees: "₹12,800 (1st Year Fees)",
    avgPack: "",
    maxPack: "",
    best: "Infrastructure",
  },
  {
    rank: "#10",
    logo: "/assets/coursesimg/fergusson.webp",
    name: "Fergusson College, Pune",
    location: "Pune, Maharashtra",
    reviews: "⭐ 4.1/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#1 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 742",
    fees: "₹12,800 (1st Year Fees)",
    avgPack: "",
    maxPack: "",
    best: "Infrastructure",
  },
  {
    rank: "#10",
    logo: "/assets/coursesimg/fergusson.webp",
    name: "Fergusson College, Pune",
    location: "Pune, Maharashtra",
    reviews: "⭐ 4.1/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#1 out of 186 in India 2024",
    cutoff: "CUET 2024 Cut off 742",
    fees: "₹12,800 (1st Year Fees)",
    avgPack: "",
    maxPack: "",
    best: "Infrastructure",
  },
];

const collegeCards = [
  {
    logo: "/assets/coursesimg/woxen.webp",
    name: "Woxen University, Hyderabad",
    location: "Hyderabad, Telangana",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    cutoff: "CUET 2024 Cut off 730",
    fees: "₹2,95,000 (1st Year Fees)",
    avgPack: "₹8,61,000",
    maxPack: "₹24,00,000",
    best: "Social Life",
    featured: true,
  },
];

const collegeCollections = [
  {
    image: "/assets/coursesimg/collections/ba-india.jpg",
    title: "Best BA Colleges in India",
    icons: ["/assets/coursesimg/icons/icon1.webp", "/assets/coursesimg/icons/icon2.webp"],
    moreCount: 4268,
  },
  {
    image: "/assets/coursesimg/collections/ba-india.jpg",
    title: "Best BA Colleges in Delhi",
    icons: ["/assets/coursesimg/icons/icon3.webp", "/assets/coursesimg/icons/icon4.webp"],
    moreCount: 295,
  },
  {
    image: "/assets/coursesimg/collections/ba-delhi.jpg",
    title: "Best Private BA Colleges in Delhi",
    icons: ["/assets/coursesimg/icons/icon5.webp", "/assets/coursesimg/icons/icon6.webp"],
    moreCount: 186,
  },
  {
    image: "/assets/coursesimg/collections/ba-mumbai.jpg",
    title: "Best BA Colleges in Mumbai",
    icons: ["/assets/coursesimg/icons/icon7.webp", "/assets/coursesimg/icons/icon8.webp"],
    moreCount: 88,
  },
  {
    image: "/assets/coursesimg/collections/ba-india.jpg",
    title: "Best Economics BA Colleges in India",
    icons: ["/assets/coursesimg/icons/icon9.webp", "/assets/coursesimg/icons/icon10.webp"],
    moreCount: 2115,
  },
];

const chunkArray = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

const collegeScrolls = [
  {
    id: 1,
    name: "Lovely Professional University - [LPU]",
    location: "Jalandhar, Punjab",
    rating: "6.4",
    category: "Best in Infrastructure",
    description: "NAAC A++ & NIRF Rank 27th",
    highestPackage: "3 Crore Highest Package",
    applyLink: "/apply",
    image: "/assets/coursesimg/lovely.webp",
  },
  {
    id: 2,
    name: "GIBS Business School",
    location: "Banglore, Karnataka",
    image: "/assets/collegenamelogos/iimbbanglore.webp",
    rating: "",
    category: "Top Private University",
    description: "16.45 LPA Highest Package",
    highestPackage: "100% Placement",
    applyLink: "/apply",
  },
  {
    id: 3,
    name: "MIT World Peace University - [MIT-WPU]",
    location: "Pune, Maharashtra",
    image: "/assets/coursesimg/mitwpu.webp",
    rating: "6.2",
    category: "Best in infra",
    description: "100% Placement Assistance",
    highestPackage: "51 LPA Highest CTC",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/coursesimg/manipal.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply",
  },
];

const filtersList = {
  "Sub Stream": [
    "English - [2687]",
    "History - [2109]",
    "General - [1737]",
    "Social Science - [1281]",
    "Sanskrit - [953]",
    "Philosophy - [733]",
    "Economics - [2228]",
    "Political Science - [1963]",
    "Hindi - [1303]",
    "Geography - [963]",
    "Psychology - [858]",
    "Education Management - [562]",
  ],
  State: [
    "Utter Pradesh",
    "Tamil Nadu",
    "Maharashtra",
    "Karnataka",
    "West Bengal",
    "Delhi NCR",
    "Kerala",
    "Madhya Pradesh",
    "Haryana",
  ],
  Stream: [
    "Arts",
    "Management",
    "Science",
    "Engineering",
    "Computer Applications",
    "Commerce",
    "Education",
    "Medical",
    "Pharmacy",
  ],
  City: [
    "New Delhi",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Bangalore",
    "Pune",
    "Ahmedabad",
    "Gurgaon",
    "Noida",
  ],
  Course: ["BA", "MA", "M. Phil/Ph. D in Arts", "BSW", "BFA", "D. Litt"],
  "Program Type": [
    "Full Time",
    "Part Time",
    "On Campus",
    "Distance",
    "Online",
    "Off Campus",
  ],
  "Type of College": ["Private", "Government"],
  "Entrance/Exam Accepted": [
    "WB CAP",
    "CUET",
    "AP OAMDC",
    "TS DOST",
    "JSAT",
    "SUAT",
  ],
  "Avg Fee per Year": ["0-25K", "25-50K", "50-75K", "75K-1L", "1L-2L", "2L+"],
  "Course Type": ["Degree", "Diploma", "Certificate"],
  Agency: ["India Today", "Outlook", "The Week", "THE", "NRIF", "IIRF"],
  Affiliation: [
    "Calicut University - [CU], Calicat",
    "Mumbai University - [MU], Mumbai",
    "University of Calcutta, Kolkatta",
    "Mahatma Gandhi University - [MGU], Kottayam",
    "Chhatrapati Shahu Ji Maharaj University - [CSJMU], Kanpur",
    "Banglore University - [BU], Banglore",
    "Bharathiar University - [BU], Coimbatore",
    "University of Madras, Chennai",
  ],
};

function BA() {
  const collegesPerTable = 4;
  const collegeChunks = chunkArray(colleges, collegesPerTable);

  const filterSelectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const scrollRef = useRef(null);

  const [selectedSort, setSelectedSort] = useState("");

  const [hoveredNumber, setHoveredNumber] = useState(null);

  const handleMouseEnter = (number) => {
    setHoveredNumber(number);
  };

  const handleMouseLeave = () => {
    setHoveredNumber(null);
  };

  const handleRadioChange = (event) => {
    setSelectedSort(event.target.value);
  };

  useEffect(() => {
    if (filterSelectionRef.current) {
      setIsMounted(true);
    }
  }, []);

  const scrollLeftFilters = () => {
    filterSelectionRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRightFilters = () => {
    filterSelectionRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const [selectedFilters, setSelectedFilters] = useState({});
  const [dropdownOpen, setDropDownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = (filter) => {
    setDropDownOpen(dropdownOpen === filter ? null : filter);
  };

  const handleFilterChange = (filterCategory, filterOption) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (!updatedFilters[filterCategory]) updatedFilters[filterCategory] = [];
      if (updatedFilters[filterCategory].includes(filterOption)) {
        updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
          (option) => option !== filterOption
        );
      } else {
        updatedFilters[filterCategory].push(filterOption);
      }
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters((prevFilters) => ({
      ...Object.keys(prevFilters).reduce((acc, key) => {
        acc[key] = ""; // Reset all filters to empty
        return acc;
      }, {}),
      stream: "Arts", // Set default value
      course: "BA", // Set default value
    }));
  };

  return (
    <>
      <Navbar />
      <div className="ba-p-container-ba">
        <div className="ba-p-breadcrumb">
          <a href="/" className="ba-p-breadcrumb-icon">
            <i className="ba-p-fa fa-home home-icon" aria-hidden="true"></i>
            <span className="ba-p-breadcrumb-arrow">&gt;</span>
            <span className="ba-p-breadcrumb-text">BA Colleges</span>
          </a>
        </div>

        <h1 className="ba-p-header">
          List of BA Colleges in India Based on 2024 Ranking
        </h1>

        <div className="ba-p-flex-container">
          <div className="ba-p-banner-content">
            <div className="ba-p-banner-info">
              <img src="/assets/coursesimg/Banner (1).webp" alt="Demo Banner" />
            </div>
          </div>
          <div className="ba-p-banner-content">
            <div className="ba-p-banner-info">
              <img src="/assets/coursesimg/banner-2.svg" alt="Demo Banner" />
            </div>
          </div>
          <div className="ba-p-banner-content">
            <div className="ba-p-banner-info">
              <img src="/assets/coursesimg/banner-3.svg" alt="Demo Banner" />
            </div>
          </div>
        </div>

        <div className="ba-p-filter-container">
          <div className="ba-p-filter-selection-container">
            <div className="ba-p-container-filter">
              <button
                className="ba-p-scroll-button left"
                onClick={scrollLeftFilters}
              >
                &#9664;
              </button>
              <div className="ba-p-filter-selection" ref={filterSelectionRef}>
                <button className="ba-p-filter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ba-p-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5M3.75 9.75h16.5m-13.5 4.5h10.5m-7.5 4.5h4.5"
                    />
                  </svg>
                  All Filter
                </button>

                {Object.keys(filtersList).map((filter) => (
                  <div className="ba-p-dropdown-wrapper" key={filter}>
                    <button
                      className={`ba-p-dropdown-button-filter ${
                        selectedFilters[filter]?.length ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(filter)}
                    >
                      {filter} ▼
                    </button>

                    {dropdownOpen === filter && (
                      <div className="ba-p-dropdown-menu">
                        <div className="ba-p-dropdown-header">
                          <span>{filter}</span>
                          <button onClick={() => setDropDownOpen(null)}>
                            ✖
                          </button>
                        </div>

                        <input
                          type="text"
                          className="ba-p-dropdown-search"
                          placeholder={`Find ${filter}`}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <div className="ba-p-dropdown-options">
                          {filtersList[filter] &&
                            filtersList[filter]
                              .filter((item) =>
                                item
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                              .map((option) => (
                                <label key={option} className="ba-p-dropdown-option">
                                  <input
                                    type="checkbox"
                                    checked={selectedFilters[filter]?.includes(
                                      option
                                    )}
                                    onChange={() =>
                                      handleFilterChange(filter, option)
                                    }
                                  />
                                  <span className="ba-p-option-name">{option}</span>
                                </label>
                              ))}
                        </div>

                        <div className="ba-p-dropdown-footer">
                          <span className="ba-p-view-all">View All Filters</span>
                          <span
                            className="ba-p-clear-filters"
                            onClick={() => setSelectedFilters({})}
                          >
                            Clear
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="ba-p-scroll-button right"
                onClick={scrollRightFilters}
              >
                &#9654;
              </button>
            </div>
          </div>

          <div className="ba-p-selected-filters">
            {Object.entries(selectedFilters).map(
              ([category, filters]) =>
                filters.length > 0 &&
                filters.map((filter) => (
                  <button key={filter} className="ba-p-filter-tag">
                    {filter} ✖
                  </button>
                ))
            )}
            <button
              className="ba-p-clear-btn"
              onClick={() => setSelectedFilters({})}
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="ba-p-found-colleges">
          <span>Found {colleges.length}</span>
          <div className="ba-p-sorting">
            <label>Sort by:</label>
            <div className="ba-p-radio-group">
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="Popularity"
                  checked={selectedSort === "Popularity"}
                  onChange={handleRadioChange}
                />
                Popularity
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="Rating"
                  checked={selectedSort === "Rating"}
                  onChange={handleRadioChange}
                />
                Rating
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="Highest Fees"
                  checked={selectedSort === "Highest Fees"}
                  onChange={handleRadioChange}
                />
                Highest Fees
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="Lowest Fees"
                  checked={selectedSort === "Lowest Fees"}
                  onChange={handleRadioChange}
                />
                Lowest Fees
              </label>
            </div>
          </div>
        </div>

        {collegeChunks.map((chunk, tableIndex) => (
          <React.Fragment key={tableIndex}>
            <table className="ba-p-college-table" key={tableIndex}>
              <thead>
                <tr>
                  <th>CD Rating</th>
                  <th>Colleges</th>
                  <th>Course Fees</th>
                  <th>Placement</th>
                  <th>User Reviews</th>
                  <th>Ranking</th>
                </tr>
              </thead>
              <tbody>
                {chunk.map((college, index) => (
                  <tr key={index}>
                    <td className="ba-p-center">{college.rank}</td>
                    <div className="ba-p-college-info">
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="ba-p-college-logo"
                      />
                      <div>
                        <a href={college.link} className="ba-p-college-name">
                          {college.name}
                        </a>
                        <p className="ba-p-college-location">{college.location}</p>
                      </div>
                    </div>
                    <div className="ba-p-college-actions">
                      <a href={college.applyLink} className="ba-p-action-link apply">
                        &rarr; Apply Now
                      </a>
                      <a
                        href={college.brochureLink}
                        className="ba-p-action-link brochure"
                      >
                        &#x1F4E5; Download Brochure
                      </a>
                      <label>
                        <input type="checkbox" className="ba-p-compare-checkbox" />
                        Add To Compare
                      </label>
                    </div>
                    <td className="ba-p-center">
                      <p>{college.fees || "--"}</p>
                      <a href={college.applyLink} className="ba-p-action-link apply">
                        &#8644; Compare Fees
                      </a>
                      <p className="ba-p-grey-subtitle">BA</p>
                      <p className="ba-p-grey-subtitle">First Year</p>
                    </td>
                    <td className="ba-p-center">
                      <p className="ba-p-clg-fees">{college.avgPack || "--"}</p>
                      <p className="ba-p-grey-subtitle">Average Package</p>
                      <p className="ba-p-clg-fees">{college.maxPack || "--"}</p>
                      <p className="ba-p-grey-subtitle">Highest Package</p>
                      <a href={college.applyLink} className="ba-p-action-link apply">
                        &#8644; Compare Placement
                      </a>
                    </td>
                    <td className="ba-p-center">
                      <p>{college.reviews}</p>
                      <a href={college.applyLink} className="ba-p-action-link apply">
                        Best in {college.best}
                      </a>
                    </td>
                    <td className="ba-p-center">
                      <p>{college.ranking}</p>
                      <a href={college.applyLink} className="ba-p-action-link apply">
                        More <i className="ba-p-fa fa-filter" aria-hidden="true"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {tableIndex === 0 && collegeCards.length > 0 && (
              <div className="ba-p-page-container">
                <div className="ba-p-content-wrapper">
                  {collegeCards.map((college, index) => (
                    <div
                      key={index}
                      className={`ba-p-college-card ${
                        college.featured ? "featured" : ""
                      }`}
                    >
                      {college.featured && (
                        <div className="ba-p-featured-badge">Featured</div>
                      )}

                      <div className="ba-p-card-grid">
                        {/* College Info Section */}
                        <div className="ba-p-college-info">
                          <div className="ba-p-info-container">
                            <img
                              src={college.logo}
                              alt={`${college.name} logo`}
                              className="ba-p-college-logo"
                            />
                            <div className="ba-p-college-details">
                              <h2 className="ba-p-college-name">{college.name}</h2>
                              <div className="ba-p-location">
                                {/* <Building2 className="ba-p-icon" /> */}
                                {college.location}
                              </div>
                              <div className="ba-p-approvals">
                                {college.approvals?.join(" | ")}
                              </div>
                              <div className="ba-p-action-buttons">
                                <a
                                  href={college.applyLink}
                                  className="ba-p-apply-button"
                                >
                                  Apply Now
                                  {/* <ArrowRight className="ba-p-icon" /> */}
                                </a>
                                <a
                                  href={college.brochureLink}
                                  className="ba-p-brochure-button"
                                >
                                  {/* <Download className="ba-p-icon" /> */}
                                  Download Brochure
                                </a>
                                <label className="ba-p-compare-label">
                                  <input
                                    type="checkbox"
                                    className="ba-p-compare-checkbox"
                                  />
                                  Add To Compare
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Fees Section */}
                        <div className="ba-p-fees-section">
                          <div className="ba-p-fees-content">
                            <div className="ba-p-fees-amount">{college.fees}</div>
                            <div className="ba-p-fees-label">BA - 1st Year Fees</div>
                            <a href="#" className="ba-p-compare-fees">
                              {/* <TrendingUp className="ba-p-icon" /> */}
                              Compare Fees
                            </a>
                          </div>
                        </div>

                        {/* Placement Section */}
                        <div className="ba-p-placement-section">
                          <div className="ba-p-placement-grid">
                            <div className="ba-p-package-info">
                              <div className="ba-p-package-amount">
                                {college.avgPack}
                              </div>
                              <div className="ba-p-package-label">
                                Average Package
                              </div>
                            </div>
                            <div className="ba-p-package-info">
                              <div className="ba-p-package-amount">
                                {college.maxPack}
                              </div>
                              <div className="ba-p-package-label">
                                Highest Package
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tableIndex === 1 && (
              <div className="ba-p-horizontal-scroll-container">
                <h3 className="ba-p-hori-scroll-header">
                  College Application Form 2025
                </h3>
                <div className="ba-p-horizontal-scroll" ref={scrollRef}>
                  {collegeScrolls.map((college) => (
                    <div className="ba-p-college-hori-card" key={college.id}>
                      <img src={college.image} alt={college.name} />
                      <div className="ba-p-rating">⭐ {college.rating}</div>
                      <h3 className="ba-p-scroll-college-name">{college.name}</h3>
                      <p>{college.location}</p>
                      <p>{college.description}</p>
                      <p className="ba-p-action-link brochure">
                        {college.highestPackage}
                      </p>
                      <a href="" className="ba-p-action-link apply">
                        &rarr; Apply Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tableIndex === 2 && (
              <div className="ba-p-recommendation-container">
                <h3>
                  How likely would you recommend this website to your friend?
                </h3>
                <div className="ba-p-recommendation-scale">
                  {[...Array(10).keys()].map((num) => (
                    <span
                      key={num}
                      className={`ba-p-number ${
                        hoveredNumber >= num + 1 ? "hovered" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(num + 1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {num + 1}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {tableIndex === 3 && (
              <div className="ba-p-collections-container">
                <h2 className="ba-p-collections-title">
                  Top Collections for BA
                </h2>
                <div className="ba-p-collections-scroll">
                  {collegeCollections.map((collection, index) => (
                    <div key={index} className="ba-p-collection-card">
                      <div className="ba-p-card-image-container">
                        <img
                          src={collection.image}
                          alt={collection.title}
                          className="ba-p-card-image"
                        />
                        <div className="ba-p-gradient-overlay"></div>
                        <div className="ba-p-card-content">
                          <h3 className="ba-p-card-title">{collection.title}</h3>
                          <div className="ba-p-logo-container">
                            <div className="ba-p-logo-stack">
                              {collection.icons.map((logo, idx) => (
                                <img
                                  key={idx}
                                  src={logo}
                                  alt="College logo"
                                  className="ba-p-collection-logo"
                                />
                              ))}
                            </div>
                            <div className="ba-p-more-count">
                              +{collection.moreCount} More
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}            
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default BA;
