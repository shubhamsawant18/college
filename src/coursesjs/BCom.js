import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiFillHome } from "react-icons/ai";
import '../assets/coursescss/BCom.css';


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
        logo: "/assets/collegenamelogos/iitmumbai.webp",
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai city, Maharashtra",
        rankingLogo: "/assets/Rankinglogos/mumbai.webp",
        fees: "₹2,30,700 (1st Year Fees)",
        reviews: {
            rating: 4.8,
            count: 2000,
            badge: "Best in Engineering",
        },
        ranking: {
            position: 1,
            total: 50,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Maharashtra",
        stream: "B.Tech",
        city: "Mumbai",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 68,
        applicationDeadline: "14 Mar - 31 Mar 2024",
        placement: {
            averagePackage: "₹21 LPA",
            highestPackage: "₹3.7 Cr PA",
        },
    },
    {
        rank: "#2",
        logo: "/assets/collegenamelogos/iitkharagpur.webp",
        name: "IIT Kharagpur - Indian Institute of Technology",
        location: "Kharagpur, West Bengal",
        rankingLogo: "/assets/Rankinglogos/madras.webp",
        fees: "₹2,62,360 (1st Year Fees)",
        reviews: {
            rating: 4.7,
            count: 1800,
            badge: "Excellent Faculty",
        },
        ranking: {
            position: 6,
            total: 200,
            year: 2024,
        },
        subStream: "Engineering",
        state: "West Bengal",
        stream: "B.Tech",
        city: "Kharagpur",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 90,
        applicationDeadline: "10 June - 18 Jun 2024",
        placement: {
            averagePackage: "₹18 LPA",
            highestPackage: "₹2.68 Cr PA",
        },
    },
    {
        rank: "#3",
        logo: "/assets/collegenamelogos/iitdelhi.webp",
        name: "IIT Delhi - Indian Institute of Technology",
        location: "New Delhi, Delhi NCR",
        rankingLogo: "/assets/Rankinglogos/delhi.webp",
        fees: "₹2,28,650 (1st Year Fees)",
        reviews: {
            rating: 4.9,
            count: 1900,
            badge: "Best Research Facilities",
        },
        ranking: {
            position: 1,
            total: 27,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Delhi",
        stream: "B.Tech",
        city: "New Delhi",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 98,
        applicationDeadline: "14 Mar - 31 Mar 2024",
        placement: {
            averagePackage: "₹20 LPA",
            highestPackage: "₹2 Cr PA",
        },
    },
    {
        rank: "#4",
        logo: "/assets/collegenamelogos/iitmadras.webp",
        name: "IIT Madras - Indian Institute of Technology",
        location: "Chennai, Tamil Nadu",
        rankingLogo: "/assets/Rankinglogos/madras.webp",
        fees: "₹2,42,000 (1st Year Fees)",
        reviews: {
            rating: 4.8,
            count: 1750,
            badge: "Top Placements",
        },
        ranking: {
            position: 1,
            total: 200,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Tamil Nadu",
        stream: "B.Tech",
        city: "Chennai",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 85,
        applicationDeadline: "10 June - 18 Jun 2024",
        placement: {
            averagePackage: "₹19 LPA",
            highestPackage: "₹1.89 Cr PA",
        },
    },
    {
        rank: "#5",
        logo: "/assets/collegenamelogos/iitkanpur.webp",
        name: "IIT Kanpur - Indian Institute of Technology",
        location: "Kanpur, Uttar Pradesh",
        rankingLogo: "/assets/Rankinglogos/kanpur.webp",
        fees: "₹2,29,970 (1st Year Fees)",
        reviews: {
            rating: 4.7,
            count: 1600,
            badge: "Innovative Curriculum",
        },
        ranking: {
            position: 4,
            total: 27,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Uttar Pradesh",
        stream: "B.Tech",
        city: "Kanpur",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 85,
        applicationDeadline: "10 June - 18 Jun 2024",
        placement: {
            averagePackage: "₹17 LPA",
            highestPackage: "₹1.9 Cr PA",
        },
    },
    {
        rank: "#6",
        logo: "/assets/collegenamelogos/iitmumbai.webp",
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai city, Maharashtra",
        rankingLogo: "/assets/Rankinglogos/mumbai.webp",
        fees: "₹2,30,700 (1st Year Fees)",
        reviews: {
            rating: 4.8,
            count: 2000,
            badge: "Best in Engineering",
        },
        ranking: {
            position: 1,
            total: 50,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Maharashtra",
        stream: "B.Tech",
        city: "Mumbai",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 68,
        applicationDeadline: "14 Mar - 31 Mar 2024",
        placement: {
            averagePackage: "₹21 LPA",
            highestPackage: "₹3.7 Cr PA",
        },
    },
    {
        rank: "#7",
        logo: "/assets/collegenamelogos/iitkharagpur.webp",
        name: "IIT Kharagpur - Indian Institute of Technology",
        location: "Kharagpur, West Bengal",
        rankingLogo: "/assets/Rankinglogos/madras.webp",
        fees: "₹2,62,360 (1st Year Fees)",
        reviews: {
            rating: 4.7,
            count: 1800,
            badge: "Excellent Faculty",
        },
        ranking: {
            position: 6,
            total: 200,
            year: 2024,
        },
        subStream: "Engineering",
        state: "West Bengal",
        stream: "B.Tech",
        city: "Kharagpur",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 90,
        applicationDeadline: "10 June - 18 Jun 2024",
        placement: {
            averagePackage: "₹18 LPA",
            highestPackage: "₹2.68 Cr PA",
        },
    },
    {
        rank: "#8",
        logo: "/assets/collegenamelogos/iitdelhi.webp",
        name: "IIT Delhi - Indian Institute of Technology",
        location: "New Delhi, Delhi NCR",
        rankingLogo: "/assets/Rankinglogos/delhi.webp",
        fees: "₹2,28,650 (1st Year Fees)",
        reviews: {
            rating: 4.9,
            count: 1900,
            badge: "Best Research Facilities",
        },
        ranking: {
            position: 1,
            total: 27,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Delhi",
        stream: "B.Tech",
        city: "New Delhi",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 98,
        applicationDeadline: "14 Mar - 31 Mar 2024",
        placement: {
            averagePackage: "₹20 LPA",
            highestPackage: "₹2 Cr PA",
        },
    },
    {
        rank: "#9",
        logo: "/assets/collegenamelogos/iitmadras.webp",
        name: "IIT Madras - Indian Institute of Technology",
        location: "Chennai, Tamil Nadu",
        rankingLogo: "/assets/Rankinglogos/madras.webp",
        fees: "₹2,42,000 (1st Year Fees)",
        reviews: {
            rating: 4.8,
            count: 1750,
            badge: "Top Placements",
        },
        ranking: {
            position: 1,
            total: 200,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Tamil Nadu",
        stream: "B.Tech",
        city: "Chennai",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 85,
        applicationDeadline: "10 June - 18 Jun 2024",
        placement: {
            averagePackage: "₹19 LPA",
            highestPackage: "₹1.89 Cr PA",
        },
    },
    {
        rank: "#10",
        logo: "/assets/collegenamelogos/iitkanpur.webp",
        name: "IIT Kanpur - Indian Institute of Technology",
        location: "Kanpur, Uttar Pradesh",
        rankingLogo: "/assets/Rankinglogos/kanpur.webp",
        fees: "₹2,29,970 (1st Year Fees)",
        reviews: {
            rating: 4.7,
            count: 1600,
            badge: "Innovative Curriculum",
        },
        ranking: {
            position: 4,
            total: 27,
            year: 2024,
        },
        subStream: "Engineering",
        state: "Uttar Pradesh",
        stream: "B.Tech",
        city: "Kanpur",
        course: "Regular",
        programType: "Full Time",
        collegeType: "Government",
        entranceExam: "JEE-Adv.",
        feesRange: "2L - 5L",
        courseType: "Regular",
        cutoff: 85,
        applicationDeadline: "10 June - 18 Jun 2024",
        placement: {
            averagePackage: "₹17 LPA",
            highestPackage: "₹1.9 Cr PA",
        },
    },
];

const universities = [
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "Lovely Professional University - [LPU]",
        location: "Jalandhar, Punjab",
        description1: "NAAC A++ & NIRF Rank 2 | 3 Crore Highest Package",
        description2: "B.Sc (Nursing)",
        applyLink: "https://www.lpu.in/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "Manipal Academy of Higher Education",
        location: "Manipal, Karnataka",
        description1: "57 LPA High CTC | 77 Cr Worth Scholarships",
        description2: "B.Sc (Nursing)",
        applyLink: "https://manipal.edu/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "MIT World Peace University - [MIT-WPU]",
        location: "Pune, Maharashtra",
        description1: "100% Placement Assistance | 51.36 LPA Highest CTC",
        description2: "B.Sc (Nursing)",
        applyLink: "https://mitwpu.edu.in/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "Datta Meghe Institute of Higher Education",
        location: "Wardha, Maharashtra",
        description1: "₹57K 1st Year Fees",
        description2: "B.Sc (Nursing)",
        applyLink: "https://dmiher.edu.in/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "DY Patil University",
        location: "Navi Mumbai, Maharashtra",
        description1: "₹1 L 1st Year Fees",
        description2: "B.Sc (Nursing)",
        applyLink: "https://dypatil.edu/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "JSS Academy of Higher Education",
        location: "Mysore, Karnataka",
        description1: "₹1.66 L 1st Year Fees",
        description2: "B.Sc (Nursing)",
        applyLink: "https://www.jssuni.edu.in/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "SRM Institute of Science and Technology",
        location: "Chennai, Tamil Nadu",
        description1: "Top Ranked | High Placement Records",
        description2: "B.Sc (Nursing)",
        applyLink: "https://www.srmist.edu.in/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "Datta Meghe Institute of Higher Education",
        location: "Wardha, Maharashtra",
        description1: "₹57K 1st Year Fees",
        description2: "B.Sc (Nursing)",
        applyLink: "https://dmiher.edu.in/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "DY Patil University",
        location: "Navi Mumbai, Maharashtra",
        description1: "₹1 L 1st Year Fees",
        description2: "B.Sc (Nursing)",
        applyLink: "https://dypatil.edu/"
    },
    {
        imgSrc: "/assets/Bsc_Nursing/universities/10.webp",
        title: "JSS Academy of Higher Education",
        location: "Mysore, Karnataka",
        description1: "₹1.66 L 1st Year Fees",
        description2: "B.Sc (Nursing)",
        applyLink: "https://www.jssuni.edu.in/"
    },
];

const collections = [
    {
        title: "Best BSc Nursing colleges in India",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 1259 More",
    },
    {
        title: "Best BSc Nursing colleges in Lucknow",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 19 More",
    },
    {
        title: "Best BSc Nursing colleges in Delhi",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 71 More",
    },
    {
        title: "Best BSc Nursing colleges in Kerala",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 109 More",
    },
    {
        title: "Best BSc Nursing colleges in Bangalore",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 97 More",
    },
    {
        title: "Best BSc Nursing colleges in Jaipur",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 18 More",
    },
    {
        title: "Best BSc Nursing colleges in Kerala",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 109 More",
    },
    {
        title: "Best BSc Nursing colleges in Bangalore",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 97 More",
    },
    {
        title: "Best BSc Nursing colleges in Jaipur",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 18 More",
    },
    {
        title: "Best BSc Nursing colleges in Kerala",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 109 More",
    },
    {
        title: "Best BSc Nursing colleges in Bangalore",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 97 More",
    },
    {
        title: "Best BSc Nursing colleges in Jaipur",
        image: "/assets/Bsc_Nursing/universities/10.webp",
        count: " + 18 More",
    },
];


function BCom() {
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
            if (!event.target.closest(".bcom_d_filter-dropdown-container")) {
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
            <div key={filterType} className="bcom_d_filter-dropdown-container">
                <button
                    className={`bcom_d_dropdown-button ${filters[filterType] ? "active" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === filterType ? null : filterType);
                    }}
                >
                    {filterType.replace(/([A-Z])/g, " $1").trim()}
                </button>
                {activeDropdown === filterType && (
                    <div className="bcom_d_filter-dropdown-menu">
                        {options.map((option) => (
                            <div
                                key={option}
                                className={`bcom_d_filter-option ${filters[filterType] === option ? "selected" : ""}`}
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

            <div className='bcom_d_bba-container'>
                <div className='bcom_d_breadcrumb'>

                    <a href='/' className='bcom_d_home-icon'>
                        <AiFillHome />
                    </a>
                    <span className="bcom_d_breadcrumb-arrow">&gt;</span>
                    <span className="bcom_d_breadcrumb-text">B.Com Colleges</span>
                </div>

                {/* Title */}
                <h1 className="bcom_d_title">
                    List of B.Com Colleges in India Based on 2024 Ranking
                </h1>

                {/* Banner Section */}
                <div className="bcom_d_flex-container">
                    <div className="bcom_d_banner">
                        <div className="bcom_d_banner-content">
                            <img src="/assets/BSC_Nursing_hero_section_img/1.svg" />
                        </div>
                    </div>
                    <div className="bcom_d_banner bcom_d_course-finder-banner">
                        <div className="bcom_d_banner-content">
                            <img src="/assets/BSC_Nursing_hero_section_img/2.svg" />
                        </div>
                    </div>
                    <div className="bcom_d_banner bcom_d_college-predictor-banner">
                        <div className="bcom_d_banner-content">
                            <img src="/assets/BSC_Nursing_hero_section_img/3.svg" />
                        </div>
                    </div>
                </div>

                <div className="bcom_d_filter-bar bcom_d_sticky-filter-bar">
                    <button className="bcom_d_filter-button" onClick={clearFilters}>
                        <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
                    </button>
                    {renderFilterDropdowns()}
                </div>

                {Object.keys(filters).length > 0 && (
                    <div className="bcom_d_active-filters">
                        {Object.entries(filters).map(
                            ([type, value]) =>
                                value && (
                                    <span key={type} className="bcom_d_filter-tag">
                                        {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                                        <button
                                            className="bcom_d_remove-filter"
                                            onClick={() => handleFilterClick(type, value)}
                                        >
                                            ×
                                        </button>
                                    </span>
                                )
                        )}
                    </div>
                )}



                <div className='bcom_d_bba-container'>
                    <div className="bcom_d_table-container">
                        <div className='bcom_d_soring_bg'>
                            <div className="bcom_d_sort-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h6 className='bcom_d_heading'>Found {colleges.length} Colleges</h6>
                                <div className="bcom_d_sort-options" style={{ display: 'flex', gap: '10px' }}>
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




                                <div class="bcom_d_view-options">
                                    <button class="bcom_d_view-button active" aria-label="List view">
                                        <svg class="bcom_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                                        </svg>
                                    </button>
                                    <button class="bcom_d_view-button" aria-label="Grid view">
                                        <svg class="bcom_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                                        </svg>
                                    </button>
                                    <button class="bcom_d_view-button" aria-label="Compact view">
                                        <svg class="bcom_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>


                        {/* ---------------------------------TABLE OF COLLEGES------------------------------------------------------ */}

                        <div className="bcom_d_table-wrapper">
                            <table className="bcom_d_college-table">
                                <thead>
                                    <tr className='bcom_d_bg'>
                                        <th>CD Rank</th>
                                        <th>Colleges</th>
                                        <th>Course Fees</th>
                                        <th>User Reviews</th>
                                        <th>Ranking</th>
                                        <th>Placement</th>  {/* New Placement Column */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredColleges.map((college, index) => (
                                        <tr key={college.rank}>
                                            <td className="bcom_d_cd-rank">{college.rank}</td>
                                            <td>
                                                <div className="bcom_d_college-info">
                                                    <img src={college.logo} alt={college.name} className="bcom_d_college-logo" />
                                                    <div className="bcom_d_college-details">
                                                        <div className="bcom_d_college-name">{college.name}</div>
                                                        <div className="bcom_d_college-location">{college.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bcom_d_fees-info">
                                                    <div className="bcom_d_fees-amount">{college.fees}</div>
                                                    <div className="bcom_d_fees-note">1st Year Fees</div>
                                                    <a href={college.placement.link} className="bcom_d_compare-placement">➜ Compare Fees</a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bcom_d_reviews-info">
                                                    <div className="bcom_d_rating-wrapper">
                                                        <span className="bcom_d_rating">{college.reviews.rating}</span>
                                                        <i className="fa fa-star star" aria-hidden="true"></i>
                                                        <span className="bcom_d_rating-scale">/ 5</span>
                                                    </div>
                                                    <div className="bcom_d_review-count">Based on {college.reviews.count} reviews</div>
                                                    <div className="bcom_d_review-badge">{college.reviews.badge}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bcom_d_ranking-info">
                                                    {/* <div className="ranking-position">#{college.ranking.position}</div> */}
                                                    <div className="bcom_d_ranking-details">
                                                        # {college.ranking.position}/<span>{college.ranking.total}</span> in India {college.ranking.year}
                                                    </div>
                                                    <img src={college.rankingLogo} alt="ranking" className="bcom_d_college-ranking-logo" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bcom_d_placement-info">
                                                    <div className="bcom_d_average-package">{college.placement.averagePackage}</div>
                                                    <div className="bcom_d_package-label">Average Package</div>
                                                    <div className="bcom_d_highest-package">{college.placement.highestPackage}</div>
                                                    <div className="bcom_d_package-label">Highest Package</div>
                                                    <a href={college.placement.link} className="bcom_d_compare-placement">➜ Compare Placement</a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>



                        {/* ------------------------------------------BEST COLLEGES------------------------------------------------------- */}

                        <div className="bcom_d_carousel-container">
                            <h3>Colleges Application Forms 2025</h3>
                            <div className="bcom_d_carousel-wrapper">
                                {universities.map((university, index) => (
                                    <div className="bcom_d_university-card" key={index}>
                                        <img src={university.imgSrc} alt={university.title} className="bcom_d_university-image" />
                                        <p className="bcom_d_green">Best in Infrastructure</p>
                                        <h3 className="bcom_d_university-title">{university.title}</h3>
                                        <div className="bcom_d_university-details">
                                            <p className="bcom_d_university-location">{university.location}</p>
                                            <p className="bcom_d_university-description bcom_d_green-text">{university.description1}</p>
                                            <p className="bcom_d_university-description">{university.description2}</p>
                                            <a href={university.applyLink} target="_blank" rel="noopener noreferrer" className="bcom_d_apply-link">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* ----------------------------------TOP COLLEGES-------------------------------------------- */}


                        <div className="bcom_d_scroll-container">
                            <h2 className="text-xl font-semibold mb-4">Top Collections for B.Com</h2>
                            <div className="bcom_d_scroll-wrapper">
                                {collections.map((item, index) => (
                                    <div key={index} className="bcom_d_scroll-card">
                                        <div className="bcom_d_scroll-card-image">
                                            <img src={item.image} alt={item.title} />
                                            <div className="bcom_d_overlay">
                                                <h3 className="bcom_d_overlay-title">{item.title}</h3>

                                                <div className="bcom_d_icon-container">
                                                    {/* Static Icons */}
                                                    <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon1" className="bcom_d_icon-circle" />
                                                    <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon2" className="bcom_d_icon-circle" />
                                                    <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon3" className="bcom_d_icon-circle" />
                                                    <p className="bcom_d_overlay-subtitle">{item.count}</p>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* ----------------------------- rating------------------------------------------------------- */}

                        <div className="bcom_d_rating-container">
                            <p className="bcom_d_rating-heading">
                                How likely are you to recommend collegedunia.com to a friend or a colleague?
                            </p>

                            <div className="bcom_d_rating-options">
                                <span className="bcom_d_rating-label bcom_d_first">Not so likely</span>
                                {[...Array(10)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`bcom_d_rating-button 
                ${selectedRating === index + 1 ? "selected" : ""}
                ${hoveredRating >= index + 1 ? "hovered" : ""}`}
                                        onClick={() => setSelectedRating(index + 1)}
                                        onMouseEnter={() => setHoveredRating(index + 1)}
                                        onMouseLeave={() => setHoveredRating(null)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <span className="bcom_d_rating-label bcom_d_last">Highly Likely</span>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />

            </div >
        </>
    );
}


export default BCom;