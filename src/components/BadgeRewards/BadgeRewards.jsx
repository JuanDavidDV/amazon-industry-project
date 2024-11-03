import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import bronze from "../../assets/images/bronze.png";
import { useState, useEffect } from 'react';
import api from '../../utils/api';
import "./BadgeRewards.scss";


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
    <section className="badge-rewards">
        <div className="badge-rewards__container">
          <h1>Certification Design System</h1>
          <div className="badge-rewards__container__medals-wrapper">
            <div>
              <img className="badge-rewards__container__medals-wrapper--prize" src={gold} alt="medal-gold"/>
              <h3>21-50 reviews</h3>
            </div>
            <div>
              <img className="badge-rewards__container__medals-wrapper--prize" src={silver} alt="medal-silver"/>
              <h3>6-20 reviews</h3>
            </div>
            <div>
              <img className="badge-rewards__container__medals-wrapper--prize" src={bronze} alt="medal-bronze"/>
              <h3>1-5 reviews</h3>
            </div>                      
          </div>
          <div className="badge-rewards__container__user">
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
        </div>
      </div>
    </section>
  )
}

export default BadgeRewards;