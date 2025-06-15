import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './Product';
import 'remixicon/fonts/remixicon.css';
import FiltersBar from '../Components/FiltersBar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import Subscribe from '../Components/Subscribe';
const Shop = () => {

    const filterPanelRef = useRef(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const navigate = useNavigate();

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    const handleProductClick = (product) => {
        const slugTitle = product.title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/product/${product.id}/${slugTitle}`, { state: { product } });
    };


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


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearAllFilters = () => {
        setActiveFilters({});
        setCurrentPage(1);
    };


    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilters]);
    const dispatch = useDispatch();
    return (
        <>
      
        <div className="shop-wrapper">
            <div className="shop">
                <div className={`filter-panel ${isFilterOpen ? 'open' : ''}`}>
                    <FiltersBar
                        onApplyFilters={setActiveFilters}
                        onClearFilters={clearAllFilters}
                    />
                </div>

                <div className="shop-container">
                    <div className="shop-header">
                        <h1 className="shop-title">Shop</h1>
                        <div className="products-count">
                            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                        </div>
                    </div>

                    <div className="products-grid">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product) => (
                                <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                                    <div className="shop-img-wrapper">
                                        <img src={product.img} alt={product.title} className="product-image" />
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent card click
                                                dispatch(addToCart(product));
                                            }}
                                            className="add-to-cart"
                                        >
                                            <i className="ri-shopping-bag-line"></i>
                                        </button>
                                    </div>
                                    <div className="product-main-item">
                                    <div className="product-title">{product.title}</div>
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
                                </div>
                            ))
                        ) : (
                            <div className="no-products">We don't have this product 🫤</div>
                        )}
                    </div>

                    {filteredProducts.length > productsPerPage && (
                        <div className="pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <i className="ri-arrow-left-s-line"></i> Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={currentPage === i + 1 ? 'active' : ''}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    )}
                </div>

                <button className="filter-toggle-button" onClick={toggleFilter}>
                    {isFilterOpen ? <i className="ri-close-line"></i> : <i className="ri-filter-3-line"></i>}
                    <span className="filter-text">{isFilterOpen ? 'Close' : 'Filters'}</span>
                </button>
            </div>
        </div>
        <Subscribe/>
          </>
    );
};

export default Shop;