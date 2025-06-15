import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../Redux/cartSlice';
import 'remixicon/fonts/remixicon.css';

const Cart = () => {
  const { cartItems, deliveryFee, discount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="cart-container">
      <div className="breadcrumb">
        <span>Home</span> &gt; <span>Cart</span>
      </div>

      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${item.selectedSize}-${index}`}>
              <img src={item.img} alt={item.title} />
              <div className="item-details">
                <div className="cart-product-header">
                  <h3 className="cart-product-title">{item.title}</h3>
                  <i
                    className="ri-delete-bin-fill"
                    onClick={() =>
                      dispatch(removeFromCart({ id: item.id, selectedSize: item.selectedSize }))
                    }
                  ></i>
                </div>

                <div className="cart-product-info">
                  <p>Size: {item.selectedSize}</p>
                  {item.color && <p>Color: {item.color}</p>}
                </div>

                <div className="cart-product-bottom">
                  <p className="item-price">
                    {item.originalPrice && item.originalPrice !== item.price ? (
                      <>
                        <span className="cart-new-price">${item.price}</span>
                        <span className="cart-old-price">${item.originalPrice}</span>
                      </>
                    ) : (
                      <span>${item.price}</span>
                    )}
                  </p>
                  <div className="item-quantity">
                    <button
                      onClick={() =>
                        dispatch(decrementQuantity({ id: item.id, selectedSize: item.selectedSize }))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(incrementQuantity({ id: item.id, selectedSize: item.selectedSize }))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Add promo code" />
            <button>Apply</button>
          </div>
          <button className="checkout-btn">Go to Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
