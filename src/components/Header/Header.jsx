import "./Header.scss";
import { Link } from "react-router-dom";
import AmazonLogo from "../../assets/images/amazon.webp";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__container__logo__link">
                    <img className="header__container__logo" src={AmazonLogo} alt="amazon-logo"/>
                </Link>
                <Link className="header__container__link" >Purchased Made</Link>
            </div>
        </header>
    );
}

export default Header;