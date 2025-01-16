import React, { useState } from "react";
import Slider from "react-slick";
import "../assets/styles/Topstudy.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cityData = [
  { name: "Delhi NCR", image: "assets/city/Delhi.webp" },
  { name: "Bangalore", image: "assets/city/bangalore.webp" },
  { name: "Hyderabad", image: "assets/city/hyderabad.webp" },
  { name: "Pune", image: "assets/city/pune.webp" },
  { name: "Mumbai", image: "assets/city/mumbai.webp" },
  { name: "Chennai", image: "assets/city/chennai.webp" },
  { name: "Kolkata", image: "assets/city/kolkata.webp" },
  { name: "Bhopal", image: "assets/city/bhopal.webp" },
  { name: "Indore", image: "assets/city/indore.webp" },
  { name: "Nagpur", image: "assets/city/nagpur.webp" },
];

const NextArrow = (props) => {
  const { onClick, currentSlide, slideCount } = props;
  return (
    currentSlide + 6 < slideCount && (
      <div className="custom-arrow custom-next" onClick={onClick}>
        →
      </div>
    )
  );
};

const PrevArrow = (props) => {
  const { onClick, currentSlide } = props;
  return (
    currentSlide > 0 && (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        ←
      </div>
    )
  );
};

const Topstudy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow currentSlide={currentSlide} slideCount={cityData.length} />,
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    beforeChange: (prev, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="Bannercontainer">
        <div className="banner">
          <div className="text">Subscribe For Regular Alerts</div>
          <button className="button">Subscribe Now</button>
        </div>
      </div>

      {/* Top Study Places Section */}
      <div className="TopStudyContainer">
        <h2 className="TopStudyHeading">Top Study Places</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {cityData.map((city, index) => (
              <div key={index} className="cityCardWrapper">
                <div className="cityCard">
                  <a href={`/${city.name.toLowerCase().replace(" ", "-")}-colleges`}>
                    <img
                      src={city.image}
                      alt={city.name}
                      className="cityImage"
                      loading="lazy"
                    />
                    <p className="cityName">{city.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Topstudy;
