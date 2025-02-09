import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiFillHome } from "react-icons/ai";
import '../assets/coursescss/MBA.css';


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
    logo: "/assets/collegenamelogos/iimbbanglore.webp",
    name: "IIM Bangalore - Indian Institute of Management",
    location: "Bangalore, Karnataka | ⭐ 4.9/5",
    rankingLogo: "/assets/Rankinglogos/bangalore.webp",
    fees: "₹1,25,000 (1st Year Fees)",
    reviews: {
      rating: 4.9,
      count: 2000,
      badge: "Top Management School"
    },
    ranking: {
      position: 1,
      total: 50,
      year: 2019
    },
    subStream: "Management",
    state: "Karnataka",
    stream: "MBA",
    city: "Bangalore",
    course: "Regular",
    programType: "Full Time",
    collegeType: "Government",
    entranceExam: "CAT",
    feesRange: "Above 1 Lakh",
    courseType: "Regular"
  }, 
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
    imgSrc: "/assets/mbaimages/mba_caf1.webp",
    title: "Lovely Professional University - [LPU]",
    location: "Jalandhar, Punjab",
    description1: "NAAC A++ & NIRF Rank 2 | 3 Crore Highest Package",
    description2: "MBA/PGDM",
    applyLink: "https://admissihttps://admission.lpu.in/?utm_source=collegedunia&utm_medium=liveformd&utm_campaign=onlineon.lpu.in/?utm_source=collegedunia&utm_medium=liveformd&utm_campaign=online"
  },
  {
    imgSrc: "/assets/caf2.webp",
    title: "GIBS Business School",
    location: "Bangalore, Karnataka",
    description1: "16.15 LPA Highest Package",
    description2: "MBA/PGDM",
    applyLink: "https://apply.mhttps://admission.gibsbschool.com/?utm_source=collegedunia&utm_medium=liveform&utm_campaign=onlineanipal.edu/login?utm_source=Collegedunia&utm_medium=Liveform&utm_campaign=Online"
  },
  {
    imgSrc: "/assets/caf3.webp",
    title: "MIT World Peace University - [MIT-WPU]",
    location: "Pune, Maharashtra",
    description1: "100% Placement Assistance | 51.36 LPA Highest CTC",
    description2: "MBA/PGDM",
    applyLink: "https://admissiohttps://admissions.mitwpu.edu.in/?utm_source=collegedunia&utm_medium=liveform&utm_campaign=onlinens.mitwpu.edu.in/?utm_source=collegedunia&utm_medium=liveform&utm_campaign=online"
  },
  {
    imgSrc: "/assets/caf4.webp",
    title: "Amity University",
    location: "Noida, Uttar Pradesh",
    description1: "6.72L 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://collegedunia.com/https://collegedunia.com/university/54797-amity-university-noida?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopuniversity/62559-amity-university-mohali?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/caf5.webp",
    title: "ISBM University",
    location: "Raipur, Chhattisgarh",
    description1: "₹77.90 L 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://collegedunia.https://collegedunia.com/university/58954-isbm-university-raipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopcom/university/25606-jain-university-ju-bangalore?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/caf6.webp",
    title: "Parul Institute of Management and Research",
    location: "Vadodara, Gujarat",
    description1: "₹81.55K 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://collegedunihttps://collegedunia.com/college/58044-parul-institute-of-management-and-research-vadodara?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopa.com/university/25940-galgotias-university-gu-greater-noida?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/caf7.webp",
    title: "University of Petroleum and Energy Studies - [UPES]",
    location: "Dehradun, Uttarakhand",
    description1: "8.42L 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://collegedunihttps://collegedunia.com/university/25997-university-of-petroleum-and-energy-studies-upes-dehradun?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopa.com/university/25833-nims-university-jaipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/caf8.webp",
    title: "S.P Mandai's Prin L.N Welingkar Institute of Management, Development and Research",
    location: "Mumbai, Maharashtra",
    description1: "₹7.04L 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://collegedunia.https://collegedunia.com/college/19246-sp-mandalis-prin-ln-welingkar-institute-of-management-develepment-and-research-weschool-mumbai?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopcom/university/25787-lovely-professional-university-lpu-jalandhar?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/caf9.webp",
    title: "NIMS University",
    location: "Jaipur, Rajasthan",
    description1: "₹3L 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://collegeduhttps://collegedunia.com/university/25833-nims-university-jaipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopnia.com/university/25807-iis-deemed-to-be-university-iisu-jaipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
  {
    imgSrc: "/assets/caf10.webp",
    title: "Pacific University",
    location: "Udaipur, Rajasthan",
    description1: "₹85K 1st Year Fees",
    description2: "MBA/PGDM",
    applyLink: "https://colleghttps://collegedunia.com/university/25836-pacific-university-udaipur?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktopedunia.com/university/25972-sharda-university-greater-noida?utm_source=similar-college-ad-liveform&utm_medium=Body&utm_campaign=desktop"
  },
];

const collections = [
  {
    title: "Best MBA colleges in India accepting CMAT",
    image: "/assets/images/university.jpg",
    count: " + 1032 More",
  },
  {
    title: "Best private MBA colleges in India",
    image: "/assets/images/university.jpg",
    count: " + 4181 More",
  },
  {
    title: "Best MBA iin India accepting XAT",
    image: "/assets/images/university.jpg",
    count: " + 787 More",
  },
  {
    title: "Best Government MBA colleges in India",
    image: "/assets/images/university.jpg",
    count: " + 726 More",
  },
];

const mbacolleges = [
  {
    name: "IIM Ahmedabad",
    totalSeats: 132,
    cutoff2023: "57 NEET 2023 Cutoff",
    averageFee: "7,640 INR",
  },
  {
    name: "Christian Medical College (CMC), Vellore",
    totalSeats: 100,
    cutoff2023: "112 Tamil Nadu NEET Cutoff",
    averageFee: "1.65 Lakhs INR",
  },
  {
    name: "Banaras Hindu University (BHU), Varanasi",
    totalSeats: 100,
    cutoff2023: "919 NEET 2023 Cutoff",
    averageFee: "71,460 INR",
  },
  {
    name: "Kasturba Medical College (KMC), Manipal",
    totalSeats: 250,
    cutoff2023: "51200 NEET 2023 Cutoff",
    averageFee: "71.2 Lakhs INR",
  },
  {
    name: "Jawaharlal Institute of Post Graduate Medical Education and Research (JIPMER), Pondicherry",
    totalSeats: 260,
    cutoff2023: "277 NEET 2023 Cutoff",
    averageFee: "42,000 INR",
  },
  {
    name: "King George’s Medical University (KGMU), Lucknow",
    totalSeats: 250,
    cutoff2023: "2199 NEET 2023 Cutoff",
    averageFee: "2.06 Lakhs INR",
  },
  {
    name: "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    totalSeats: 250,
    cutoff2023: "615686 NEET Cutoff",
    averageFee: "1.25 Cr INR",
  },
  {
    name: "St. John’s Medical College, Bangalore",
    totalSeats: 150,
    cutoff2023: "NEET Rank",
    averageFee: "37.08 Lakhs INR",
  },
  {
    name: "Aligarh Muslim University (AMU), Aligarh",
    totalSeats: 150,
    cutoff2023: "8597 NEET 2023 Cutoff",
    averageFee: "1.82 Lakhs INR",
  },
  {
    name: "Maulana Azad Medical College (MAMC), New Delhi",
    totalSeats: 250,
    cutoff2023: "87 NEET 2023 Cutoff",
    averageFee: "13,025 INR",
  },
];

