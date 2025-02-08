import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import '../assets/coursescss/BTech.css';

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


const new_colleges = [
    {
        name: "IIT Madras",
        totalSeats: 1128,
    },
    {
        name: "IIT Delhi",
        totalSeats: 1209,
    },
    {
        name: "IIT Bombay",
        totalSeats: 1368,
    },
    {
        name: "IIT Kanpur",
        totalSeats: 1210,
    },
    {
        name: "IIT Roorkee",
        totalSeats: 1353,
    },
    {
        name: "IIT Kharagpur",
        totalSeats: 1919,
    },
    {
        name: "IIT Guwahati",
        totalSeats: 962,
    },
    {
        name: "IIT Hyderabad",
        totalSeats: 595,
    },
    {
        name: "NIT Trichy",
        totalSeats: 1038,
    },
    {
        name: "Jadavpur University",
        totalSeats: 1253,
    },
];


const new_universities = [
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
        name: "IIT Madras",
        score: 89.79,
    },
    {
        rank: 2,
        name: "IIT Delhi",
        score: 87.09,
    },
    {
        rank: 3,
        name: "IIT Bombay",
        score: 80.74,
    },
    {
        rank: 4,
        name: "IIT Kanpur",
        score: 80.65,
    },
    {
        rank: 5,
        name: "IIT Roorkee",
        score: 75.64,
    },
    {
        rank: 6,
        name: "IIT Kharagpur",
        score: 73.76,
    },
    {
        rank: 7,
        name: "IIT Guwahati",
        score: 70.32,
    },
    {
        rank: 8,
        name: "IIT Hyderabad",
        score: 70.28,
    },
    {
        rank: 9,
        name: "NIT Trichy",
        score: 69.71,
    },
    {
        rank: 10,
        name: "Jadavpur University, Kolkata",
        score: 67.04,
    },
    {
        rank: 11,
        name: "VIT Vellore",
        score: 66.59,
    },
    {
        rank: 12,
        name: "NIT Surathkal",
        score: 65.26,
    },
    {
        rank: 13,
        name: "Anna University, Chennai",
        score: 65.06,
    },
    {
        rank: 14,
        name: "IIT Indore",
        score: 63.93,
    },
    {
        rank: 15,
        name: "IIT BHU Varanasi",
        score: 63.74,
    },
    {
        rank: 16,
        name: "NIT Rourkela",
        score: 62.79,
    },
    {
        rank: 17,
        name: "ISM Dhanbad",
        score: 62.37,
    },
    {
        rank: 18,
        name: "IIT Gandhinagar",
        score: 61.66,
    },
    {
        rank: 19,
        name: "Amrita Vishwa Vidyapeetham, Coimbatore",
        score: 61.54,
    },
    {
        rank: 20,
        name: "Thapar Institute of Engineering and Technology (Deemed-to-be-university), Patiala",
        score: 61.24,
    },
];


const roiColleges = [
    {
        name: "Jadavpur University",
        totalCourseFee: "INR 20,840",
        annualPlacement: "INR 11.08 LPA",
        roiRank: 1
    },
    {
        name: "Jamia Millia Islamia",
        totalCourseFee: "INR 64,600",
        annualPlacement: "INR 11 LPA",
        roiRank: 2
    },
    {
        name: "DTU New Delhi",
        totalCourseFee: "INR 2,36,700",
        annualPlacement: "INR 24 LPA",
        roiRank: 3
    },
    {
        name: "ICT Mumbai",
        totalCourseFee: "INR 1,86,000",
        annualPlacement: "INR 6 LPA",
        roiRank: 4
    },
    {
        name: "BITS Pilani",
        totalCourseFee: "INR 18,52,000",
        annualPlacement: "INR 30.37 LPA",
        roiRank: 5
    },
    {
        name: "VIT Vellore",
        totalCourseFee: "INR 7,92,000",
        annualPlacement: "INR 9.90 LPA",
        roiRank: 6
    }
];


