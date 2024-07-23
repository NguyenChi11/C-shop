import React from "react";
import "./Footer.css";
import { assets } from "../Assets/Data.js";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={assets.logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-icons-container">
          <i class="fa-brands fa-pinterest-p"></i>
        </div>
        <div className="footer-icons-container">
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>C-shop 2024</p>
      </div>
    </div>
  );
};

export default Footer;
