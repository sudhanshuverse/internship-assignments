import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {

    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));

    const [mainImage, setMainImage] = useState(product?.image);
    const [size, setSize] = useState("");

    if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

    return (
        <main className="product">
            <div className="product-container">
                {/* LEFT SIDE IMAGES */}
                <div className="product-gallery">
                    <div className="thumbnail-list">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt="thumb" onClick={() => setMainImage(img)} />
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={mainImage} alt={product.name} />
                    </div>
                </div>

                {/* RIGHT SIDE DETAILS */}
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <div className="rating">
                        ★ ★ ★ ★ ☆
                        <span>(122)</span>
                    </div>
                    <h2 className="price">${product.price}</h2>
                    <p className="short-desc">{product.description}</p>
                    {/* SIZE SELECTOR */}
                    <div className="size-box">
                        <p>Select Size</p>
                        <div className="sizes">
                            {["S", "M", "L", "XL", "XXL"].map(s => (
                                <button key={s} className={size === s ? "active" : ""} onClick={() => setSize(s)}>{s}</button>
                            ))}
                        </div>
                    </div>
                    <button className="add-cart">ADD TO CART</button>
                    <div className="extra-info">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* DESCRIPTION TAB */}
            <div className="product-description">
                <div className="tabs">
                    <button className="active">Description</button>
                    <button>Reviews (122)</button>
                </div>
                <div className="desc-content">
                    <p> An e-commerce website is an online platform that allows customers to browse, select, and purchase products easily from anywhere. Each product has a dedicated page with images, price, and details.</p>
                </div>

            </div>

        </main>
    );
};

export default ProductDetails;