const mbainstitutes = [
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Bangalore",
    nirf24: "2",
    nirf23: "2",
    nirf22: "2",
    nirf21: "2",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
  {
    name: "Indian Institute of Management, (IIM) Ahmedabad",
    nirf24: "1",
    nirf23: "1",
    nirf22: "1",
    nirf21: "1",
  },
];

const nirfRanking = [
  {
    rank: 1,
    name: "All India Institute of Medical Sciences, Delhi",
    score: 94.32,
  },
  {
    rank: 2,
    name: "Post Graduate Institute of Medical Education and Research, Chandigarh",
    score: 81.1,
  },
  {
    rank: 3,
    name: "Christian Medical College, Vellore",
    score: 75.29,
  },
  {
    rank: 4,
    name: "National Institute of Mental Health & Neuro Sciences, Bangalore",
    score: 72.46,
  },
  {
    rank: 5,
    name: "Jawaharlal Institute of Post Graduate Medical Education & Research, Puducherry",
    score: 72.1,
  },
  {
    rank: 6,
    name: "Amrita Vishwa Vidyapeetham, Coimbatore",
    score: 70.84,
  },
  {
    rank: 7,
    name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow",
    score: 69.62,
  },
  {
    rank: 8,
    name: "Banaras Hindu University, Beneras",
    score: 68.75,
  },
  {
    rank: 9,
    name: "Kasturba Medical College, Manipal",
    score: 66.19,
  },
  {
    rank: 10,
    name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology, Thiruvananthapuram",
    score: 65.24,
  },
];

const feeStructureColleges = [
  {
    name: "All India Institute Of Medical Sciences - [AIIMS], New Delhi",
    totalCourseFee: "7,640 INR",
  },
  {
    name: "Christian Medical College - [CMC], Vellore",
    totalCourseFee: "1,65,250 INR",
  },
  {
    name: "Maulana Azad Medical College - [MAMC], New Delhi",
    totalCourseFee: "13,025 INR",
  },
  {
    name: "Armed Forces Medical College - [AFMC], Pune",
    totalCourseFee: "90,710 INR",
  },
  {
    name: "Jawaharlal Institute Of Post Graduate Medical Education And Research - [JIPMER] Pondicherry",
    totalCourseFee: "42,000 INR",
  },
  {
    name: "All India Institute Of Medical Sciences - [AIIMS], Bhopal",
    totalCourseFee: "4,788 INR",
  },
  {
    name: "Kasturba Medical College - [KMC], Manipal",
    totalCourseFee: "70,90,000 INR",
  },
  {
    name: "King George's Medical University - [KGMU], Lucknow",
    totalCourseFee: "2,06,900 INR",
  },
  {
    name: "Vardhman Mahavir Medical College - [VMMC], New Delhi",
    totalCourseFee: "2,30,000 INR",
  },
  {
    name: "University College Of Medical Sciences - [UCMS], New Delhi",
    totalCourseFee: "1,33,000 INR",
  },
];

const nirfRanking24 = [
  {
    rank: 1,
    name: "All India Institute of Medical Sciences, Delhi",
    score: 94.32,
  },
  {
    rank: 3,
    name: "Christian Medical College, Vellore",
    score: 75.29,
  },
  {
    rank: 5,
    name: "Jawaharlal Institute of Post Graduate Medical Education & Research, Puducherry",
    score: 72.1,
  },
  {
    rank: 6,
    name: "Amrita Vishwa Vidyapeetham, Coimbatore",
    score: 70.84,
  },
  {
    rank: 8,
    name: "Banaras Hindu University, Beneras",
    score: 68.75,
  },
  {
    rank: 9,
    name: "Kasturba Medical College, Manipal",
    score: 66.19,
  },
  {
    rank: 10,
    name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology, Thiruvananthapuram",
    score: 65.24,
  },
  {
    rank: 11,
    name: "Madras Medical College & Government General Hospital, Chennai",
    score: 64.43,
  },
  {
    rank: 12,
    name: "King George's Medical University, Lucknow",
    score: 63.93,
  },
  {
    rank: 13,
    name: "All India Institute of Medical Sciences, Jodhpur",
    score: 62.43,
  },
  {
    rank: 14,
    name: "Vardhman Mahavir Medical College & Safdarjung Hospital, New Delhi",
    score: 61.73,
  },
  {
    rank: 15,
    name: "Dr. D. Y. Patil Vidyapeeth, Pune",
    score: 61.35,
  },
  {
    rank: 16,
    name: "Siksha 'O' Anusandhan, Bhubaneswar",
    score: 60.66,
  },
  {
    rank: 17,
    name: "All India Institute of Medical Sciences, Bhubaneswar",
    score: 60.65,
  },
  {
    rank: 18,
    name: "Saveetha Institute of Medical and Technical Sciences, Chennai",
    score: 60.61,
  },
  {
    rank: 19,
    name: "St. John's Medical College, Bangalore",
    score: 60.49,
  },
  {
    rank: 20,
    name: "S.R.M. Institute of Science and Technology, Chennai",
    score: 60.47,
  },
  {
    rank: 21,
    name: "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    score: 60.44,
  },
  {
    rank: 22,
    name: "All India Institute of Medical Sciences, Rishikesh",
    score: 60.06,
  },
  {
    rank: 24,
    name: "Institute of Post Graduate Medical Education & Research, Kolkata",
    score: 58.49,
  },
];

const indiaTodayRanking = [
  {
    rank: 1,
    name: "All India Institute Of Medical Sciences - [AIIMS], New Delhi",
  },
  {
    rank: 2,
    name: "Jawaharlal Nehru Institute of Post Graduate Medical Education and Research, Puducherry",
  },
  {
    rank: 3,
    name: "Christian Medical College - [CMC], Vellore",
  },
  {
    rank: 4,
    name: "Armed Forces Medical College - [AFMC], Pune",
  },
  {
    rank: 5,
    name: "Maulana Azad Medical College, New Delhi",
  },
  {
    rank: 7,
    name: "King George’s Medical College - [KGMU], Lucknow",
  },
  {
    rank: 8,
    name: "Vardhman Mahavir Medical College - [VMMC], New Delhi",
  },
  {
    rank: 9,
    name: "Lady Hardinge Medical College, University of Delhi",
  },
  {
    rank: 10,
    name: "University College of Medical Sciences, University of Delhi",
  },
  {
    rank: 11,
    name: "Seth Gordhandas Sunderdas Medical College and KEM Hospital, Mumbai",
  },
  {
    rank: 12,
    name: "Kasturba Medical College, Manipal, Manipal Academy of Hospital",
  },
  {
    rank: 13,
    name: "Bangalore Medical College and Research Institute",
  },
  {
    rank: 14,
    name: "GMCH Chandigarh - Government Medical College and Hospital",
  },
  {
    rank: 15,
    name: "S.M.S. Medical College, Jaipur",
  },
  {
    rank: 16,
    name: "Lokmanya Tilak Municipal Medical College",
  },
  {
    rank: 17,
    name: "Jawaharlal Nehru Medical College, Aligarh Muslim University - [AMU], Aligarh",
  },
  {
    rank: 18,
    name: "All India Institute Of Medical Sciences - [AIIMS], Bhubaneswar",
  },
  {
    rank: 19,
    name: "All India Institute Of Medical Sciences - [AIIMS], Jodhpur",
  },
  {
    rank: 20,
    name: "All India Institute Of Medical Sciences - [AIIMS], Bhopal",
  },
  {
    rank: 21,
    name: "St. John’s National Academy of Health Sciences, Bangalore",
  },
];

