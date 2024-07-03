// Footer.js

import React from "react";
import "./styles/footerStyles.css"; // Import your custom CSS for additional styling

function Footer() {
  return (
    <div className="custom-shape-divider-top-1720015931">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill"
        ></path>
      </svg>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 footer-col">
              <h4>Company</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Our Services</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-col">
              <h4>Get Help</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Shipping</a>
                </li>
                <li>
                  <a href="/">Returns</a>
                </li>
                <li>
                  <a href="/">Order Status</a>
                </li>
                <li>
                  <a href="/">Payment Options</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-col">
              <h4>Online Shop</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Watch</a>
                </li>
                <li>
                  <a href="/">Bag</a>
                </li>
                <li>
                  <a href="/">Shoes</a>
                </li>
                <li>
                  <a href="/">Dress</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
