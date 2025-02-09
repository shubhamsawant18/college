// import React,{useState, useRef, useEffect} from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { AiFillHome } from "react-icons/ai";
// import '../assets/coursescss/BBA.css';


// const banners = [
//   {
//     addmission_logo : '/assets/bba_images/addmission-banner.webp',
//   },
//   {
//     course_finder : '/assets/bba_images/course-finder-banner.svg',
//   },
//   {
//     college_predictor : '/assets/bba_images/college-predictor-banner.svg',
//   },
// ];

// const colleges = [
//   {
//     rating: "Aa1",
//     name: "IIM Bangalore",
//     logo: "/assets/collegenamelogos/iimbbanglore.webp",
//     location: "Bangalore, Karnataka | AICTE, UGC Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹1,25,000",
//     averagePackage: "₹35,92,000",
//     highestPackage: "₹1,15,00,000",
//     userReview: "4.6 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#2th/25 in India",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa1",
//     name: "IIM Bangalore",
//     logo: "/assets/collegenamelogos/iimbbanglore.webp",
//     location: "Bangalore, Karnataka | AICTE, UGC Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹1,25,000",
//     averagePackage: "₹35,92,000",
//     highestPackage: "₹1,15,00,000",
//     userReview: "4.6 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#2th/25 in India",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa1",
//     name: "IIM Bangalore",
//     logo: "/assets/collegenamelogos/iimbbanglore.webp",
//     location: "Bangalore, Karnataka | AICTE, UGC Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹1,25,000",
//     averagePackage: "₹35,92,000",
//     highestPackage: "₹1,15,00,000",
//     userReview: "4.6 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#2th/25 in India",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa1",
//     name: "IIM Bangalore",
//     logo: "/assets/collegenamelogos/iimbbanglore.webp",
//     location: "Bangalore, Karnataka | AICTE, UGC Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹1,25,000",
//     averagePackage: "₹35,92,000",
//     highestPackage: "₹1,15,00,000",
//     userReview: "4.6 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#2th/25 in India",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa1",
//     name: "IIM Bangalore",
//     logo: "/assets/collegenamelogos/iimbbanglore.webp",
//     location: "Bangalore, Karnataka | AICTE, UGC Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹1,25,000",
//     averagePackage: "₹35,92,000",
//     highestPackage: "₹1,15,00,000",
//     userReview: "4.6 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#2th/25 in India",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa4",
//     name: "IIM Sirmaur",
//     logo: "/assets/bba_images/iimsirmaur.webp", // Add actual path
//     location: "Sirmaur, Himachal Pradesh | MHRD Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹22,73,000",
//     averagePackage: "₹14,45,000",
//     highestPackage: "₹64,12,000",
//     userReview: "4 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#57th/125 in India | NIRF2024",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa4",
//     name: "Department of Business Economics, University of Delhi - [DBE]",
//     logo: "/assets/bba_images/dbe.webp", // Add actual path
//     location: "New Delhi, Delhi NCR | AICTE Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "--",
//     averagePackage: "₹14,41,000",
//     highestPackage: "₹24,80,000",
//     userReview: "4.1 / 5",
//     bestIn: "Best in Academics",
//     ranking: "#27th/46 in India | IIRF2024",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa4",
//     name: "Narsee Monjee Institute of Management Studies - [NMIMS University]",
//     logo: "/assets/bba_images/nmims.webp", // Add actual path
//     location: "Bangalore, Karnataka | AICTE, AMBA Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹3,15,000 (1st Year Fees)",
//     averagePackage: "₹14,11,000",
//     highestPackage: "₹43,25,000",
//     userReview: "4 / 5",
//     bestIn: "Best in Placements",
//     ranking: "#30th/275 in India | Indiatoday2024",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa5",
//     name: "Woxsen School of Business - [WSB], Hyderabad",
//     logo: "/assets/bba_images/Woxsen_University.webp",
//     location: "Hyderabad, Telangana | NBA, AACSB, AMBA Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹4,25,000",
//     averagePackage: "₹9,04,000",
//     highestPackage: "₹19,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Faculty",
//     ranking: "#12th/110 in India (IIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa5",
//     name: "IBS, Hyderabad",
//     logo: "/assets/bba_images/ibs_hyb.webp",
//     location: "Hyderabad, Telangana | CRISIL, UGC, AIU, AACSB Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,80,000",
//     averagePackage: "₹9,71,000",
//     highestPackage: "₹36,76,000",
//     userReview: "4.1 / 5",
//     bestIn: "Best in Social Life",
//     ranking: "#22th/275 in India (India Today 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa5",
//     name: "Amity University, Noida",
//     logo: "/assets/university/amity.webp",
//     location: "Noida, Uttar Pradesh | NCTE, AICTE, COA, BCI, UGC Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹4,18,000",
//     highestPackage: "₹61,75,000",
//     userReview: "4 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#28th/200 in India (Outlook 2025)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },
//   {
//     rating: "Aa6",
//     name: "Lovely Professional University - [LPU], Jalandhar",
//     logo: "/assets/bba_images/lpu.webp",
//     location: "Jalandhar, Punjab | NCTE, COA, PCI, BCI, ICAR Approved",
//     applyLink: "#",
//     brochureLink: "#",
//     fees: "₹2,00,000",
//     averagePackage: "₹10,10,000",
//     highestPackage: "₹53,00,000",
//     userReview: "4.2 / 5",
//     bestIn: "Best in Infrastructure",
//     ranking: "#38th/125 in India (NIRF 2024)",
//     moreLink: "#",
//   },