const theWeekRanking = [
  {
    rank: 1,
    name: "All India Institute Of Medical Sciences - [AIIMS], New Delhi",
  },
  {
    rank: 2,
    name: "Jawaharlal Nehru Institute of Post Graduate Medical Education and Research, Puducherry",
  },
  {
    rank: 3,
    name: "Banaras Hindu University - [BHU], Varanasi",
  },
  {
    rank: 4,
    name: "King George’s Medical College - [KGMU], Lucknow",
  },
  {
    rank: 5,
    name: "Postgraduate Institute of Medical Education and Research - [PGIMER], Chandigarh",
  },
  {
    rank: 6,
    name: "Sanjay Gandhi Postgraduate Institute of Medical Science - [SGPGIMS], Lucknow",
  },
  {
    rank: 7,
    name: "National Institute of Mental Health and Neurosciences",
  },
  {
    rank: 8,
    name: "All India Institute Of Medical Sciences - [AIIMS], Jodhpur",
  },
  {
    rank: 9,
    name: "All India Institute Of Medical Sciences - [AIIMS], Bhubaneswar",
  },
  {
    rank: 10,
    name: "All India Institute Of Medical Sciences - [AIIMS], Raipur",
  },
  {
    rank: 11,
    name: "BLDE University",
  },
];

const mbbsSeats = [
  {
    name: "CMC Vellore - Christian Medical College",
    seats: 100,
  },
  {
    name: "Dayanand Medical College and Hospital, Ludhiana",
    seats: 100,
  },
  {
    name: "KMC Manipal - Kasturba Medical College",
    seats: 250,
  },
  {
    name: "Chettinad Hospital and Research Institute, Kanchipuram",
    seats: 250,
  },
  {
    name: "St Johns Medical College, Bangalore",
    seats: 150,
  },
  {
    name: "JSS Medical College, JSS Academy of Higher Education and Research",
    seats: 200,
  },
  {
    name: "K.S. Hegde Medical Academy (KSHEMA), Mangalore",
    seats: 150,
  },
  {
    name: "SRM University Chennai - SRM Institute of Science and Technology",
    seats: 150,
  },
  {
    name: "KIMS - Kalinga Institute of Medical Sciences",
    seats: 250,
  },
  {
    name: "KMC Mangalore - Kasturba Medical College",
    seats: 250,
  },
];

const mbbsSeatsGov = [
  {
    name: "All India Institute of Medical Sciences - [AIIMS], New Delhi",
    seats: 107,
  },
  {
    name: "Madras Medical College",
    seats: 250,
  },
  {
    name: "Jawaharlal Institute of Postgraduate Medical Education and Research - [JIPMER], Pondicherry",
    seats: 200,
  },
  {
    name: "King George's Medical University - [KGMU], Lucknow",
    seats: 250,
  },
  {
    name: "AIIMS Bhubaneswar - All India Institute of Medical Sciences",
    seats: 100,
  },
  {
    name: "Maulana Azad Medical College - [MAMC], New Delhi",
    seats: 250,
  },
  {
    name: "Vardhman Mahavir Medical College - [VMMC], New Delhi",
    seats: 170,
  },
  {
    name: "University College of Medical Sciences - [UCMS], New Delhi",
    seats: 170,
  },
  {
    name: "GMCH Chandigarh - Government Medical College and Hospital",
    seats: 150,
  },
  {
    name: "Sawai Man Singh Medical College - SMS Medical College, Jaipur",
    seats: 250,
  },
];

const collegeCutoffs = [
  {
    name: "All India Institute of Medical Sciences - [AIIMS], New Delhi",
    cutoffLink: "AIIMS Delhi Cutoff",
  },
  {
    name: "Sri Venkateswara Institute Of Medical Sciences - [SVIMS], Tirupati",
    cutoffLink: "SVIMS Tirupati Cutoff",
  },
  {
    name: "Banaras Hindu University - [BHU], Varanasi",
    cutoffLink: "BHU Varanasi Cutoff",
  },
  {
    name: "Jawaharlal Institute of Postgraduate Medical Education and Research - [JIPMER], Pondicherry",
    cutoffLink: "JIPMER Pondicherry Cutoff",
  },
  {
    name: "King George's Medical University - [KGMU], Lucknow",
    cutoffLink: "KGMU Lucknow Cutoff",
  },
  {
    name: "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    cutoffLink: "SRIHER Cutoff",
  },
  {
    name: "St John's Medical College, Bangalore",
    cutoffLink: "SJMC Bangalore Cutoff",
  },
  {
    name: "KMC Mangalore - Kasturba Medical College",
    cutoffLink: "KMC Mangalore Cutoff",
  },
  {
    name: "Maulana Azad Medical College - [MAMC], New Delhi",
    cutoffLink: "MAMC New Delhi Cutoff",
  },
  {
    name: "Jamia Hamdard University, New Delhi",
    cutoffLink: "Jamia Hamdard University Cutoff",
  },
];

const neetCutoff2024 = [
  {
    category: "UR",
    percentile: "50th",
    expectedCutoff: "720-137"
  },
  {
    category: "SC/ ST/ OBC",
    percentile: "40th",
    expectedCutoff: "136-107"
  },
  {
    category: "UR-PH",
    percentile: "45th",
    expectedCutoff: "136-121"
  },
  {
    category: "SC/ OBC- PH",
    percentile: "40th",
    expectedCutoff: "120-107"
  },
  {
    category: "ST-PH",
    percentile: "40th",
    expectedCutoff: "120-108"
  }
];

const topMedicalColleges = [
  {
    name: "AIIMS Delhi",
    closingRank: 57
  },
  {
    name: "Seth G.S. Medical College, Mumbai",
    closingRank: 656
  },
  {
    name: "BJMC Pune",
    closingRank: 1892
  },
  {
    name: "JIPMER Puducherry",
    closingRank: 277
  },
  {
    name: "SMS Medical College Jaipur",
    closingRank: 1057
  },
  {
    name: "Maulana Azad Medical College, New Delhi",
    closingRank: 85
  },
  {
    name: "B. J. Medical College, Ahmedabad",
    closingRank: 714
  },
  {
    name: "AIIMS Bhubaneswar",
    closingRank: 491
  },
  {
    name: "Kolkata Medical College, Kolkata",
    closingRank: 2103
  },
  {
    name: "VMMC & Safdarjung Hospital, New Delhi",
    closingRank: 107
  },
  {
    name: "AIIMS Patna",
    closingRank: 1417
  },
  {
    name: "Madras Medical College, Chennai",
    closingRank: 747
  },
  {
    name: "Lady Hardinge Medical College, New Delhi",
    closingRank: 485
  }
];

const medicalCollegesFeesPackages = [
  {
    name: "CMC Vellore",
    totalTuitionFee: "INR 13,500",
    annualAvgPackage: "INR 4 LPA"
  },
  {
    name: "JIPMER Puducherry",
    totalTuitionFee: "INR 7,326",
    annualAvgPackage: "INR 12 LPA"
  },
  {
    name: "KGMU",
    totalTuitionFee: "INR 2.46 lakh",
    annualAvgPackage: "INR 8.50 LPA"
  },
  {
    name: "Madras Medical College, Chennai",
    totalTuitionFee: "INR 68,018",
    annualAvgPackage: "INR 7.47 LPA"
  },
  {
    name: "Sri Ramachandra Institute of Higher Education and Research",
    totalTuitionFee: "INR 1.13 crore",
    annualAvgPackage: "INR 11.01 LPA"
  }
];

