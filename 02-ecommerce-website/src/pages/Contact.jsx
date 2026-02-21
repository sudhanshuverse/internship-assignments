import './Contact.css';
import Subscribe from '../components/Subscribe';
import line_icon from '../assets/icons/hero-first-icon.svg';
import contact_img from '../assets/images/contact_img.png';

const Contact = function Contact() {
    return (
        <main className="contact-page-main">
            <div className="contact-container">
                <div className="contact-heading">
                    <span>Contact <span className='contact-heading-us'>US</span></span>
                    <span className='contact-line-image-container'><img src={line_icon} alt="Line Icon" /></span>
                </div>
                <div className="contact-first-page">
                    <div className="contact-first-image-container">
                        <img src={contact_img} alt="Product Image" />
                    </div>
                    <div className="contact-first-page-text">
                        <h1>Our Store</h1>
                        <p>B-27, 2nd Floor <br /> Lajpat Nagar II, New Delhi – 110024, India  <br /> <br /> Tel: +91 95084145** <br /> Email: sudhanshu95084145@gmail.com</p>
                        <h1>Careers at Forever</h1>
                        <p>Learn more about our teams and job openings.</p>
                        <button>Explore Jobs</button>
                    </div>
                </div>
            </div>
            {/* SUBSCRIBE */}
            <Subscribe />
        </main>
    )
}

export default Contact;