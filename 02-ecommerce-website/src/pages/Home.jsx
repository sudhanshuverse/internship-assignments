import './Home.css';
import women from '../assets/images/women.png';
import hero_first_icon from '../assets/icons/hero-first-icon.svg';
import hero_second_icon from '../assets/icons/hero-second-icon.svg';
import { products, best_seller } from '../data/products';
import ProductCard from '../components/ProductCard';
import BestSellerCard from '../components/BestSellerCard';
import exchange_policy_icon from '../assets/icons/exchange_policy_icon.svg'
import return_policy_icon from '../assets/icons/return_policy_icon.svg';
import support_icon from '../assets/icons/support_icon.svg';
import Subscribe from '../components/Subscribe';

const Home = () => {
    return (
        <>
            <main>
                {/* HERO SECTION */}
                <section className="hero-section">
                    <div className="hero-inner-first">
                        <div className="hero-inner-first-container">
                            <p className='hero-inner-first-text'>
                                <span><img src={hero_first_icon} alt="Line icon" /></span>
                                <span>our bestsellers</span>
                            </p>
                            <p className='hero-inner-second-text'>Latest Arrivals</p>
                            <p className='hero-inner-third-text'>
                                <span>Shop Now</span>
                                <span><img src={hero_second_icon} alt="Line icon" /></span> </p>
                        </div>
                    </div>
                    <div className="hero-inner-second">
                        <img src={women} alt="women image" />
                    </div>
                </section>

                {/* COLLECTION SECTION */}
                <section className="collection-section">
                    <div className="collection-section-heading">
                        <p className='collection-section-first-text'>
                            <span>Latest <span className='collection-section-first-text-collection'>collection</span></span>
                            <span className='collection-section-image-line'>
                                <img src={hero_first_icon} alt="Line Icon" />
                            </span>
                        </p>
                        <p className='collection-section-paragraph'>Discover our latest collection, crafted with modern style and premium comfort. Designed to elevate your everyday look.</p>
                    </div>
                    <div className="items-card-container">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* BEST SELLER */}
                <section className="best-seller-section">
                    <div className="collection-section-heading">
                        <p className='collection-section-first-text'>
                            <span>Best <span className='collection-section-first-text-collection'>Seller</span></span>
                            <span className='collection-section-image-line'>
                                <img src={hero_first_icon} alt="Line Icon" />
                            </span>
                        </p>
                        <p className='collection-section-paragraph'>Explore our best sellers, loved by customers for their style, comfort, and quality. These top picks never go out of fashion.</p>
                    </div>
                    <div className="items-card-container">
                        {best_seller.map((product) => (
                            <BestSellerCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* FEATURES SECTION */}
                <section className="features-section">
                    <div className="features-section-container">
                        <div className="features-section-container-inner">
                            <div className="features-section-image-container">
                                <img src={exchange_policy_icon} alt="Exchange policy icon" />
                            </div>
                            <strong>Easy Exchange Policy</strong>
                            <p>We offer hassle free  exchange policy</p>
                        </div>
                        <div className="features-section-container-inner">
                            <div className="features-section-image-container">
                                <img src={return_policy_icon} alt="Return policy icon" />
                            </div>
                            <strong>7 Days Return Policy</strong>
                            <p>We provide 7 days free return policy </p>
                        </div>
                        <div className="features-section-container-inner">
                            <div className="features-section-image-container">
                                <img src={support_icon} alt="Support icon" />
                            </div>
                            <strong>Best Customer Support</strong>
                            <p>We provide 24/7 customer support</p>
                        </div>
                    </div>
                </section>

                {/* SUBSCRIBE SECTION */}
                <Subscribe />
            </main>
        </>
    )
}

export default Home;