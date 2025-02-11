import React,{useState, useRef} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiFillHome } from "react-icons/ai";
import '../assets/coursescss/mtech.css';


const banners = [
  {
    addmission_logo : '/assets/bba_images/default-write-review-1.svg',
  },
  {
    course_finder : '/assets/bba_images/default-course-finder-2.svg',
  },
  {
    college_predictor : '/assets/bba_images/default-college-predictor-3.svg',
  },
];

const colleges = [
  {
    rating: "4.4 / 5",
    name: "IIT Bombay - Indian Institute of Technology - [IITB]",
    logo: "/assets/collegenamelogos/iitmumbai.webp",
    location: "Mumbai, Maharashtra | AICTE, UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹66,700",
    averagePackage: "₹23,50,000",
    highestPackage: "₹1,00,00,000",
    userReview: "4.4 / 5",
    bestIn: "Best in Social Life",
    ranking: "#1/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Delhi - Indian Institute of Technology [IITD]",
    logo: "/assets/collegenamelogos/iitdelhi.webp",
    location: "New Delhi, Delhi NCR",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹1,90,300",
    averagePackage: "₹25,82,000",
    highestPackage: "₹2,00,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Social Life",
    ranking: "#2/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Madras - Indian Institute of Technology - [IITM]",
    logo: "/assets/collegenamelogos/iitmadras.webp",
    location: "Chennai, Tamil Nadu | AICTE Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹24,600",
    averagePackage: "₹21,48,000",
    highestPackage: "₹1,98,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Social Life",
    ranking: "#3/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.4 / 5",
    name: "IIT Kanpur - Indian Institute of Technology - [IITK]",
    logo: "/assets/collegenamelogos/iitkanpur.webp",
    location: "Kanpur, Uttar Pradesh | UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹1,18,910",
    averagePackage: "N/A",
    highestPackage: "₹1,90,00,000",
    userReview: "4.4 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#4/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    logo: "/assets/collegenamelogos/iitkharagpur.webp",
    location: "Kharagpur, West Bengal | AICTE, UGC, NBA Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹27,650",
    averagePackage: "N/A",
    highestPackage: "₹2,60,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#5/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Roorkee - Indian Institute of Technology - [IITR]",
    logo: "/assets/collegenamelogos/iitroorkee.webp",
    location: "Roorkee, Uttarakhand | AICTE, UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹40,100",
    averagePackage: "₹18,34,000",
    highestPackage: "₹1,30,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#6/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Guwahati - Indian Institute of Technology - [IITG]",
    logo: "/assets/collegenamelogos/iitguwahati.webp",
    location: "Guwahati, Assam | AICTE, UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹98,250",
    averagePackage: "N/A",
    highestPackage: "₹2,40,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#7/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.5 / 5",
    name: "BITS Pilani (Pilani Campus)",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    location: "Pilani, Rajasthan | UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹6,03,775",
    averagePackage: "₹30,37,000",
    highestPackage: "₹60,75,000",
    userReview: "4.5 / 5",
    bestIn: "Best in Social Life",
    ranking: "#8/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    logo: "/assets/collegenamelogos/iitkharagpur.webp",
    location: "Kharagpur, West Bengal | AICTE, UGC, NBA Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹27,650",
    averagePackage: "N/A",
    highestPackage: "₹2,60,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#5/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Roorkee - Indian Institute of Technology - [IITR]",
    logo: "/assets/collegenamelogos/iitroorkee.webp",
    location: "Roorkee, Uttarakhand | AICTE, UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹40,100",
    averagePackage: "₹18,34,000",
    highestPackage: "₹1,30,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#6/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.3 / 5",
    name: "IIT Guwahati - Indian Institute of Technology - [IITG]",
    logo: "/assets/collegenamelogos/iitguwahati.webp",
    location: "Guwahati, Assam | AICTE, UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹98,250",
    averagePackage: "N/A",
    highestPackage: "₹2,40,00,000",
    userReview: "4.3 / 5",
    bestIn: "Best in Infrastructure",
    ranking: "#7/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.5 / 5",
    name: "BITS Pilani (Pilani Campus)",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    location: "Pilani, Rajasthan | UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹6,03,775",
    averagePackage: "₹30,37,000",
    highestPackage: "₹60,75,000",
    userReview: "4.5 / 5",
    bestIn: "Best in Social Life",
    ranking: "#8/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.5 / 5",
    name: "BITS Pilani (Pilani Campus)",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    location: "Pilani, Rajasthan | UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹6,03,775",
    averagePackage: "₹30,37,000",
    highestPackage: "₹60,75,000",
    userReview: "4.5 / 5",
    bestIn: "Best in Social Life",
    ranking: "#8/762 in India",
    moreLink: "#",
  },
  {
    rating: "4.5 / 5",
    name: "BITS Pilani (Pilani Campus)",
    logo: "/assets/collegenamelogos/bitspilani.webp",
    location: "Pilani, Rajasthan | UGC Approved",
    applyLink: "#",
    brochureLink: "#",
    fees: "₹6,03,775",
    averagePackage: "₹30,37,000",
    highestPackage: "₹60,75,000",
    userReview: "4.5 / 5",
    bestIn: "Best in Social Life",
    ranking: "#8/762 in India",
    moreLink: "#",
  },
];

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
    image: "/assets/bba_images/lpu_clgimg.webp"
  },
  {
    id: 2,
    name: "GIBS Business School",
    location: "Banglore, Karnataka",
    image: "/assets/bba_images/gibs-clgimg.webp",
    rating: "",
    category: "Top Private University",
    description: "16.45 LPA Highest Package",
    highestPackage: "100% Placement",
    applyLink: "/apply"
  },
  {
    id: 3,
    name: "MIT World Peace University - [MIT-WPU]",
    location: "Pune, Maharashtra",
    image: "/assets/bba_images/mitwpu-clgimg.webp",
    rating: "6.2",
    category: "Best in infra",
    description: "100% Placement Assistance",
    highestPackage: "51 LPA Highest CTC",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
  {
    id: 4,
    name: "Manipal Academy of Higher Education - [MAHE] ",
    location: "Manipal, Karnataka",
    image: "/assets/bba_images/manipal-clgimg.webp",
    rating: "4.0",
    category: "Oldest & Prestigious University",
    description: "6.55 Total Fees",
    highestPackage: "BBA/BMS",
    applyLink: "/apply"
  },
];


