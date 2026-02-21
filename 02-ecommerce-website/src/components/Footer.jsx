import './Footer.css';
import logo from '../assets/icons/logo.svg';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-first-section">
          <div className="footer-logo-container">
            <img src={logo} alt="Logo icon" />
          </div>
          <p>Forever brings you modern fashion focused on comfort, quality, and everyday confidence. Our collections blend current trends with timeless style, offering pieces you can wear season after season. From daily essentials to standout looks, we help you feel comfortable, confident, and effortlessly stylish.</p>
        </div>
        <div className="footer-second-section">
          <h1>Company</h1>
          <div className="footer-links">
            <Link to="/abc">Home </Link>
            <Link to="/abc">Collection </Link>
            <Link to="/abc">About </Link>
            <Link to="/abc">Contact </Link>
          </div>
        </div>
        <div className="footer-third-section">
          <h1>Get in touch</h1>
          <div className="footer-links">
            <Link to="/">+91-95084145**</Link>
            <Link to="/">sudhanshu95084145@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;