import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
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
          
            <NavLink to="/cart">
              <i className="ri-shopping-cart-line"></i>
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
          <NavLink to="/sale" onClick={() => setIsMenuOpen(false)}>
            On Sale
          </NavLink>
          <NavLink to="/new-arrivals" onClick={() => setIsMenuOpen(false)}>
            New Arrivals
          </NavLink>
          <NavLink to="/brands" onClick={() => setIsMenuOpen(false)}>
            Brands
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
