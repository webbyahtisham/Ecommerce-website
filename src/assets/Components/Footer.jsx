import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand-info">
          <h2>SHOP.CO</h2>
          <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>COMPANY</h3>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>HELP</h3>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>FAQ</h3>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>RESOURCES</h3>
            <ul>
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <div className="payment-methods">
          <span>VISA</span>
          <span>PayPal</span>
          <span>Pay</span>
          <span>G Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;