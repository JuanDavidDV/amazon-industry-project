import { useState, useEffect } from 'react';
import api from '../../utils/api';
import './UserProfile.scss';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    level: 'BRONZE',
    approvedReviews: 0,
    badges: []
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.getUserProfile('123'); // Replace with actual user ID
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const getLevelProgress = () => {
    const levels = {
      BRONZE: { min: 0, max: 10 },
      SILVER: { min: 10, max: 20 },
      GOLD: { min: 20, max: 30 },
      PLATINUM: { min: 30, max: 50 },
      DIAMOND: { min: 50, max: 50 }
    };
    
    const currentLevel = levels[userData.level];
    const progress = ((userData.approvedReviews - currentLevel.min) / 
                     (currentLevel.max - currentLevel.min)) * 100;
    return Math.min(progress, 100);
  };

  return (
    <section className="profile">
      <div className="profile__container">
        <h1>User Profile</h1>
        
        <div className="profile__info">
          <h2>{userData.username}</h2>
          <p>{userData.email}</p>
        </div>

        <div className="profile__achievements">
          <h3>Achievement Progress</h3>
          <div className="level-progress">
            <div className="level-progress__label">
              Level: {userData.level}
            </div>
            <div className="level-progress__bar">
              <div 
                className="level-progress__fill"
                style={{ width: `${getLevelProgress()}%` }}
              />
            </div>
            <div className="level-progress__count">
              {userData.approvedReviews} approved reviews
            </div>
          </div>
        </div>

        <div className="profile__badges">
          <h3>Earned Badges</h3>
          <div className="badges-grid">
            {userData.badges.map(badge => (
              <div key={badge} className="badge">
                <div className="badge__icon">{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile; 