const medicalCollegesNorth = [
  {
    name: "All India Institute of Medical Sciences - [AIIMS], New Delhi",
    totalCourseFee: "INR 7,640"
  },
  {
    name: "Vardhman Mahavir Medical College & Safdarjung Hospital",
    totalCourseFee: "INR 1,85,000"
  },
  {
    name: "Maulana Azad Medical College - [MAMC], Delhi",
    totalCourseFee: "INR 13,025"
  },
  {
    name: "University College of Medical Science - [UCMS], Delhi",
    totalCourseFee: "INR 22,930"
  },
  {
    name: "Banaras Hindu University - [BHU], Varanasi",
    totalCourseFee: "INR 59,850"
  },
  {
    name: "Chirayu Medical College And Hospital - [CMCH], Bhopal",
    totalCourseFee: "INR 13,25,000"
  },
  {
    name: "Aligarh Muslim University - [AMU], Aligarh",
    totalCourseFee: "INR 18,27,60"
  },
  {
    name: "King George's Medical University - [KGMU], Lucknow",
    totalCourseFee: "INR 2,06,900"
  },
  {
    name: "Guru Gobind Singh Indraprastha University - [GGSIPU], Delhi",
    totalCourseFee: "INR 4,62,000"
  },
  {
    name: "Hamdard Institute of Medical Sciences & Research",
    totalCourseFee: "INR 60,65,00"
  },
  {
    name: "Dr. Baba Saheb Ambedkar Medical College & Hospital",
    totalCourseFee: "INR 4,65,000"
  }
];

const medicalCollegesEast = [
  {
    name: "Kolkata Medical College - [KMC], Kolkata",
    totalCourseFee: "INR 40,500"
  },
  {
    name: "Institute Of Post Graduate Medical Education And Research - [IPGMER], Kolkata",
    totalCourseFee: "INR 3,25,000"
  },
  {
    name: "R. G. Kar Medical College And Hospital - [RGKMCH], Kolkata",
    totalCourseFee: "INR 51,250"
  },
  {
    name: "Techno India University, Kolkata",
    totalCourseFee: "N/A"
  },
  {
    name: "Calcutta National Medical College - [CNMC], Kolkata",
    totalCourseFee: "INR 47,000"
  },
  {
    name: "Gauhati Medical College And Hospital - [GMCH], Guwahati",
    totalCourseFee: "N/A"
  },
  {
    name: "Assam Medical College, Dibrugarh",
    totalCourseFee: "INR 1,55,000"
  },
  {
    name: "Tomo Riba Institute Of Health And Medical Sciences",
    totalCourseFee: "N/A"
  },
  {
    name: "Bankura Sammilani Medical College, Bankura",
    totalCourseFee: "INR 47,083"
  },
  {
    name: "Regional Institute Of Medical Sciences, Imphal",
    totalCourseFee: "INR 52,800"
  },
  {
    name: "Tripura Medical College, West Tripura",
    totalCourseFee: "INR 71,50,000"
  }
];

const medicalCollegesWest = [
  {
    name: "AFMC Pune - Armed Forces Medical College, Pune",
    totalCourseFee: "INR 90,710"
  },
  {
    name: "B J Medical College - [BJMC], Ahmedabad",
    totalCourseFee: "INR 30,000"
  },
  {
    name: "Dr DY Patil Vidyapeeth - [DPU], Pune",
    totalCourseFee: "INR 1,25,00,000"
  },
  {
    name: "AIIMS Nagpur - All India Institute of Medical Sciences, Nagpur",
    totalCourseFee: "INR 7,028"
  },
  {
    name: "Government Medical College, Surat",
    totalCourseFee: "INR 47,85,000"
  },
  {
    name: "AIIMS Jodhpur - All India Institute of Medical Sciences",
    totalCourseFee: "INR 8,140"
  },
  {
    name: "BJMC Pune - BJ Government Medical College, Pune",
    totalCourseFee: "INR 5,08,000"
  },
  {
    name: "K.J. Somaiya Medical College & Research Centre - [KJSMC], Mumbai",
    totalCourseFee: "INR 51,25,000"
  },
  {
    name: "SMS Medical College - [SMSMC], Jaipur",
    totalCourseFee: "INR 13,500"
  },
  {
    name: "Smt. B.K. Shah Medical Institute and Research Centre, Vadodara",
    totalCourseFee: "INR 79,75,000"
  },
  {
    name: "Dr. SN Medical College & Hospital, Jodhpur",
    totalCourseFee: "INR 1,27,050"
  }
];

const medicalCollegesSouth = [
  {
    name: "Kasturba Medical College - [KMC], Manipal",
    totalCourseFee: "INR 70,90,000"
  },
  {
    name: "Christian Medical College - [CMC], Vellore",
    totalCourseFee: "INR 1,65,250"
  },
  {
    name: "SRM Institute Of Science And Technology - [SRMIST], Chennai",
    totalCourseFee: "INR 1,25,00,000"
  },
  {
    name: "Sri Venkateswara Institute Of Medical Sciences - [SVIMS], Tirupati",
    totalCourseFee: "INR 3,39,500"
  },
  {
    name: "Government Medical College, Kozhikode",
    totalCourseFee: "INR 1,48,490"
  },
  {
    name: "Jawaharlal Institute Of Post Graduate Medical Education And Research - [JIPMER], Pondicherry",
    totalCourseFee: "INR 42,000"
  },
  {
    name: "Annamalai University - [AU], Chidambaram",
    totalCourseFee: "INR 27,71,850"
  },
  {
    name: "Thrissur Govt. Medical College, Thrissur",
    totalCourseFee: "INR 1,48,170"
  },
  {
    name: "Osmania Medical College - [OMC], Medak",
    totalCourseFee: "INR 85,000"
  },
  {
    name: "Sri Ramachandra Institute Of Higher Education And Research, Chennai",
    totalCourseFee: "INR 1,25,00,000"
  },
  {
    name: "Amrita School Of Medicine, Kochi",
    totalCourseFee: "INR 95,77,000"
  }
];

const medicalCollegesAnnualFees = [
  {
    name: "All India Institute of Medical Sciences - [AIIMS], New Delhi",
    averageAnnualFee: "INR 1,628"
  },
  {
    name: "Christian Medical College - [CMC], Vellore",
    averageAnnualFee: "INR 48,330"
  },
  {
    name: "AIIMS Bhubaneswar - All India Institute of Medical Sciences",
    averageAnnualFee: "INR 26,350 (Total Fees)"
  },
  {
    name: "SRM University Chennai - SRM Institute of Science and Technology",
    averageAnnualFee: "INR 22,50,000"
  },
  {
    name: "King George's Medical University - [KGMU], Lucknow",
    averageAnnualFee: "INR 54,900"
  },
  {
    name: "KIMS - Kalinga Institute of Medical Sciences",
    averageAnnualFee: "INR 72,00,000"
  },
  {
    name: "JSS Medical College, JSS Academy of Higher Education and Research",
    averageAnnualFee: "INR 6,49,000 (Total Fees)"
  },
  {
    name: "Maulana Azad Medical College - [MAMC], New Delhi",
    averageAnnualFee: "INR 4,445"
  },
  {
    name: "Jamia Hamdard University, New Delhi",
    averageAnnualFee: "INR 12,80,000"
  }
];