// ];

// const collegeScrolls = [
//   {
//     id: 1,
//     name: "Lovely Professional University - [LPU]",
//     location: "Jalandhar, Punjab",
//     rating: "6.4",
//     category: "Best in Infrastructure",
//     description: "NAAC A++ & NIRF Rank 27th",
//     highestPackage: "3 Crore Highest Package",
//     applyLink: "/apply",
//     image: "/assets/bba_images/lpu_clgimg.webp"
//   },
//   {
//     id: 2,
//     name: "GIBS Business School",
//     location: "Banglore, Karnataka",
//     image: "/assets/bba_images/gibs-clgimg.webp",
//     rating: "",
//     category: "Top Private University",
//     description: "16.45 LPA Highest Package",
//     highestPackage: "100% Placement",
//     applyLink: "/apply"
//   },
//   {
//     id: 3,
//     name: "MIT World Peace University - [MIT-WPU]",
//     location: "Pune, Maharashtra",
//     image: "/assets/bba_images/mitwpu-clgimg.webp",
//     rating: "6.2",
//     category: "Best in infra",
//     description: "100% Placement Assistance",
//     highestPackage: "51 LPA Highest CTC",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
//   {
//     id: 4,
//     name: "Manipal Academy of Higher Education - [MAHE] ",
//     location: "Manipal, Karnataka",
//     image: "/assets/bba_images/manipal-clgimg.webp",
//     rating: "4.0",
//     category: "Oldest & Prestigious University",
//     description: "6.55 Total Fees",
//     highestPackage: "BBA/BMS",
//     applyLink: "/apply"
//   },
 
  
// ];


// const colleges_rm = [
//   { name: "Shaheed Sukhdev College of Business Studies", seats: 131, fees: "INR 70,195 - 2 lakhs" },
//   { name: "NMIMS Mumbai", seats: 600, fees: "INR 9 - 14 Lakhs" },
//   { name: "Christ University", seats: 570, fees: "INR 3 - 8 Lakhs" },
//   { name: "Loyola College", seats: "NA", fees: "INR 3 Lakhs" },
//   { name: "Jamia Millia Islamia, New Delhi", seats: 44, fees: "INR 39,300" },
//   { name: "Amity University, Gautam Buddha Nagar", seats: 120, fees: "INR 3.1 Lakhs - INR 23.5 Lakhs" },
//   { name: "Amrita Vishwa Vidyapeetham, Coimbatore", seats: 120, fees: "INR 1.5 Lakhs - INR 2.6 Lakhs" },
//   { name: "Lovely Professional University, Jalandhar", seats: 300, fees: "INR 3.2 Lakhs - 9.6 Lakhs" },
//   { name: "Chandigarh University, Mohali", seats: "NA", fees: "INR 3.7 Lakhs - 9.9 Lakhs" },
//   { name: "UPES Dehradun", seats: "NA", fees: "INR 8 Lakhs - 51.3 Lakhs" }
// ];

