import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiFillHome } from "react-icons/ai";
import '../assets/coursescss/BSc_Nursing_css.css';


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
    logo: "/assets/collegenamelogos/iitdelhi.webp",
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.9,
      count: 1500,
      badge: "Best in Medical Education",
    },
    ranking: {
      position: 1,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#2",
    logo: "/assets/collegenamelogos/iitkharagpur.webp",
    name: "Christian Medical College (CMC)",
    location: "Vellore, Tamil Nadu",
    rankingLogo: "/assets/Rankinglogos/madras.webp",
    fees: "₹4,50,000",
    reviews: {
      rating: 4.8,
      count: 1200,
      badge: "Best in Patient Care",
    },
    ranking: {
      position: 2,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Tamil Nadu",
    stream: "MBBS",
    city: "Vellore",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#3",
    logo: "/assets/collegenamelogos/iimbbanglore.webp",
    name: "Post Graduate Institute of Medical Education and Research (PGIMER)",
    location: "Chandigarh",
    rankingLogo: "/assets/Rankinglogos/chandigarh.webp",
    fees: "₹5,75,000",
    reviews: {
      rating: 4.7,
      count: 900,
      badge: "Best in Research Facilities",
    },
    ranking: {
      position: 3,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Chandigarh",
    stream: "MBBS",
    city: "Chandigarh",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#4",
    logo: "/assets/collegenamelogos/iitkanpur.webp",
    name: "Lady Hardinge Medical College (LHMC)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.6,
      count: 800,
      badge: "Best in Women's Healthcare",
    },
    ranking: {
      position: 4,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#5",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    name: "Armed Forces Medical College (AFMC)",
    location: "Pune, Maharashtra",
    rankingLogo: "/assets/Rankinglogos/pune.webp",
    fees: "₹4,80,000",
    reviews: {
      rating: 4.5,
      count: 700,
      badge: "Best in Military Medicine",
    },
    ranking: {
      position: 5,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Maharashtra",
    stream: "MBBS",
    city: "Pune",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#6",
    logo: "/assets/collegenamelogos/iitdelhi.webp",
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.9,
      count: 1500,
      badge: "Best in Medical Education",
    },
    ranking: {
      position: 1,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#7",
    logo: "/assets/collegenamelogos/iitkharagpur.webp",
    name: "Christian Medical College (CMC)",
    location: "Vellore, Tamil Nadu",
    rankingLogo: "/assets/Rankinglogos/madras.webp",
    fees: "₹4,50,000",
    reviews: {
      rating: 4.8,
      count: 1200,
      badge: "Best in Patient Care",
    },
    ranking: {
      position: 2,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Tamil Nadu",
    stream: "MBBS",
    city: "Vellore",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#8",
    logo: "/assets/collegenamelogos/iimbbanglore.webp",
    name: "Post Graduate Institute of Medical Education and Research (PGIMER)",
    location: "Chandigarh",
    rankingLogo: "/assets/Rankinglogos/chandigarh.webp",
    fees: "₹5,75,000",
    reviews: {
      rating: 4.7,
      count: 900,
      badge: "Best in Research Facilities",
    },
    ranking: {
      position: 3,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Chandigarh",
    stream: "MBBS",
    city: "Chandigarh",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#9",
    logo: "/assets/collegenamelogos/iitkanpur.webp",
    name: "Lady Hardinge Medical College (LHMC)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.6,
      count: 800,
      badge: "Best in Women's Healthcare",
    },
    ranking: {
      position: 4,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#10",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    name: "Armed Forces Medical College (AFMC)",
    location: "Pune, Maharashtra",
    rankingLogo: "/assets/Rankinglogos/pune.webp",
    fees: "₹4,80,000",
    reviews: {
      rating: 4.5,
      count: 700,
      badge: "Best in Military Medicine",
    },
    ranking: {
      position: 5,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Maharashtra",
    stream: "MBBS",
    city: "Pune",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#11",
    logo: "/assets/collegenamelogos/iitdelhi.webp",
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.9,
      count: 1500,
      badge: "Best in Medical Education",
    },
    ranking: {
      position: 1,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#12",
    logo: "/assets/collegenamelogos/iitkharagpur.webp",
    name: "Christian Medical College (CMC)",
    location: "Vellore, Tamil Nadu",
    rankingLogo: "/assets/Rankinglogos/madras.webp",
    fees: "₹4,50,000",
    reviews: {
      rating: 4.8,
      count: 1200,
      badge: "Best in Patient Care",
    },
    ranking: {
      position: 2,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Tamil Nadu",
    stream: "MBBS",
    city: "Vellore",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#13",
    logo: "/assets/collegenamelogos/iimbbanglore.webp",
    name: "Post Graduate Institute of Medical Education and Research (PGIMER)",
    location: "Chandigarh",
    rankingLogo: "/assets/Rankinglogos/chandigarh.webp",
    fees: "₹5,75,000",
    reviews: {
      rating: 4.7,
      count: 900,
      badge: "Best in Research Facilities",
    },
    ranking: {
      position: 3,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Chandigarh",
    stream: "MBBS",
    city: "Chandigarh",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#14",
    logo: "/assets/collegenamelogos/iitkanpur.webp",
    name: "Lady Hardinge Medical College (LHMC)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.6,
      count: 800,
      badge: "Best in Women's Healthcare",
    },
    ranking: {
      position: 4,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#15",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    name: "Armed Forces Medical College (AFMC)",
    location: "Pune, Maharashtra",
    rankingLogo: "/assets/Rankinglogos/pune.webp",
    fees: "₹4,80,000",
    reviews: {
      rating: 4.5,
      count: 700,
      badge: "Best in Military Medicine",
    },
    ranking: {
      position: 5,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Maharashtra",
    stream: "MBBS",
    city: "Pune",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#16",
    logo: "/assets/collegenamelogos/iitdelhi.webp",
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.9,
      count: 1500,
      badge: "Best in Medical Education",
    },
    ranking: {
      position: 1,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#17",
    logo: "/assets/collegenamelogos/iitkharagpur.webp",
    name: "Christian Medical College (CMC)",
    location: "Vellore, Tamil Nadu",
    rankingLogo: "/assets/Rankinglogos/madras.webp",
    fees: "₹4,50,000",
    reviews: {
      rating: 4.8,
      count: 1200,
      badge: "Best in Patient Care",
    },
    ranking: {
      position: 2,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Tamil Nadu",
    stream: "MBBS",
    city: "Vellore",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Private",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
  },
  {
    rank: "#18",
    logo: "/assets/collegenamelogos/iimbbanglore.webp",
    name: "Post Graduate Institute of Medical Education and Research (PGIMER)",
    location: "Chandigarh",
    rankingLogo: "/assets/Rankinglogos/chandigarh.webp",
    fees: "₹5,75,000",
    reviews: {
      rating: 4.7,
      count: 900,
      badge: "Best in Research Facilities",
    },
    ranking: {
      position: 3,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Chandigarh",
    stream: "MBBS",
    city: "Chandigarh",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#19",
    logo: "/assets/collegenamelogos/iitkanpur.webp",
    name: "Lady Hardinge Medical College (LHMC)",
    location: "New Delhi, Delhi NCR",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    fees: "₹5,00,000",
    reviews: {
      rating: 4.6,
      count: 800,
      badge: "Best in Women's Healthcare",
    },
    ranking: {
      position: 4,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Delhi",
    stream: "MBBS",
    city: "New Delhi",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "Above 5L",
    courseType: "Regular",
  },
  {
    rank: "#20",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    name: "Armed Forces Medical College (AFMC)",
    location: "Pune, Maharashtra",
    rankingLogo: "/assets/Rankinglogos/pune.webp",
    fees: "₹4,80,000",
    reviews: {
      rating: 4.5,
      count: 700,
      badge: "Best in Military Medicine",
    },
    ranking: {
      position: 5,
      total: 50,
      year: 2024,
    },
    subStream: "Medical Sciences",
    state: "Maharashtra",
    stream: "MBBS",
    city: "Pune",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "NEET",
    feesRange: "4L - 5L",
    courseType: "Regular",
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


function BScNursing() {
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
      if (!event.target.closest(".bsc_d_filter-dropdown-container")) {
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
      <div key={filterType} className="bsc_d_filter-dropdown-container">
        <button
          className={`bsc_d_dropdown-button ${filters[filterType] ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveDropdown(activeDropdown === filterType ? null : filterType);
          }}
        >
          {filterType.replace(/([A-Z])/g, " $1").trim()}
        </button>
        {activeDropdown === filterType && (
          <div className="bsc_d_filter-dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`bsc_d_filter-option ${filters[filterType] === option ? "selected" : ""}`}
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

      <div className='bsc_d_bba-container'>
        <div className='bsc_d_breadcrumb'>

          <a href='/' className='bsc_d_home-icon'>
            <AiFillHome />
          </a>
          <span className="bsc_d_breadcrumb-arrow">&gt;</span>
          <span className="bsc_d_breadcrumb-text">BSc (Nursing) Colleges</span>
        </div>

        {/* Title */}
        <h1 className="bsc_d_title">
          List of B.Sc (Nursing) Colleges in India Based on 2024 Ranking
        </h1>

        {/* Banner Section */}
        <div className="bsc_d_flex-container">
          <div className="bsc_d_banner">
            <div className="bsc_d_banner-content">
              <img src="/assets/BSC_Nursing_hero_section_img/1.svg" />
            </div>
          </div>
          <div className="bsc_d_banner bsc_d_course-finder-banner">
            <div className="bsc_d_banner-content">
              <img src="/assets/BSC_Nursing_hero_section_img/2.svg" />
            </div>
          </div>
          <div className="bsc_d_banner bsc_d_college-predictor-banner">
            <div className="bsc_d_banner-content">
              <img src="/assets/BSC_Nursing_hero_section_img/3.svg" />
            </div>
          </div>
        </div>

        <div className="bsc_d_filter-bar bsc_d_sticky-filter-bar">
          <button className="bsc_d_filter-button" onClick={clearFilters}>
            <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
          </button>
          {renderFilterDropdowns()}
        </div>

        {Object.keys(filters).length > 0 && (
          <div className="bsc_d_active-filters">
            {Object.entries(filters).map(
              ([type, value]) =>
                value && (
                  <span key={type} className="bsc_d_filter-tag">
                    {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                    <button
                      className="bsc_d_remove-filter"
                      onClick={() => handleFilterClick(type, value)}
                    >
                      ×
                    </button>
                  </span>
                )
            )}
          </div>
        )}



        <div className='bsc_d_bba-container'>
          <div className="bsc_d_table-container">
            <div className='bsc_d_soring_bg'>
              <div className="bsc_d_sort-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6 className='bsc_d_heading'>Found {colleges.length} Colleges</h6>
                <div className="bsc_d_sort-options" style={{ display: 'flex', gap: '10px' }}>
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



                <div class="bsc_d_view-options">
                <button class="bsc_d_view-button active" aria-label="List view">
                  <svg class="bsc_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                  </svg>
                </button>
                <button class="bsc_d_view-button" aria-label="Grid view">
                  <svg class="bsc_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                  </svg>
                </button>
                <button class="bsc_d_view-button" aria-label="Compact view">
                  <svg class="bsc_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                  </svg>
                </button>
              </div>
              </div>

            </div>


            {/* ---------------------------------TABLE OF COLLEGES------------------------------------------------------ */}

            <div className="bsc_d_table-wrapper">
              <table className="bsc_d_college-table">
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
                      <td className="bsc_d_cd-rank">{college.rank}</td>
                      <td>
                        <div className="bsc_d_college-info">
                          <img src={college.logo} alt={college.name} className="bsc_d_college-logo" />
                          <div className="bsc_d_college-details">
                            <div className="bsc_d_college-name">{college.name}</div>
                            <div className="bsc_d_college-location">{college.location}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="bsc_d_fees-info">
                          <div className="bsc_d_fees-amount">{college.fees}</div>
                          <div className="bsc_d_fees-note">1st Year Fees</div>
                        </div>
                      </td>
                      <td>
                        <div className="bsc_d_reviews-info">
                          <div className="bsc_d_rating-wrapper">
                            <span className="bsc_d_rating">{college.reviews.rating}</span>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <span className="bsc_d_rating-scale">/ 5</span>
                          </div>
                          <div className="bsc_d_review-count">Based on {college.reviews.count} reviews</div>
                          <div className="bsc_d_review-badge">{college.reviews.badge}</div>
                        </div>
                      </td>
                      <td>
                        <div className="bsc_d_ranking-info">
                          <div className="bsc_d_ranking-position">#{college.ranking.position}</div>
                          <div className="bsc_d_ranking-details">
                            /{college.ranking.total} in India {college.ranking.year}
                          </div>
                          <img src={college.rankingLogo} alt="ranking" className="bsc_d_college-ranking-logo" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

{/* ------------------------------------------BEST COLLEGES------------------------------------------------------- */}

            <div className="bsc_d_carousel-container">
              <h3>Colleges Application Forms 2025</h3>
              <div className="bsc_d_carousel-wrapper">
                {universities.map((university, index) => (
                  <div className="bsc_d_university-card" key={index}>
                    <img src={university.imgSrc} alt={university.title} className="bsc_d_university-image" />
                    <p className="bsc_d_green">Best in Infrastructure</p>
                    <h3 className="bsc_d_university-title">{university.title}</h3>
                    <div className="bsc_d_university-details">
                      <p className="bsc_d_university-location">{university.location}</p>
                      <p className="bsc_d_university-description bsc_d_green-text">{university.description1}</p>
                      <p className="bsc_d_university-description">{university.description2}</p>
                      <a href={university.applyLink} target="_blank" rel="noopener noreferrer" className="bsc_d_apply-link">
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>


{/* ----------------------------------TOP COLLEGES-------------------------------------------- */}


            <div className="bsc_d_scroll-container">
              <h2 className="text-xl font-semibold mb-4">Top Collections for B.Sc (Nursing)</h2>
              <div className="bsc_d_scroll-wrapper">
                {collections.map((item, index) => (
                  <div key={index} className="bsc_d_scroll-card">
                    <div className="bsc_d_scroll-card-image">
                      <img src={item.image} alt={item.title} />
                      <div className="bsc_d_overlay">
                        <h3 className="bsc_d_overlay-title">{item.title}</h3>

                        <div className="bsc_d_icon-container">
                          {/* Static Icons */}
                          <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon1" className="bsc_d_icon-circle" />
                          <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon2" className="bsc_d_icon-circle" />
                          <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon3" className="bsc_d_icon-circle" />
                          <p className="bsc_d_overlay-subtitle">{item.count}</p>
                        </div>



                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


{/* ----------------------------- rating------------------------------------------------------- */}

            <div className="bsc_d_rating-container">
              <p className="bsc_d_rating-heading">
                How likely are you to recommend collegedunia.com to a friend or a colleague?
              </p>

              <div className="bsc_d_rating-options">
                <span className="bsc_d_rating-label bsc_d_first">Not so likely</span> 
                {[...Array(10)].map((_, index) => (
                  <button
                    key={index}
                    className={`bsc_d_rating-button 
                ${selectedRating === index + 1 ? "selected" : ""}
                ${hoveredRating >= index + 1 ? "hovered" : ""}`}
                    onClick={() => setSelectedRating(index + 1)}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(null)}
                  >
                    {index + 1}
                  </button>
                ))}
                <span className="bsc_d_rating-label bsc_d_last">Highly Likely</span> 
              </div>
            </div>

          </div>
        </div>
        <Footer />

      </div >
    </>
  );
}


export default BScNursing;