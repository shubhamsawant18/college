import React from "react";
import "../assets/styles/CardImages.css";

const CardImages = () => {
  const cardData = [
    {
      title: "IIT Bombay - Indian Institute of Technology",
      location: "Mumbai, Maharashtra | ",
      course: "BE/B.Tech",
      fees: "2.31 Lacs",
      rating: "4.4/5",
      reviews: "361 reviews",
      rank: "118 out of 1400 QS",
      img: "/assets/images/university.jpg",
      logo: "/assets/collegenamelogos/iitmumbai.webp",
    },
    {
      title: "IIT Delhi - Indian Institute of Technology",
      location: "New Delhi, Delhi NCR",
      course: "BE/B.Tech",
      fees: "2.29 Lacs",
      rating: "4.3/5",
      reviews: "616 reviews",
      rank: "150 out of 1400 QS",
      img: "/assets/images/university.jpg",
      logo: "/assets/collegenamelogos/iitmumbai.webp",
    },
    {
      title: "IIT Guwahati - Indian Institute of Technology",
      location: "Guwahati, Assam | AICTE, UGC",
      course: "BE/B.Tech",
      fees: "2.88 Lacs",
      rating: "4.3/5",
      reviews: "410 reviews",
      rank: "118 out of 1400 QS",
      img: "/assets/images/university.jpg",
      logo: "/assets/collegenamelogos/iitguwahati.webp",
    },
    {
      title: "BITS Pilani (Pilani Campus)",
      location: "Pilani, Rajasthan | UGC",
      course: "BE/B.Tech",
      fees: "6.04 Lacs",
      rating: "4.5/5",
      reviews: "662 reviews",
      rank: "150 out of 1400 QS",
      img: "/assets/images/university.jpg",
      logo: "/assets/collegenamelogos/bitspilani.webp",
    },
    {
      title: "IIMC - Indian Institute of Management",
      location: "Kolkata, West Bengal | UGC",
      course: "MBA/PGDM",
      fees: "27.00 Lacs",
      rating: "4.4/5",
      reviews: "85 reviews",
      rank: "691 out of 1400 QS",
      img: "/assets/images/university.jpg",
      logo: "/assets/collegenamelogos/iimc.webp",
    },

    {
      title: "BITS Pilani (Pilani Campus)",
      location: "Pilani, Rajasthan | UGC",
      course: "BE/B.Tech",
      fees: "6.04 Lacs",
      rating: "4.5/5",
      reviews: "662 reviews",
      rank: "150 out of 1400 QS",
      img: "/assets/images/university.jpg",
      logo: "/assets/collegenamelogos/bitspilani.webp",
    },
  ];
  

  return (
    <div className="container">
      <h2>Top Universities/Colleges</h2>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 card-container" key={index}>
            <div className="card">
              {/* Image Section */}
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={card.img}
                  alt={card.title}
                />
                
                {/* Title, Location, and Logo Container */}
                <div className="title-location-container">
                  <div className="logo-container">
                    <img className="logo" src={card.logo} alt="University Logo" />
                  </div>
                  <div className="card-title-container">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-location">{card.location}</p>
                  </div>
                </div>
              </div>

              <div className="card-body">
                {/* Updated container for Course, Fees, Rating, and Reviews */}
                <div className="info-container">
                <div className="course-fees">
  <p className="card-course">{card.course}</p>
  <p className="card-fees">
    <span className="fees-value">{card.fees}</span> 
    <span className="fees-text"> First Year Fees</span>
  </p>
</div>

                  {/* Removed Rankings and Added Fees in the info-container */}
                 

                  {/* Reviews Container */}
                  <div className="reviews-container">
                    <p className="card-rating">{card.rating}</p>
                    <p className="card-reviews">{card.reviews}</p>
                  </div>
                </div>


                 <div className="card-rank">
                    <p>Ranked {card.rank}</p>
                  </div>

                <div className="card-actions">
                  <a href="#">View All Courses and Fees</a>
                  <a href="#">Download Brochure</a>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardImages;