const universitiesAnnualFees = [
  {
    name: "RAMA University, Kanpur",
    averageAnnualFee: "INR 13,52,000"
  },
  {
    name: "RAMA University, Hapur",
    averageAnnualFee: "INR 11,13,000"
  }
];

const medicalJobRolesSalaries = [
  {
    jobRole: "General Physician",
    averageSalary: "INR 8 LPA - 15 LPA",
    experienceWiseSalary: "Check Salary"
  },
  {
    jobRole: "Dermatologist",
    averageSalary: "INR 6 LPA - 7 LPA",
    experienceWiseSalary: "Check Salary"
  },
  {
    jobRole: "Epidemiologist",
    averageSalary: "INR 5 LPA - 13 LPA",
    experienceWiseSalary: "Check Salary"
  },
  {
    jobRole: "Pathologist",
    averageSalary: "INR 7 LPA - 11 LPA",
    experienceWiseSalary: "Check Salary"
  },
  {
    jobRole: "Dentist",
    averageSalary: "INR 10 LPA – 19 LPA",
    experienceWiseSalary: "Check Salary"
  },
  {
    jobRole: "Ayurvedic Doctor",
    averageSalary: "INR 6 LPA - 10 LPA",
    experienceWiseSalary: "Check Salary"
  },
  {
    jobRole: "Medical Officer",
    averageSalary: "INR 8 LPA - 12 LPA",
    experienceWiseSalary: "Check Salary"
  }
];