// const Eng_colleges = [
//   { 
//     name: "Shaheed Sukhdev College of Business Studies", 
//     ranking_2023: 1, 
//     ranking_2022: 1, 
//     ranking_2021: 1 
//   },
//   { 
//     name: "NMIMS Mumbai", 
//     ranking_2023: 2, 
//     ranking_2022: 2, 
//     ranking_2021: 2 
//   },
//   { 
//     name: "Christ University", 
//     ranking_2023: 3, 
//     ranking_2022: 4, 
//     ranking_2021: 4 
//   },
//   { 
//     name: "Loyola College", 
//     ranking_2023: 4, 
//     ranking_2022: 3, 
//     ranking_2021: 3 
//   },
//   { 
//     name: "Amity School of Business", 
//     ranking_2023: 5, 
//     ranking_2022: 5, 
//     ranking_2021: 5 
//   },
//   { 
//     name: "Mount Carmel College", 
//     ranking_2023: 6, 
//     ranking_2022: 6, 
//     ranking_2021: 7 
//   },
//   { 
//     name: "Madras Christian College", 
//     ranking_2023: 7, 
//     ranking_2022: 7, 
//     ranking_2021: 6 
//   },
//   { 
//     name: "Maharaja Surajmal Institute", 
//     ranking_2023: 8, 
//     ranking_2022: 9, 
//     ranking_2021: 11 
//   },
//   { 
//     name: "Centre of Management Studies, Jain University", 
//     ranking_2023: 9, 
//     ranking_2022: 12, 
//     ranking_2021: 14 
//   },
//   { 
//     name: "SRM Institute of Science Technology", 
//     ranking_2023: 10, 
//     ranking_2022: 10, 
//     ranking_2021: 13 
//   }
// ];

// const gov_colleges = [
//   { name: "JMI, New Delhi", fees: "INR 39,300" },
//   { name: "GGSIPU, New Delhi", fees: "INR 1,02,000" },
//   { name: "Acharya Nagarjuna University", fees: "INR 9,340" },
//   { name: "Punjab University", fees: "INR 18,570" },
//   { name: "VTU Belgaum", fees: "INR 77,250" },
//   { name: "BBAU Lucknow", fees: "INR 50,000" },
//   { name: "GIET, Gunupur", fees: "INR 50,000" },
//   { name: "Gujarat University", fees: "INR 22,000" },
//   { name: "University of Jammu", fees: "INR 1,030" },
//   { name: "University of North Bengal", fees: "INR 32,400" }
// ];

// const priv_colleges = [
//   { name: "TAPMI, Manipal", fees: "INR 3,85,000" },
//   { name: "NMIMS University", fees: "INR 3,15,000" },
//   { name: "JAGSOM, Bangalore", fees: "INR 4,00,000" },
//   { name: "WSB, Hyderabad", fees: "INR 4,25,000" },
//   { name: "IBS, Hyderabad", fees: "INR 2,70,000" },
//   { name: "Institute of Management, Nirma University, Ahmedabad", fees: "INR 3,56,000" },
//   { name: "Amity University, Noida", fees: "INR 4,18,000" },
//   { name: "LPU, Jalandhar", fees: "INR 2,00,000" },
//   { name: "CU, Chandigarh", fees: "INR 1,41,000" },
//   { name: "KIIT University", fees: "INR 1,39,000" }
// ];


// const roi_of_top_clg = [
//   { name: "Shaheed Sukhdev College of Business Studies", fees: "INR 70,195", salary: "INR 8 LPA", roi: "1039.68%" },
//   { name: "NMIMS Mumbai", fees: "INR 2 Lakhs", salary: "INR 10 LPA", roi: "400%" },
//   { name: "Christ University", fees: "INR 1 Lakh", salary: "INR 5 LPA", roi: "400%" },
//   { name: "Loyola College", fees: "INR 1 Lakh", salary: "INR 4 LPA", roi: "300%" },
//   { name: "Jamia Millia Islamia, New Delhi", fees: "INR 39,000", salary: "INR 8 LPA", roi: "1951.28%" },
//   { name: "Amity University, Gautam Buddha Nagar", fees: "INR 3 Lakhs", salary: "INR 7 LPA", roi: "133.34%" },
//   { name: "Amrita Vishwa Vidyapeetham, Coimbatore", fees: "INR 2 Lakhs", salary: "INR 6 LPA", roi: "200%" },
//   { name: "Lovely Professional University, Jalandhar", fees: "INR 3 Lakhs", salary: "INR 6 LPA", roi: "100%" },
//   { name: "Chandigarh University, Mohali", fees: "INR 2 Lakhs", salary: "INR 10 LPA", roi: "400%" },
//   { name: "UPES Dehradun", fees: "INR 3 Lakhs", salary: "INR 14 LPA", roi: "366.67%" }
// ];

// const chunkArray = (arr, size) => {
//   return arr.reduce((chunks, item, index) => {
//     const chunkIndex = Math.floor(index / size);
//     if (!chunks[chunkIndex]) {
//       chunks[chunkIndex] = [];
//     }
//     chunks[chunkIndex].push(item);
//     return chunks;
//   }, []);
// };

