// BCA.jsx
import React, { useState, useMemo } from "react";
import "../assets/coursescss/BCA.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";

const initialColleges = [
  {
    rank: "#1",
    logo: "/assets/collegenamelogos/iitmumbai.webp",
    name: "Christ University",
    location: "Bangalore, Karnataka",
    rankingLogo: "/assets/Rankinglogos/mumbai.webp",
    fees: "₹1,50,000",
    reviews: {
      rating: 4.1,
      count: 728,
      badge: "Best in Infrastructure",
    },
    ranking: {
      position: 1,
      total: 167,
      year: 2024,
    },
    subStream: "Computer Science",
    state: "Karnataka",
    stream: "BCA",
    city: "Bangalore",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "CUET",
    feesRange: "1L - 2L",
    courseType: "Regular",
  },
  {
    rank: "#2",
    logo: "/assets/collegenamelogos/iitkanpur.webp",
    name: "Presidency College",
    location: "Bangalore, Karnataka",
    rankingLogo: "/assets/Rankinglogos/kanpur.webp",
    fees: "₹1,20,000",
    reviews: {
      rating: 3.9,
      count: 85,
      badge: "Best in Academics",
    },
    ranking: {
      position: 15,
      total: 167,
      year: 2024,
    },
    subStream: "Information Technology",
    state: "Karnataka",
    stream: "BCA",
    city: "Bangalore",
    course: "Honors",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "State CET",
    feesRange: "1L - 2L",
    courseType: "Regular",
  },
  {
    rank: "#3",
    logo: "/assets/collegenamelogos/iitdelhi.webp",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹1,25,000",
    reviews: {
      rating: 4.0,
      count: 2833,
      badge: "Best in Infrastructure",
    },
    ranking: {
      position: 21,
      total: 167,
      year: 2024,
    },
    subStream: "Data Science",
    state: "Tamil Nadu",
    stream: "BSc CS",
    city: "Chennai",
    course: "Integrated",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "University Level",
    feesRange: "1L - 2L",
    courseType: "Regular",
  },
  {
    rank: "#4",
    logo: "/assets/collegenamelogos/iitroorkee.webp",
    name: "Symbiosis Institute of Computer Studies and Research",
    rankingLogo: "/assets/Rankinglogos/roorkee.webp",
    location: "Pune, Maharashtra",
    fees: "₹2,51,000",
    reviews: {
      rating: 3.5,
      count: 57,
      badge: "Best in Academics",
    },
    ranking: {
      position: 25,
      total: 167,
      year: 2024,
    },
    subStream: "Computer Science",
    state: "Maharashtra",
    stream: "BSc IT",
    city: "Pune",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "State CET",
    feesRange: "Above 2L",
    courseType: "Regular",
  },
  {
    rank: "#5",
    logo: "/assets/collegenamelogos/iitguwahati.webp",
    name: "Loyola College",
    location: "Chennai, Tamil Nadu",
    fees: "₹1,55,000",
    reviews: {
      rating: 4.4,
      count: 156,
      badge: "Best Overall",
    },
    ranking: {
      position: 30,
      total: 167,
      year: 2024,
    },
    rankingLogo: "/assets/Rankinglogos/guwahati.webp",
    subStream: "Information Technology",
    state: "Tamil Nadu",
    stream: "BCA",
    city: "Chennai",
    course: "Regular",
    programType: "Part Time",
    collegeType: "Private",
    entranceExam: "University Level",
    feesRange: "1L - 2L",
    courseType: "Regular",
  },
];

const filterOptions = {
  subStream: ["Computer Science", "Information Technology", "Data Science"],
  state: ["Karnataka", "Tamil Nadu", "Maharashtra"],
  stream: ["BCA", "BSc IT", "BSc CS"],
  city: ["Bangalore", "Chennai", "Pune"],
  course: ["Regular", "Integrated", "Honors"],
  programType: ["Full Time", "Part Time", "Distance"],
  collegeType: ["Private", "Government", "Deemed"],
  entranceExam: ["CUET", "State CET", "University Level"],
  feesRange: ["Below 1L", "1L - 2L", "Above 2L"],
  courseType: ["Regular", "Self-Paced", "Hybrid"],
};

