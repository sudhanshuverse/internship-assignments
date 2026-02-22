import { Link } from 'react-router';
import { useState } from 'react';
import './Header.css';

import logo from '../assets/icons/logo.svg';
import closeIcon from '../assets/icons/close.svg';
import searchIcon from '../assets/icons/search-icon.svg';
import profileIcon from '../assets/icons/profile-icon.svg';
import storeIcon from '../assets/icons/store.svg';
import menuIcon from '../assets/icons/menu_icon.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
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
          <Link to="/" className="nav-right-first">
            <img src={searchIcon} alt="search icon" />
          </Link>
          <Link to="/" className="nav-right-second">
            <img src={profileIcon} alt="profile icon" />
          </Link>
          <Link to="/" className="nav-right-third">
            <img src={storeIcon} alt="store icon" />
          </Link>

          {/* HAMBURGER BUTTON */}
          <button className="hamburger nav-right-fourth" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu icon" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU BOX */}
      {menuOpen && (
        <>
          <div className="menu-box">
            <div className="menu-header">
              <span>Menu</span>
              <button className="close-btn" onClick={closeMenu}>
                <img src={closeIcon} alt="close menu" />
              </button>
            </div>
            <div className="menu-links">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/collection" onClick={closeMenu}>Collection</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </div>
          </div>
          <div className="overlay" onClick={closeMenu}></div>
        </>
      )}

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;