// const collections = [
//   { 
//     imageUrl: "/assets/bba_images/collection_img_1.webp", 
//     title: "Best BBA colleges in india",
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//   },
//   { imageUrl: "/assets/bba_images/collection_img_2.webp", 
//     title: "Best BBA colleges in Kolkata",
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//   },
//   { imageUrl: "/assets/bba_images/collection_img_3.webp", 
//     title: "Best Colleges in Pune",
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//   },
//   { imageUrl: "/assets/bba_images/collection_img_3.webp", 
//     title: "Best Colleges in Pune",
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//   },
//   { imageUrl: "/assets/bba_images/collection_img_3.webp", 
//     title: "Best Colleges in Pune",
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//   },
//   { imageUrl: "/assets/bba_images/collection_img_3.webp", 
//     title: "Best Colleges in Pune",
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//   },
//   { imageUrl: "/assets/bba_images/collection_img_4.webp", 
//     title: "Best Colleges in Delhi", 
//     colleges: "3738",
//     logos: [
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32",
//       "/api/placeholder/32/32"
//     ]
//     }
// ];


// const filtersList = {
//   "Sub Stream": [
//     "English - [2687]",
//     "History - [2109]",
//     "General - [1737]",
//     "Social Science - [1281]",
//     "Sanskrit - [953]",
//     "Philosophy - [733]",
//     "Economics - [2228]",
//     "Political Science - [1963]",
//     "Hindi - [1303]",
//     "Geography - [963]",
//     "Psychology - [858]",
//     "Education Management - [562]",
//   ],
//   State: [
//     "Utter Pradesh",
//     "Tamil Nadu",
//     "Maharashtra",
//     "Karnataka",
//     "West Bengal",
//     "Delhi NCR",
//     "Kerala",
//     "Madhya Pradesh",
//     "Haryana",
//   ],
//   Stream: [
//     "Arts",
//     "Management",
//     "Science",
//     "Engineering",
//     "Computer Applications",
//     "Commerce",
//     "Education",
//     "Medical",
//     "Pharmacy",
//   ],
//   City: [
//     "New Delhi",
//     "Mumbai",
//     "Chennai",
//     "Kolkata",
//     "Hyderabad",
//     "Bangalore",
//     "Pune",
//     "Ahmedabad",
//     "Gurgaon",
//     "Noida",
//   ],
//   Course: ["BA", "MA", "M. Phil/Ph. D in Arts", "BSW", "BFA", "D. Litt"],
//   "Program Type": [
//     "Full Time",
//     "Part Time",
//     "On Campus",
//     "Distance",
//     "Online",
//     "Off Campus",
//   ],
//   "Type of College": ["Private", "Government"],
//   "Entrance/Exam Accepted": [
//     "WB CAP",
//     "CUET",
//     "AP OAMDC",
//     "TS DOST",
//     "JSAT",
//     "SUAT",
//   ],
//   "Avg Fee per Year": ["0-25K", "25-50K", "50-75K", "75K-1L", "1L-2L", "2L+"],
//   "Course Type": ["Degree", "Diploma", "Certificate"],
//   Agency: ["India Today", "Outlook", "The Week", "THE", "NRIF", "IIRF"],
//   Affiliation: [
//     "Calicut University - [CU], Calicat",
//     "Mumbai University - [MU], Mumbai",
//     "University of Calcutta, Kolkatta",
//     "Mahatma Gandhi University - [MGU], Kottayam",
//     "Chhatrapati Shahu Ji Maharaj University - [CSJMU], Kanpur",
//     "Banglore University - [BU], Banglore",
//     "Bharathiar University - [BU], Coimbatore",
//     "University of Madras, Chennai",
//   ],
// };
// function BBA() {

//   const collegesPerTable = 4;
//   const collegeChunks = chunkArray(colleges, collegesPerTable);
//   const scrollRef = useRef(null);
//   const [hoveredNumber, setHoveredNumber] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);

  
//   const filterSelectionRef = useRef(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState({});
//   const [dropdownOpen, setDropDownOpen] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");




//   const handleRadioChange = (event) => {
//     setSelectedSort(event.target.value);
//   };

//   useEffect(() => {
//     if (filterSelectionRef.current) {
//       setIsMounted(true);
//     }
//   }, []);

//   const scrollLeftFilters = () => {
//     filterSelectionRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRightFilters = () => {
//     filterSelectionRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const toggleDropdown = (filter) => {
//     setDropDownOpen(dropdownOpen === filter ? null : filter);
//   };

//   const handleFilterChange = (filterCategory, filterOption) => {
//     setSelectedFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       if (!updatedFilters[filterCategory]) updatedFilters[filterCategory] = [];
//       if (updatedFilters[filterCategory].includes(filterOption)) {
//         updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
//           (option) => option !== filterOption
//         );
//       } else {
//         updatedFilters[filterCategory].push(filterOption);
//       }
//       return updatedFilters;
//     });
//   };

