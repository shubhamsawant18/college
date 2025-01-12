import React from "react";
import "../assets/styles/TopColleges.css";

const TopColleges = () => {
  const colleges = [
    {
      rank: "#1",
      logo: "/assets/collegenamelogos/iitmumbai.webp", 
      name: "IIT Bombay - Indian Institute of Technology",
      location: "Mumbai city, Maharashtra   |      ⭐ 5/5",
      rankingLogo: "/assets/Rankinglogos/mumbai.webp",
      ranking: "#1 out of 50 in India 2024",
      cutoff: "JEE-Adv. 2024 Cut off 68",
      applicationDeadline: "14 Mar - 31 Mar 2024",
      fees: "₹2,30,700 (1st Year Fees)",
    },
    {
      rank: "#2",
      logo: "/assets/collegenamelogos/iitkharagpur.webp",
      name: "IIT Kharagpur - Indian Institute of Technology",
      location: "Kharagpur, West Bengal | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/madras.webp",
      ranking: "#6 out of 200 in India 2024",
      cutoff: "CAT 2024 Cut off 90",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,62,360 (1st Year Fees)",
    },
    {
      rank: "#3",
      logo: "/assets/collegenamelogos/iitdelhi.webp",
      name: "IIT Delhi - Indian Institute of Technology [IITD]",
      location: "New Delhi, Delhi NCR | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/delhi.webp",
      ranking: "#1 out of 27 in India 2024",
      cutoff: "CAT 2024 Cut off 98",
      applicationDeadline: "14 Mar - 31 Mar 2024",
      fees: "₹2,28,650 (1st Year Fees)",
    },
    {
      rank: "#4",
      logo: "/assets/collegenamelogos/iitmadras.webp",
      name: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/madras.webp",
      ranking: "#1 out of 200 in India 2024",
      cutoff: "CAT 2024 Cut off 85",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,42,000 (1st Year Fees)",
    },
    {
      rank: "#5",
      logo: "/assets/collegenamelogos/iima.webp",
      name: "IIMA - Indian Institute of Management",
      location: "Ahmedabad, Gujarat | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/iima.webp",
      ranking: "#2 out of 50 in India 2019",
      cutoff: "CAT 2024 Cut off 99",
      applicationDeadline: "03 Dec 2024",
      fees: "₹33,00,000 (Total Fees)",
    },
    {
      rank: "#6",
      logo: "/assets/collegenamelogos/iitkanpur.webp",
      name: "IIT Kanpur - Indian Institute of Technology [IITK]",
      location: "Kanpur, Uttar Pradesh | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/kanpur.webp",
      ranking: "#4 out of 27 in India 2024",
      cutoff: "CAT 2024 Cut off 85",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,29,970 (1st Year Fees)",
    },
    {
      rank: "#7",
      logo: "/assets/collegenamelogos/iitroorkee.webp",
      name: "IIT Roorkee - Indian Institute of Technology [IITR]",
      location: "Roorkee, Uttarakhand | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/roorkee.webp",
      ranking: "#5 out of 27 in India 2024",
      cutoff: "CAT 2024 Cut off 95",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,30,100 (1st Year Fees)",
    },
    {
      rank: "#8",
      logo: "/assets/collegenamelogos/iimbbanglore.webp",
      name: "IIM Bangalore - Indian Institute of Management",
      location: "Bangalore, Karnataka | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/banglore.webp",
      ranking: "#1 out of 50 in India 2019",
      cutoff: "CAT 2024 Cut off 99",
      applicationDeadline: "21 June - 07 Aug 2024",
      fees: "₹1,25,000 (1st Year Fees)",
    },
    {
      rank: "#9",
      logo: "/assets/collegenamelogos/iitguwahati.webp",
      name: "IIT Guwahati - Indian Institute of Technology [IITG]",
      location: "Guwahati, Assam | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/guwahati.webp",
      ranking: "#6 out of 27 in India 2024",
      cutoff: "JEE-Adv. 2024 Cut off 1021",
      applicationDeadline: "14 Mar - 31 Mar 2024",
      fees: "₹2,88,250 (1st Year Fees)",
    },
    {
      rank: "#10",
      logo: "/assets/collegenamelogos/bitspilani.webp",
      name: "BITS Pilani (Pilani Campus)",
      location: "Pilani, Rajasthan | ⭐ 4.9/5",
      rankingLogo: "/assets/Rankinglogos/pilani.webp",
      ranking: "#19 out of 200 in India 2024",
      cutoff: "CAT 2024 Cut off 80",
      applicationDeadline: "18 May - 08 Jun 2024",
      fees: "₹5,71,575 (1st Year Fees)",
    },
  ];

  return (
    <div className="top-colleges-container">
      <h1 className="title">Top Colleges in India</h1>

      <div className="course-buttons">
      
        
    <button>All</button>
    <button>B.Tech</button>
    <button>MBA</button>
    <button>BBA</button>
    <button>B.Pharmacy</button>
    <button>M.Pharmacy</button>
    <button>M.Sc</button>

    

        <button>B.Tech</button>
   

  
    <button>Diploma</button>
    <button>Certificate Courses</button>
 
    <button className="arrow-button">→</button>


    
      </div>
      <table className="college-table">
        <thead class="thead">
          <tr>
            <th>Rank  </th>
            <th>College</th>
            <th>Ranking</th>
            <th>Cutoff</th>
            <th>Application Deadline</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <tr key={index}>
              <td>{college.rank}</td>
              <td>
                <div className="college-cell">
                  <img src={college.logo} alt="logo" className="college-logo" />
                  <div>
                    <strong>{college.name}</strong>
                    <br />
                    {college.location.split(" | ").map((text, idx, arr) => {
                      return (
                        <span key={idx}>
                          {idx === 0 ? text : ` | ${text}`}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </td>

              <td>
                <div className="ranking-cell">
                  <img src={college.rankingLogo} alt="ranking logo" className="ranking-logo" />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      {college.ranking.split(" ")[0]}
                    </span>{" "}
                    {college.ranking.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </td>
              <td>
                <div>
                  {college.cutoff.split(" ").map((word, idx) =>
                    idx === college.cutoff.split(" ").length - 1 ? (
                      <span key={idx} style={{ fontWeight: "bold" }}>
                        {word}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </div>
              </td>
              <td>{college.applicationDeadline}</td>
              <td>
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    {college.fees.split(" ")[0]}
                  </span>
                  <br />
                  <span>{college.fees.split(" ").slice(1).join(" ")}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopColleges;