const colleges_rm = [
  { name: "Shaheed Sukhdev College of Business Studies", seats: 131, fees: "INR 70,195 - 2 lakhs" },
  { name: "NMIMS Mumbai", seats: 600, fees: "INR 9 - 14 Lakhs" },
  { name: "Christ University", seats: 570, fees: "INR 3 - 8 Lakhs" },
  { name: "Loyola College", seats: "NA", fees: "INR 3 Lakhs" },
  { name: "Jamia Millia Islamia, New Delhi", seats: 44, fees: "INR 39,300" },
  { name: "Amity University, Gautam Buddha Nagar", seats: 120, fees: "INR 3.1 Lakhs - INR 23.5 Lakhs" },
  { name: "Amrita Vishwa Vidyapeetham, Coimbatore", seats: 120, fees: "INR 1.5 Lakhs - INR 2.6 Lakhs" },
  { name: "Lovely Professional University, Jalandhar", seats: 300, fees: "INR 3.2 Lakhs - 9.6 Lakhs" },
  { name: "Chandigarh University, Mohali", seats: "NA", fees: "INR 3.7 Lakhs - 9.9 Lakhs" },
  { name: "UPES Dehradun", seats: "NA", fees: "INR 8 Lakhs - 51.3 Lakhs" }
];

const Eng_colleges = [
  { 
    name: "Shaheed Sukhdev College of Business Studies", 
    ranking_2023: 1, 
    ranking_2022: 1, 
    ranking_2021: 1 
  },
  { 
    name: "NMIMS Mumbai", 
    ranking_2023: 2, 
    ranking_2022: 2, 
    ranking_2021: 2 
  },
  { 
    name: "Christ University", 
    ranking_2023: 3, 
    ranking_2022: 4, 
    ranking_2021: 4 
  },
  { 
    name: "Loyola College", 
    ranking_2023: 4, 
    ranking_2022: 3, 
    ranking_2021: 3 
  },
  { 
    name: "Amity School of Business", 
    ranking_2023: 5, 
    ranking_2022: 5, 
    ranking_2021: 5 
  },
  { 
    name: "Mount Carmel College", 
    ranking_2023: 6, 
    ranking_2022: 6, 
    ranking_2021: 7 
  },
  { 
    name: "Madras Christian College", 
    ranking_2023: 7, 
    ranking_2022: 7, 
    ranking_2021: 6 
  },
  { 
    name: "Maharaja Surajmal Institute", 
    ranking_2023: 8, 
    ranking_2022: 9, 
    ranking_2021: 11 
  },
  { 
    name: "Centre of Management Studies, Jain University", 
    ranking_2023: 9, 
    ranking_2022: 12, 
    ranking_2021: 14 
  },
  { 
    name: "SRM Institute of Science Technology", 
    ranking_2023: 10, 
    ranking_2022: 10, 
    ranking_2021: 13 
  }
];

