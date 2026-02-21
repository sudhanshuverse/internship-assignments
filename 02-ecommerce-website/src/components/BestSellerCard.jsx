const ProductCard = ({ product }) => {
    return (
        <div className="items-card">
            <div className="card-image-container">
                <img src={product.image} alt={product.name} />
            </div>

            <p className="card-title">{product.name}</p>
            <strong className="card-price">${product.price}</strong>
        </div>
    );
};

export default ProductCard;