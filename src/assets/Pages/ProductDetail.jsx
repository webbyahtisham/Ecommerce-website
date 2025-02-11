import React, { useState } from 'react';
import thambnail from '../Images/image 11.png';
import Button from '../Components/Button';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("Small");

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };


    const [showReviewForm, setShowReviewForm] = useState(false);
    const [reviews, setReviews] = useState([
        // Initial reviews from your image
        { name: "Samantha D.", date: "August 16, 2023", text: "I absolutely love the stuff...", rating: 5 },
        { name: "Ethan R.", date: "August 16, 2023", text: "This is what is most meant...", rating: 4 },
        { name: "Leon K.", date: "August 16, 2023", text: "That's what is a future...", rating: 5 },
        { name: "Alex M.", date: "August 16, 2023", text: "That's just something...", rating: 4 },
        { name: "Olivia P.", date: "August 12, 2023", text: "No, I got our interest...", rating: 4 },
        { name: "Ann H.", date: "August 18, 2023", text: "You put an example...", rating: 5 },
    ]);

    const [newReview, setNewReview] = useState({ text: '', rating: 5 });
    const [activeSection, setActiveSection] = useState('details');

    const handleSubmitReview = (e) => {
        e.preventDefault();
        setReviews([...reviews, {
            name: "New User",
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            text: newReview.text,
            rating: newReview.rating
        }]);
        setShowReviewForm(false);
        setNewReview({ text: '', rating: 5 });
    };


    return (
        <>
        <section className="product">
            <div className="product-detail-container">
                <div className="product-img">
                    <img src={thambnail} alt="thumbnail" />
                </div>
                <div className="product-detail">
                    <h1>One Life Graphic T-shirt</h1>
                    <div className="product-price">$260</div>

                    <div className="product-size">
                        <div className="product-size-p">Choose Size</div>
                        <div className="sizes">
                            {["Small", "Medium", "Large", "X-Large"].map(size => (
                                <div
                                    key={size}
                                    className={`size-button ${selectedSize === size ? "selected" : ""}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            ))}
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
                <h2>AII Reckows (AIII)</h2>
                <p className="product-description">
                  Premium quality product designed for optimal performance and style. 
                  Crafted with precision and attention to detail.
                </p>
                <div className="specifications">
                  <h3>Specifications</h3>
                  <ul>
                    <li>Material: Advanced Composite</li>
                    <li>Dimensions: 10" x 8" x 4"</li>
                    <li>Weight: 2.5 lbs</li>
                    <li>Warranty: 2 Years</li>
                  </ul>
                </div>
              </div>
            )}
      
            {/* Reviews Section */}
            {activeSection === 'reviews' && (
              <div className="section-container">
                <Button name={"write review"} onClick={() => setShowReviewForm(true)}>
                </Button>
      
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
      
            {/* FAQ Section */}
            {activeSection === 'faq' && (
              <div className="section-container">
                <div className="faq-item">
                  <h3>What materials are used in the product?</h3>
                  <p>We use premium, eco-friendly materials that ensure durability and sustainability.</p>
                </div>
                <div className="faq-item">
                  <h3>How long does shipping take?</h3>
                  <p>Standard shipping takes 3-5 business days. Express options available.</p>
                </div>
                <div className="faq-item">
                  <h3>Can I return the product?</h3>
                  <p>Yes, we offer a 30-day return policy for unused products.</p>
                </div>
              </div>
            )}
      
            {/* Review Form Modal */}
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
           </section>
          </>
    );
};

export default ProductDetail;
