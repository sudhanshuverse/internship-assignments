import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-link">

            <div className="items-card">
                <div className="card-image-container">
                    <img src={product.image} alt={product.name} />
                </div>

                <p className="card-title">{product.name}</p>
                <strong className="card-price">${product.price}</strong>
            </div>

        </Link>
    );
};

export default ProductCard;