const CarouselSection = () => (
  <tr className="bca-spacer-row">
    <td colSpan={5}>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Scrollbar]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        className="bca-college-slider"
      >
        {[
          "/assets/BCA/default-college-predictor-2.svg",
          "/assets/BCA/image(49)20250107145321.webp",
          "/assets/BCA/default-course-finder-3.svg",
        ].map((src, index) => (
          <SwiperSlide key={index}>
            <div className="bca-slider-item">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="bca-slider-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </td>
  </tr>
);

function BCA() {
  const [colleges] = useState(initialColleges);
  const [filters, setFilters] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".bca-filter-dropdown-container")) {
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
      <div key={filterType} className="bca-filter-dropdown-container">
        <button
          className={`bca-dropdown-button ${
            filters[filterType] ? "active" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveDropdown(
              activeDropdown === filterType ? null : filterType
            );
          }}
        >
          {filterType.replace(/([A-Z])/g, " $1").trim()}
        </button>
        {activeDropdown === filterType && (
          <div className="bca-filter-dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`bca-filter-option ${
                  filters[filterType] === option ? "selected" : ""
                }`}
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
      <div className="bca-container">
        <div className="bca-breadcrumb">
          <a href="/" className="bca-breadcrumb-icon">
            <i className="fa fa-home bca-home-icon" aria-hidden="true"></i>
          </a>
          <span className="bca-breadcrumb-arrow">&gt;</span>
          <span className="bca-breadcrumb-text">BCA Colleges</span>
        </div>

        <h1 className="bca-title">
          List of BCA Colleges in India Based on 2024 Ranking
        </h1>

        <div className="bca-flex-container">
          <div
            className="bca-banner bca-admissions-banner"
            style={{
              backgroundImage:
                "url('/assets/BCA/image(49)20250107145321.webp')",
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
          >
            <div className="bca-banner-content">
              <div className="bca-banner-info"></div>
            </div>
          </div>

          <div
            className="bca-banner bca-course-finder-banner"
            style={{
              backgroundImage:
                "url('/assets/BCA/default-college-predictor-2.svg')",
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
          >
            <div className="bca-banner-content"></div>
          </div>

          <div
            className="bca-banner bca-college-predictor-banner"
            style={{
              backgroundImage: "url('/assets/BCA/default-course-finder-3.svg')",
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
          >
            <div className="bca-banner-content"></div>
          </div>
        </div>

        <div className="bca-filter-bar bca-sticky-filter-bar">
          <button className="bca-filter-button" onClick={clearFilters}>
            <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
          </button>
          {renderFilterDropdowns()}
        </div>

        {Object.keys(filters).length > 0 && (
          <div className="bca-active-filters">
            {Object.entries(filters).map(
              ([type, value]) =>
                value && (
                  <span key={type} className="bca-filter-tag">
                    {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                    <button
                      className="bca-remove-filter"
                      onClick={() => handleFilterClick(type, value)}
                    >
                      ×
                    </button>
                  </span>
                )
            )}
          </div>
        )}

        <div className="bca-sort-container">
          <div className="bca-colleges-count">Found 3420 Colleges</div>

          <div className="bca-sort-options">
            <span className="bca-sort-by-text">Sort By</span>
            <div className="bca-sort-radio-group">
              <label className="bca-sort-radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="popularity"
                  checked
                  className="bca-sort-radio-input"
                />
                Popularity
              </label>
              <label className="bca-sort-radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="rating"
                  className="bca-sort-radio-input"
                />
                Rating
              </label>
              <label className="bca-sort-radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="highest-fees"
                  className="bca-sort-radio-input"
                />
                Highest Fees
              </label>
              <label className="bca-sort-radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="lowest-fees"
                  className="bca-sort-radio-input"
                />
                Lowest Fees
              </label>
            </div>
          </div>

          <div className="bca-view-options">
            <button className="bca-view-button active" aria-label="List view">
              <svg
                className="bca-view-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            </button>
            <button className="bca-view-button" aria-label="Grid view">
              <svg
                className="bca-view-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
              </svg>
            </button>
            <button className="bca-view-button" aria-label="Compact view">
              <svg
                className="bca-view-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bca-table-wrapper">
          <table className="bca-college-table">
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
                <React.Fragment key={college.rank}>
                  <tr>
                    <td className="bca-cd-rank">{college.rank}</td>
                    <td>
                      <div className="bca-college-info">
                        <img
                          src={college.logo}
                          alt={college.name}
                          className="bca-college-logo"
                        />
                        <div className="bca-college-details">
                          <div className="bca-college-name">{college.name}</div>
                          <div className="bca-college-location">
                            {college.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="bca-fees-info">
                        <div className="bca-fees-amount">{college.fees}</div>
                        <div className="bca-fees-note">1st Year Fees</div>
                      </div>
                    </td>
                    <td>
                      <div className="bca-reviews-info">
                        <div className="bca-rating-wrapper">
                          <span className="bca-rating">
                            {college.reviews.rating}
                          </span>
                          <i
                            className="fa fa-star bca-star"
                            aria-hidden="true"
                          ></i>
                          <span className="bca-rating-scale">/ 5</span>
                        </div>
                        <div className="bca-review-count">
                          Based on {college.reviews.count} reviews
                        </div>
                        <div className="bca-review-badge">
                          {college.reviews.badge}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="bca-ranking-info">
                        <div className="bca-ranking-position">
                          #{college.ranking.position}
                        </div>
                        <div className="bca-ranking-details">
                          /{college.ranking.total} in India{" "}
                          {college.ranking.year}
                        </div>
                        <img
                          src={college.rankingLogo}
                          alt="ranking"
                          className="bca-college-ranking-logo"
                        />
                      </div>
                    </td>
                  </tr>
                  {index % 4 === 3 && <CarouselSection />}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BCA;
