import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './Product';
import 'remixicon/fonts/remixicon.css';
import FiltersBar from '../Components/FiltersBar';

const Shop = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const navigate = useNavigate();

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleProductClick = (product) => {
      const slugTitle = product.title.toLowerCase().replace(/\s+/g, '-'); // Convert title to URL-friendly format
      navigate(`/product/${product.id}/${slugTitle}`, { state: { product } });
  };

    return (
        <>
            <div className="shop">
                <div className={`filter-panel ${isFilterOpen ? 'open' : ''}`}>
                    <FiltersBar />
                </div>

                <div className="shop-container">
                    <h1 className="shop-title">Shop</h1>
                    <div className="products-grid">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="product-card"
                                onClick={() => handleProductClick(product)}
                            >
                                <div className="shop-img-wrapper">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="product-image"
                                    />
                                    <button className="add-to-cart">
                                        <i className="ri-shopping-bag-line"></i>
                                    </button>
                                </div>

                                <h2 className="product-title">{product.title}</h2>
                                <div className="product-rating">⭐ {product.rating}/5</div>

                                <div className="product-price">
                                    {product.discountPrice ? (
                                        <>
                                            <span className="new-price">${product.discountPrice}</span>
                                            <span className="old-price">${product.price}</span>
                                            <span className="discount">-{product.discount}%</span>
                                        </>
                                    ) : (
                                        <span className="new-price">${product.price}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="filter-toggle-button" onClick={toggleFilter}>
                    {isFilterOpen ? (
                        <i className="ri-close-line"></i>
                    ) : (
                        <i className="ri-filter-3-line"></i>
                    )}
                </button>
            </div>
        </>
    );
};

export default Shop;
