import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './Product';
import 'remixicon/fonts/remixicon.css';
import FiltersBar from '../Components/FiltersBar';

const Shop = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});
    const navigate = useNavigate();

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    const handleProductClick = (product) => {
        const slugTitle = product.title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/product/${product.id}/${slugTitle}`, { state: { product } });
    };

    // Filter products based on active filters
    const styleMap = {
        't-shirts': 'T-shirt',
        'shirts': 'Shirt',
        'shorts': 'Shorts',
        'hoodies': 'Hoodie',
        'jeans': 'Jeans',
    };
    const filteredProducts = products.filter((product) => {
        if (Object.keys(activeFilters).length === 0) return true;
    
        const productPrice = product.discountPrice || product.price;
    
        // Handle category selection as an array
        const selectedCategories = activeFilters.selectedCategories || [];
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.some((category) => {
            const mappedStyle = styleMap[category.toLowerCase()];
            return mappedStyle && product.style === mappedStyle;
        });
    
        return (
            productPrice >= activeFilters.minPrice &&
            productPrice <= activeFilters.maxPrice &&
            (!activeFilters.selectedColor || product.color.toLowerCase() === activeFilters.selectedColor.toLowerCase()) &&
            (!activeFilters.selectedSize || product.size.includes(activeFilters.selectedSize)) &&
            categoryMatch
        );
    });
    const clearAllFilters = () => {
        setActiveFilters({});
    };
    return (
        <>
            <div className="shop">
                <div className={`filter-panel ${isFilterOpen ? 'open' : ''}`}>
                <FiltersBar onApplyFilters={setActiveFilters} onClearFilters={clearAllFilters} />
                </div>

                <div className="shop-container">
                    <h1 className="shop-title">Shop</h1>
                    <div className="products-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                                    <div className="shop-img-wrapper">
                                        <img src={product.img} alt={product.title} className="product-image" />
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
                            ))
                        ) : (
                            <div className="no-products">We don't have this product 🫤</div>
                        )}
                    </div>
                </div>

                <button className="filter-toggle-button" onClick={toggleFilter}>
                    {isFilterOpen ? <i className="ri-close-line"></i> : <i className="ri-filter-3-line"></i>}
                </button>
            </div>
        </>
    );
};

export default Shop;
