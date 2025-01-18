import React from "react";
import '../assets/styles/CBSE.css';

const CBSE = () => {
  const cbseData = [
    {
      title: "CBSE Class XII Board Exam",
      links: [
        "CBSE Class 12",
        "CBSE Class 12th Results",
        "CBSE Class 12th Previous Year Papers",
        "CBSE Class 12th Syllabus",
        "CBSE Class 12th Exam Dates",
        "CBSE Class 12th Admit Card",
        "NCERT Solutions Class 12th Physics",
        "NCERT Solutions Class 12th Chemistry",
        "NCERT Solutions Class 12th Biology",
        "NCERT Solutions Class 12th Maths",
        "CBSE Class 12th Notes",
        "CBSE Class 12th Physics Notes",
        "CBSE Class 12th Chemistry Notes",
        "CBSE Class 12th Biology Notes",
      ],
    },
    {
      title: "CBSE Class X Board Exam",
      links: [
        "CBSE Class 10",
        "CBSE Class 10th Result",
        "CBSE Class 10 Previous Year Papers",
        "CBSE Class 10th Syllabus",
        "CBSE Class 10th Exam Dates",
        "CBSE Class 10th Admit Card",
        "NCERT Solutions Class 10th Maths",
        "NCERT Solutions Class 10th Science",
      ],
    },
  ];

  return (
    <div className="cbse-container">
      {cbseData.map((section, index) => (
        <div key={index} className="cbse-section">
          <h2 className="cbse-title">{section.title}</h2>
          <div className="cbse-links-container">
            <div className="cbse-links">
              {section.links.map((link, idx) => (
                <a key={idx} href="#" className="cbse-link">
                  {link} <span className="cbse-arrow">&#8594;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CBSE;
