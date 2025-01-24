import React, { useState } from "react";
import Slider from "react-slick";
import "../assets/styles/LatestNews.css";

const SampleNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <span className="arrow-icon">→</span>
    </div>
  );
};

const SamplePrevArrow = ({ onClick, isVisible }) => {
  return (
    <div className={`custom-arrow custom-prev ${isVisible ? "visible" : "hidden"}`} onClick={onClick}>
      <span className="arrow-icon">←</span>
    </div>
  );
};

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newsItems = [
    {
      title: "NTA SWAYAM July 2024: Semester Results",
      date: "Jan 18, 2025",
      text: "The National Testing Agency (NTA) has officially declared the results for the July 2024 semester exams conducted under SWAYAM.",
      category: "Exam Alerts"
    },
    {
      title: "IIT JAM 2024 Chemistry (CY) Question Paper",
      date: "Jan 18, 2025",
      text: "IIT JAM 2024 Chemistry (CY) Question Paper with the answer key PDF is available for download. Exam conducted by IIT Madras.",
      category: "Exam Alerts"
    },
    {
      title: "JEE Main 2025 Session 1 Admit Card Released",
      date: "Jan 18, 2025",
      text: "JEE Main 2025 Session 1 admit card has been released on the official website with details of timing and venue.",
      category: "Exam Alerts"
    },
    {
      title: "CEED 2023 Question Paper (Available)",
      date: "Jan 18, 2025",
      text: "CEED 2023 question paper and answer key PDF is available for download. The exam tests aptitude for design.",
      category: "Exam Alerts"
    },
    {
      title: "NTA SWAYAM July 2024: Semester Results",
      date: "Jan 18, 2025",
      text: "The National Testing Agency (NTA) has officially declared the results for the July 2024 semester exams conducted under SWAYAM.",
      category: "Exam Alerts"
    },
    {
      title: "IIT JAM 2024 Chemistry (CY) Question Paper",
      date: "Jan 18, 2025",
      text: "IIT JAM 2024 Chemistry (CY) Question Paper with the answer key PDF is available for download. Exam conducted by IIT Madras.",
      category: "Exam Alerts"
    },
    {
      title: "JEE Main 2025 Session 1 Admit Card Released",
      date: "Jan 18, 2025",
      text: "JEE Main 2025 Session 1 admit card has been released on the official website with details of timing and venue.",
      category: "Exam Alerts"
    },
    {
      title: "CEED 2023 Question Paper (Available)",
      date: "Jan 18, 2025",
      text: "CEED 2023 question paper and answer key PDF is available for download. The exam tests aptitude for design.",
      category: "Exam Alerts"
    },
    {
      title: "Top Engineering Colleges in India",
      date: "Jan 18, 2025",
      text: "Here are the top engineering colleges in India according to recent rankings.",
      category: "College Alerts"
    },
    {
      title: "Colleges in India",
      date: "Jan 18, 2025",
      text: "Explore the best medical colleges in India and their admission process.",
      category: "College Alerts"
    },
    {
      title: "Ranking of Law Colleges in India",
      date: "Jan 18, 2025",
      text: "Check out the latest rankings of the best law colleges in India.",
      category: "College Alerts"
    },
    {
      title: "Best Management Colleges",
      date: "Jan 18, 2025",
      text: "Discover the best management colleges in India and their programs.",
      category: "College Alerts"
    },
    {
      title: "Top Engineering Colleges in India",
      date: "Jan 18, 2025",
      text: "Here are the top engineering colleges in India according to recent rankings.",
      category: "College Alerts"
    },
    {
      title: "Best Medical Colleges in India",
      date: "Jan 18, 2025",
      text: "Explore the best medical colleges in India and their admission process.",
      category: "College Alerts"
    },
    {
      title: "Ranking of Law Colleges in India",
      date: "Jan 18, 2025",
      text: "Check out the latest rankings of the best law colleges in India.",
      category: "College Alerts"
    },
    {
      title: "Best Management Colleges",
      date: "Jan 18, 2025",
      text: "Discover the best management colleges in India and their programs.",
      category: "College Alerts"
    },
    {
      title: "Admission Process for 2025",
      date: "Jan 18, 2025",
      text: "Detailed information about the admission process for various courses in 2025.",
      category: "Admission Alerts"
    },
    {
      title: "Important Dates for Admission",
      date: "Jan 18, 2025",
      text: "Mark your calendar with these important dates for the 2025 admission process.",
      category: "Admission Alerts"
    },
    {
      title: "How to Apply for Admissions",
      date: "Jan 18, 2025",
      text: "Step-by-step guide on how to apply for admissions in 2025.",
      category: "Admission Alerts"
    },
    {
      title: "Scholarship Opportunities",
      date: "Jan 18, 2025",
      text: "Explore scholarship opportunities available for the 2025 academic year.",
      category: "Admission Alerts"
    },
    {
      title: "Entrance Exam Details",
      date: "Jan 18, 2025",
      text: "Details about entrance exams required for admission in 2025.",
      category: "Admission Alerts"
    },
    {
      title: "Admission Process for 2025",
      date: "Jan 18, 2025",
      text: "Detailed information about the admission process for various courses in 2025.",
      category: "Admission Alerts"
    },
    {
      title: "Important Dates for Admission",
      date: "Jan 18, 2025",
      text: "Mark your calendar with these important dates for the 2025 admission process.",
      category: "Admission Alerts"
    },
    {
      title: "How to Apply for Admissions",
      date: "Jan 18, 2025",
      text: "Step-by-step guide on how to apply for admissions in 2025.",
      category: "Admission Alerts"
    },
    {
      title: "Scholarship Opportunities",
      date: "Jan 18, 2025",
      text: "Explore scholarship opportunities available for the 2025 academic year.",
      category: "Admission Alerts"
    },
    {
      title: "Entrance Exam Details",
      date: "Jan 18, 2025",
      text: "Details about entrance exams required for admission in 2025.",
      category: "Admission Alerts"
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow isVisible={currentSlide > 0} />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const filteredNewsItems = selectedCategory === "All" ? newsItems : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="latest-news-container">
      <h2 className="section-heading">Latest News & Stories</h2>
      <div className="categories">
        <button className={`category-btn ${selectedCategory === "All" ? "active" : ""}`} onClick={() => setSelectedCategory("All")}>All</button>
        <button className={`category-btn ${selectedCategory === "Exam Alerts" ? "active" : ""}`} onClick={() => setSelectedCategory("Exam Alerts")}>Exam Alerts</button>
        <button className={`category-btn ${selectedCategory === "College Alerts" ? "active" : ""}`} onClick={() => setSelectedCategory("College Alerts")}>College Alerts</button>
        <button className={`category-btn ${selectedCategory === "Admission Alerts" ? "active" : ""}`} onClick={() => setSelectedCategory("Admission Alerts")}>Admission Alerts</button>
      </div>
      <Slider {...settings} className="latest-news-slider">
        {filteredNewsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <div className="news-header">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-date">{item.date}</p>
            </div>
            <div className="news-body">
              <p className="news-text">{item.text}</p>
              <span className="read-more">Read more</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestNews;
