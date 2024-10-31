import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import bronze from "../../assets/images/bronze.png";
import "./BadgeRewards.scss";

const BadgeRewards = () => {
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
        </div>

    </section>
  )
}

export default BadgeRewards;