const gov_colleges = [
  { name: "JMI, New Delhi", fees: "INR 39,300" },
  { name: "GGSIPU, New Delhi", fees: "INR 1,02,000" },
  { name: "Acharya Nagarjuna University", fees: "INR 9,340" },
  { name: "Punjab University", fees: "INR 18,570" },
  { name: "VTU Belgaum", fees: "INR 77,250" },
  { name: "BBAU Lucknow", fees: "INR 50,000" },
  { name: "GIET, Gunupur", fees: "INR 50,000" },
  { name: "Gujarat University", fees: "INR 22,000" },
  { name: "University of Jammu", fees: "INR 1,030" },
  { name: "University of North Bengal", fees: "INR 32,400" }
];

const priv_colleges = [
  { name: "TAPMI, Manipal", fees: "INR 3,85,000" },
  { name: "NMIMS University", fees: "INR 3,15,000" },
  { name: "JAGSOM, Bangalore", fees: "INR 4,00,000" },
  { name: "WSB, Hyderabad", fees: "INR 4,25,000" },
  { name: "IBS, Hyderabad", fees: "INR 2,70,000" },
  { name: "Institute of Management, Nirma University, Ahmedabad", fees: "INR 3,56,000" },
  { name: "Amity University, Noida", fees: "INR 4,18,000" },
  { name: "LPU, Jalandhar", fees: "INR 2,00,000" },
  { name: "CU, Chandigarh", fees: "INR 1,41,000" },
  { name: "KIIT University", fees: "INR 1,39,000" }
];


