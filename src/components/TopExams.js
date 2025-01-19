import React from "react";
import Slider from "react-slick";
import "../assets/styles/TopExams.css";

const examsData = [
  { name: "NEET", logo: "assets/TopExamslogo/NEET.webp", type: "Offline Exam", colleges: 1242, date: "June 23, 2025", level: "National" },
  { name: "JEE Advanced", logo: "assets/TopExamslogo/JeeA.webp", type: "Online Exam", colleges: 78, date: "May 18, 2025", level: "National" },
  { name: "JEE Main", logo: "assets/TopExamslogo/JeeM.webp", type: "Online Exam", colleges: 1763, date: "Jan 22, 2025", level: "National" },
  { name: "CAT", logo: "assets/TopExamslogo/Cat.webp", type: "Online Exam", colleges: 0, date: "Nov 2025", level: "National" },
  { name: "NMAT", logo: "assets/TopExamslogo/NMAT.webp", type: "Online Exam", colleges: 128, date: "Nov 05, 2025", level: "National" },
  { name: "MAT", logo: "assets/TopExamslogo/MAT.webp", type: "Online Exam", colleges: 1393, date: "March 23, 2025", level: "National" },
  { name: "GATE", logo: "assets/TopExamslogo/GATE.webp", type: "Online Exam", colleges: 213, date: "Feb 02, 2025", level: "National" },
  { name: "XAT", logo: "assets/TopExamslogo/XAT.webp", type: "Online Exam", colleges: 893, date: "Jan 05, 2025", level: "National" },
  { name: "BITSAT", logo: "assets/TopExamslogo/BITSAT.webp", type: "Online Exam", colleges: 3, date: "May 20, 2025", level: "National" },
  { name: "CBSE UGC NET", logo: "assets/TopExamslogo/CBSEU.webp", type: "Online Exam", colleges: "N/A", date: "Jan 2025", level: "National" },
];

const cbseData = [
  {
    title: "Admission 2024",
    links: [
      "B Ed Admission 2024",
      "MBA Admission 2024",
      "MBBS Admission 2024",
      "BA Admission 2024",
      "M Tech Admission 2024",
      "PhD Admission 2024",
      "LLB Admission 2024",
      "D El Ed Admission 2024",
      "BSc Admission 2024",
      "B Pharmacy Admission 2024",
      
    ],
  },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="custom-arrow custom-next"
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="arrow-icon">→</span>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev"
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="arrow-icon">←</span>
    </div>
  );
};

const TopExams = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="top-exams-outer-container">
      <div className="top-exams-inner-container">
        <h2 className="title">Top Exams</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {examsData.map((exam, index) => (
              <div className="exam-card-container" key={index}>
                <div className="exam-card">
                  <div className="card-top">
                    <img src={exam.logo} alt={`${exam.name} logo`} className="exam-logo" />
                    <div className="type-and-name-container">
                      <span className="exam-type">{exam.type}</span>
                      <h3 className="exam-name">{exam.name}</h3>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <div className="exam-details-container">
                      <div className="details-left">
                        <p>Colleges</p>
                        <p>Exam Date</p>
                        <p>Exam Level</p>
                      </div>
                      <div className="details-right">
                        <p>{exam.colleges}</p>
                        <p>{exam.date}</p>
                        <p>{exam.level}</p>
                      </div>
                    </div>
                    <div className="links">
                      <div className="link">Application Process <span className="cbse-arrow">&#8594;</span></div>
                      <div className="divider"></div>
                      <div className="link">Exam Info <span className="cbse-arrow">&#8594;</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* CBSE Section below the Top Exams section */}
      <div className="admission-container">
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
    </div>
  );
};

export default TopExams;
