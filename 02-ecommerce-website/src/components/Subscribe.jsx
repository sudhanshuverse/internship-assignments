import './Subscribe.css';

const Subscribe = () => {
    return (
        <section className="subscribe-section">
            <div className="subscribe-section-container">
                <h1>Subscribe now & get 20% off</h1>
                <p>Join our newsletter to receive exclusive offers, new arrivals, and special discounts directly in your inbox.</p>
                <div className="subscribe-section-input">
                    <input type="email" placeholder='Enter you email id' />
                    <button>Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;