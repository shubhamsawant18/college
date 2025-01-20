import React from "react";
import Slider from "react-slick";
import "../assets/styles/LatestNews.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <span className="arrow-icon">→</span>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <span className="arrow-icon">←</span>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const LatestNews = () => {
  const newsItems = [
    {
      title: "NTA SWAYAM July 2024: Semester Results",
      date: "Jan 18, 2025",
      text: "The National Testing Agency (NTA) has officially declared the results for the July 2024 semester exams conducted under SWAYAM.",
    },
    {
      title: "IIT JAM 2024 Chemistry (CY) Question Paper",
      date: "Jan 18, 2025",
      text: "IIT JAM 2024 Chemistry (CY) Question Paper with the answer key PDF is available for download. Exam conducted by IIT Madras.",
    },
    {
      title: "JEE Main 2025 Session 1 Admit Card Released",
      date: "Jan 18, 2025",
      text: "JEE Main 2025 Session 1 admit card has been released on the official website with details of timing and venue.",
    },
    {
      title: "CEED 2023 Question Paper (Available)",
      date: "Jan 18, 2025",
      text: "CEED 2023 question paper and answer key PDF is available for download. The exam tests aptitude for design.",
    },
    {
      title: "IIT JAM 2024 Chemistry (CY) Question Paper",
      date: "Jan 18, 2025",
      text: "IIT JAM 2024 Chemistry (CY) Question Paper with the answer key PDF is available for download. Exam conducted by IIT Madras.",
    },
    {
      title: "JEE Main 2025 Session 1 Admit Card Released",
      date: "Jan 18, 2025",
      text: "JEE Main 2025 Session 1 admit card has been released on the official website with details of timing and venue.",
    },
    {
      title: "CEED 2023 Question Paper (Available)",
      date: "Jan 18, 2025",
      text: "CEED 2023 question paper and answer key PDF is available for download. The exam tests aptitude for design.",
    },
   
  ];

  return (
    <div className="latest-news-container">
      <h2 className="section-heading">Latest News & Stories</h2>
      <div className="categories">
        <button className="category-btn active">Exam Alerts</button>
        <button className="category-btn">College Alerts</button>
        <button className="category-btn">Admission Alerts</button>
      </div>
      <Slider {...settings} className="latest-news-slider">
        {newsItems.map((item, index) => (
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