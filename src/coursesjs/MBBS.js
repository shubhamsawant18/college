import React, { useState, useEffect, useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/coursescss/MBBS.css";

const mbbsColleges = [
  {
    rank: "#1",
    logo: "/assets/coursesimg/ladyShriRamCollege.webp",
    name: "All India Institute of Medical Science - [AIIMS], New Delhi",
    location: "New Delhi, Delhi NCR",
    reviews: "⭐ 4.3/5",
    rankingLogo: "/assets/Rankinglogos/delhi.webp",
    ranking: "#1 out of 55 in India 2024",
    cutoff: "CUET 2024 Cut off 730",
    fees: "₹1,628 (1st Year Fees)",
    avgPack: "",
    maxPack: "",
    best: "Infrastructure",
  },
  {
    rank: "#2",
    logo: "/assets/coursesimg/loyola.webp",
    name: "Christian Medical College - [CMC], Vellore",
    location: "Vellore, Tamil Nadu",
    reviews: "⭐ 4.4/5",
    rankingLogo: "/assets/Rankinglogos/tamilnadu.webp",
    ranking: "#3 out of 55 in India 2024",
    fees: "₹56,330 (1st Year Fees)",
    avgPack: "",
    maxPack: "",
    best: "Faculty",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
  },
  {
    rank: "#3",
    logo: "/assets/coursesimg/xavier.webp",
    name: "Banaras Hindu University - [BHU], Banaras",
    location: "Varanasi, Uttar Pradesh",
    reviews: "⭐ 3.8/5",
    rankingLogo: "/assets/Rankinglogos/maharashtra.webp",
    ranking: "#7 out of 20 in India 2024",
    fees: "₹13,410 (1st Year Fees)",
    avgPack: "₹23,13,000",
    maxPack: "₹1,20,00,000",
    best: "Infrastructure",
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

function MBBS() {
  const collegesPerTable = 4;
  const collegeChunks = chunkArray(mbbsColleges, collegesPerTable);
  const [selectedSort, setSelectedSort] = useState("");
  const scrollRef = useRef(null);

  const handleRadioChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const [hoveredNumber, setHoveredNumber] = useState(null);

  const handleMouseEnter = (number) => {
    setHoveredNumber(number);
  };

  const handleMouseLeave = () => {
    setHoveredNumber(null);
  };

  const filterSelectionRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
  
  
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

  const colleges = [
    {
      name: "AIIMS New Delhi",
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

  const universities = [
    {
      name: "Banaras Hindu University - [BHU], Varanasi",
      averageFee: "59,850 INR",
    },
    {
      name: "King George's Medical University - [KGMU], Lucknow",
      averageFee: "2,06,900 INR",
    },
    {
      name: "Aligarh Muslim University - [AMU], Aligarh",
      averageFee: "18,27,60 INR",
    },
    {
      name: "Swami Rama Himalayan University - [SRHU], Dehradun",
      averageFee: "93,13,000 INR",
    },
    {
      name: "NIMS University, Jaipur",
      averageFee: "90,00,000 INR",
    },
    {
      name: "Teerthanker Mahaveer University - [TMU], Moradabad",
      averageFee: "82,00,000 INR",
    },
    {
      name: "Annamalai University - [AU], Chidambaram",
      averageFee: "27,71,850 INR",
    },
    {
      name: "DY Patil University, Navi Mumbai",
      averageFee: "1,25,00,000 INR",
    },
    {
      name: "Manipal University, Manipal",
      averageFee: "70,89,000 INR",
    },
    {
      name: "Maharishi Markandeshwar - [MMU], Ambala",
      averageFee: "85,90,000 INR",
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
  const toggleContent = () => {
    setIsExpanded((prevState) => !prevState);
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
      image: "/assets/coursesimg/iimbbanglore.webp",
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

  return (
    <>
      <Navbar />
      {/* <ReadMore /> */}
      <div className="mbbs-p-container-ba">
        <div className="mbbs-p-breadcrumb">
          <a href="/" className="mbbs-p-breadcrumb-icon">
            <i className="mbbs-p-fa fa-home home-icon" aria-hidden="true"></i>
            <span className="mbbs-p-breadcrumb-arrow">&gt;</span>
            <span className="mbbs-p-breadcrumb-text">BA Colleges</span>
          </a>
        </div>

        <h1 className="mbbs-p-header">
          List of MBBS Colleges in India Based on 2024 Ranking
        </h1>

        <div className="mbbs-p-flex-container">
          <div className="mbbs-p-banner-content">
            <div className="mbbs-p-banner-info">
              <img src="/assets/coursesimg/banner-1.svg" alt="Demo Banner" />
            </div>
          </div>
          <div className="mbbs-p-banner-content">
            <div className="mbbs-p-banner-info">
              <img src="/assets/coursesimg/banner-2.svg" alt="Demo Banner" />
            </div>
          </div>
          <div className="mbbs-p-banner-content">
            <div className="mbbs-p-banner-info">
              <img src="/assets/coursesimg/banner-3.svg" alt="Demo Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="mbbs-p-read-more-container">
        {/* Profile Section */}
        <div className="mbbs-p-profile-section">
          <img
            src="/assets/coursesimg/profile_pic.webp"
            alt="profile icon"
            className="mbbs-p-profile-icon"
          />
          <div className="mbbs-p-profile-info">
            <p className="mbbs-p-profile-name">
              John Doe <span className="mbbs-p-checkmark">✔</span>
            </p>
            <span className="mbbs-p-designation">Senior Content Specialist</span>
          </div>
        </div>

        <p className="mbbs-p-para">
          {isExpanded ? (
            <>
              <p className="mbbs-p-Top_10_bba">
                Top MBBS colleges in India include some of the most prestigious
                and reputed medical colleges in India. There are 644 recognized
                medical colleges in India offering MBBS, amongst them 329 are
                Private and 296 are Government MBBS colleges in India. AIIMS New
                Delhi, CMC Vellore, BHU, Varanasi, and JIPMER Pondicherry are
                some of the Best MBBS Colleges in India.
              </p>
              <br />
              <ul className="mbbs-p-read-more-list">
                <li>
                  AIIMS Delhi is the best Medical college in India. It is ranked
                  1st followed by PGIMER Chandigarh and CMC Vellore, among the
                  Top Medical Colleges in India.
                </li>
                <li>
                  The top Private MBBS Colleges in India include Jamia Hamdard
                  University Delhi, St John's Medical Colleges Bangalore, and
                  KMC Mangalore.{" "}
                </li>
                <li>
                  MBBS Admission takes place solely through the NEET Exam and
                  students are allotted colleges based on their NEET scores. See
                  More NEET Counselling
                </li>
                <li>
                  MBBS Course Fees range from INR 5,000 to INR 20,000 in
                  Government colleges and INR 3,00,000 to INR 56,00,000 in
                  Private MBBS colleges. Check MBBS Syllabus{" "}
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
              </ul>

              <div className="mbbs-p-Top_10_bba">
                <h2>Top 10 MBBS Colleges in India</h2>
                <p className="mbbs-p-para">
                  India has 649 colleges offering MBBS courses. AIIMS New Delhi,
                  CMC Vellore, BHU Varanasi, and KMC Manipal are the top
                  colleges to pursue MBBS in India. They provide quality
                  education with top placement opportunities to students. The
                  top MBBS colleges in India with fee structure, Cut-off for
                  2023, and total seat intake are as follows.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Total Seats</th>
                        <th>Cutoff</th>
                        <th>Average Total Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {colleges.map((college, index) => (
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

              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS University in India</h2>
                <p className="mbbs-p-para">
                  Top MBBS Universities in India have their hospitals or have
                  collaborated with top foreign universities which helps
                  students practice their learning. RGUHS is considered the top
                  MBBS University in India and more than 44 top MBBS colleges in
                  India are affiliated with RGUHS Bangalore. Below is a list of
                  top MBBS universities in India with fees:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College/University Name</th>
                        <th>Average Total Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universities.map((university, index) => (
                        <tr key={index}>
                          <td>{university.name}</td>
                          <td>{university.averageFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mbbs-p-Top_10_bba">
                <h2>Top 10 Medical Colleges in India</h2>
                <p className="mbbs-p-para">
                  In India, there are around 1968 recognized medical colleges.
                  The Top Medical Colleges in India offer MBBS and many other
                  medical courses such as BDS, MS, etc. in various substreams.
                  Tabulated below is the list of top Medical colleges in India
                  offering MBBS along with their NIRF medical scores.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th>NIRF Ranking 2023</th>
                        <th className="mbbs-p-collegename">College/University Name</th>
                        <th>NIRF Score</th>
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

              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS Colleges in India with Fee Structure</h2>
                <p className="mbbs-p-para">
                  Medical courses in India are one of the most expensive courses
                  available. The average fees for MBBS courses in private
                  universities can exceed INR 1.20 Crores, while in some
                  government colleges, it can be less than INR 10,000. As a
                  result, many students prefer to study in India's top
                  government MBBS colleges. Below is a table of the best MBBS
                  colleges in India with their fee structure.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College/University Name</th>
                        <th>Total Course Fee</th>
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

              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS Colleges in India Rank Wise</h2>
                <p className="mbbs-p-para">
                  Various agencies rank the best colleges in India based on
                  multiple parameters which are divided according to some
                  weights. Some of the common parameters used include Faculty
                  Quality in the institutes, Perception of the University,
                  Graduation Outcome Outreach, and Inclusivity among many
                  others. Top-ranking agencies in India include NIRF (run by the
                  Ministry of Education, Government of India), India Today,
                  Outlook, and The Week with some other names also.
                </p>
                <p className="mbbs-p-para">
                  These agencies generally release overall lists of top Medical
                  colleges in India, but they also focus on all courses
                  including MBBS, MD, MS, M.Ch, BPT, BAMS, etc. Below we have
                  listed the top MBBS colleges in India rank-wise, as released
                  by these agencies.
                </p>

                <a href="#">Check Out: Top Government MBBS Colleges in India</a>

                <h3>Top MBBS Colleges in India with NIRF Ranking 2023</h3>
                <p className="mbbs-p-para">
                  The National Institutional Ranking Framework is a method that
                  the Indian government adopts to rank top Education
                  institutions in India based on various parameters. It is under
                  the Ministry of Education. Every year NIRF publishes ranking
                  lists of top Institutions in India for different domains. NIRF
                  is the most trustworthy and popular Ranking agency in India.
                </p>
                <p className="mbbs-p-para">
                  NIRF ranks the institutions across India based on 5 parameters
                  and they are (1) Teaching, Learning & Resources, (2) Research
                  and Professional Practice, (3) Graduation Outcomes, (4)
                  Outreach and Inclusivity, and (5) Perception. The rendered pie
                  chart below depicts the weightage of different parameters used
                  for Ranking top colleges in India:
                </p>

                <div className="mbbs-p-top-bba-clgs">
                  <img src="/assets/coursesimg/nirf.png" alt="Top BBA colleges" />
                </div>
                <p className="mbbs-p-para">
                  NIRF does not rank the top MBBS colleges in India, instead, it
                  ranks the Top Medical Colleges in India. Tabulated below are
                  some of the top MBBS colleges in India as per the latest NIRF
                  Rankings:
                </p>

                <ul className="mbbs-p-read-more-list">
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
                </ul>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th>NIRF Ranking 2023</th>
                        <th className="mbbs-p-collegename">College/University Name</th>
                        <th>NIRF Score</th>
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

                <h3>Top MBBS Colleges in India: India Today Ranking 2023</h3>
                <p className="mbbs-p-para">
                  India Today is one of the leading and well-reputed English
                  news magazines in India which is published by Living Media
                  India Limited every week. The Marketing & Development Research
                  Associates (MDRA), a marketing and research firm from Delhi
                  and India Today together conducts a college ranking survey. It
                  ranked Indian colleges in fields like Science, Arts, Commerce,
                  Management, Engineering, etc.
                </p>
                <p className="mbbs-p-para">
                  The infographic below depicts the weightage of these
                  parameters used for the ranking of top MBBS colleges in India:
                </p>

                <div className="mbbs-p-top-bba-clgs">
                  <img src="/assets/coursesimg/indiatoday.jpg" alt="Top BBA colleges" />
                </div>
                <p className="mbbs-p-para">
                  NIRF does not rank the top MBBS colleges in India, instead, it
                  ranks the Top Medical Colleges in India. Tabulated below are
                  some of the top MBBS colleges in India as per the latest NIRF
                  Rankings:
                </p>

                <ul className="mbbs-p-read-more-list">
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
                </ul>

                <p className="mbbs-p-para">
                  Below are the top MBBS colleges in India as per the India
                  Today Rankings for 2023.
                </p>
                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th>India Today Ranking 2023</th>
                        <th className="mbbs-p-collegename">College/University Name</th>
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

              <h3>Top MBBS Colleges in India: The Week Ranking 2023</h3>
              <p className="mbbs-p-para">
                The Week collaborates with Hansa Research every year to release
                a list of top colleges in various streams across India. Medical
                is one of the disciplines which was released this year. Since
                2008, it has ranked colleges of different domains such as
                engineering, law, medical, management, etc. Below are the top
                Medical colleges in India, per the Week Ranking 2023:
              </p>

              <div className="mbbs-p-college-table-container">
                <table className="mbbs-p-all-college-table">
                  <thead>
                    <tr>
                      <th>The Week Ranking 2023</th>
                      <th className="mbbs-p-collegename">College/University Name</th>
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

              <h3>Best MBBS Colleges in India with Fees Structure</h3>
              <p className="mbbs-p-para">
                The average MBBS fees in the best MBBS colleges in India are
                usually high and range between INR 5 - 60 Lakhs per year or even
                more. However, some of the best medical colleges in India offer
                MBBS at a low cost ranging from around INR 5,000 only. The graph
                below depicts some of the best MBBS colleges in India with fee
                structures:
              </p>

              <h3>Top MBBS Colleges in India Private</h3>
              <p className="mbbs-p-para">
                There are 333 Private MBBS colleges in India. The top private
                medical colleges in India include some of the top-ranked and
                premier colleges like CMC Vellore, KMC Manipal, etc. Private
                MBBS colleges in India offer good research facilities and
                infrastructure, and some Private MBBS colleges in India also
                offer internship opportunities in their hospitals. The Best
                Private MBBS Colleges in India are listed below:
              </p>

              <div className="mbbs-p-college-table-container">
                <table className="mbbs-p-all-college-table">
                  <thead>
                    <tr>
                      <th className="mbbs-p-collegename">College/University Name</th>
                      <th>MBBS Seats</th>
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

              <h3>Top MBBS Colleges in India Government</h3>
              <p className="mbbs-p-para">
                The best government medical colleges in Kerala include AIIMS
                Delhi, BHU Varanasi, JIPMER Pondicherry, etc. There are around
                292 Government MBBS Colleges in India. Below are the Top Medical
                Colleges in India Government for MBBS.
              </p>

              <div className="mbbs-p-college-table-container">
                <table className="mbbs-p-all-college-table">
                  <thead>
                    <tr>
                      <th className="mbbs-p-collegename">College/University Name</th>
                      <th>MBBS Seats</th>
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

              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS Colleges in India with Cut-off</h2>
                <p className="mbbs-p-para">
                  Almost all medical colleges in India grant admission through
                  entrance-based. Top MBBS colleges in India accept NEET, and
                  NEET-PG exam scores for admissions while some colleges offer
                  admission through AIIMS PG and RUET scores. The cut-off is one
                  of the most important factors to get admission into the top
                  MBBS college in India. The cutoff lists released by the
                  respective college determine admission into the college.
                </p>
                <p className="mbbs-p-para">
                  Follow the links in the table to check the descriptive cut-off
                  list of the top MBBS colleges in India:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College/University Name</th>
                        <th>Cutoff Links</th>
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

                <h3>Top MBBS Colleges in India with NEET Cut-off</h3>
                <p className="mbbs-p-para">
                Most of the best Medical colleges in India offer admission to different medical courses through entrance-based only. Except for JIPMER, all the colleges accept NEET Scores for MBBS admissions.
                </p>
                
                <h3>Expected Cut off of NEET 2024</h3>
                <p className="mbbs-p-para">
                NEET Cut off is the minimum mark that the candidates must secure to get admission in MBBS, BDS, and AYUSH courses offered by medical colleges in India through NEET. NEET 2024 cutoff will tentatively be released in June 2024. The cut-off will be released by NTA along with the result.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th>Group/Categoty</th>
                        <th>NEET Percentile</th>
                        <th>Expected NEET Cut-off 2024</th>
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

                <h3>NEET Cut off 2023 for MBBS Government Colleges</h3>
                <p className="mbbs-p-para">
                NEET AIQ cut-off refers to the opening and closing rank at which candidates are granted admission in MBBS/BDS colleges through 15% AIQ NEET Counselling. The NEET AIQ cutoff for MBBS Government Colleges is provided below.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">Top Medical Colleges</th>
                        <th>NEET Cut off 2023 Closing Rank- General (Round 1)</th>
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

              <div className="mbbs-p-Top_10_bba">
                <h2>Top Medical Colleges in India ROI</h2>
                <p className="mbbs-p-para">
                The top-ranked and the best MBA colleges in India offer lucrative and good placement packages with high ROI (Return on Investment). The highest placement packages for MBA are usually grabbed by the top IIM colleges in India. ROI is calculated as the ratio between the average placement package to the average annual fees of the Institute.
                </p>
                <p className="mbbs-p-para">
                {`ROI = {(Average Salary Package)/(Average Annual Fee)}*100%`}
                </p>
                <p className="mbbs-p-para">
                The best medical colleges in India with the average annual fee and average placement package are tabulated below:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Total Tution Fees</th>
                        <th>Annual Average Package</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalCollegesFeesPackages.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.totalTuitionFee}</td>
                          <td>{college.annualAvgPackage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Top MBBS Colleges in India: Admission Process</h3>
                <p className="mbbs-p-para">
                There are a total of 644 medical colleges in India for the MBBS program. Out of this total figure, 296 are Government colleges and 329 are Private MBBS Colleges in India. The chart below demonstrates the ratio of private and public colleges.
                </p>
                
                <h3>Expected Cut off of NEET 2024</h3>
                <p className="mbbs-p-para">
                NEET Cut off is the minimum mark that the candidates must secure to get admission in MBBS, BDS, and AYUSH courses offered by medical colleges in India through NEET. NEET 2024 cutoff will tentatively be released in June 2024. The cut-off will be released by NTA along with the result.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th>Group/Categoty</th>
                        <th>NEET Percentile</th>
                        <th>Expected NEET Cut-off 2024</th>
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
              </div>
              
              <div className="mbbs-p-Top_10_bba">
                <h2>Top Medical Colleges in India ROI</h2>
                <p className="mbbs-p-para">
                There are a total of 644 medical colleges in India for the MBBS program. Out of this total figure, 296 are Government colleges and 329 are Private MBBS Colleges in India. The chart below demonstrates the ratio of private and public colleges.
                </p>

                <div className="mbbs-p-top-bba-clgs">
                  <img src="/assets/coursesimg/indiatoday.jpg" alt="Top BBA colleges" />
                </div>

                <p className="mbbs-p-para">
                Admissions to these colleges are done based on the NEET exam solely. However, some exceptional colleges also admit students based on their scores in Class XII. Below we have described the top 3 MBBS colleges in India in detail with their admission process and many other things.
                </p>

                <h3>AIIMS New Delhi</h3>
                <p className="mbbs-p-para">
                All India Institute of Medical Sciences (AIIMS) New Delhi is the best and top-ranked Medical college in India. Admission into AIIMS Delhi MBBS is offered through NEET-UG scores. Qualified students are required to participate in the counseling for final seat allotments. For MD, MS, DM, MCh, and MDS courses students need to appear in the INI-CET entrance examination. AIIMS New Delhi admissions for the current session have been concluded. The admission process of AIIMS New Delhi generally begins in December in February.
                </p>
                
                <h3>AIIMS New Delhi Courses and Medical Seats</h3>
                <p className="mbbs-p-para">
                Given below are the details for the number of seats available for various medical courses offered by AIIMS New Delhi.
                </p>
                
                <h3>Christian Medical College (CMC), Vellore </h3>
                <p className="mbbs-p-para">
                Christian Medical College or CMC Vellore Admission 2023 for various UG and PG medical courses is now open.. NEET UG 2024 will be held on May 5, 2024, for admission to MBBS at CMC Vellore. NEET PG 2024 will be held on July 7, 2024, for admission to MD/ MS at CMC Vellore.
                </p>
                
                <h3>CMC Vellore Courses and Medical Seats</h3>
                <p className="mbbs-p-para">
                Tabulated below are the essential details about the number of seats available for different medical courses in CMC Vellore.
                </p>
                
                <h3>JIPMER Pondicherry</h3>
                <p className="mbbs-p-para">
                JIPMER Pondicherry is one of the top Medical colleges in India India is also marked as an "Institute of National Importance". JIPMER Admission to various UG and PG courses is offered based on NEET UG and INI CET scores.


                </p>

                <ul className="mbbs-p-read-more-list">
                <li>NEET UG 2024 Exam will be held on May 5, 2024, for admission to MBBS at JIPMER.</li>
                <li>JIPMER Admission to MD/ MS is based on INI CET scores.</li>
                <li>INI CET July 2024 will be held on May 19, 2024, per the tentative schedule.</li>
                </ul>
                
                <h3>JIPMER Pondicherry Courses and Medical Seats</h3>
                <p className="mbbs-p-para">
                Check out the following infographic that shows details about the number of seats available for various medical courses offered by JIPMER Pondicherry.
                </p>
                
              </div>

              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS Colleges in India: Zone Wise</h2>
                <p className="mbbs-p-para">
                There are around a total of 1929 Medical colleges in India, AIIMS New Delhi, CMC Vellore, and JIPMER Pondicherry are some of the best MBBS colleges in India from the different regions across the country. Check the following table sections which list the best MBBS colleges in India in different states or regions:
                </p>
                
                <h3>Top MBBS Colleges in North India</h3>
                <p className="mbbs-p-para">
                There are more than 70 MBBS colleges in Northern India including the best Medical colleges in India like PGIMER Chandigarh, AIIMS New Delhi, etc. Some of the Top MBBS Colleges in North India are tabulated below along with their average annual fees:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Total Tution Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalCollegesNorth.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.totalCourseFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Top MBBS Colleges in East India</h3>
                <p className="mbbs-p-para">
                JIPMER Pondicherry and Darbhanga Medical College are some of the top-ranked and best medical colleges in East India. Given below are some of the best MBBS colleges in East India with their average fee structures:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Total Tution Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalCollegesEast.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.totalCourseFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Top MBBS Colleges in West India</h3>
                <p className="mbbs-p-para">
                There are more than 70 MBBS colleges in Northern India including the best Medical colleges in India like PGIMER Chandigarh, AIIMS New Delhi, etc. Some of the Top MBBS Colleges in North India are tabulated below along with their average annual fees:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Total Tution Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalCollegesWest.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.totalCourseFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Top MBBS Colleges in South India</h3>
                <p className="mbbs-p-para">
                There are more than 70 MBBS colleges in Northern India including the best Medical colleges in India like PGIMER Chandigarh, AIIMS New Delhi, etc. Some of the Top MBBS Colleges in North India are tabulated below along with their average annual fees:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Total Tution Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalCollegesSouth.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.totalCourseFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS Colleges in India: Region Wise</h2>
                <p className="mbbs-p-para">
                The above classifications were zone-wise, covering the colleges in the 4 major zones of India, i.e., North, South, East, and West. Now, students also look for colleges according to the top states and cities in India. A metropolitan city has much to offer to students than just education. Career opportunities are good here and even the atmosphere is promising. Thus, to help you, we have listed some top MBBS colleges in India according to popular regions below.
                </p>

                <h3>Top MBBS Colleges in Delhi NCR</h3>
                <p className="mbbs-p-para">
                The capital of the Nation, Delhi offers many good MBBS career prospects to students as there are many good hospitals present here like AIIMS New Delhi. Check the complete list of Best MBBS Colleges in Delhi NCR below.
                </p>

                <ul className="mbbs-p-read-more-list">
                <li>AIIMS New Delhi</li>
                <li>Maulana Azad Medical College, New Delhi</li>
                <li>Lady Hardinge Medical College, New Delhi</li>
                <li>Santosh University, Ghaziabad</li>
                <li>SGT Medical College, Gurgaon</li>
                </ul>
                
                <h3>Top MBBS Colleges in Maharashtra</h3>
                <p className="mbbs-p-para">
                The state of Maharashtra also houses really good medical colleges, 58 to be specific. These include 31 Private and 26 Government MBBS Colleges. Of these, 4 colleges are located in Mumbai while 2 are present in Pune. These are some of the Best MBBS Colleges in Maharashtra.
                </p>

                <ul className="mbbs-p-read-more-list">
                  <li>Armed Forces Medical College (AFMC), Pune</li>
                  <li>Grant Medical College and Sir JJ Group of Hospitals, Mumbai</li>
                  <li>Seth GS Medical College, Mumbai</li>
                  <li>Mahatma Gandhi Institute of Medical Sciences (MGIMS), Wardha</li>
                </ul>
              </div>
              
              <div className="mbbs-p-Top_10_bba">
                <h2>Top MBBS Colleges in India: Entrance Exam Wise</h2>
                <p className="mbbs-p-para">
                The top Medical Colleges in India offer admission solely through scores of the NEET entrance exam. For admission into the top MBBS colleges in India, aspirants need to appear in NEET entrance exams and qualified students need to participate in the National level counseling process of the NEET exam.
                </p>

                <h3>Top MBBS Colleges in India through NEET</h3>
                <p className="mbbs-p-para">
                NEET 2023 notification is expected to be released in the second week of January 2023 on the official website- neet.nta.nic.in. As per the exam calendar released by NTA, the NEET 2024 Exam is scheduled for May 5, 2024.
                </p>

                <ul className="mbbs-p-read-more-list">
                  <li>As of now, NTA has announced only the exam date and the result release date for 2nd week of June 2024. </li>
                  <li>As per the latest media reports, the NEET 2024 application form is expected to be out on or after January 24, 2024.</li>
                  <li>Note that the new Syllabus of NEET 2024 by NTA is the same as the one announced by NMC earlier.</li>
                  <li>This is the reason why NTA has now published a PDF answering the Frequently Asked Queries regarding NEET syllabus 2024. Check NEET 2024 Chapter-wise Weightage</li>
                </ul>
                
                <p className="mbbs-p-para">
                Listed below are some of the Top Medical Colleges in India through NEET.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Average Annual Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalCollegesAnnualFees.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.averageAnnualFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Top MBBS Colleges in India Without NEET</h3>
                <p className="mbbs-p-para">
                There are hardly any medical colleges that offer MBBS admission without NEET. Top medical colleges in India offer MBBS admission through NEET scores only. However, only a few MBBS colleges in India offer direct admission. Some MBBS colleges in India offer admission based on AIIMS MBBS scores or RUET Scores. Also, some colleges offer direct admissions into Certificate of Diploma Medical Courses.
                </p>
                
                <p className="mbbs-p-para">
                Check out the table below for the top MBBS colleges in India without NEET:
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th className="mbbs-p-collegename">College Name</th>
                        <th>Average Annual Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universitiesAnnualFees.map((college, index) => (
                        <tr key={index}>
                          <td>{college.name}</td>
                          <td>{college.averageAnnualFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mbbs-p-Top_10_bba">
                <h2>MBBS Jobs</h2>
                <p className="mbbs-p-para">
                MBBS Jobs is considered the most secure and reputed job. Aspirants from the top Medical colleges in India get job opportunities in India as well as Abroad. The healthcare sector in the past few years has witnessed incredible growth. Also, there are several MBBS job opportunities for students in government sectors like Public Departments, Armed Forces, Railways, etc. Check out the table below to know the top MBBS Jobs for the graduates in the top MBBS colleges in India.
                </p>

                <div className="mbbs-p-college-table-container">
                  <table className="mbbs-p-all-college-table">
                    <thead>
                      <tr>
                        <th>Job Roles</th>
                        <th>Average Salary</th>
                        <th>Experience wise Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalJobRolesSalaries.map((job, index) => (
                        <tr key={index}>
                          <td>{job.jobRole}</td>
                          <td>{job.averageSalary}</td>
                          <td><a href="#">{job.experienceWiseSalary}</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            "Top MBBS colleges in India include some of the most prestigious and reputed medical colleges in India. There are 644 recognized medical colleges in India offering MBBS, amongst them 329 are Private and 296 are Government MBBS colleges in India. AIIMS New Delhi, CMC Vellore, BHU, Varanasi, and JIPMER Pondicherry are some of the Best MBBS Colleges in India. "
          )}
        </p>

        <button onClick={toggleContent} className="mbbs-p-readmore-btn">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="mbbs-p-filter-container">
          <div className="mbbs-p-filter-selection-container">
            <div className="mbbs-p-container-filter">
              <button
                className="mbbs-p-scroll-button left"
                onClick={scrollLeftFilters}
              >
                &#9664;
              </button>
              <div className="mbbs-p-filter-selection" ref={filterSelectionRef}>
                <button className="mbbs-p-filter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mbbs-p-icon"
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
                  <div className="mbbs-p-dropdown-wrapper" key={filter}>
                    <button
                      className={`mbbs-p-dropdown-button-filter ${
                        selectedFilters[filter]?.length ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(filter)}
                    >
                      {filter} ▼
                    </button>

                    {dropdownOpen === filter && (
                      <div className="mbbs-p-dropdown-menu">
                        <div className="mbbs-p-dropdown-header">
                          <span>{filter}</span>
                          <button onClick={() => setDropDownOpen(null)}>
                            ✖
                          </button>
                        </div>

                        <input
                          type="text"
                          className="mbbs-p-dropdown-search"
                          placeholder={`Find ${filter}`}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <div className="mbbs-p-dropdown-options">
                          {filtersList[filter] &&
                            filtersList[filter]
                              .filter((item) =>
                                item
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                              .map((option) => (
                                <label key={option} className="mbbs-p-dropdown-option">
                                  <input
                                    type="checkbox"
                                    checked={selectedFilters[filter]?.includes(
                                      option
                                    )}
                                    onChange={() =>
                                      handleFilterChange(filter, option)
                                    }
                                  />
                                  <span className="mbbs-p-option-name">{option}</span>
                                </label>
                              ))}
                        </div>

                        <div className="mbbs-p-dropdown-footer">
                          <span className="mbbs-p-view-all">View All Filters</span>
                          <span
                            className="mbbs-p-clear-filters"
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
                className="mbbs-p-scroll-button right"
                onClick={scrollRightFilters}
              >
                &#9654;
              </button>
            </div>
          </div>

          <div className="mbbs-p-selected-filters">
            {Object.entries(selectedFilters).map(
              ([category, filters]) =>
                filters.length > 0 &&
                filters.map((filter) => (
                  <button key={filter} className="mbbs-p-filter-tag">
                    {filter} ✖
                  </button>
                ))
            )}
            <button
              className="mbbs-p-clear-btn"
              onClick={() => setSelectedFilters({})}
            >
              Clear All
            </button>
          </div>
        </div>

      <div className="mbbs-p-found-colleges">
        <span>Found {mbbsColleges.length}</span>
        <div className="mbbs-p-sorting">
          <label>Sort by:</label>
          <div className="mbbs-p-radio-group">
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
          <table className="mbbs-p-college-table" key={tableIndex}>
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
                  <td className="mbbs-p-center">{college.rank}</td>
                  <div className="mbbs-p-college-info">
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                      className="mbbs-p-college-logo"
                    />
                    <div>
                      <a href={college.link} className="mbbs-p-college-name">
                        {college.name}
                      </a>
                      <p className="mbbs-p-college-location">{college.location}</p>
                    </div>
                  </div>
                  <div className="mbbs-p-college-actions">
                    <a href={college.applyLink} className="mbbs-p-action-link apply">
                      &rarr; Apply Now
                    </a>
                    <a
                      href={college.brochureLink}
                      className="mbbs-p-action-link brochure"
                    >
                      &#x1F4E5; Download Brochure
                    </a>
                    <label>
                      <input type="checkbox" className="mbbs-p-compare-checkbox" />
                      Add To Compare
                    </label>
                  </div>
                  <td className="mbbs-p-center">
                    <p className="mbbs-p-para">{college.fees || "--"}</p>
                    <a href={college.applyLink} className="mbbs-p-action-link apply">
                      &#8644; Compare Fees
                    </a>
                    <p className="mbbs-p-grey-subtitle">BA</p>
                    <p className="mbbs-p-grey-subtitle">First Year</p>
                  </td>
                  <td className="mbbs-p-center">
                    <p className="mbbs-p-clg-fees">{college.avgPack || "--"}</p>
                    <p className="mbbs-p-grey-subtitle">Average Package</p>
                    <p className="mbbs-p-clg-fees">{college.maxPack || "--"}</p>
                    <p className="mbbs-p-grey-subtitle">Highest Package</p>
                    <a href={college.applyLink} className="mbbs-p-action-link apply">
                      &#8644; Compare Placement
                    </a>
                  </td>
                  <td className="mbbs-p-center">
                    <p className="mbbs-p-para">{college.reviews}</p>
                    <a href={college.applyLink} className="mbbs-p-action-link apply">
                      Best in {college.best}
                    </a>
                  </td>
                  <td className="mbbs-p-center">
                    <p className="mbbs-p-para">{college.ranking}</p>
                    <a href={college.applyLink} className="mbbs-p-action-link apply">
                      More <i className="mbbs-p-fa fa-filter" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {tableIndex === 0 && (
            <div className="mbbs-p-horizontal-scroll-container">
              <h3 className="mbbs-p-hori-scroll-header">
                College Application Form 2025
              </h3>
              <div className="mbbs-p-horizontal-scroll" ref={scrollRef}>
                {collegeScrolls.map((college) => (
                  <div className="mbbs-p-college-hori-card" key={college.id}>
                    <img src={college.image} alt={college.name} />
                    <div className="mbbs-p-rating">⭐ {college.rating}</div>
                    <h3 className="mbbs-p-scroll-college-name">{college.name}</h3>
                    <p className="mbbs-p-para">{college.location}</p>
                    <p className="mbbs-p-para">{college.description}</p>
                    <p className="mbbs-p-action-link brochure">
                      {college.highestPackage}
                    </p>
                    <a href="" className="mbbs-p-action-link apply">
                      &rarr; Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tableIndex === 2 && (
            <div className="mbbs-p-recommendation-container">
              <h3>
                How likely would you recommend this website to your friend?
              </h3>
              <div className="mbbs-p-recommendation-scale">
                {[...Array(10).keys()].map((num) => (
                  <span
                    key={num}
                    className={`mbbs-p-number ${
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
        </React.Fragment>
      ))}

      <Footer />
    </>
  );
}

export default MBBS;
