import { useState, useEffect } from 'react';
import api from '../../utils/api';
import './BadgeRewards.scss';

const BadgeRewards = () => {
  const [userData, setUserData] = useState({
    badges: [],
    level: 'BRONZE',
    approvedReviews: 0
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

  return (
    <section className="badges">
      <h1>Your Achievements</h1>
      <div className="badges__level">
        <h2>Current Level: {userData.level}</h2>
        <p>Reviews Approved: {userData.approvedReviews}</p>
      </div>
      <div className="badges__grid">
        {userData.badges.map(badge => (
          <div key={badge} className="badge">
            <div className="badge__icon">{badge}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BadgeRewards;