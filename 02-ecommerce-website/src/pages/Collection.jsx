import "./Collection.css";
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import line_icon from "../assets/icons/hero-first-icon.svg";

const Collection = () => {

    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const [sort, setSort] = useState("");

    /* CATEGORY CHECKBOX */
    const handleCategory = (e) => {
        const value = e.target.value;

        if (category.includes(value)) {
            setCategory(category.filter(item => item !== value));
        } else {
            setCategory([...category, value]);
        }
    };

    /* TYPE CHECKBOX */
    const handleType = (e) => {
        const value = e.target.value;

        if (type.includes(value)) {
            setType(type.filter(item => item !== value));
        } else {
            setType([...type, value]);
        }
    };

    /* FILTER PRODUCTS */
    let filteredProducts = products;

    if (category.length > 0) {
        filteredProducts = filteredProducts.filter(item =>
            category.includes(item.category)
        );
    }

    if (type.length > 0) {
        filteredProducts = filteredProducts.filter(item =>
            type.includes(item.type)
        );
    }

    /* SORT PRODUCTS */
    if (sort === "low") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }

    return (
        <main className="collection-main">

            <div className="about-container">

                <div className="collection-layout">

                    {/* FILTER SIDEBAR */}
                    <aside className="collection-filters">
                        <div className="filter-box">

                            <h3 className="filter-main-title">FILTERS</h3>

                            <div className="filter-group">
                                <p className="filter-title">CATEGORIES</p>
                                <label><input type="checkbox" value="Men" onChange={handleCategory} /> Men</label>
                                <label><input type="checkbox" value="Women" onChange={handleCategory} /> Women</label>
                                <label><input type="checkbox" value="Kids" onChange={handleCategory} /> Kids</label>
                            </div>

                            <div className="filter-group">
                                <p className="filter-title">TYPE</p>
                                <label><input type="checkbox" value="Topwear" onChange={handleType} /> Topwear</label>
                                <label><input type="checkbox" value="Bottomwear" onChange={handleType} /> Bottomwear</label>
                                <label><input type="checkbox" value="Winterwear" onChange={handleType} /> Winterwear</label>
                            </div>

                        </div>
                    </aside>

                    {/* HEADING + SORT */}
                    <div className="collection-topbar">

                        <div className="collection-heading">
                            <span>All <span className="collection-heading-highlight">Collections</span></span>
                            <span className="collection-line">
                                <img src={line_icon} alt="Line Icon" />
                            </span>
                        </div>

                        <div className="collection-sort">
                            <select onChange={(e) => setSort(e.target.value)}>
                                <option value="">Sort by: Default</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>

                    </div>

                    {/* PRODUCTS GRID */}
                    <section className="collection-products">
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>

                </div>
            </div>

        </main>
    );
};

export default Collection;