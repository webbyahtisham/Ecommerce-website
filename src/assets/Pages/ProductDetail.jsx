import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import products from './Product';
import Button from '../Components/Button';
import Subscribe from '../Components/Subscribe';
import TopSelling from '../Components/TopSelling';

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product || products.find((item) => item.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("Small");
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [activeSection, setActiveSection] = useState('details');
    const [newReview, setNewReview] = useState({ text: '', rating: 5 });

    const [reviews, setReviews] = useState([
        { name: "Samantha D.", date: "August 16, 2023", text: "I love this product!", rating: 5 },
        { name: "Ethan R.", date: "August 16, 2023", text: "Really comfortable to wear.", rating: 4 },
    ]);

    if (!product) {
        return <h2>No product found</h2>;
    }

    const handleSizeClick = (size) => setSelectedSize(size);
    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => quantity > 1 && setQuantity((prev) => prev - 1);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        setReviews([...reviews, {
            name: "New User",
            date: new Date().toLocaleDateString('en-US'),
            text: newReview.text,
            rating: newReview.rating,
        }]);
        setShowReviewForm(false);
        setNewReview({ text: '', rating: 5 });
    };

    document.title = `${product.title} - Product Details`;

    return (
        <section className="product">
            <div className="product-detail-container">
                <div className="product-img">
                    <img src={product.img} alt={product.title} />
                </div>
                <div className="product-detail">
                    <h1>{product.title}</h1>
                    <div className="product-price">
                        {product.discountPrice ? (
                            <>
                                <span className="new-price">${product.discountPrice}</span>
                                <span className="old-price">${product.price}</span>
                                <span className="discount">-{product.discount}%</span>
                            </>
                        ) : (
                            <span>${product.price}</span>
                        )}
                    </div>

                    <div className="product-size">
                        <div className="product-size-p">Choose Size</div>
                        <div className="sizes">
                            {product.size && product.size.length > 0 ? (
                                product.size.map((size) => (
                                    <div
                                        key={size}
                                        className={`size-button ${selectedSize === size ? "selected" : ""}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </div>
                                ))
                            ) : (
                                <div>No sizes available</div>
                            )}
                        </div>
                    </div>
                    <div className="quantity-selector">
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                    </div>
                    <button className="product-add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="section-nav">
                <button onClick={() => setActiveSection('details')}>Product Details</button>
                <button onClick={() => setActiveSection('reviews')}>Reviews ({reviews.length})</button>
                <button onClick={() => setActiveSection('faq')}>FAQs</button>
            </div>

            {activeSection === 'details' && (
                <div className="section-container">
                    <h2>Product Details</h2>
                    <p className="product-description">Premium quality product designed for style and comfort. Made with high-quality materials for durability.</p>
                    <div className="specifications">
                        <h3>Specifications</h3>
                        <ul>
                            <li>Material: 100% Cotton</li>
                            <li>Dimensions: Varies by size</li>
                            <li>Weight: 1.5 lbs</li>
                            <li>Warranty: 1 Year</li>
                        </ul>
                    </div>
                </div>
            )}

            {activeSection === 'reviews' && (
                <div className="section-container">
                    <Button name={"Write Review"} onClick={() => setShowReviewForm(true)} />
                    <div className="reviews-grid">
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <div className="review-header">
                                    <h4>{review.name}</h4>
                                    <div className="rating-stars">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} className="star">★</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="review-text">{review.text}</p>
                                <p className="review-date">{review.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeSection === 'faq' && (
                <div className="section-container">
                    <div className="faq-item">
                        <h3>What materials are used?</h3>
                        <p>We use high-quality, sustainable materials for long-lasting products.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Shipping time?</h3>
                        <p>Standard shipping takes 3-5 business days. Express shipping is available.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Return policy?</h3>
                        <p>You can return unused products within 30 days for a full refund.</p>
                    </div>
                </div>
            )}

            {showReviewForm && (
                <div className="modal-overlay">
                    <form className="review-form" onSubmit={handleSubmitReview}>
                        <h2>Write a Review</h2>
                        <div className="rating-selector">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    type="button"
                                    key={num}
                                    className={`star-btn ${num <= newReview.rating ? 'selected' : ''}`}
                                    onClick={() => setNewReview({ ...newReview, rating: num })}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <textarea
                            value={newReview.text}
                            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                            placeholder="Share your experience..."
                            required
                        />
                        <div className="form-buttons">
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setShowReviewForm(false)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <TopSelling h1={"You might also like"} />
            <Subscribe />
        </section>
    );
};

export default ProductDetail;
