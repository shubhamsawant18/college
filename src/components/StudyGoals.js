import React, { useState } from 'react';
import '../assets/styles/StudyGoals.css';

const StudyGoals = () => {
  const [showMore, setShowMore] = useState(false);

  const initialGoals = [
    {
      title: 'Engineering',
      colleges: 6256,
      courses: ['BE/B.Tech', 'Diploma in Engineering', 'ME/M.Tech'],
      icon: '🎓',
    },
    {
      title: 'Management',
      colleges: 7736,
      courses: ['MBA/PGDM', 'BBA/BMS', 'Executive MBA'],
      icon: '📈',
    },
    {
      title: 'Commerce',
      colleges: 4970,
      courses: ['B.Com', 'M.Com', 'More about Commerce'],
      icon: '🛒',
    },
    {
      title: 'Arts',
      colleges: 5607,
      courses: ['BA', 'MA', 'BFA'],
      icon: '🎨',
    },
  ];

  const moreGoals = [
    {
      title: 'Medical',
      colleges: 2369,
      courses: ['MBBS', 'PG Medical', 'MD'],
      icon: '🩺',
    },
    {
      title: 'Design',
      colleges: 1411,
      courses: ['B.Des', 'M.Des', 'More about Des'],
      icon: '🎨',
    },
    {
      title: 'See all',
      colleges: '',
      courses: [],
      icon: '🔍',
    },
  ];

  return (
    <div className="study-goal-container">
      <h2 className="h22">Select Your Study Goal</h2>
      <div className="study-goal-list">
        {!showMore &&
          initialGoals.map((goal, index) => (
            <div key={index} className="study-goal-item">
              <div className="icon-title-container">
                <div className="icon-container">
                  <div className="icon">{goal.icon}</div>
                </div>
                <div className="title-college-container">
                  <h3>{goal.title}</h3>
                  <p>{goal.colleges} Colleges</p>
                </div>
              </div>
              <div className="ul-container">
                <ul>
                  {goal.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        {showMore && (
          <>
            {/* Back Button with Left Arrow */}
            <div className="back-button" onClick={() => setShowMore(false)}>
              <div className="arrow-icon">←</div>
            </div>
            {moreGoals.map((goal, index) => (
              <div key={index} className="study-goal-item">
                <div className="icon-title-container">
                  <div className="icon-container">
                    <div className="icon">{goal.icon}</div>
                  </div>
                  <div className="title-college-container">
                    <h3>{goal.title}</h3>
                    <p>{goal.colleges} Colleges</p>
                  </div>
                </div>
                <div className="ul-container">
                  <ul>
                    {goal.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        )}
        {!showMore && (
          <div className="show-more" onClick={() => setShowMore(true)}>
            <div className="arrow-icon">→</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyGoals;
