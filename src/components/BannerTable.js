import React, { useState } from "react";
import "../assets/styles/BannerTable.css";

const Banner = () => {
  const allColleges = {
    "2024": {
      Indiatoday: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Jawaharlal Nehru University - [JNU], New Delhi",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#3 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Science - [IISc], Bangalore",
          ranking: "#4 out of 30",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Symbiosis International University - [SIU], Pune",
          ranking: "#5 out of 73",
          streams: "Overall",
        },
      ],
      NIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Aligarh Muslim University - [AMU], Aligarh",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Delhi",
          ranking: "#3 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Management - [IIM], Bangalore",
          ranking: "#5 out of 25",
          streams: "Management",
        },
      ],
      "The Week": [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "VIT University, Pune",
          ranking: "#1 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Manipal Institute of Technology - [MIT], Manipal",
          ranking: "#2 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "K L University - [KLU], Guntur",
          ranking: "#3 out of 50",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "National Institute of Technology - [NIT], Karnataka",
          ranking: "#4 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Kharagpur",
          ranking: "#5 out of 100",
          streams: "Engineering",
        },
      ],
      Outlook: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Fergusson College, Pune",
          ranking: "#1 out of 60",
          streams: "Arts",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Savitribai Phule Pune University, Pune",
          ranking: "#3 out of 50",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Loyola College, Chennai",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#5 out of 50",
          streams: "Arts",
        },
      ],
      IIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Hansraj College, Delhi",
          ranking: "#1 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 35",
          streams: "Science",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Shri Ram College of Commerce - [SRCC], Delhi",
          ranking: "#3 out of 35",
          streams: "Commerce",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Christ University, Bangalore",
          ranking: "#4 out of 40",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Presidency University, Bangalore",
          ranking: "#5 out of 30",
          streams: "Commerce",
        },
      ],
      THE: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "University of Oxford, UK",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "California Institute of Technology, USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Massachusetts Institute of Technology, USA",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      QS: [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Massachusetts Institute of Technology - [MIT], USA",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "California Institute of Technology - [Caltech], USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "University of Cambridge, UK",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      TOI: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#1 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Sophia College for Women, Mumbai",
          ranking: "#2 out of 55",
          streams: "Science",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Fergusson College, Pune",
          ranking: "#3 out of 60",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#4 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Miranda House, Delhi",
          ranking: "#5 out of 45",
          streams: "Arts",
        },
      ],
    },
    "2023": {
      Indiatoday: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Jawaharlal Nehru University - [JNU], New Delhi",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#3 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Science - [IISc], Bangalore",
          ranking: "#4 out of 30",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Symbiosis International University - [SIU], Pune",
          ranking: "#5 out of 73",
          streams: "Overall",
        },
      ],
      NIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Aligarh Muslim University - [AMU], Aligarh",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Delhi",
          ranking: "#3 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Management - [IIM], Bangalore",
          ranking: "#5 out of 25",
          streams: "Management",
        },
      ],
      "The Week": [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "VIT University, Pune",
          ranking: "#1 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Manipal Institute of Technology - [MIT], Manipal",
          ranking: "#2 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "K L University - [KLU], Guntur",
          ranking: "#3 out of 50",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "National Institute of Technology - [NIT], Karnataka",
          ranking: "#4 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Kharagpur",
          ranking: "#5 out of 100",
          streams: "Engineering",
        },
      ],
      Outlook: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Fergusson College, Pune",
          ranking: "#1 out of 60",
          streams: "Arts",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Savitribai Phule Pune University, Pune",
          ranking: "#3 out of 50",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Loyola College, Chennai",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#5 out of 50",
          streams: "Arts",
        },
      ],
      IIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Hansraj College, Delhi",
          ranking: "#1 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 35",
          streams: "Science",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Shri Ram College of Commerce - [SRCC], Delhi",
          ranking: "#3 out of 35",
          streams: "Commerce",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Christ University, Bangalore",
          ranking: "#4 out of 40",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Presidency University, Bangalore",
          ranking: "#5 out of 30",
          streams: "Commerce",
        },
      ],
      THE: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "University of Oxford, UK",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "California Institute of Technology, USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Massachusetts Institute of Technology, USA",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      QS: [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Massachusetts Institute of Technology - [MIT], USA",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "California Institute of Technology - [Caltech], USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "University of Cambridge, UK",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      TOI: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#1 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Sophia College for Women, Mumbai",
          ranking: "#2 out of 55",
          streams: "Science",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Fergusson College, Pune",
          ranking: "#3 out of 60",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#4 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Miranda House, Delhi",
          ranking: "#5 out of 45",
          streams: "Arts",
        },
      ],
    },
    "2022": {
      Indiatoday: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Jawaharlal Nehru University - [JNU], New Delhi",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#3 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Science - [IISc], Bangalore",
          ranking: "#4 out of 30",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Symbiosis International University - [SIU], Pune",
          ranking: "#5 out of 73",
          streams: "Overall",
        },
      ],
      NIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Aligarh Muslim University - [AMU], Aligarh",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Delhi",
          ranking: "#3 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Management - [IIM], Bangalore",
          ranking: "#5 out of 25",
          streams: "Management",
        },
      ],
      "The Week": [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "VIT University, Pune",
          ranking: "#1 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Manipal Institute of Technology - [MIT], Manipal",
          ranking: "#2 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "K L University - [KLU], Guntur",
          ranking: "#3 out of 50",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "National Institute of Technology - [NIT], Karnataka",
          ranking: "#4 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Kharagpur",
          ranking: "#5 out of 100",
          streams: "Engineering",
        },
      ],
      Outlook: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Fergusson College, Pune",
          ranking: "#1 out of 60",
          streams: "Arts",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Savitribai Phule Pune University, Pune",
          ranking: "#3 out of 50",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Loyola College, Chennai",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#5 out of 50",
          streams: "Arts",
        },
      ],
      IIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Hansraj College, Delhi",
          ranking: "#1 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 35",
          streams: "Science",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Shri Ram College of Commerce - [SRCC], Delhi",
          ranking: "#3 out of 35",
          streams: "Commerce",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Christ University, Bangalore",
          ranking: "#4 out of 40",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Presidency University, Bangalore",
          ranking: "#5 out of 30",
          streams: "Commerce",
        },
      ],
      THE: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "University of Oxford, UK",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "California Institute of Technology, USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Massachusetts Institute of Technology, USA",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      QS: [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Massachusetts Institute of Technology - [MIT], USA",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "California Institute of Technology - [Caltech], USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "University of Cambridge, UK",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      TOI: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#1 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Sophia College for Women, Mumbai",
          ranking: "#2 out of 55",
          streams: "Science",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Fergusson College, Pune",
          ranking: "#3 out of 60",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#4 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Miranda House, Delhi",
          ranking: "#5 out of 45",
          streams: "Arts",
        },
      ],
    },
    "2021": {
      Indiatoday: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Jawaharlal Nehru University - [JNU], New Delhi",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#3 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Science - [IISc], Bangalore",
          ranking: "#4 out of 30",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Symbiosis International University - [SIU], Pune",
          ranking: "#5 out of 73",
          streams: "Overall",
        },
      ],
      NIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Aligarh Muslim University - [AMU], Aligarh",
          ranking: "#1 out of 44",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Indian Institute of Technology - [IIT], Madras",
          ranking: "#2 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Delhi",
          ranking: "#3 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Delhi University - [DU], New Delhi",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Indian Institute of Management - [IIM], Bangalore",
          ranking: "#5 out of 25",
          streams: "Management",
        },
      ],
      "The Week": [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "VIT University, Pune",
          ranking: "#1 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Manipal Institute of Technology - [MIT], Manipal",
          ranking: "#2 out of 50",
          streams: "Engineering",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "K L University - [KLU], Guntur",
          ranking: "#3 out of 50",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "National Institute of Technology - [NIT], Karnataka",
          ranking: "#4 out of 100",
          streams: "Engineering",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Indian Institute of Technology - [IIT], Kharagpur",
          ranking: "#5 out of 100",
          streams: "Engineering",
        },
      ],
      Outlook: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Fergusson College, Pune",
          ranking: "#1 out of 60",
          streams: "Arts",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Savitribai Phule Pune University, Pune",
          ranking: "#3 out of 50",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Loyola College, Chennai",
          ranking: "#4 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#5 out of 50",
          streams: "Arts",
        },
      ],
      IIRF: [
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Hansraj College, Delhi",
          ranking: "#1 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Hindu College, Delhi",
          ranking: "#2 out of 35",
          streams: "Science",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Shri Ram College of Commerce - [SRCC], Delhi",
          ranking: "#3 out of 35",
          streams: "Commerce",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Christ University, Bangalore",
          ranking: "#4 out of 40",
          streams: "Science",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Presidency University, Bangalore",
          ranking: "#5 out of 30",
          streams: "Commerce",
        },
      ],
      THE: [
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "University of Oxford, UK",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "California Institute of Technology, USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "Massachusetts Institute of Technology, USA",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      QS: [
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Massachusetts Institute of Technology - [MIT], USA",
          ranking: "#1 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Stanford University, USA",
          ranking: "#2 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/delhi.webp", // Delhi University logo
          name: "Harvard University, USA",
          ranking: "#3 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "California Institute of Technology - [Caltech], USA",
          ranking: "#4 out of 100",
          streams: "Overall",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "University of Cambridge, UK",
          ranking: "#5 out of 100",
          streams: "Overall",
        },
      ],
      TOI: [
        {
          logo: "assets/university/jawaharlal.webp", // Jawaharlal logo
          name: "St. Xavier's College, Mumbai",
          ranking: "#1 out of 50",
          streams: "Arts",
        },
        {
          logo: "assets/university/symboisis.webp", // Symbiosis logo
          name: "Sophia College for Women, Mumbai",
          ranking: "#2 out of 55",
          streams: "Science",
        },
        {
          logo: "assets/university/amity.webp", // Amity University logo
          name: "Fergusson College, Pune",
          ranking: "#3 out of 60",
          streams: "Science",
        },
        {
          logo: "assets/university/aligarh.webp", // Aligarh logo
          name: "Hindu College, Delhi",
          ranking: "#4 out of 40",
          streams: "Commerce",
        },
        {
          logo: "assets/university/kl.webp", // KL University logo
          name: "Miranda House, Delhi",
          ranking: "#5 out of 45",
          streams: "Arts",
        },
      ],
    },
  };



    // Repeat the same structure for 2023, 2022, 2021 with dummy data
  

  const [selectedRanking, setSelectedRanking] = useState("Indiatoday");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleRankingChange = (ranking) => {
    setSelectedRanking(ranking);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="TableBanner">
      <div className="Bannercontainer">
        <div className="banner">
          <div className="text">Know your chances of Admission</div>
          <button className="button">Start Now</button>
        </div>
        <div className="table-container">
          <div className="headingview">
            <h1 className="heading">College Ranking {selectedYear}</h1>
            <div className="viewcontainer">
              <a href="#" className="view-all">View all Colleges</a>
            </div>
          </div>
          <div className="dropdown-buttons-container">
            <div className="dropdown-container">
              <select className="dropdown1" onChange={handleYearChange} value={selectedYear}>
                <option value="2024">Ranking: 2024</option>
                <option value="2023">Ranking: 2023</option>
                <option value="2022">Ranking: 2022</option>
                <option value="2021">Ranking: 2021</option>
              </select>
            </div>
            <div className="buttons-container">
              {Object.keys(allColleges[selectedYear]).map((rankingKey) => (
                <button key={rankingKey} onClick={() => handleRankingChange(rankingKey)}>
                  {rankingKey}
                </button>
              ))}
            </div>
          </div>
          <table className="college-table1">
            <thead className="thead">
              <tr>
                <th>College</th>
                <th>Ranking</th>
                <th>Streams</th>
              </tr>
            </thead>
            <tbody>
              {allColleges[selectedYear][selectedRanking]?.map((college, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="college-logo"
                    />
                    {college.name}
                  </td>
                  <td>{college.ranking}</td>
                  <td>{college.streams}</td>
                </tr>
              )) || (
                <tr>
                  <td colSpan="3">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Banner;