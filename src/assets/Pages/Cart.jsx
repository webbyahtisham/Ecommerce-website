import React from 'react'

const Cart = () => {
  return (
    <>
       <div className="cart-container">
      <div className="cart-items">
        <h2>Your Cart</h2>
        
        <div className="cart-item">
          <img src="/path-to-image/tshirt.jpg" alt="Gradient Graphic T-shirt" />
          <div className="item-details">
            <h3>Gradient Graphic T-shirt</h3>
            <p>Size: Large</p>
            <p>Color: White</p>
            <p className="item-price">$145</p>
          </div>
          <div className="cart-product-tool">
          <div className="item-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="delete-btn">🗑️</button>
          </div>
        </div>

        <div className="cart-item">
          <img src="/path-to-image/shirt.jpg" alt="Checkered Shirt" />
          <div className="item-details">
            <h3>Checkered Shirt</h3>
            <p>Size: Medium</p>
            <p>Color: Red</p>
            <p className="item-price">$180</p>
          </div>
          <div className="cart-product-tool">
          <div className="item-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="delete-btn">🗑️</button>
          </div>
        </div>

        <div className="cart-item">
          <img src="/path-to-image/jeans.jpg" alt="Skinny Fit Jeans" />
          <div className="item-details">
            <h3>Skinny Fit Jeans</h3>
            <p>Size: Large</p>
            <p>Color: Blue</p>
            <p className="item-price">$240</p>
          </div>
          <div className="cart-product-tool">
          <div className="item-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="delete-btn">🗑️</button>
          </div>
        </div>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>
            Subtotal: <span>$565</span>
          </p>
          <p>
            Discount (-20%): <span className="discount">- $113</span>
          </p>
          <p>
            Delivery Fee: <span>$15</span>
          </p>
          <hr />
          <p className="total">
            Total: <span>$467</span>
          </p>
        </div>
        <div className="promo-code">
          <input type="text" placeholder="Add promo code" />
          <button>Apply</button>
        </div>
        <button className="checkout-btn">Go to Checkout →</button>
      </div>
    </div>

    </>
  )
}

export default Cart
