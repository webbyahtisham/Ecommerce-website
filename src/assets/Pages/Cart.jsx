import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../Redux/cartSlice';
import 'remixicon/fonts/remixicon.css';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const { cartItems, deliveryFee, discount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Calculate subtotal using discounted price if available
  const subtotal = cartItems.reduce((acc, item) => {
    const priceToUse = item.discountPrice || item.price;
    return acc + priceToUse * item.quantity;
  }, 0);

  const total = subtotal - discount + deliveryFee;

  const handleRemove = (item) => {
    dispatch(removeFromCart({ id: item.id, selectedSize: item.selectedSize }));
    toast.success(`${item.title} (Size: ${item.selectedSize}) removed from cart!`);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${item.selectedSize}-${index}`}>
                <img src={item.img} alt={item.title} />

                <div className="item-details">
                  <div className="cart-product-header">
                    <h3 className="cart-product-title">{item.title}</h3>
                    <i
                      className="ri-delete-bin-fill"
                      onClick={() => handleRemove(item)}
                      title="Remove item"
                    ></i>
                  </div>

                  <div className="cart-product-info">
                    <p>Size: {item.selectedSize}</p>
                    {item.color && <p>Color: {item.color}</p>}
                  </div>

                  <div className="cart-product-bottom">
                    <p className="item-price">
                      {item.discountPrice ? (
                        <>
                          <span className="cart-new-price">${item.discountPrice.toFixed(2)}</span>
                          <span className="cart-old-price" style={{ textDecoration: 'line-through', color: '#999', marginLeft: '8px' }}>
                            ${item.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span>${item.price.toFixed(2)}</span>
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
            ))
          )}
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
            {discount > 0 && (
              <div className="summary-row">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
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