//   const handleMouseEnter = (number) => {
//     setHoveredNumber(number);
//   };
  
//   const handleMouseLeave = () => {
//     setHoveredNumber(null);
//   };

  
//   const toggleContent = () => {
//     setIsExpanded((prevState) => !prevState);
//   };



//   return (
//     <>
//     <Navbar />
//     <div className='bba-container'>
//     {/* Heading */}
//       <div className='breadcrumb'>

//       <a href='/' className='home-icon'>
//       <AiFillHome />
//       </a>
//       <span className="breadcrumb-arrow">&gt;</span>
//           <span className="breadcrumb-text">BBA Colleges</span>
//       </div>

//     {/* Title */}
//     <h1 className="title">
//       Top BBA Colleges in India: Ranking, Fees, Courses, Admission, Cutoff, ROI, Placements 2024
//     </h1>

//      {/* Banner Section */}
//     <div className="flex-container">
//       {banners.map((banner, index) => (
//         <div key={index} >
//           <div className="banner-content">
//             <img src={Object.values(banner)[0]} alt={`Banner ${index + 1}`} />
//           </div>
//         </div>
//       ))}
//     </div>

//     <div className="read-more-container">
//       {/* Profile Section */}
//       <div className="profile-section">
//         <img src="/assets/bba_images/bba-profile.jpg" alt="profile icon" className="profile-icon" />
//         <div className="profile-info">
//           <p className="profile-name">
//             John Doe <span className="checkmark">✔</span>
//           </p>
//           <span className="designation">Senior Content Specialist</span>
//         </div>
//       </div>

//       <p>
//         {isExpanded ? (
//           <>
//             <p className="Top_10_bba">
//             The top BBA colleges in India are Shaheed Sukhdev College of Business Studies, NMIMS Mumbai, Christ University, and Loyola College. The best BBA colleges in India offer BBA courses with multiple specializations, including Marketing, Finance, HRM, and many others. There are 3900 BBA colleges in India, including 3173 Private and 665 government BBA colleges. Popular BBA entrance exams include SET, IPMAT, CUET, IPM Aptitude Test, and NMIMS NPAT. The average course fees for pursuing BBA courses from top BBA Colleges range between INR 20,000 - 30,00,000 depending on whether in government or private college. The average salary ranges between INR 8 - 30 LPA.
//             </p>
//             <br />
//             <p className="Top_10_bba">
//               IIM Indore, IIM Rohtak, and IIM Ranchi are the best management colleges in India that provide IPM courses. IPM is a 5-year integrated BBA+MBA program designed for young students with managerial and leadership aspirations. They are ranked 8th, 12th, and 24th, per NIRF Ranking 2023.
//             </p>

//             {/* Table of Content */}
//             <div className="table-of-content">
//               <h2>Table of Content</h2>
//               <ul>
//                 <li>1. Which are the Top 10 BBA Colleges in India 2024?</li>
//                 <li>2. What are the Top BBA Colleges in India Placement-wise?</li>
//                 <li>3. Top Engineering Colleges in India with India Today Ranking 2024</li>
//                 <li>4. How can I get Admission to Top BBA Colleges in India?</li>
//                 <li>5. Which are the Top Government BBA Colleges in India?</li>
//                 <li>6. What are the Best Private BBA Colleges in India?</li>
//                 <li>7. ROI of Top BBA Colleges in India</li>
//                 <li>8. What are the Top BBA Colleges in India location-wise?</li>
//                 <li>9. FAQs</li>
//               </ul>
//             </div>

//             <div className='top-bba-clgs'>
//               <img src='/assets/bba_images/Top_BBA_Colleges_in_India_01.webp' alt='Top BBA colleges' />
//             </div>

//             <div className='Top_10_bba'>
//               <h2>Which are the Top 10 BBA Colleges in India 2024?</h2>
//               <p>The table below discusses in detail the top 10 BBA colleges in India, along with the total number
//                 of seats allotted for the BBA course and the designated fees for the mentioned colleges.</p>

