import React from "react";
import "../assets/styles/BannerTable.css";

const Banner = () => {
  const colleges = [
    {
      logo: "assets/university/jawaharlal.webp",
      name: "Jawaharlal Nehru University - [JNU], New Delhi",
      ranking: "#1 out of 44",
      streams: "Overall",
    },
    {
      logo: "assets/university/symboisis.webp",
      name: "Symbiosis International University - [SIU], Pune",
      ranking: "#1 out of 73",
      streams: "Overall",
    },
    {
      logo: "assets/university/amity.webp",
      name: "Amity University, Noida",
      ranking: "#2 out of 73",
      streams: "Overall",
    },
    {
      logo: "assets/university/delhi.webp",
      name: "Delhi University - [DU], New Delhi",
      ranking: "#2 out of 44",
      streams: "Overall",
    },
    {
      logo: "assets/university/aligarh.webp",
      name: "Aligarh Muslim University - [AMU], Aligarh",
      ranking: "#3 out of 44",
      streams: "Overall",
    },
    {
      logo: "assets/university/kl.webp",
      name: "K L University - [KLU], Guntur",
      ranking: "#3 out of 73",
      streams: "Overall",
    },
  ];

  return (
    <div className="TableBanner">
      <div className="Bannercontainer">
        <div className="banner">
          <div className="text">Know your chances of Admission</div>
          <button className="button">Start Now</button>
        </div>
        <div className="table-container">
          <div className="headingview">
            <h1 className="heading">College Ranking 2024</h1>
            <div className="viewcontainer">
              <a href="#" className="view-all">View all Colleges</a>
            </div>
          </div>
          <div className="dropdown-buttons-container">
            <div className="dropdown-container">
              <select className="dropdown1">
                <option>Ranking: 2024</option>
              </select>
            </div>
            <div className="buttons-container">
              <button>Indiatoday</button>
              <button>The Week</button>
              <button>NIRF</button>
              <button>Outlook</button>
              <button>IIRF</button>
              <button>TOI</button>
              <button>NIRF Innovation</button>
              <button>THE</button>
              <button className="arrow-button">→</button>
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
              {colleges.map((college, index) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Banner;
