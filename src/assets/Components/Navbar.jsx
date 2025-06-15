import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import { selectCartCount } from '../Redux/cartSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ≡
        </button>

        <NavLink to="/" className="logo">
          SHOP.CO
        </NavLink>

        <div className="nav-links">
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>
            Shop
          </NavLink>
        </div>

        <div className="right-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for products..."
            />
          </div>
          <div className="nav-icons">

            <NavLink to="/cart" className="cart-icon">
              <i className="ri-shopping-bag-line"></i>
              <span className="cart-badge">{cartCount}</span>
            </NavLink>
            <NavLink to="/account">
              <i className="ri-account-circle-line"></i>
            </NavLink>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>
            Shop
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
