import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink to="/" className="nav__logo">Review System</NavLink>
        <div className="nav__links">
          <NavLink to="/submit" className={({isActive}) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            Submit Review
          </NavLink>
          <NavLink to="/badges" className={({isActive}) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            Badges
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 