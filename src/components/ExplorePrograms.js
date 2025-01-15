import React from 'react';
import '../assets/styles/ExplorePrograms.css';

const ExplorePrograms = () => {
  return (
    <div className="explore-programs container">
      <h2 className="expro-text-center">Explore Programs</h2>
      <div className="program-buttons">
        
        <button>All</button>
        <button>BE/B.Tech</button>
        <button>MBA/PGDM</button>
        <button>MBBS</button>
        <button>ME/M.Tech</button>
        <button>B.Sc</button>
        <button>BA</button>
        <button>B.Com</button>
        <button>BCA</button>
        
        <button>B.Sc (Nursing)</button>
        <button className="arrow-button">→</button>
      </div>

      <div className="program-cards-container">
        {/* Card 1 */}
        <div className="program-card">
          <div className="top-section">
            <div className="toporder">
            <h3>Ranking</h3>
            <p className="captions">College ranked based on real data</p></div>
          </div>
          <div className="bottom-section">
            <div className="ranking-sources">
              <div>
                <span>Indiatoday - 1743</span>
              </div>
              <div>
                <span>Collegedunia - 1328</span>
              </div>
              <div>
                <span>IIRF - 1451</span>
              </div>
              
              <div>
                <span>NIRF - 1299</span>
              </div>
            </div>
            <a className="endings" href="#">Top Ranked Colleges in India</a>
          </div> 
        </div>

        {/* Card 2 */}
        <div className="program-card">
          <div className="top-section">
          <div className="toporder">
            <h3>Find Colleges</h3>
            {/* <img className="find-colleges-img" src="/assets/exploreprograms/findcollege.png" alt="Find Colleges" /> */}
            <p className="captions">Discover 19000+ colleges via preferences</p>
          </div></div>
          <div className="bottom-section">
            <div className='best-colleges'>
              <div>Best MBA colleges in India</div>
              <div>Best BTech colleges in India</div>
            </div>
            <a className="endings" href="#">Discover Top Colleges in India</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="program-card">
          <div className="top-section">
          <div className="toporder">
            <h3>Compare Colleges</h3>
            <p className="captions">Compare on the basis of rank, fees, etc.</p>
          </div></div>
          <div className="bottom-section">
            <div className="comparison">
              <div>
                <section>IIT Madras</section>
                <section>IIT Delhi</section>
              </div>
              <div>
                <section>IIT Madras</section>
              </div>
            </div>
            <a className="endings" href="#">Compare Colleges</a>
          </div>
        </div>
      </div>

      <div className="program-cards-container">
        {/* Card 4 */}
        <div className="program-card">
          <div className="top-section">
          <div className="toporder">
            <h3>Exams</h3>
            <p className="captions">Know more about your exams</p>
          </div></div>
          <div className="bottom-section">
            <div className="exam-list">
              <div>B.Com</div>
              <div>B.Sc</div>
              <div>B.Sc (Nursing)</div>
              <div>BA</div>
              <div>BBA/BMS</div>
              <div>BCA</div>
              <div>BE/B.Tech</div>
            </div>
            <a className="endings" href="#">Check All Entrance Exams in India</a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="program-card">
          <div className="top-section"><div className="toporder">
            <h3>College Predictor</h3>
            <p className="captions">Know your college admission chances</p>
          </div></div>
          <div className="bottom-section">
            <div className="predictor-exams">
              <div>NEET</div>
              <div>JEE Advanced</div>
              <div>JEE Main</div>
              <div>CAT</div>
              <div>GATE</div>
              <div>NMAT</div>
              <div>MAT</div>
              <div>XAT</div>
            </div>
            <a className="endings" href="#">Find Where you may get Admission</a>
          </div>
        </div>

        {/* Card 6 */}
        <div className="program-card">
          <div className="top-section">
          <div className="toporder">
            <h3>Course Finder</h3>
            <p className="captions">Top courses in Indian Colleges 2024</p>
          </div></div>
          <div className="bottom-section">
            <div className="course-list">
              <div>BE/B.Tech - 1009</div>
              <div>MBA/PGDM - 1141</div>
              <div>ME/M.Tech - 1223</div>
              <div>MBBS - 1453</div>
            </div>
            <a className="endings" href="#">Explore Courses</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePrograms;
