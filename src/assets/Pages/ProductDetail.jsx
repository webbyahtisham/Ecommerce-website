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
    document.title = `${product.title} - Product Details`; // Optional: Set page title
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
                            {["Small", "Medium", "Large", "X-Large"].map((size) => (
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

            <TopSelling h1={"You might also like"} />
            <Subscribe />
        </section>
    );
};

export default ProductDetail;