const roi_of_top_clg = [
  { name: "Shaheed Sukhdev College of Business Studies", fees: "INR 70,195", salary: "INR 8 LPA", roi: "1039.68%" },
  { name: "NMIMS Mumbai", fees: "INR 2 Lakhs", salary: "INR 10 LPA", roi: "400%" },
  { name: "Christ University", fees: "INR 1 Lakh", salary: "INR 5 LPA", roi: "400%" },
  { name: "Loyola College", fees: "INR 1 Lakh", salary: "INR 4 LPA", roi: "300%" },
  { name: "Jamia Millia Islamia, New Delhi", fees: "INR 39,000", salary: "INR 8 LPA", roi: "1951.28%" },
  { name: "Amity University, Gautam Buddha Nagar", fees: "INR 3 Lakhs", salary: "INR 7 LPA", roi: "133.34%" },
  { name: "Amrita Vishwa Vidyapeetham, Coimbatore", fees: "INR 2 Lakhs", salary: "INR 6 LPA", roi: "200%" },
  { name: "Lovely Professional University, Jalandhar", fees: "INR 3 Lakhs", salary: "INR 6 LPA", roi: "100%" },
  { name: "Chandigarh University, Mohali", fees: "INR 2 Lakhs", salary: "INR 10 LPA", roi: "400%" },
  { name: "UPES Dehradun", fees: "INR 3 Lakhs", salary: "INR 14 LPA", roi: "366.67%" }
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

const collections = [
  { 
    imageUrl: "/assets/bba_images/collection_img_1.webp", 
    title: "Best BBA colleges in india",
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
  },
  { imageUrl: "/assets/bba_images/collection_img_2.webp", 
    title: "Best BBA colleges in Kolkata",
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
  },
  { imageUrl: "/assets/bba_images/collection_img_3.webp", 
    title: "Best Colleges in Pune",
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
  },
  { imageUrl: "/assets/bba_images/collection_img_3.webp", 
    title: "Best Colleges in Pune",
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
  },
  { imageUrl: "/assets/bba_images/collection_img_3.webp", 
    title: "Best Colleges in Pune",
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
  },
  { imageUrl: "/assets/bba_images/collection_img_3.webp", 
    title: "Best Colleges in Pune",
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
  },
  { imageUrl: "/assets/bba_images/collection_img_4.webp", 
    title: "Best Colleges in Delhi", 
    colleges: "3738",
    logos: [
      "/api/placeholder/32/32",
      "/api/placeholder/32/32",
      "/api/placeholder/32/32"
    ]
    }
];


const filterOptions = {
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
function BBA() {

  const collegesPerTable = 4;
    const collegeChunks = chunkArray(colleges, collegesPerTable);
    const scrollRef = useRef(null);
    const [hoveredNumber, setHoveredNumber] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
  
    const [selectedSort, setSelectedSort] = useState("");
    const [filters, setFilters] = useState({});
    const [activeDropdown, setActiveDropdown] = useState(null);
  
    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest(".mtech_dm_filter-dropdown-container")) {
          setActiveDropdown(null);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);
  
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
        <div key={filterType} className="mtech_dm_filter-dropdown-container">
          <button
            className={`mtech_dm_dropdown-button ${
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
            <div className="mtech_dm_filter-dropdown-menu">
              {options.map((option) => (
                <div
                  key={option}
                  className={`mtech_dm_filter-option ${
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
  
    const handleRadioChange = (event) => {
      setSelectedSort(event.target.value);
    };
  
  
    const handleMouseEnter = (number) => {
      setHoveredNumber(number);
    };
    
    const handleMouseLeave = () => {
      setHoveredNumber(null);
    };
  
    
    const toggleContent = () => {
      setIsExpanded((prevState) => !prevState);
    };
  


  return (
    <>
    <Navbar />
    <div className='mtech_dm_bba-container'>
    {/* Heading */}
      <div className='mtech_dm_breadcrumb'>

      <a href='/' className='mtech_dm_home-icon'>
      <AiFillHome />
      </a>
      <span className="breadcrumb-arrow">&gt;</span>
          <span className="breadcrumb-text">M.E/Mtech Colleges</span>
      </div>

    {/* Title */}
    <h1 className="mtech_dm_title">
    Top MTech Colleges in India Based on 2024 Ranking
    </h1>

     {/* Banner Section */}
    <div className="mtech_dm_flex-container">
      {banners.map((banner, index) => (
        <div key={index} >
          <div className="banner-content">
            <img src={Object.values(banner)[0]} alt={`Banner ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>

    <div className="mtech_dm_read-more-container">
      {/* Profile Section */}
      <div className="mtech_dm_profile-section">
        <img src="/assets/bba_images/bba-profile.jpg" alt="profile icon" className="mtech_dm_profile-icon" />
        <div className="mtech_dm_profile-info">
          <p className="mtech_dm_profile-name">
            John Doe <span className="mtech_dm_checkmark">✔</span>
          </p>
          <span className="mtech_dm_designation">Senior Content Specialist</span>
        </div>
      </div>

      <p>
        {isExpanded ? (
          <>
            <p className="mtech_dm_Top_10_bba">
            The top BBA colleges in India are Shaheed Sukhdev College of Business Studies, NMIMS Mumbai, Christ University, and Loyola College. The best BBA colleges in India offer BBA courses with multiple specializations, including Marketing, Finance, HRM, and many others. There are 3900 BBA colleges in India, including 3173 Private and 665 government BBA colleges. Popular BBA entrance exams include SET, IPMAT, CUET, IPM Aptitude Test, and NMIMS NPAT. The average course fees for pursuing BBA courses from top BBA Colleges range between INR 20,000 - 30,00,000 depending on whether in government or private college. The average salary ranges between INR 8 - 30 LPA.
            </p>
            <br />
            <p className="mtech_dm_Top_10_bba">
              IIM Indore, IIM Rohtak, and IIM Ranchi are the best management colleges in India that provide IPM courses. IPM is a 5-year integrated BBA+MBA program designed for young students with managerial and leadership aspirations. They are ranked 8th, 12th, and 24th, per NIRF Ranking 2023.
            </p>

            {/* Table of Content */}
            <div className="mtech_dm_table-of-content">
              <h2>Table of Content</h2>
              <ul>
                <li>1. Which are the Top 10 BBA Colleges in India 2024?</li>
                <li>2. What are the Top BBA Colleges in India Placement-wise?</li>
                <li>3. Top Engineering Colleges in India with India Today Ranking 2024</li>
                <li>4. How can I get Admission to Top BBA Colleges in India?</li>
                <li>5. Which are the Top Government BBA Colleges in India?</li>
                <li>6. What are the Best Private BBA Colleges in India?</li>
                <li>7. ROI of Top BBA Colleges in India</li>
                <li>8. What are the Top BBA Colleges in India location-wise?</li>
                <li>9. FAQs</li>
              </ul>
            </div>

            <div className='mtech_dm_top-bba-clgs'>
              <img src='/assets/bba_images/Top_BBA_Colleges_in_India_01.webp' alt='Top BBA colleges' />
            </div>

            <div className='mtech_dm_Top_10_bba'>
              <h2>Which are the Top 10 BBA Colleges in India 2024?</h2>
              <p>The table below discusses in detail the top 10 BBA colleges in India, along with the total number
                of seats allotted for the BBA course and the designated fees for the mentioned colleges.</p>

                <div className="mtech_dm_college-table-container">
                <table className="mtech_dm_all-college-table">
                  <thead>
                    <tr>
                      <th className="mtech_dm_collegename">College Name</th>
                      <th>Total Seats</th>
                      <th>Average Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                  {colleges_rm.map((college, index) => (
                      <tr key={index}>
                        <td>{college.name}</td>
                        <td>{college.seats}</td>
                        <td>{college.fees}</td>
                      </tr>
                    
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mtech_dm_placement-wise-clg mtech_dm_Top_10_bba">
              <h2>What are the Top BBA Colleges in India Placement-wise?</h2>
              <p>The top BBA Colleges in India are listed below. Many of these colleges boast a placement record of 70-80%, and students can secure placements with salaries as high as INR 20 LPA. Refer to the infographic below for details on the top BBA Colleges, including their average salary packages and top recruiters.</p>
              <img src='/assets/bba_images/Top_BBAColleges_in_India_Placement_01.webp' alt='Top BBA colleges' />
            </div>
            <div className="mtech_dm_Top_10_bba">
              <h2>Top Engineering Colleges in India with India Today Ranking 2024</h2>
              <p>Tabulated below are the top BBA colleges as per India Today rankings across different years.</p>
                <div className="mtech_dm_college-table-container">
                <table className="mtech_dm_all-college-table">
                  <thead>
                    <tr>
                      <th className="mtech_dm_collegename">Name of the College</th>
                      <th>India Today Ranking 2023</th>
                      <th>AIndia Today Ranking 2022</th>
                      <th>India Today Ranking 2021</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Eng_colleges.map((Eng_colleges, index) => (
                      <tr key={index}>
                        <td>{Eng_colleges.name}</td>
                        <td>{Eng_colleges.ranking_2023}</td>
                        <td>{Eng_colleges.ranking_2022}</td>
                        <td>{Eng_colleges.ranking_2021}</td>
                      </tr>
                    
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mtech_dm_Addmission-process  mtech_dm_Top_10_bba">
              <h2>How can I get Admission to Top BBA Colleges in India?</h2>
              <p>BBA Admission is based on merit and entrance exams such as NPAT, SET, or IPU-CET, conducted by top colleges like NMIMS Mumbai, Symbiosis, and IP University. The minimum eligibility criteria require students to have passed 10+2 with a minimum of 50-60% aggregate. BBA course spans 6 semesters, each focusing on BBA subjects like management basics, finance, marketing, and business law. </p>
              <p>The basic BBA eligibility criteria are as follows:</p>
              <ul >
                <li>You must have passed 10+2 from a recognized board with a minimum of 50-60% aggregate marks.</li>
                <li>Candidates from all the streams are eligible to apply for BBA Admissions.</li>
                <li>You can apply even if you’re awaiting class 12th results.</li>
              </ul>
            </div>

            <div className="mtech_dm_Top_10_bba">
              <h2>Which are the Top Government BBA Colleges in India?</h2>
              <p>Below is the list of top Government BBA colleges in India, along with their Annual course fee.</p>
                <div className="mtech_dm_college-table-container">
                <table className="mtech_dm_all-college-table">
                  <thead>
                    <tr>
                      <th className="mtech_dm_collegename">College Name</th>
                      <th>Average Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                  {gov_colleges.map((college, index) => (
                      <tr key={index}>
                        <td>{college.name}</td>
                        <td>{college.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mtech_dm_Top_10_bba">
              <h2>What are the Best Private BBA Colleges in India?</h2>
              <p>Below is the list of top Private BBA colleges in India with their Annual course fee.</p>
    
                <div className="mtech_dm_college-table-container">
                <table className="mtech_dm_all-college-table">
                  <thead>
                    <tr>
                      <th className="mtech_dm_collegename">College Name</th>
                      <th>Average Total Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                  {priv_colleges.map((college, index) => (
                      <tr key={index}>
                        <td>{college.name}</td>
                        <td>{college.fees}</td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mtech_dm_Top_10_bba">
              <h2>ROI of Top BBA Colleges in India</h2>
              <p>ROI plays a crucial role in students' college selection process. Before enrolling in any institution, students should evaluate the return on investment. Since management courses can be costly, ensuring that the institute offers sufficient job opportunities with competitive salary packages to offset the investment is important.</p>
              <p>Calculating ROI involves comparing the average placement package to the average annual fees of the college or university.</p>
                <div className="mtech_dm_college-table-container">
                <table className="mtech_dm_all-college-table">
                  <thead>
                    <tr>
                      <th className="mtech_dm_collegename">Name of the College</th>
                      <th>Average Course Fees (Annual)</th>
                      <th>Average Salary</th>
                      <th>ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                  {roi_of_top_clg.map((college, index) => (
                      <tr key={index}>
                        <td>{college.name}</td>
                        <td>{college.fees}</td>
                        <td>{college.salary}</td>
                        <td>{college.roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "The top BBA colleges in India are Shaheed Sukhdev College of Business Studies, NMIMS Mumbai, Christ University, and Loyola College. The best BBA colleges in India offer BBA courses with multiple specializations, including Marketing, Finance, HRM, and many others. There are 3900 BBA colleges in India, including 3173 Private and 665 government BBA colleges."
        )}
      </p>

      <button onClick={toggleContent} className='mtech_dm_readmore-btn mtech_dm_rmbtn'>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>

        <div className="mtech_dm_filter-bar mtech_dm_sticky-filter-bar">
          <button className="mtech_dm_filter-button" onClick={clearFilters}>
            <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
          </button>
          {renderFilterDropdowns()}
        </div>

        {Object.keys(filters).length > 0 && (
          <div className="mtech_dm_active-filters">
            {Object.entries(filters).map(
              ([type, value]) =>
                value && (
                  <span key={type} className="mtech_dm_filter-tag">
                    {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                    <button
                      className="mtech_dm_remove-filter"
                      onClick={() => handleFilterClick(type, value)}
                    >
                      ×
                    </button>
                  </span>
                )
            )}
          </div>
        )}

      {/* College table*/}
      <div className="mtech_dm_found-colleges">
          <span>Found {colleges.length} Colleges</span>
        <div className="mtech_dm_sorting">
            <label>Sort by:</label>
            <div className="mtech_dm_radio-group">
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
            <table className="mtech_dm_college-table" key={tableIndex}>
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
                    <td className="mtech_dm_center">{college.rating}</td>
                    <div className="mtech_dm_college-info">
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="mtech_dm_college-logo"
                      />
                      <div>
                        <a href={college.link} className="mtech_dm_college-name">
                          {college.name}
                        </a>
                        <p className="mtech_dm_college-location">{college.location}</p>
                      </div>
                    </div>
                    <div className="mtech_dm_college-actions">
                      <a href={college.applyLink} className="mtech_dm_action-link mtech_dm_apply">
                        &rarr; Apply Now
                      </a>
                      <a
                        href={college.brochureLink}
                        className="mtech_dm_action-link mtech_dm_brochure"
                      >
                        &#x1F4E5; Download Brochure
                      </a>
                      <label>
                        <input type="checkbox" className="mtech_dm_compare-checkbox" />
                        Add To Compare
                      </label>
                    </div>
                    <td className="mtech_dm_center mtech_dm_clg-fees">
                      <p>{college.fees || "--"}</p>
                      <a href={college.applyLink} className="mtech_dm_action-link-2 mtech_dm_apply">
                        &#8644; Compare Fees
                      </a>
                      <p className="mtech_dm_grey-subtitle">BAA</p>
                      <p className="mtech_dm_grey-subtitle">First Year</p>
                    </td>
                    <td className="mtech_dm_center">
                      <p className="mtech_dm_clg-fees">{college.averagePackage || "--"}</p>
                      <p className="mtech_dm_grey-subtitle">Average Package</p>
                      <p className="mtech_dm_clg-fees">{college.highestPackage || "--"}</p>
                      <p className="mtech_dm_grey-subtitle">Highest Package</p>
                      <a href={college.applyLink} className="mtech_dm_action-link-2 mtech_dm_apply">
                        &#8644; Compare Placement
                      </a>
                    </td>
                    <td className="mtech_dm_center">
                      <p>⭐{college.userReview}</p>
                      <a href={college.applyLink} className="mtech_dm_action-link mtech_dm_apply">
                        Best in {college.best}
                      </a>
                    </td>
                    <td className="mtech_dm_center">
                      <p>{college.ranking}</p>
                      <a href={college.applyLink} className="mtech_dm_action-link mtech_dm_apply">
                        More <i className="fa fa-filter" aria-hidden="true"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

              {tableIndex === 1 && (
                <div className="mtech_dm_horizontal-scroll-container">
                <h3>College Application Forms</h3>
                <div className="mtech_dm_horizontal-scroll" ref={scrollRef}>
                  {collegeScrolls.map((college) => (
                    <div className="mtech_dm_college-hori-card" key={college.id}>
                      <div>
                        <img src={college.image} alt={college.name} className="" />
                        <div className="mtech_dm_rating">⭐ {college.rating}</div>
                      </div>
                      <div className="mtech_dm_college-details">
                        <span className="mtech_dm_scroll-college-name">{college.name}</span>
                        <span className="mtech_dm_scroll-college-location">{college.location}</span>
                        <span className="mtech_dm_college-category">{college.category}</span>
                        <span className="mtech_dm_college-description">{college.description}</span>
                        <span className="mtech_dm_college-package">{college.highestPackage}</span>
                        <a href={college.applyLink} className="mtech_dm_hori-action-link mtech_dm_hori-apply">
                          &rarr; Apply Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

              {tableIndex === 2 && (
                <div className="mtech_dm_recommendation-container">
                <h3>How likely would you recommend this website to your friend?</h3>
                <div className="mtech_dm_recommendation-scale">
                  {[...Array(10).keys()].map((num) => (
                    <span
                      key={num}
                      className={`mtech_dm_number ${hoveredNumber >= num + 1 ? 'mtech_dm_hovered' : ''}`}
                      onMouseEnter={() => handleMouseEnter(num + 1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {num + 1}
                    </span>
                  ))}
              </div>
            </div>
              )}

              {tableIndex ===3 && (
                   <div className="mtech_dm_collections-container">
                   <h2 className="mtech_dm_collections-title">Top Collections for BBA/BMS</h2>
                   <div className="mtech_dm_collections-scroll">
                     {collections.map((collection, index) => (
                       <div key={index} className="mtech_dm_collection-card">
                         <div className="mtech_dm_card-image-container">
                           <img
                             src={collection.imageUrl}
                             alt={collection.title}
                             className="mtech_dm_card-image"
                           />
                           <div className="mtech_dm_gradient-overlay"></div>
                           <div className="mtech_dm_card-content">
                             <h3 className="mtech_dm_card-title">{collection.title}</h3>
                             <div className="mtech_dm_logo-container">
                               <div className="mtech_dm_logo-stack">
                                 {collection.logos.map((logo, idx) => (
                                   <img
                                     key={idx}
                                     src={logo}
                                     alt="College logo"
                                     className="mtech_dm_collection-logo"
                                   />
                                 ))}
                               </div>
                               <div className="mtech_dm_more-count">+{collection.colleges} More</div>
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
    
  )
}

export default BBA;