//                 <div className="college-table-container">
//                 <table className="all-college-table">
//                   <thead>
//                     <tr>
//                       <th className="collegename">College Name</th>
//                       <th>Total Seats</th>
//                       <th>Average Total Fees</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {colleges_rm.map((college, index) => (
//                       <tr key={index}>
//                         <td>{college.name}</td>
//                         <td>{college.seats}</td>
//                         <td>{college.fees}</td>
//                       </tr>
                    
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="placement-wise-clg Top_10_bba">
//               <h2>What are the Top BBA Colleges in India Placement-wise?</h2>
//               <p>The top BBA Colleges in India are listed below. Many of these colleges boast a placement record of 70-80%, and students can secure placements with salaries as high as INR 20 LPA. Refer to the infographic below for details on the top BBA Colleges, including their average salary packages and top recruiters.</p>
//               <img src='/assets/bba_images/Top_BBAColleges_in_India_Placement_01.webp' alt='Top BBA colleges' />
//             </div>
//             <div className="Top_10_bba">
//               <h2>Top Engineering Colleges in India with India Today Ranking 2024</h2>
//               <p>Tabulated below are the top BBA colleges as per India Today rankings across different years.</p>
//                 <div className="college-table-container">
//                 <table className="all-college-table">
//                   <thead>
//                     <tr>
//                       <th className="collegename">Name of the College</th>
//                       <th>India Today Ranking 2023</th>
//                       <th>AIndia Today Ranking 2022</th>
//                       <th>India Today Ranking 2021</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {Eng_colleges.map((Eng_colleges, index) => (
//                       <tr key={index}>
//                         <td>{Eng_colleges.name}</td>
//                         <td>{Eng_colleges.ranking_2023}</td>
//                         <td>{Eng_colleges.ranking_2022}</td>
//                         <td>{Eng_colleges.ranking_2021}</td>
//                       </tr>
                    
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="Addmission-process  Top_10_bba">
//               <h2>How can I get Admission to Top BBA Colleges in India?</h2>
//               <p>BBA Admission is based on merit and entrance exams such as NPAT, SET, or IPU-CET, conducted by top colleges like NMIMS Mumbai, Symbiosis, and IP University. The minimum eligibility criteria require students to have passed 10+2 with a minimum of 50-60% aggregate. BBA course spans 6 semesters, each focusing on BBA subjects like management basics, finance, marketing, and business law. </p>
//               <p>The basic BBA eligibility criteria are as follows:</p>
//               <ul >
//                 <li>You must have passed 10+2 from a recognized board with a minimum of 50-60% aggregate marks.</li>
//                 <li>Candidates from all the streams are eligible to apply for BBA Admissions.</li>
//                 <li>You can apply even if you’re awaiting class 12th results.</li>
//               </ul>
//             </div>

//             <div className="Top_10_bba">
//               <h2>Which are the Top Government BBA Colleges in India?</h2>
//               <p>Below is the list of top Government BBA colleges in India, along with their Annual course fee.</p>
//                 <div className="college-table-container">
//                 <table className="all-college-table">
//                   <thead>
//                     <tr>
//                       <th className="collegename">College Name</th>
//                       <th>Average Total Fees</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {gov_colleges.map((college, index) => (
//                       <tr key={index}>
//                         <td>{college.name}</td>
//                         <td>{college.fees}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="Top_10_bba">
//               <h2>What are the Best Private BBA Colleges in India?</h2>
//               <p>Below is the list of top Private BBA colleges in India with their Annual course fee.</p>
    
//                 <div className="college-table-container">
//                 <table className="all-college-table">
//                   <thead>
//                     <tr>
//                       <th className="collegename">College Name</th>
//                       <th>Average Total Fees</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {priv_colleges.map((college, index) => (
//                       <tr key={index}>
//                         <td>{college.name}</td>
//                         <td>{college.fees}</td>
                       
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="Top_10_bba">
//               <h2>ROI of Top BBA Colleges in India</h2>
//               <p>ROI plays a crucial role in students' college selection process. Before enrolling in any institution, students should evaluate the return on investment. Since management courses can be costly, ensuring that the institute offers sufficient job opportunities with competitive salary packages to offset the investment is important.</p>
//               <p>Calculating ROI involves comparing the average placement package to the average annual fees of the college or university.</p>
//                 <div className="college-table-container">
//                 <table className="all-college-table">
//                   <thead>
//                     <tr>
//                       <th className="collegename">Name of the College</th>
//                       <th>Average Course Fees (Annual)</th>
//                       <th>Average Salary</th>
//                       <th>ROI</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {roi_of_top_clg.map((college, index) => (
//                       <tr key={index}>
//                         <td>{college.name}</td>
//                         <td>{college.fees}</td>
//                         <td>{college.salary}</td>
//                         <td>{college.roi}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </>
//         ) : (
//           "The top BBA colleges in India are Shaheed Sukhdev College of Business Studies, NMIMS Mumbai, Christ University, and Loyola College. The best BBA colleges in India offer BBA courses with multiple specializations, including Marketing, Finance, HRM, and many others. There are 3900 BBA colleges in India, including 3173 Private and 665 government BBA colleges."
//         )}
//       </p>

