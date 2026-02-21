import { Link } from 'react-router';
import './Header.css'
import logo from '../assets/icons/logo.svg'
import searchIcon from '../assets/icons/search-icon.svg'
import profileIcon from '../assets/icons/profile-icon.svg'
import storeIcon from '../assets/icons/store.svg'
import menuIcon from '../assets/icons/menu_icon.svg'

const Header = () => {
  return (
    <header>
      <div className="nav-left">
        <Link to="/" className="nav-left-image">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div className="nav-right">
        <Link to="/search" className="nav-right-first">
          <img src={searchIcon} alt="search icon" />
        </Link>
        <Link to="/profile" className="nav-right-second">
          <img src={profileIcon} alt="profile icon" />
        </Link>
        <Link to="/card" className="nav-right-third">
          <img src={storeIcon} alt="store icon" />
        </Link>
        <Link to="/card" className="hamburger nav-right-fourth">
          <img src={menuIcon} alt="menu icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;