function MBA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortOption, setSortOption] = useState('Popularity');
  const [colleges] = useState(initialColleges);
  const [filters, setFilters] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(null);


  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const toggleContent = () => {
    setIsExpanded((prevState) => !prevState);
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
      <div key={filterType} className="mba_m_filter-dropdown-container">
        <button
          className={`mba_m_dropdown-button ${filters[filterType] ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveDropdown(activeDropdown === filterType ? null : filterType);
          }}
        >
          {filterType.replace(/([A-Z])/g, " $1").trim()}
        </button>
        {activeDropdown === filterType && (
          <div className="mba_m_filter-dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`mba_m_filter-option ${filters[filterType] === option ? "selected" : ""}`}
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

      <div className='mba_m_bba-container'>
        <div className='mba_m_breadcrumb'>

          <a href='/' className='mba_m_home-icon'>
            <AiFillHome />
          </a>
          <span className="mba_m_breadcrumb-arrow">&gt;</span>
          <span className="mba_m_breadcrumb-text">MBA/PGDM Colleges</span>
        </div>

        {/* Title */}
        <h1 className="mba_m_title">
          Top MBA Colleges in India 2025: Ranking, Placement-wise, Fees, Admissions, Cutoff
        </h1>

        {/* Banner Section */}
        <div className="mba_m_flex-container">
          <div className="mba_m_banner">
            <div className="mba_m_banner-content">
              <img src="/assets/mbaimages/headerimg1mba.webp" />
            </div>
          </div>
          <div className="mba_m_banner mba_m_course-finder-banner">
            <div className="mba_m_banner-content">
              <img src="/assets/mbaimages/headerimg2mba.webp" />
            </div>
          </div>
          <div className="mba_m_banner mba_m_college-predictor-banner">
            <div className="mba_m_banner-content">
              <img src="/assets/mbaimages/headerimg3mba.webp" />
            </div>
          </div>
        </div>

        <div className="mba_m_filter-bar mba_m_sticky-filter-bar">
          <button className="mba_m_filter-button" onClick={clearFilters}>
            <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
          </button>
          {renderFilterDropdowns()}
        </div>

        {Object.keys(filters).length > 0 && (
          <div className="mba_m_active-filters">
            {Object.entries(filters).map(
              ([type, value]) =>
                value && (
                  <span key={type} className="mba_m_filter-tag">
                    {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                    <button
                      className="mba_m_remove-filter"
                      onClick={() => handleFilterClick(type, value)}
                    >
                      ×
                    </button>
                  </span>
                )
            )}
          </div>
        )}



        <div className='mba_m_bba-container'>
          <div className="mba_m_table-container">
            <div className='mba_m_soring_bg'>
              <div className="mba_m_sort-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6 className='mba_m_heading'>Found {colleges.length} Colleges</h6>
                <div className="mba_m_sort-options" style={{ display: 'flex', gap: '10px' }}>
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



                <div class="mba_m_view-options">
                  <button class="mba_m_view-button active" aria-label="List view">
                    <svg class="mba_m_view-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                    </svg>
                  </button>
                  <button class="mba_m_view-button" aria-label="Grid view">
                    <svg class="mba_m_view-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                    </svg>
                  </button>
                  <button class="mba_m_view-button" aria-label="Compact view">
                    <svg class="mba_m_view-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>

            <div className="mba-m-read-more-container">
              {/* Profile Section */}
              <div className="mba-m-profile-section">
                <img
                  src="/assets/mbaimages/mba_swatantra_khandelwal.webp"
                  alt="profile icon"
                  className="mba-m-profile-icon"
                />
                <div className="mba-m-profile-info">
                  <p className="mba-m-profile-name">
                    Swatantra Khandelwal <span className="mba-m-checkmark">✔</span>
                  </p>
                  <span className="mba-m-designation">Content Writer at CollegeDunia | Updated on - Jan 20, 2025</span>
                </div>
              </div>

              {/* Read- More */}

              <p className="mba-m-para">
                {isExpanded ? (
                  <>
                    <p className="mba-m-Top_10_bba">
                      The Top MBA colleges in India include IIM Ahmedabad, IIM Bangalore, IIM Kozhikode, IIM Calcutta, IIT Delhi, XLRI Jamshedpur, IIM Lucknow, and IIM Mumbai, per NIRF MBA ranking 2024. MBA Admissions are based on MBA entrance exams such as CAT, GMAT, SNAP, XAT, and MAT, followed by a GD/ PI round. The fee structure ranges from INR 50,000 to INR 31,20,000, while the average package ranges from INR 7 to INR 15 LPA. The salaries of graduates from prestigious MBA colleges like IIM, ISB, and IIT have experienced a significant increase in the range of 3 to 30 per cent. IIM Calcutta recorded the highest package, INR 1.20 crore per annum, per 2024 final placement reports.

                      The Top Management Colleges in India from IIM Ahmedabad to IIM Kozhikode are actively working on their MBA curriculum to offer more hands-on experience for MBA students. FMS Delhi is the top MBA college in India with low fees, which is INR 2,00,00 with an average package of INR 34 LPA.
                    </p>
                    <br />
                    {/* <ol className="mbbs-p-read-more-list">
                <li>
                What are the Top 10 MBA Colleges in India?
                </li>
                <li>
                What are the Top MBA Colleges in India according to Placements?
                </li>
                <li>
                Top MBA Colleges in India with NIRF Ranking 2024
                </li>
                <li>
                Government vs Private MBA Colleges in India: Which one is better?
                </li>
                <li>
                  Some of the Top Government MBBS Colleges in India include
                  AIIMS New Delhi, BHU Varanasi, KGMU Lucknow, AMU Aligarh, etc.{" "}
                </li>
                <li>
                  The best MBBS colleges in India provide internship programs to
                  students with monthly stipends of around INR 15,000 to INR
                  40,000. After completing an MBBS, students can become doctors
                  and earn a starting salary of INR 4-6 LPA.
                </li>
              </ol> */}
                    <img
                      src="/assets/mbaimages/mba_img_readmore.webp"
                      style={{ display: "block", margin: "auto" }}
                    />

                    <div className="mba-m-Top_10_bba">
                      <h2>What are the Top 10 MBA Colleges in India?</h2>
                      <p className="mba-m-para">
                        Here is the list of the Top 10 MBA Colleges in India, their total seats, CAT Cut-off for 2024, and total course fees.
                      </p>

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th className="mba-m-collegename">College Name</th>
                              <th>Total Seats</th>
                              <th>CAT 2024 Cutoff (Percentile)</th>
                              <th>Total Course Fees(INR)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mbacolleges.map((college, index) => (
                              <tr key={index}>
                                <td>{college.name}</td>
                                <td>{college.totalSeats}</td>
                                <td>{college.cutoff2023}</td>
                                <td>{college.averageFee}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mba-m-Top_10_bba">
                      <h2>What are the Top MBA Colleges in India according to Placements?</h2>
                      <p className="mba-m-para">
                        The best MBA Colleges in India provide attractive placement opportunities with a high ROI (Return on Investment) in reputable companies. The top B schools in India have dedicated placement cells to prepare students for interviews. The top MBA Placements in India are obtained by IIMs in India.

                        Check out the infographic below of the top MBA colleges in India placement-wise.
                      </p>

                      <img
                        src="/assets/mbaimages/mba_img2_readmore.webp"
                        style={{ display: "block", margin: "auto" }}
                      />

                      <h2>Top MBA Colleges in India with NIRF Ranking 2024</h2>
                      <p className="mba-m-para">
                        The National Institutional Ranking Framework (NIRF) is a method adopted by the Government of India to rank the top institutions based on various parameters. NIRF is the most trustworthy and popular ranking agency in India. It operates under the Ministry of Education. So, if you're planning to pursue higher education in India, you should check out the NIRF rankings to help you make an informed decision!

                        The table below highlights the top MBA colleges in India, per NIRF Ranking of the past three years, i.e. 2021 to 2023.
                      </p>

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th className="mba-m-collegename">College Name</th>
                              <th>NIRF 2024</th>
                              <th>NIRF 2023</th>
                              <th>NIRF 2022</th>
                              <th>NIRF 2021</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mbainstitutes.map((university, index) => (
                              <tr key={index}>
                                <td>{university.name}</td>
                                <td>{university.nirf24}</td>
                                <td>{university.nirf23}</td>
                                <td>{university.nirf22}</td>
                                <td>{university.nirf21}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mba-m-Top_10_bba">
                      <h2>Government vs Private MBA Colleges in India: Which one is better?</h2>
                      <p className="mba-m-para">
                        The major dilemma for prospective MBA students is whether to pursue an MBA from a public or private institution. We will discuss and compare both Private and Government colleges and what is the right option for you!
                      </p>

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th>Parameters</th>
                              <th className="mba-m-collegename">Government MBA Colleges</th>
                              <th>Private MBA Colleges</th>
                            </tr>
                          </thead>
                          <tbody>
                            {nirfRanking.map((college, index) => (
                              <tr key={index}>
                                <td>{college.rank}</td>
                                <td>{college.name}</td>
                                <td>{college.score}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mba-m-Top_10_bba">
                      <h2>Top Government MBA Colleges in India</h2>
                      <p className="mba-m-para">
                        The Government MBA colleges in India are known for their academic excellence and legacy. They are known for their robust curriculum with a lower fee structure and experienced faculties. The cutoff for Government colleges is usually higher due to lower costs, good placement, and high student enrollment.
                      </p>

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th className="mba-m-collegename">College Name</th>
                              <th>Total Course Fee</th>
                              <th>Admission Criteria</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feeStructureColleges.map((college, index) => (
                              <tr key={index}>
                                <td>{college.name}</td>
                                <td>{college.totalCourseFee}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mba-m-Top_10_bba">
                      <h2>Top Private MBA Colleges in India</h2>
                      <p className="mba-m-para">
                        The most important aspect of Private MBA colleges is that you get modern infrastructure plus an industry-oriented curriculum. If your skill set is industry-specific, you can be absorbed in the industry very easily. Many private institutions collaborate with multinational corporations to make your job worthiness and job skills. Admissions are done on a profile basis, i.e. they look for skills compared to merit.
                      </p>
                      {/* <p className="mbbs-p-para">
                        These agencies generally release overall lists of top Medical
                        colleges in India, but they also focus on all courses
                        including MBBS, MD, MS, M.Ch, BPT, BAMS, etc. Below we have
                        listed the top MBBS colleges in India rank-wise, as released
                        by these agencies.
                      </p> */}

                      {/* <a href="#">Check Out: Top Government MBBS Colleges in India</a> */}

                      {/* <h3>Top MBBS Colleges in India with NIRF Ranking 2023</h3> */}
                      {/* <p className="mbbs-p-para">
                        The National Institutional Ranking Framework is a method that
                        the Indian government adopts to rank top Education
                        institutions in India based on various parameters. It is under
                        the Ministry of Education. Every year NIRF publishes ranking
                        lists of top Institutions in India for different domains. NIRF
                        is the most trustworthy and popular Ranking agency in India.
                      </p> */}
                      {/* <p className="mbbs-p-para">
                        NIRF ranks the institutions across India based on 5 parameters
                        and they are (1) Teaching, Learning & Resources, (2) Research
                        and Professional Practice, (3) Graduation Outcomes, (4)
                        Outreach and Inclusivity, and (5) Perception. The rendered pie
                        chart below depicts the weightage of different parameters used
                        for Ranking top colleges in India:
                      </p> */}

                      {/* <div className="mbbs-p-top-bba-clgs">
                        <img src="/assets/coursesimg/nirf.png" alt="Top BBA colleges" />
                      </div> */}
                      {/* <p className="mbbs-p-para">
                        NIRF does not rank the top MBBS colleges in India, instead, it
                        ranks the Top Medical Colleges in India. Tabulated below are
                        some of the top MBBS colleges in India as per the latest NIRF
                        Rankings:
                      </p> */}

                      {/* <ul className="mbbs-p-read-more-list">
                        <li>
                          AIIMS Delhi has maintained its position for years. It is
                          ranked 1st among the list of top Medical colleges in India.{" "}
                        </li>
                        <li>
                          CMC Vellore stood at the same place this year as well. It is
                          followed by JIPMER Pondicherry and Amrita Vishwa
                          Vidyapeetham Coimbatore at 3rd and 5th positions.
                        </li>
                        <li>
                          Banaras Hindu University has dropped to 8th from 5th place.{" "}
                        </li>
                        <li>
                          KMC Manipal, Madras Medical College & Government General
                          Hospital, and KGMU Lucknow are some other colleges ranked by
                          NIRF Ranking among the top 10 MBBS colleges in India.
                        </li>
                      </ul> */}

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th>College Name</th>
                              <th className="mba-m-collegename">NIRF 2021</th>
                              <th className="mba-m-collegename">NIRF 2022</th>
                              <th className="mba-m-collegename">NIRF 2023</th>
                              {/* <th>NIRF Score</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {nirfRanking24.map((college, index) => (
                              <tr key={index}>
                                <td>{college.rank}</td>
                                <td>{college.name}</td>
                                <td>{college.score}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3>What are the Tier 1 MBA Colleges in India?</h3>
                      <p className="mba-m-para">
                        Below are the Tier -1 MBA Colleges in India along with their fees and admission criteria-
                      </p>
                      {/* <p className="mbbs-p-para">
                        The infographic below depicts the weightage of these
                        parameters used for the ranking of top MBBS colleges in India:
                      </p> */}

                      {/* <div className="mbbs-p-top-bba-clgs">
                        <img src="/assets/coursesimg/indiatoday.jpg" alt="Top BBA colleges" />
                      </div>
                      <p className="mbbs-p-para">
                        NIRF does not rank the top MBBS colleges in India, instead, it
                        ranks the Top Medical Colleges in India. Tabulated below are
                        some of the top MBBS colleges in India as per the latest NIRF
                        Rankings:
                      </p> */}

                      {/* <ul className="mbbs-p-read-more-list">
                        <li>
                          India Today has placed AIIMS New Delhi at the #1st position
                          among the top Medical colleges in India. It is followed by
                          JIPMER Pondicherry and CMC Vellore.
                        </li>
                        <li>
                          MAMC New Delhi has maintained its place at #5th place. It is
                          followed by KGMU Lucknow and Vardhman Mahavir Medical
                          College.{" "}
                        </li>
                        <li>
                          Lady Hardinge Medical College, University of Delhi, UCMS
                          Delhi, and KMC Manipal are some of the best Medical colleges
                          in India as per India Today Ranking 2023
                        </li>
                        .
                      </ul> */}

                      {/* <p className="mbbs-p-para">
                        Below are the top MBBS colleges in India as per the India
                        Today Rankings for 2023.
                      </p> */}
                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th>College name</th>
                              <th className="mba-m-collegename">Total fees</th>
                              <th className="mba-m-collegename">Admission Process</th>
                            </tr>
                          </thead>
                          <tbody>
                            {indiaTodayRanking.map((college, index) => (
                              <tr key={index}>
                                <td>{college.rank}</td>
                                <td>{college.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <h3>Is it worth doing an MBA from a non-tier 1 College in India?</h3>
                    <p className="mba-m-para">
                      Whether pursuing an MBA from a non-tier 1 college in India is worth it depends on various factors, including your career goals, financial situation, and the specific circumstances of the college you are considering.

                      Below is the list of Top MBA colleges in India from tier 2.
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th>College Name</th>
                            <th className="mba-m-collegename">MBA Course Offered</th>
                            <th className="mba-m-collegename">Entrance Exam Expected Cut-offs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {theWeekRanking.map((college, index) => (
                            <tr key={index}>
                              <td>{college.rank}</td>
                              <td>{college.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h3>Which are the Top MBA Colleges in India with Lower fees?</h3>
                    <p className="mba-m-para">
                      MBA fees in top-ranked MBA colleges in India are generally very high and beyond the reach of many students. However, some MBA colleges in India offer MBA courses at a lower fee structure. To find out about the top MBA colleges in India with low fees, refer to the table below.
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th className="mba-m-collegename">Low-cost Colleges</th>
                            <th>Total Tuition Fee</th>
                            <th>Average Salary</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mbbsSeats.map((college, index) => (
                            <tr key={index}>
                              <td>{college.name}</td>
                              <td>{college.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h3>City-wise Top B- Schools in India</h3>
                    <p className="mba-m-para">
                      If you're interested in pursuing an MBA in India, you may find this list of top-quality colleges sorted by location helpful.
                    </p>
                    <h4>Top MBA Colleges in Bangalore</h4>
                    <p className="mba-m-para">
                      Below are the top MBA Colleges in Bangalore along with their NIRF Ranking fees, total tuition fees, and exam accepted.
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th className="mba-m-collegename">NIRF Ranking 2023</th>
                            <th>College Name</th>
                            <th>Total Tuition Fee/ Exam</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mbbsSeats.map((college, index) => (
                            <tr key={index}>
                              <td>{college.name}</td>
                              <td>{college.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h4>Top MBA Colleges in Mumbai</h4>
                    <p className="mba-m-para">
                      Refer to the table below for the top MBA Colleges in Mumbai along with their NIRF Ranking fees, total tuition fees, and exam accepted.
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th className="mba-m-collegename">NIRF Ranking 2023</th>
                            <th>College Name</th>
                            <th>Total Tuition Fee/ Exam</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mbbsSeats.map((college, index) => (
                            <tr key={index}>
                              <td>{college.name}</td>
                              <td>{college.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h4>Top MBA Colleges in Delhi NCR</h4>
                    <p className="mba-m-para">
                      Refer to the table below for a detailed overview of the top MBA colleges in Delhi/NCR along with their NIRF ranking and total tuition fee/entrance exams:
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th className="mba-m-collegename">NIRF Ranking 2023</th>
                            <th>College Name</th>
                            <th>Total Tuition Fee/ Exam</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mbbsSeats.map((college, index) => (
                            <tr key={index}>
                              <td>{college.name}</td>
                              <td>{college.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h4>Top MBA Colleges in Pune</h4>
                    <p className="mba-m-para">
                      Below are the top MBA Colleges in Pune along with their NIRF Ranking fees, total tuition fees, and exam accepted.
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th className="mba-m-collegename">NIRF Ranking 2023</th>
                            <th>College Name</th>
                            <th>Total Tuition Fee/ Exam</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mbbsSeats.map((college, index) => (
                            <tr key={index}>
                              <td>{college.name}</td>
                              <td>{college.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h3>What are the Top 10 BBA+MBA integrated Colleges in India?</h3>
                    <p className="mba-m-para">
                      The table below highlights the Top 10 Integrated (BBA+MBA) colleges in India, with IPM course fees and admission criteria.
                    </p>

                    <div className="mba-m-college-table-container">
                      <table className="mba-m-all-college-table">
                        <thead>
                          <tr>
                            <th className="mba-m-collegename">College Name</th>
                            <th>Course</th>
                            <th>IPM Fees (in INR)</th>
                            <th>Admission Criteria</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mbbsSeatsGov.map((college, index) => (
                            <tr key={index}>
                              <td>{college.name}</td>
                              <td>{college.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mba-m-Top_10_bba">
                      <h2>Which is better, a Distance MBA or an Online MBA?</h2>
                      <p className="mba-m-para">
                        Choosing between an Online MBA and a Distance MBA depends on personal preferences, learning styles, and career aspirations. Online MBA programs provide an engaging and interactive learning environment through live sessions, group projects, and virtual networking opportunities. In contrast, Distance MBA programs offer greater flexibility and independence regarding study schedules and locations.
                      </p>
                      <p className="mba-m-para">
                        Which are the Best Institutes for a Distance MBA in India?
                      </p>
                      <p className="mba-m-para">
                        Check out the top Distance MBA colleges in India with fee structure in the table below.
                      </p>

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th className="mba-m-collegename">Distance MBA Colleges</th>
                              <th>Total Tuition Fee</th>
                              <th>Seat Intake</th>
                            </tr>
                          </thead>
                          <tbody>
                            {collegeCutoffs.map((college, index) => (
                              <tr key={index}>
                                <td>{college.name}</td>
                                <td>
                                  <a href="#">{college.cutoffLink}</a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3>What are the Top Online MBA Colleges in India in 2024?</h3>
                      <p className="mba-m-para">
                        Here is the list of the Top 10 Online MBA colleges in India for an MBA online degree available in India, along with their fee structure and key nodal points for students.
                      </p>

                      {/* <h3>Expected Cut off of NEET 2024</h3>
                      <p className="mbbs-p-para">
                        NEET Cut off is the minimum mark that the candidates must secure to get admission in MBBS, BDS, and AYUSH courses offered by medical colleges in India through NEET. NEET 2024 cutoff will tentatively be released in June 2024. The cut-off will be released by NTA along with the result.
                      </p> */}

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th>Top Online MBA Colleges in India</th>
                              <th>Total Fees</th>
                              <th>Nodal Points</th>
                            </tr>
                          </thead>
                          <tbody>
                            {neetCutoff2024.map((college, index) => (
                              <tr key={index}>
                                <td>{college.category}</td>
                                <td>{college.percentile}</td>
                                <td>{college.expectedCutoff}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3>What are the Best MBA Colleges in India based on ROI?</h3>
                      <p className="mba-m-para">
                        ROI indicates the profitability of pursuing a specific course at a college, comparing the cost of education to the potential return in the form of placement opportunities. This is particularly significant when considering management courses, as choosing a college or university based on the ROI factor can be highly beneficial.

                        The ROI can be calculated by comparing the average placement package and the total fees of that College/ University.

                        *ROI={`(Average Placement Package)/(Average Annual Fee)`}*100%

                        In the following infographic, we have calculated the ROI of some of the best MBA colleges in India for your reference:
                      </p>
                      <img
                        src="/assets/mbaimages/mba_img3_readmore.webp"
                        style={{ display: "block", margin: "auto" }}
                      />

                      <h2>List of MBA Colleges without Entrance Exam</h2>
                      <p className="mba-m-para">
                      Here is the list of MBA colleges without entrance exam along with their approximate fee:
                      </p>

                      <div className="mba-m-college-table-container">
                        <table className="mba-m-all-college-table">
                          <thead>
                            <tr>
                              <th className="mba-m-collegename">Name of the College</th>
                              <th>Average Fee (in INR)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topMedicalColleges.map((college, index) => (
                              <tr key={index}>
                                <td>{college.name}</td>
                                <td>{college.closingRank}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>           

                  </>
                ) : (
                  "The Top MBA colleges in India include IIM Ahmedabad, IIM Bangalore, IIM Kozhikode, IIM Calcutta, IIT Delhi, XLRI Jamshedpur, IIM Lucknow, and IIM Mumbai, per NIRF MBA ranking 2024. MBA Admissions are based on MBA entrance exams such as CAT, GMAT, SNAP, XAT, and MAT, followed by a GD/ PI round. The fee structure ranges from INR 50,000 to INR 31,20,000, while the average package ranges from INR 7 to INR 15 LPA. The salaries of graduates from prestigious MBA colleges like IIM, ISB, and IIT have experienced a significant increase in the range of 3 to 30 per cent. IIM Calcutta recorded the highest package, INR 1.20 crore per annum, per 2024 final placement reports. "
                )}
              </p>

              <button onClick={toggleContent} className="mba-m-readmore-btn">
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>


            {/* ---------------------------------TABLE OF COLLEGES------------------------------------------------------ */}

            <div className="mba_m_table-wrapper">
              <table className="mba_m_college-table">
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
                      <td className="mba_m_cd-rank">{college.rank}</td>
                      <td>
                        <div className="mba_m_college-info">
                          <img src={college.logo} alt={college.name} className="mba_m_college-logo" />
                          <div className="mba_m_college-details">
                            <div className="mba_m_college-name">{college.name}</div>
                            <div className="mba_m_college-location">{college.location}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="mba_m_fees-info">
                          <div className="mba_m_fees-amount">{college.fees}</div>
                          <div className="mba_m_fees-note">1st Year Fees</div>
                        </div>
                      </td>
                      <td>
                        <div className="mba_m_reviews-info">
                          <div className="mba_m_rating-wrapper">
                            <span className="mba_m_rating">{college.reviews.rating}</span>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <span className="mba_m_rating-scale">/ 5</span>
                          </div>
                          <div className="mba_m_review-count">Based on {college.reviews.count} reviews</div>
                          <div className="mba_m_review-badge">{college.reviews.badge}</div>
                        </div>
                      </td>
                      <td>
                        <div className="mba_m_ranking-info">
                          <div className="mba_m_ranking-position">#{college.ranking.position}</div>
                          <div className="mba_m_ranking-details">
                            /{college.ranking.total} in India {college.ranking.year}
                          </div>
                          <img src={college.rankingLogo} alt="ranking" className="mba_m_college-ranking-logo" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ------------------------------------------BEST COLLEGES------------------------------------------------------- */}

            <div className="mba_m_carousel-container">
              <h3>Colleges Application Forms 2025</h3>
              <div className="mba_m_carousel-wrapper">
                {universities.map((university, index) => (
                  <div className="mba_m_university-card" key={index}>
                    <img src={university.imgSrc} alt={university.title} className="mba_m_university-image" />
                    <p className="mba_m_green">Best in Infrastructure</p>
                    <h3 className="mba_m_university-title">{university.title}</h3>
                    <div className="mba_m_university-details">
                      <p className="mba_m_university-location">{university.location}</p>
                      <p className="mba_m_university-description mba_m_green-text">{university.description1}</p>
                      <p className="mba_m_university-description">{university.description2}</p>
                      <a href={university.applyLink} target="_blank" rel="noopener noreferrer" className="bsc_m_apply-link">
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* ----------------------------------TOP COLLEGES-------------------------------------------- */}


            <div className="mba_m_scroll-container">
              <h2 className="text-xl font-semibold mb-4">Top Collections for MBA/PGDM</h2>
              <div className="mba_m_scroll-wrapper">
                {collections.map((item, index) => (
                  <div key={index} className="mba_m_scroll-card">
                    <div className="mba_m_scroll-card-image">
                      <img src={item.image} alt={item.title} />
                      <div className="mba_m_overlay">
                        <h3 className="mba_m_overlay-title">{item.title}</h3>

                        <div className="mba_m_icon-container">
                          {/* Static Icons */}
                          <img src="/assets/collegenamelogos/iima.webp" alt="icon1" className="mba_m_icon-circle" />
                          <img src="/assets/collegenamelogos/iimbbanglore.webp" alt="icon2" className="mba_m_icon-circle" />
                          <img src="/assets/collegenamelogos/iitkanpur.webp" alt="icon3" className="mba_m_icon-circle" />
                          <p className="mba_m_overlay-subtitle">{item.count}</p>
                        </div>



                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* ----------------------------- rating------------------------------------------------------- */}

            <div className="mba_m_rating-container">
              <p className="mba_m_rating-heading">
                How likely are you to recommend collegedunia.com to a friend or a colleague?
              </p>

              <div className="mba_m_rating-options">
                <span className="mba_m_rating-label mba_m_first">Not so likely</span>
                {[...Array(10)].map((_, index) => (
                  <button
                    key={index}
                    className={`mba_m_rating-button 
                ${selectedRating === index + 1 ? "selected" : ""}
                ${hoveredRating >= index + 1 ? "hovered" : ""}`}
                    onClick={() => setSelectedRating(index + 1)}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(null)}
                  >
                    {index + 1}
                  </button>
                ))}
                <span className="mba_m_rating-label mba_m_last">Highly Likely</span>
              </div>
            </div>

          </div>
        </div>
        <Footer />

      </div >
    </>
  );
}


export default MBA;