//       <button onClick={toggleContent} className='readmore-btn'>
//         {isExpanded ? "Read Less" : "Read More"}
//       </button>
//     </div>

//     <div className="filter-container">
//           <div className="filter-selection-container">
//             <div className="container-filter">
//               <button
//                 className="scroll-button left"
//                 onClick={scrollLeftFilters}
//               >
//                 &#9664;
//               </button>
//               <div className="filter-selection" ref={filterSelectionRef}>
//                 <button className="filter-button">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="icon"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 5.25h16.5M3.75 9.75h16.5m-13.5 4.5h10.5m-7.5 4.5h4.5"
//                     />
//                   </svg>
//                   All Filter
//                 </button>

//                 {Object.keys(filtersList).map((filter) => (
//                   <div className="dropdown-wrapper" key={filter}>
//                     <button
//                       className={`dropdown-button-filter ${
//                         selectedFilters[filter]?.length ? "active" : ""
//                       }`}
//                       onClick={() => toggleDropdown(filter)}
//                     >
//                       {filter} ▼
//                     </button>

//                     {dropdownOpen === filter && (
//                       <div className="dropdown-menu">
//                         <div className="dropdown-header">
//                           <span>{filter}</span>
//                           <button onClick={() => setDropDownOpen(null)}>
//                             ✖
//                           </button>
//                         </div>

//                         <input
//                           type="text"
//                           className="dropdown-search"
//                           placeholder={`Find ${filter}`}
//                           value={searchQuery}
//                           onChange={(e) => setSearchQuery(e.target.value)}
//                         />

//                         <div className="dropdown-options">
//                           {filtersList[filter] &&
//                             filtersList[filter]
//                               .filter((item) =>
//                                 item
//                                   .toLowerCase()
//                                   .includes(searchQuery.toLowerCase())
//                               )
//                               .map((option) => (
//                                 <label key={option} className="dropdown-option">
//                                   <input
//                                     type="checkbox"
//                                     checked={selectedFilters[filter]?.includes(
//                                       option
//                                     )}
//                                     onChange={() =>
//                                       handleFilterChange(filter, option)
//                                     }
//                                   />
//                                   <span className="option-name">{option}</span>
//                                 </label>
//                               ))}
//                         </div>

//                         <div className="dropdown-footer">
//                           <span className="view-all">View All Filters</span>
//                           <span
//                             className="clear-filters"
//                             onClick={() => setSelectedFilters({})}
//                           >
//                             Clear
//                           </span>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="scroll-button right"
//                 onClick={scrollRightFilters}
//               >
//                 &#9654;
//               </button>
//             </div>
//           </div>

//           <div className="selected-filters">
//             {Object.entries(selectedFilters).map(
//               ([category, filters]) =>
//                 filters.length > 0 &&
//                 filters.map((filter) => (
//                   <button key={filter} className="filter-tag">
//                     {filter} ✖
//                   </button>
//                 ))
//             )}
//             <button
//               className="clear-btn"
//               onClick={() => setSelectedFilters({})}
//             >
//               Clear All
//             </button>
//           </div>
//         </div>

//       {/* College table*/}
//       <div className="found-colleges">
//           <span>Found {colleges.length} Colleges</span>
//         <div className="sorting">
//             <label>Sort by:</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="sort"
//                   value="Popularity"
//                   checked={selectedSort === "Popularity"}
//                   onChange={handleRadioChange}
//                 />
//                 Popularity
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="sort"
//                   value="Rating"
//                   checked={selectedSort === "Rating"}
//                   onChange={handleRadioChange}
//                 />
//                 Rating
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="sort"
//                   value="Highest Fees"
//                   checked={selectedSort === "Highest Fees"}
//                   onChange={handleRadioChange}
//                 />
//                 Highest Fees
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="sort"
//                   value="Lowest Fees"
//                   checked={selectedSort === "Lowest Fees"}
//                   onChange={handleRadioChange}
//                 />
//                 Lowest Fees
//               </label>
//             </div>
//           </div>
//       </div>