const nirfRanking24 = [
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

const indiaTodayRanking24 = [
    {
        rank: 1,
        name: "IIT Delhi",
    },
    {
        rank: 2,
        name: "IIT Bombay",
    },
    {
        rank: 3,
        name: "IIT Kanpur",
    },
    {
        rank: 4,
        name: "IIT Kharagpur",
    },
    {
        rank: 5,
        name: "IIT Roorkee",
    },
    {
        rank: 6,
        name: "IIT Guwahati",
    },
    {
        rank: 7,
        name: "BITS Pilani",
    },
    {
        rank: 8,
        name: "Netaji Subhas University of Technology",
    },
    {
        rank: 9,
        name: "DTU",
    },
    {
        rank: 10,
        name: "IIT Patna",
    },
    {
        rank: 11,
        name: "IIIT Allahabad",
    },
    {
        rank: 12,
        name: "IIT Gandhinagar",
    },
    {
        rank: 13,
        name: "IIIT Hyderabad",
    },
    {
        rank: 14,
        name: "IIT Mandi",
    },
    {
        rank: 15,
        name: "IIIT Delhi",
    },
    {
        rank: 16,
        name: "Birla Institute of Technology, Mesra",
    },
    {
        rank: 17,
        name: "College of Engineering, Pune",
    },
    {
        rank: 18,
        name: "MNIT Jaipur",
    },
    {
        rank: 19,
        name: "MAHE Manipal",
    },
    {
        rank: 20,
        name: "IGDTUW",
    },
];


const theTimesRanking24 = [
    {
        rank: 1,
        name: "SRM Institute of Science and Technology, Kattankulathur",
    },
    {
        rank: 1,
        name: "BITS Pilani",
    },
    {
        rank: 2,
        name: "NSUT",
    },
    {
        rank: 3,
        name: "KL (Deemed to be University)",
    },
    {
        rank: 3,
        name: "SOA University - Siksha 'O' Anusandhan",
    },
    {
        rank: 4,
        name: "Sathyabama Institute of Science and Technology",
    },
    {
        rank: 5,
        name: "NIT Rourkela",
    },
    {
        rank: 6,
        name: "Institute of Engineering and Management",
    },
    {
        rank: 7,
        name: "Hindustan Institute of Technology and Science",
    },
    {
        rank: 8,
        name: "College of Engineering, Pune",
    },
    {
        rank: 8,
        name: "Reva University",
    },
    {
        rank: 9,
        name: "Dr. M.G.R. Educational and Research Institute",
    },
    {
        rank: 10,
        name: "VELS Institute of Science, Technology and Advanced Studies",
    },
    {
        rank: 11,
        name: "C. V. Raman Global University",
    },
    {
        rank: 12,
        name: "Alliance College of Engineering and Design",
    },
    {
        rank: 12,
        name: "BMS College of Engineering",
    },
    {
        rank: 13,
        name: "Rajalakshmi Engineering College",
    },
    {
        rank: 13,
        name: "Dwarkadas J. Sanghvi College of Engineering",
    },
    {
        rank: 14,
        name: "Amity School of Engineering and Technology, Noida",
    },
    {
        rank: 14,
        name: "Sharda School of Engineering and Technology",
    },
    {
        rank: 15,
        name: "Pimpri Chinchwad College of Engineering",
    },
    {
        rank: 16,
        name: "AMC Engineering College",
    },
    {
        rank: 17,
        name: "IMS Engineering College",
    },
    {
        rank: 17,
        name: "Galgotias University",
    },
    {
        rank: 18,
        name: "K J Somaiya College of Engineering",
    },
    {
        rank: 18,
        name: "JIS College of Engineering",
    },
    {
        rank: 19,
        name: "PSGCT Coimbatore",
    },
    {
        rank: 19,
        name: "Amity University, Gurugram",
    },
    {
        rank: 20,
        name: "G.L. Bajaj Institute of Technology and Management",
    },
    {
        rank: 20,
        name: "MIT-WPU",
    },
];


const iitDelhiPlacementStats = [
    {
        particulars: "No. of Offers",
        placement2024: "1,050",
        placement2023: "1,300"
    },
    {
        particulars: "No. of International Offers",
        placement2024: "50+",
        placement2023: "30"
    },
    {
        particulars: "Total No. of PPOs",
        placement2024: "-",
        placement2023: "260"
    },
    {
        particulars: "No. of Recruiters",
        placement2024: "370",
        placement2023: "400"
    },
    {
        particulars: "No. of Recruiters (Actual)",
        placement2024: "NA",
        placement2023: "NA"
    },
    {
        particulars: "No. of Job Profiles (Expected)",
        placement2024: "700",
        placement2023: "800"
    },
    {
        particulars: "No. of Job Profiles (Actual)",
        placement2024: "NA",
        placement2023: "NA"
    },
    {
        particulars: "No. of Students Opting for Deferred Placements",
        placement2024: "-",
        placement2023: "10"
    },
    {
        particulars: "Highest Salary",
        placement2024: "INR 2 CPA",
        placement2023: "INR 2 CPA"
    }
];
const iitDelhiPlacementStatsPhase1 = [
    {
        particulars: "Number of Companies Participated",
        placement2024: "256",
        placement2023: "480+"
    },
    {
        particulars: "Number of Students Placed",
        placement2024: "1,091",
        placement2023: "1,612"
    },
    {
        particulars: "PPOs",
        placement2024: "300",
        placement2023: "350"
    },
    {
        particulars: "Highest CTC",
        placement2024: "-",
        placement2023: "INR 1.31 CPA"
    },
    {
        particulars: "Average CTC",
        placement2024: "INR 22 LPA",
        placement2023: "-"
    },
    {
        particulars: "Major Sector",
        placement2024: "Analytics / Consulting / Finance",
        placement2023: "Analytics / Consulting / Finance"
    },
    {
        particulars: "Top Recruiters",
        placement2024: "Apple, Google, Texas Instruments, Bajaj Auto Ltd, Cetak Ltd, Qualcomm, etc.",
        placement2023: "American Express, Cogoport, Lincraft AI, SAP Labs"
    }
];
const vitPlacementStats = [
    {
        particulars: "Highest CTC",
        placement2024: "INR 88 LPA",
        placement2023: "INR 1.02 CPA"
    },
    {
        particulars: "Average CTC",
        placement2024: "INR 9.90 LPA",
        placement2023: "INR 9.23 LPA"
    },
    {
        particulars: "Number of Recruiters",
        placement2024: "820",
        placement2023: "904"
    },
    {
        particulars: "Number of Students Placed",
        placement2024: "7,142",
        placement2023: "14,345"
    },
    {
        particulars: "Number of Super Dream Offers (INR 10 LPA & above)",
        placement2024: "3,323",
        placement2023: "4,461"
    },
    {
        particulars: "Number of Dream Offers (INR 6 LPA & above)",
        placement2024: "3,138",
        placement2023: "3,453"
    },
    {
        particulars: "Top Recruiters",
        placement2024: "Microsoft, Amazon, PayPal, Cisco, Bank of America, etc.",
        placement2023: "TCS, Microsoft, Qualcomm, Adobe, Amazon, etc."
    }
];

const collegeFees_north = [
    { name: "IIT Delhi", totalCourseFee: "INR 9,79,200" },
    { name: "DTU Delhi", totalCourseFee: "INR 6,42,300" },
    { name: "IIIT Delhi", totalCourseFee: "INR 19,55,000" },
    { name: "IIT Roorkee", totalCourseFee: "INR 8,00,000" },
    { name: "IIT Ropar", totalCourseFee: "INR 8,00,000" },
    { name: "PEC Chandigarh", totalCourseFee: "INR 3,76,000" },
    { name: "IIT Jammu", totalCourseFee: "INR 8,00,000" },
    { name: "IIT Mandi", totalCourseFee: "INR 8,00,000" },
    { name: "NIT Srinagar", totalCourseFee: "INR 5,00,000" },
    { name: "IIT Indore", totalCourseFee: "INR 8,00,000" }
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

// const toggleContent = () => {
//     setIsExpanded((prevState) => !prevState);
// };

function B_Tech() {
    const [sortOption, setSortOption] = useState('Popularity');
    const [colleges] = useState(initialColleges);
    const [filters, setFilters] = useState({});
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [hoveredRating, setHoveredRating] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(prevState => !prevState);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".btech_d_filter-dropdown-container")) {
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
            <div key={filterType} className="btech_d_filter-dropdown-container">
                <button
                    className={`btech_d_dropdown-button ${filters[filterType] ? "active" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === filterType ? null : filterType);
                    }}
                >
                    {filterType.replace(/([A-Z])/g, " $1").trim()}
                </button>
                {activeDropdown === filterType && (
                    <div className="btech_d_filter-dropdown-menu">
                        {options.map((option) => (
                            <div
                                key={option}
                                className={`btech_d_filter-option ${filters[filterType] === option ? "selected" : ""}`}
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

            <div className='btech_d_bba-container'>
                <div className='btech_d_breadcrumb'>

                    <a href='/' className='btech_d_home-icon'>
                        <AiFillHome />
                    </a>
                    <span className="btech_d_breadcrumb-arrow">&gt;</span>
                    <span className="btech_d_breadcrumb-text">BE/B.Tech Colleges</span>
                </div>

                {/* Title */}
                <h1 className="btech_d_title">
                    Top BTech Colleges in India Based on 2024 Ranking
                </h1>

                {/* Banner Section */}
                <div className="btech_d_flex-container">
                    <div className="btech_d_banner">
                        <div className="btech_d_banner-content">
                            <img src="/assets/BSC_Nursing_hero_section_img/1.svg" />
                        </div>
                    </div>
                    <div className="btech_d_banner btech_d_course-finder-banner">
                        <div className="btech_d_banner-content">
                            <img src="/assets/BSC_Nursing_hero_section_img/2.svg" />
                        </div>
                    </div>
                    <div className="btech_d_banner btech_d_college-predictor-banner">
                        <div className="btech_d_banner-content">
                            <img src="/assets/BSC_Nursing_hero_section_img/3.svg" />
                        </div>
                    </div>
                </div>









                {/* ----------------------read more------------------------------ */}



                <div className="mbbs-p-read-more-container">
                    {/* Profile Section */}
                    <div className="mbbs-p-profile-section">
                        <img
                            src="\assets\B_tech_imges\profile_img.webp"
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
                                    The Top BTech colleges in India include IIT Madras, IIT Delhi, IIT Bombay, IIT Kanpur, IIT Roorkee, IIT Kharagpur, IIT Hyderabad, IIT Guwahati, NIT Trichy, and VIT Vellore, per NIRF Engineering ranking 2023. BTech Admissions are based on BTech entrance exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE followed by a GD/ PI round. The fee structure ranges from INR 20,000 to INR 20,00,000, while the average package ranges from INR 6 to INR 30 LPA. The salaries of graduates from prestigious BTech colleges like IITs, NITs, and some private institutes have experienced a significant increase in the range of 2 to 25 per cent. IIT Madras recorded the highest package, INR 1.31 crore per annum, per 2023 final placement reports.
                                </p>
                                <br />
                                <ul className="mbbs-p-read-more-list">
                                    <li>
                                        The Top BTech colleges in India include IIT Madras, IIT Delhi, IIT Bombay, IIT Kanpur, IIT Roorkee, IIT Kharagpur, IIT Hyderabad, IIT Guwahati, NIT Trichy, and VIT Vellore, per NIRF Engineering ranking 2023. BTech Admissions are based on BTech entrance exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE followed by a GD/ PI round.
                                    </li>
                                    <li>
                                        The fee structure ranges from INR 20,000 to INR 20,00,000, while the average package ranges from INR 6 to INR 30 LPA. The salaries of graduates from prestigious BTech colleges like IITs, NITs, and some private institutes have experienced a significant increase in the range of 2 to 25 per cent. IIT Madras recorded the highest package, INR 1.31 crore per annum, per 2023 final placement reports.
                                    </li>
                                    <li>
                                        The Top BTech Colleges in India from IIT Madras to IIT Bombay are actively working on their BTech curriculum to offer more hands-on experience for Btech students. Jadavpur University is the top BTech college in India with low fees, which is between INR 9,000 - INR 1,20,000 with an average package of INR 11.08 LPA.
                                    </li>
                                </ul>

                                <div className="mbbs-p-Top_10_bba">
                                    <h2>Top 10 B.Tech Colleges in India</h2>
                                    <p className="mbbs-p-para">
                                        India is home to some of the most prestigious and renowned BTech colleges in the world. According to the QS World Ranking 2024, IIT Madras is ranked #285 as a top public university. In the QS Asia University Ranking 2024, IIT Bombay takes the lead at the 40th spot, followed by IIT Delhi and IIT Madras at #46 and #53 respectively. Here is a table of the top 10 BTech colleges in India, along with their seat intake.
                                    </p>

                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th className="mbbs-p-collegename">College/University Name</th>
                                                    <th>Total Seats</th>
                                                    {/* <th>Cutoff</th>
                                                    <th>Average Total Fees</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {new_colleges.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.name}</td>
                                                        <td>{college.totalSeats}</td>
                                                        {/* <td>{college.cutoff2023}</td>
                                                        <td>{college.averageFee}</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="mbbs-p-Top_10_bba">
                                    <h2>Top BTech Colleges in India: Ranking</h2>
                                    <p className="mbbs-p-para">
                                        There are several ranking agencies and top magazines that rank various institutions across the country based on several parameters. The strategy followed differs from agency to agency. However, some of the common parameters include teacher-student ratio, placements, faculty quality, infrastructure, and more. The Economics Times, QS rankings, India Today, Outlook, The Week, and NIRF are some of the most reputed ranking agencies in India. These ranking agencies rank different institutions in different categories. Given below are the top BTech colleges in India with ranking.
                                    </p>

                                    <h2>Top BTech Colleges in India with NIRF Ranking 2023
                                    </h2>
                                    <p className="mbbs-p-para">
                                        <ul>
                                            <li>
                                                The National Institutional Ranking Framework is a method that the Indian government adopts to rank top Education institutions in India based on various parameters. It is under the Ministry of Education. Every year NIRF publishes ranking lists of top Institutions in India for different domains. NIRF is the most trustworthy and popular Ranking agency in India.
                                            </li>
                                            <li>
                                                NIRF ranks the institutions across India based on 5 parameters and they are (1) Teaching, Learning & Resources, (2) Research and Professional Practice, (3) Graduation Outcomes, (4) Outreach and Inclusivity, and (5) Perception. The rendered pie chart below depicts the weightage of different parameters used for Ranking top colleges in India:
                                            </li>
                                        </ul>
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
                                                {new_universities.map((university, index) => (
                                                    <tr key={index}>
                                                        <td>{university.name}</td>
                                                        <td>{university.averageFee}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div>
                                        <p>
                                            IIT Madras is the best BTech college in India, per NIRF Ranking 2023. It is ranked at 1 with an 89.89 NIRF score.
                                        </p>
                                        <p>
                                            The rankings of IIT Delhi, IIT Bombay, and IIT Kanpur remain unchanged. However, IIT Roorkee has shown improvement and it has overtaken IIT Kharagpur.
                                        </p>
                                        <p>
                                            IIT Guwahati has maintained its position at 7th. It is followed by IIT Hyderabad which has overtaken IIT Tiruchirappalli and has achieved +1.
                                        </p>
                                        <p>
                                            Jadavpur University Kolkata has managed to secure a place in the list of top 10 Engineering colleges in India this year. It is followed by VIT Vellore at 11 with a NIRF score of 66.59
                                        </p>
                                        <p>
                                            IIT Varanasi has seen a fall in its ranking this year. It has dropped to 15 from 13. It is followed by NIT Rourkela and IIT ISM Dhanbad at 16th and 17th place.
                                        </p>
                                    </div>
                                </div>

                                <div className="mbbs-p-Top_10_bba">
                                    {/* <h2>Top 10 Medical Colleges in India</h2>
                                    <p className="mbbs-p-para">
                                        In India, there are around 1968 recognized medical colleges.
                                        The Top Medical Colleges in India offer MBBS and many other
                                        medical courses such as BDS, MS, etc. in various substreams.
                                        Tabulated below is the list of top Medical colleges in India
                                        offering MBBS along with their NIRF medical scores.
                                    </p> */}

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
                                    {/* <h2>Top MBBS Colleges in India Rank Wise</h2>
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
                                    </p> */}

                                    {/* <div className="mbbs-p-top-bba-clgs">
                                        <img src="/assets/coursesimg/nirf.png" alt="Top BBA colleges" />
                                    </div>
                                    <p className="mbbs-p-para">
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

                                    {/* <div className="mbbs-p-college-table-container">
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
                                    </div> */}

                                    {/* <h3>Top MBBS Colleges in India: India Today Ranking 2023</h3>
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
                                        parameters used for the ranking of top MBBS colleges in India: */}
                                    {/* </p> */}

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
                                        <h2>Top BTech Colleges in India: India Today Ranking 2024
                                        </h2>
                                        <li>
                                            India Today is one of the leading and well-reputed English news magazines in India published by Living Media India Limited every week. The Marketing & Development Research Associates (MDRA), a marketing and research firm from Delhi and India Today, conducts a college ranking survey. It ranked Indian colleges in fields like Science, Arts, Commerce, Management, Engineering, etc.
                                        </li>
                                    </ul>

                                    {/* <p className="mbbs-p-para">
                                        Below are the top MBBS colleges in India as per the India
                                        Today Rankings for 2023.
                                    </p> */}
                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>India Today Ranking 2023</th>
                                                    <th className="mbbs-p-collegename">College/University Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {indiaTodayRanking24.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.rank}</td>
                                                        <td>{college.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <h3>Top BTech Colleges in India: The Times Ranking 2024</h3>
                                <p className="mbbs-p-para">
                                    India Today is one of the leading and well-reputed English news magazines in India published by Living Media India Limited every week. The Marketing & Development Research Associates (MDRA), a marketing and research firm from Delhi and India Today, conducts a college ranking survey. It ranked Indian colleges in fields like Science, Arts, Commerce, Management, Engineering, etc.
                                </p>

                                <div className="mbbs-p-college-table-container">
                                    <table className="mbbs-p-all-college-table">
                                        <thead>
                                            <tr>
                                                <th>The Times Ranking 2024</th>
                                                <th className="mbbs-p-collegename">College/University Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {theTimesRanking24.map((college, index) => (
                                                <tr key={index}>
                                                    <td>{college.rank}</td>
                                                    <td>{college.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>




                                <div className="mbbs-p-Top_10_bba">
                                    <h2>Top BTech Colleges in India: Return on Investment (ROI)</h2>
                                    <p className="mbbs-p-para">
                                        Return On Investment (ROI) value plays a vital role when it comes to choosing the top BTech college. BTech is a very expensive course that can cost a fat sum of money which in turn can be an unnecessary burden on the student and the parents. Investing in one of the top government BTech colleges assures one of a bright future. But when it comes to private colleges then one has to take into account several parameters to shortlist any college. One important parameter is the fee charged by the college.
                                    </p>

                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th className="mbbs-p-collegename">College/University Name</th>
                                                    <th>Total Course Fee</th>
                                                    <th>Annual Placement Package</th>
                                                    <th>ROI Rank</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roiColleges.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.name}</td>
                                                        <td>{college.totalCourseFee}</td>
                                                        <td>{college.annualPlacement}</td>
                                                        <td>{college.roiRank}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>







                                <div className="mbbs-p-Top_10_bba">
                                    <h2>Top BTech Colleges in India: Admission Process</h2>
                                    <p className="mbbs-p-para">
                                        India has more than 4,000 BTech colleges and these colleges offer high-quality professional technical education both full-time and part-time. The following chart shows the total number of private and public BTech colleges in India.

                                        Lakhs of aspirants apply for the BTech program every year. Most of the top BTech collin edges in India rely on the scores of various national-level entrance exams to shortlist students for admission into the BTech program.
                                        JEE Mains, JEE Advanced, UPSEE, BITSAT, and VITEEE are some of the popular entrance exams among all the other exams.
                                    </p>
                                    <h3>IIT Delhi</h3>
                                    <p className="mbbs-p-para">
                                        IIT Delhi is one of the best engineering colleges in India. It was established in 1961 and has been declared an Institute of national importance. It was also internationally ranked number 3 in the QS World University Rankings.

                                        The graduate programs offered by IIT Delhi include B. Tech, a Dual Degree program, and an Integrated M. Tech program. The college also offers masters-level programs like M.Tech, Ph. D, MBA, M.Des, PG Diploma, etc.
                                        The specializations in engineering offered by IIT Delhi are Biochemical Engineering and Biotechnology, Chemical Engineering, Computer Science and Engineering, Civil Engineering, Electrical Engineering, Mathematics, Physics, Textile Technology, and Mechanical Engineering.
                                        IIT Delhi accepts students with very high ranks through selection exams like JEE (BTech) and GATE (MTech).
                                        The average annual fee for the B.Tech program is INR 2,00,000 and for the M.Tech program is INR 1,50,000.
                                    </p>

                                    <h3>IIT Delhi Placement Highlights</h3>
                                    <p className="mbbs-p-para">
                                        IIT Delhi conducted its placement drive for batch 2024. There has been an increase of 10% in the number of offers received.

                                        There were 1,050 job offers made which included 50+ International offers and 260 Pre-Placement offers made by over 370 participating recruiters. Tech giant Microsoft made more than 60 offers.
                                        More than 500+ job profiles across multiple domains were offered by 300+ national and international recruiters.
                                        The students bagged over 1,036 job offers in the first phase of placements surpassing the institute’s expectations. More than 200 firms have hired students for around 250 different job profiles, including pre-placement offers.
                                        Around 90% of students have bagged offers in their core areas. Over 20 International selections have been made by countries whereas offers have been received from several countries such as Japan, the Middle East, Singapore, South Korea, and Taiwan.
                                        13 students have opted for the deferred placements facility. Students opting for this option can avail of the placement services once for up to 2 years.
                                        Some of the top recruiters on the campus in terms of the maximum number of recruitments include Microsoft, Intel, Oracle, Tata Projects, EXL Services, ICICI Bank, Goldman Sachs, HCL, Wells Fargo, and IQVIA.
                                    </p>
                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>Particulars</th>
                                                    <th>Placement Statistics 2024</th>
                                                    <th>Placement Statistics 2023</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {iitDelhiPlacementStats.map((stat, index) => (
                                                    <tr key={index}>
                                                        <td>{stat.particulars}</td>
                                                        <td>{stat.placement2024}</td>
                                                        <td>{stat.placement2023}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>


                                    <br />

                                    <h3>IIT Madras</h3>
                                    <p className="mbbs-p-para">
                                        It is one of the most prestigious and best engineering colleges in the country with a NIRF ranking of 1. It was established in 2008.

                                        IIT Madras has 16 academic departments and numerous research centers that offer postgraduate and undergraduate programs in distinct disciplines of Engineering, Technology, and Pure Sciences.
                                        They provide engineering courses in the following subjects - Advanced Materials and Nanotechnology, Biomedical Engineering, Computational Engineering, Data Science, Energy Systems, Robotics, etc.
                                        Students who are willing to get admitted here must give the national entrance exam of JEE in advance for B.Tech and GATE for M.Tech.
                                        IIT Madras is offering a scholarship for B.Sc in Programming and Data Science students having an annual family income of INR 1 Lakh. The students will get financial aid for 4 academic semesters.
                                    </p>

                                    <h3>IIT Madras Placements</h3>
                                    <p className="mbbs-p-para">
                                        The institute has also released its summer internship placements report and 619 internship opportunities were off by 140 recruiters.
                                        256 companies visited the IIT Madras campus during the first session of Placements with 14 of them being international.
                                        They made a total of 1,091 offers so far including 44 international offers, which is the highest during the first session of campus placement.
                                        A total of 62 start-ups have made 186 offers this year so far.
                                        The highest-paying recruiters were American Express, Microsoft, RBajaj Auto ltd, EXL Service, IQVIA, Goldman Sachs & Co. LLC, ICICI Bank, etc.
                                    </p>
                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>Particulars</th>
                                                    <th>Placement Statistics 2024 (Phase 1)</th>
                                                    <th>Placement Statistics 2023</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {iitDelhiPlacementStatsPhase1.map((stat, index) => (
                                                    <tr key={index}>
                                                        <td>{stat.particulars}</td>
                                                        <td>{stat.placement2024}</td>
                                                        <td>{stat.placement2023}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>


                                    <br />
                                    <h3>VIT Chennai</h3>
                                    <p className="mbbs-p-para">
                                        Vellore institute of technology was established in 1984. The institute is accredited by name with an 'A' grade and has been ranked among the top BTech colleges in India by NIRF and Outlook. The institute has two campuses one in Vellore and the other one in Chennai. VIT Chennai campus is spread across 360 acres of land and the Chennai campus is spread over 150 acres of land.

                                        The placement cell at VIT Vellore creates internships and job opportunities for its students.
                                        The cell has categorized the job placements into different categories. Students getting a package above INR 10 LPA is considered as a super dream offer and above INR 6LPA is a dream offer.
                                        As per the official data, 2 students have received the highest package of INR 88 LPA and 17 students received salary packages of above INR 50 LPA. 10% of the total 9000 students in the batch have already received offers from TCS. The average salary package offered to UG was INR 9.90 LPA.
                                    </p>


                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>Particulars</th>
                                                    <th>Placement Statistics 2024 (In Progress)</th>
                                                    <th>Placement Statistics 2023</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {vitPlacementStats.map((stat, index) => (
                                                    <tr key={index}>
                                                        <td>{stat.particulars}</td>
                                                        <td>{stat.placement2024}</td>
                                                        <td>{stat.placement2023}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>



                                    <br />
                                    <h3>Top BTech Colleges in India: Zone wise</h3>
                                    <p className="mbbs-p-para">
                                        The following table mentions the ranks of the top 5 BTech colleges for various zones. This data has been published by India today showing the top BTech courses in India:
                                    </p>

                                    <h3>Top BTech Colleges in North India</h3>
                                    <p className="mbbs-p-para">
                                        Check out the following table which lists the top BTech colleges in North India:
                                    </p>

                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>College/University Name</th>
                                                    <th>Total Course Fee (INR)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {collegeFees_north.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.name}</td>
                                                        <td>{college.totalCourseFee}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>


                                    <h3>Top BTech Colleges in South India</h3>
                                    <p className="mbbs-p-para">
                                        Check out the following table which lists the top BTech colleges in North India:
                                    </p>

                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>College/University Name</th>
                                                    <th>Total Course Fee (INR)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {collegeFees_north.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.name}</td>
                                                        <td>{college.totalCourseFee}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>


                                    <h3>Top BTech Colleges in East India</h3>
                                    <p className="mbbs-p-para">
                                        Check out the following table which lists the top BTech colleges in North India:
                                    </p>

                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>College/University Name</th>
                                                    <th>Total Course Fee (INR)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {collegeFees_north.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.name}</td>
                                                        <td>{college.totalCourseFee}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>


                                    <h3>Top BTech Colleges in West India</h3>
                                    <p className="mbbs-p-para">
                                        Check out the following table which lists the top BTech colleges in North India:
                                    </p>

                                    <div className="mbbs-p-college-table-container">
                                        <table className="mbbs-p-all-college-table">
                                            <thead>
                                                <tr>
                                                    <th>College/University Name</th>
                                                    <th>Total Course Fee (INR)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {collegeFees_north.map((college, index) => (
                                                    <tr key={index}>
                                                        <td>{college.name}</td>
                                                        <td>{college.totalCourseFee}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>



                                   

                                </div>

                              


                            </>
                        ) : (
                            "The Top BTech colleges in India include IIT Madras, IIT Delhi, IIT Bombay, IIT Kanpur, IIT Roorkee, IIT Kharagpur, IIT Hyderabad, IIT Guwahati, NIT Trichy, and VIT Vellore, per NIRF Engineering ranking 2023. BTech Admissions are based on BTech entrance exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE followed by a GD/ PI round. The fee structure ranges from INR 20,000 to INR 20,00,000, while the average package ranges from INR 6 to INR 30 LPA. The salaries of graduates from prestigious BTech colleges like IITs, NITs, and some private institutes have experienced a significant increase in the range of 2 to 25 per cent. IIT Madras recorded the highest package, INR 1.31 crore per annum, per 2023 final placement reports"
                        )}
                    </p>

                    <button onClick={toggleContent} className="mbbs-p-readmore-btn">
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>


                </div>































                <div className="btech_d_filter-bar btech_d_sticky-filter-bar">
                    <button className="btech_d_filter-button" onClick={clearFilters}>
                        <i className="fa fa-filter" aria-hidden="true"></i> Clear Filters
                    </button>
                    {renderFilterDropdowns()}
                </div>

                {Object.keys(filters).length > 0 && (
                    <div className="btech_d_active-filters">
                        {Object.entries(filters).map(
                            ([type, value]) =>
                                value && (
                                    <span key={type} className="btech_d_filter-tag">
                                        {type.replace(/([A-Z])/g, " $1").trim()}: {value}
                                        <button
                                            className="btech_d_remove-filter"
                                            onClick={() => handleFilterClick(type, value)}
                                        >
                                            ×
                                        </button>
                                    </span>
                                )
                        )}
                    </div>
                )}

                <div className='bba-container'>
                    <div className="table-container">
                        <div className='btech_d_soring_bg'>
                            <div className="btech_d_sort-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h6 className='btech_d_heading'>Found {colleges.length} Colleges</h6>
                                <div className="btech_d_sort-options" style={{ display: 'flex', gap: '10px' }}>
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



                                <div class="btech_d_view-options">
                                    <button class="btech_d_view-button active" aria-label="List view">
                                        <svg class="btech_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                                        </svg>
                                    </button>
                                    <button class="btech_d_view-button" aria-label="Grid view">
                                        <svg class="btech_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                                        </svg>
                                    </button>
                                    <button class="btech_d_view-button" aria-label="Compact view">
                                        <svg class="btech_d_view-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>


                        {/* -----------------------TABLE OF COLLEGES--------------------------------- */}

                        <div className="btech_d_table-wrapper">
                            <table className="btech_d_college-table">
                                <thead>
                                    <tr className='btech_d_bg'>
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
                                            <td className="btech_d_cd-rank">{college.rank}</td>
                                            <td>
                                                <div className="btech_d_college-info">
                                                    <img src={college.logo} alt={college.name} className="btech_d_college-logo" />
                                                    <div className="btech_d_college-details">
                                                        <div className="btech_d_college-name">{college.name}</div>
                                                        <div className="btech_d_college-location">{college.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btech_d_fees-info">
                                                    <div className="btech_d_fees-amount">{college.fees}</div>
                                                    <div className="btech_d_fees-note">1st Year Fees</div>
                                                    <a href={college.placement.link} className="btech_d_compare-placement">➜ Compare Fees</a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btech_d_reviews-info">
                                                    <div className="btech_d_rating-wrapper">
                                                        <span className="btech_d_rating">{college.reviews.rating}</span>
                                                        <i className="fa fa-star star" aria-hidden="true"></i>
                                                        <span className="btech_d_rating-scale">/ 5</span>
                                                    </div>
                                                    <div className="btech_d_review-count">Based on {college.reviews.count} reviews</div>
                                                    <div className="btech_d_review-badge">{college.reviews.badge}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btech_d_ranking-info">
                                                    {/* <div className="ranking-position">#{college.ranking.position}</div> */}
                                                    <div className="btech_d_ranking-details">
                                                        # {college.ranking.position}/<span>{college.ranking.total}</span> in India {college.ranking.year}
                                                    </div>
                                                    <img src={college.rankingLogo} alt="ranking" className="btech_d_college-ranking-logo" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btech_d_placement-info">
                                                    <div className="btech_d_average-package">{college.placement.averagePackage}</div>
                                                    <div className="btech_d_package-label">Average Package</div>
                                                    <div className="btech_d_highest-package">{college.placement.highestPackage}</div>
                                                    <div className="btech_d_package-label">Highest Package</div>
                                                    <a href={college.placement.link} className="btech_d_compare-placement">➜ Compare Placement</a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>




                        {/* ------------------------------------------BEST COLLEGES------------------------------------------------------- */}

                        <div className="btech_d_carousel-container">
                            <h3>Colleges Application Forms 2025</h3>
                            <div className="btech_d_carousel-wrapper">
                                {universities.map((university, index) => (
                                    <div className="btech_d_university-card" key={index}>
                                        <img src={university.imgSrc} alt={university.title} className="btech_d_university-image" />
                                        <p className="btech_d_green">Best in Infrastructure</p>
                                        <h3 className="btech_d_university-title">{university.title}</h3>
                                        <div className="btech_d_university-details">
                                            <p className="btech_d_university-location">{university.location}</p>
                                            <p className="btech_d_university-description bsc_d_green-text">{university.description1}</p>
                                            <p className="btech_d_university-description">{university.description2}</p>
                                            <a href={university.applyLink} target="_blank" rel="noopener noreferrer" className="btech_d_apply-link">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>




                        {/* ----------------------------------TOP COLLEGES-------------------------------------------- */}


                        <div className="btech_d_scroll-container">
                            <h2 className="text-xl font-semibold mb-4">Top Collections for B.Tech</h2>
                            <div className="btech_d_scroll-wrapper">
                                {collections.map((item, index) => (
                                    <div key={index} className="btech_d_scroll-card">
                                        <div className="btech_d_scroll-card-image">
                                            <img src={item.image} alt={item.title} />
                                            <div className="btech_d_overlay">
                                                <h3 className="btech_d_overlay-title">{item.title}</h3>

                                                <div className="btech_d_icon-container">
                                                    {/* Static Icons */}
                                                    <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon1" className="btech_d_icon-circle" />
                                                    <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon2" className="btech_d_icon-circle" />
                                                    <img src="/assets/Bsc_Nursing/universities/10.webp" alt="icon3" className="btech_d_icon-circle" />
                                                    <p className="btech_d_overlay-subtitle">{item.count}</p>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>




                        {/* ------------------------------rating----------------------------------------- */}

                        <div className="btech_d_rating-container">
                            <p className="btech_d_rating-heading">
                                How likely are you to recommend collegedunia.com to a friend or a colleague?
                            </p>

                            <div className="btech_d_rating-options">
                                <span className="btech_d_rating-label btech_d_first">Not so likely</span>
                                {[...Array(10)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`btech_d_rating-button 
                ${selectedRating === index + 1 ? "selected" : ""}
                ${hoveredRating >= index + 1 ? "hovered" : ""}`}
                                        onClick={() => setSelectedRating(index + 1)}
                                        onMouseEnter={() => setHoveredRating(index + 1)}
                                        onMouseLeave={() => setHoveredRating(null)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <span className="btech_d_rating-label btech_d_last">Highly Likely</span>
                            </div>
                        </div>


                    </div>
                </div>
                <Footer />

            </div >
        </>
    );
}

export default B_Tech