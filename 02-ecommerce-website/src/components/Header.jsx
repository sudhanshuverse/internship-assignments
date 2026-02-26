import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

import logo from '../assets/icons/logo.svg';
import closeIcon from '../assets/icons/close.svg';
import searchIcon from '../assets/icons/search-icon.svg';
import profileIcon from '../assets/icons/profile-icon.svg';
import storeIcon from '../assets/icons/store.svg';
import menuIcon from '../assets/icons/menu_icon.svg';

const Header = () => {

  /* ---------------- STATES ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  /* ---------------- MOBILE MENU ---------------- */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ---------------- CLOSE POPUPS WHEN CLICK OUTSIDE ---------------- */
  useEffect(() => {
    const closeAll = () => {
      setProfileOpen(false);
      setCartOpen(false);
    };

    document.addEventListener("click", closeAll);
    return () => document.removeEventListener("click", closeAll);
  }, []);

  return (
    <>
      <header>

        {/* LOGO */}
        <div className="nav-left">
          <Link to="/" className="nav-left-image">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav>
          <div className="nav-center">
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        {/* RIGHT ICONS */}
        <div className="nav-right">

          {/* SEARCH (still normal link for now) */}
          <Link to="/" className="nav-right-first">
            <img src={searchIcon} alt="search icon" />
          </Link>

          {/* PROFILE ICON */}
          <button
            className="nav-right-second icon-btn"
            onClick={(e) => {
              e.stopPropagation(); // VERY IMPORTANT
              setProfileOpen(!profileOpen);
              setCartOpen(false);
            }}
          >
            <img src={profileIcon} alt="profile icon" />
          </button>

          {/* CART ICON */}
          <button
            className="nav-right-third icon-btn"
            onClick={(e) => {
              e.stopPropagation(); // VERY IMPORTANT
              setCartOpen(!cartOpen);
              setProfileOpen(false);
            }}
          >
            <img src={storeIcon} alt="cart icon" />
          </button>

          {/* HAMBURGER */}
          <button className="hamburger nav-right-fourth" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu icon" />
          </button>

        </div>
      </header>

      {/* ---------------- PROFILE POPUP ---------------- */}
      {profileOpen && (
        <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>My Profile</li>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li className="logout">Logout</li>
          </ul>
        </div>
      )}

      {/* ---------------- CART POPUP ---------------- */}
      {cartOpen && (
        <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
          <h4>Your Cart</h4>

          <div className="cart-item">
            <p>Product Name</p>
            <span>₹999</span>
          </div>

          <div className="cart-item">
            <p>Another Product</p>
            <span>₹1299</span>
          </div>

          <button className="view-cart-btn">View Cart</button>
        </div>
      )}

      {/* ---------------- MOBILE MENU ---------------- */}
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
    </>
  );
};

export default Header;