//       {collegeChunks.map((chunk, tableIndex) => (
//       <React.Fragment key={tableIndex}>
//             <table className="college-table" key={tableIndex}>
//               <thead>
//                 <tr>
//                   <th>CD Rating</th>
//                   <th>Colleges</th>
//                   <th>Course Fees</th>
//                   <th>Placement</th>
//                   <th>User Reviews</th>
//                   <th>Ranking</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {chunk.map((college, index) => (
//                   <tr key={index}>
//                     <td className="center">{college.rating}</td>
//                     <div className="college-info">
//                       <img
//                         src={college.logo}
//                         alt={`${college.name} logo`}
//                         className="college-logo"
//                       />
//                       <div>
//                         <a href={college.link} className="college-name">
//                           {college.name}
//                         </a>
//                         <p className="college-location">{college.location}</p>
//                       </div>
//                     </div>
//                     <div className="college-actions">
//                       <a href={college.applyLink} className="action-link apply">
//                         &rarr; Apply Now
//                       </a>
//                       <a
//                         href={college.brochureLink}
//                         className="action-link brochure"
//                       >
//                         &#x1F4E5; Download Brochure
//                       </a>
//                       <label>
//                         <input type="checkbox" className="compare-checkbox" />
//                         Add To Compare
//                       </label>
//                     </div>
//                     <td className="center clg-fees">
//                       <p>{college.fees || "--"}</p>
//                       <a href={college.applyLink} className="action-link-2 apply">
//                         &#8644; Compare Fees
//                       </a>
//                       <p className="grey-subtitle">BAA</p>
//                       <p className="grey-subtitle">First Year</p>
//                     </td>
//                     <td className="center">
//                       <p className="clg-fees">{college.averagePackage || "--"}</p>
//                       <p className="grey-subtitle">Average Package</p>
//                       <p className="clg-fees">{college.highestPackage || "--"}</p>
//                       <p className="grey-subtitle">Highest Package</p>
//                       <a href={college.applyLink} className="action-link-2 apply">
//                         &#8644; Compare Placement
//                       </a>
//                     </td>
//                     <td className="center">
//                       <p>⭐{college.userReview}</p>
//                       <a href={college.applyLink} className="action-link apply">
//                         Best in {college.best}
//                       </a>
//                     </td>
//                     <td className="center">
//                       <p>{college.ranking}</p>
//                       <a href={college.applyLink} className="action-link apply">
//                         More <i className="fa fa-filter" aria-hidden="true"></i>
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//               {tableIndex === 1 && (
//                 <div className="horizontal-scroll-container">
//                 <h3>College Application Forms</h3>
//                 <div className="horizontal-scroll" ref={scrollRef}>
//                   {collegeScrolls.map((college) => (
//                     <div className="college-hori-card" key={college.id}>
//                       <div>
//                         <img src={college.image} alt={college.name} className="" />
//                         <div className="rating">⭐ {college.rating}</div>
//                       </div>
//                       <div className="college-details">
//                         <span className="scroll-college-name">{college.name}</span>
//                         <span className="scroll-college-location">{college.location}</span>
//                         <span className="college-category">{college.category}</span>
//                         <span className="college-description">{college.description}</span>
//                         <span className="college-package">{college.highestPackage}</span>
//                         <a href={college.applyLink} className="hori-action-link hori-apply">
//                           &rarr; Apply Now
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//               {tableIndex === 2 && (
//                 <div className="recommendation-container">
//                 <h3>How likely would you recommend this website to your friend?</h3>
//                 <div className="recommendation-scale">
//                   {[...Array(10).keys()].map((num) => (
//                     <span
//                       key={num}
//                       className={`number ${hoveredNumber >= num + 1 ? 'hovered' : ''}`}
//                       onMouseEnter={() => handleMouseEnter(num + 1)}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       {num + 1}
//                     </span>
//                   ))}
//               </div>
//             </div>
//               )}

//               {tableIndex ===3 && (
//                    <div className="collections-container">
//                    <h2 className="collections-title">Top Collections for BBA/BMS</h2>
//                    <div className="collections-scroll">
//                      {collections.map((collection, index) => (
//                        <div key={index} className="collection-card">
//                          <div className="card-image-container">
//                            <img
//                              src={collection.imageUrl}
//                              alt={collection.title}
//                              className="card-image"
//                            />
//                            <div className="gradient-overlay"></div>
//                            <div className="card-content">
//                              <h3 className="card-title">{collection.title}</h3>
//                              <div className="logo-container">
//                                <div className="logo-stack">
//                                  {collection.logos.map((logo, idx) => (
//                                    <img
//                                      key={idx}
//                                      src={logo}
//                                      alt="College logo"
//                                      className="collection-logo"
//                                    />
//                                  ))}
//                                </div>
//                                <div className="more-count">+{collection.colleges} More</div>
//                              </div>
//                            </div>
//                          </div>
//                        </div>
//                      ))}
//                    </div>
//                    </div>
//               )}
//               </React.Fragment>
//             ))}
//         </div>
//     <Footer />
//     </>
    
//   )
// }

// export default BBA;