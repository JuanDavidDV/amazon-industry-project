import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import bronze from "../../assets/images/bronze.png";
import { useState, useEffect } from 'react';
import api from '../../utils/api';
import "./BadgeRewards.scss";


const BadgeRewards = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserBadges = async () => {
    try {
      const { data } = await api.getUserBadges();
      console.log(data);
      setUserData(data);
    } 
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {  
    fetchUserBadges();
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
            <h1 className="badge-rewards__container__user--header">Your Achievements: </h1>
            <div className="badges__level">
              <h2>Reviews you participated in with other users:</h2>             {userData.map((badge) => (
                <article key={badge.userId} className="badge-rewards__container__user__box">
                  <div className="badge-rewards__container__user__box__wrapper">
                    <h3>Peer Reviewer User Id: {badge.userId}</h3>
                    <p>Awards description: {badge.description}</p>
                    <p>User level: {badge.level}</p>
                  </div>
                </article>
              ))}
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default BadgeRewards;