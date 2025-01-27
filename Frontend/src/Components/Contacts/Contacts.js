import React from "react";
import "./Contacts.css"; 

function Footer() {
  return (
    <footer className="bg-purple text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="/img/we-log.png" alt="Logo" className="footer-logo mb-2" />
            <p className="small">Empowering learning everywhere.</p>
          </div>

          <div className="link col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">Contact</a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="social col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-3 border-light" />
        <p className="mb-0 small">&copy; {new Date().getFullYear()} E-Learning Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
