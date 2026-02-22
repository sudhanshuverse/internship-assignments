const BestSellerCard = ({ product }) => {
    return (

        <a
            href={`/product/${product.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-link"
        >
            <div className="items-card">

                <div className="card-image-container">
                    <img src={product.image} alt={product.name} />
                </div>

                <p className="card-title">{product.name}</p>
                <strong className="card-price">${product.price}</strong>

            </div>
        </a>

    );
};

export default BestSellerCard;