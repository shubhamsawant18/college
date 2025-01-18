import React from "react";
import Slider from "react-slick";
import "../assets/styles/TopExams.css";

const examsData = [
  { name: "NEET", logo: "assets/TopExamslogo/NEET.webp", type: "Offline Exam", colleges: 1242, date: "June 23, 2025", level: "National" },
  { name: "JEE Advanced", logo: "assets/TopExamslogo/JeeA.webp", type: "Online Exam", colleges: 78, date: "May 18, 2025", level: "National" },
  { name: "JEE Main", logo: "assets/TopExamslogo/JeeM.webp", type: "Online Exam", colleges: 1763, date: "January 22, 2025", level: "National" },
  { name: "CAT", logo: "assets/TopExamslogo/Cat.webp", type: "Online Exam", colleges: 0, date: "November 2025", level: "National" },
  { name: "NMAT", logo: "assets/TopExamslogo/NMAT.webp", type: "Online Exam", colleges: 128, date: "November 05, 2025", level: "National" },
  { name: "MAT", logo: "assets/TopExamslogo/MAT.webp", type: "Online Exam", colleges: 1393, date: "March 23, 2025", level: "National" },
  { name: "GATE", logo: "assets/TopExamslogo/GATE.webp", type: "Online Exam", colleges: 213, date: "February 02, 2025", level: "National" },
  { name: "XAT", logo: "assets/TopExamslogo/XAT.webp", type: "Online Exam", colleges: 893, date: "January 05, 2025", level: "National" },
  { name: "BITSAT", logo: "assets/TopExamslogo/BITSAT.webp", type: "Online Exam", colleges: 3, date: "May 20, 2025", level: "National" },
  { name: "CBSE UGC NET", logo: "assets/TopExamslogo/CBSEU.webp", type: "Online Exam", colleges: "N/A", date: "January 2025", level: "National" },
];

const TopExams = () => {
  const settings = {
    dots: true,
    infinite: false, // Disable infinite scroll
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3, // Scroll 3 cards at a time
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="top-exams-outer-container">
      <div className="top-exams-inner-container">
        <h2 className="title">Top Exams</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {examsData.map((exam, index) => (
              <div className="exam-card-wrapper" key={index}>
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
                        <p className="exam-details">Participating Colleges: {exam.colleges}</p>
                      </div>
                      <div className="details-right">
                        <p className="exam-details">Exam Date: {exam.date}</p>
                        <p className="exam-details">Exam Level: {exam.level}</p>
                      </div>
                    </div>
                    <div className="links">
                      <a href="#" className="link">Application Process</a>
                      <a href="#" className="link">Exam Info</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
};

export default TopExams;
