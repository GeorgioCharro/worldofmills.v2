import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
  FaClock,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaMap,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function OffsetMenu({ className, handleOffset }) {
  return (
    <div className={className}>
      <span id="offset-menu-close-btn">
        <FaPlus onClick={handleOffset} />
      </span>
      <div className="offset-menu-wrapper text-white">
        <div className="offset-menu-header">
          <div className="offset-menu-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="offset-menu-section">
          <h3>About Us</h3>
          <p>
            We must explain to you how all seds this mistakens idea off
            denouncing pleasures and praising pain was born and I will give you
            a completed
          </p>
          <Link to="/contact" className="theme-btn mt-30">
            Consultation
          </Link>
        </div>

        <div className="offset-menu-section">
          <h3>Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaMap className="text-lg" />
              <span>Rock St 12, Newyork City, USA</span>
            </li>
            <li className="flex items-center space-x-3">
              <AiOutlinePhone className="text-lg" />
              <span>(000) 000-000-0000</span>
            </li>
            <li className="flex items-center space-x-3">
              <AiOutlineMail className="text-lg" />
              <span>info@modinatheme.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-lg" />
              <span>Week Days: 09.00 to 18.00</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-lg" />
              <span>Sunday: Closed</span>
            </li>
          </ul>
        </div>

        <div className="offset-menu-footer">
          <div className="offset-menu-social-icon">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaDribbble />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffsetMenu;
