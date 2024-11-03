import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import AmazonLogo from "../../assets/images/amazon.webp";

const Header = () => {

    const location = useLocation();
    const isReviewInterface = location.pathname === "/peer-review-interface";
    const isBadgeRewards = location.pathname === "/badge-rewards";
    const isProfile = location.pathname === "/profile";

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__container__logo__link">
                    <img className="header__container__logo" src={AmazonLogo} alt="amazon-logo"/>
                </Link>
                <div className="header__container__box">
                    <Link to="/peer-review-interface" className={`header__container__box__link${isReviewInterface ? "--active" : ""}`}>Submit Review</Link>
                    <Link to="/badge-rewards" className={`header__container__box__link${isBadgeRewards ? "--active" : ""}`} >Badge Rewards</Link>
                    <Link to="/profile" className={`header__container__box__link${isProfile ? "--active" : ""}`}>Welcome back: John Smith</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;