import './About.css';
import Subscribe from '../components/Subscribe';
import line_icon from '../assets/icons/hero-first-icon.svg';
import about_img from '../assets/images/about_img.png';

const About = function About() {
    return (
        <main className="about-page-main">
            <div className="about-container">
                <div className="about-heading">
                    <span>About <span className='about-heading-us'>US</span></span>
                    <span className='about-line-image-container'><img src={line_icon} alt="Line Icon" /></span>
                </div>
                <div className="about-first-page">
                    <div className="about-first-image-container">
                        <img src={about_img} alt="Product Image" />
                    </div>
                    <div className="about-first-page-text">
                        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.<br /><br />Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                        <strong>Our Mission</strong>
                        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                    </div>
                </div>
                <div className="about-second-page">
                    <div className="about-second-page-heading">
                        <p>Why <span>Choose Us</span></p>
                    </div>
                    <div className="why-choose-container">
                        <div className="first-why-choose-container">
                            <strong>Quality Assurance:</strong>
                            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                        </div>
                        <div className="second-why-choose-container">
                            <strong>Convenience: </strong>
                            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                        </div>
                        <div className="third-why-choose-container">
                            <strong>Exceptional Customer Service:</strong>
                            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* SUBSCRIBE */}
            <Subscribe />
        </main>

    )
}

export default About;