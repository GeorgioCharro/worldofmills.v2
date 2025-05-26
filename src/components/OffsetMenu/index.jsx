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
import Link from "next/link";
import Image from "next/image";
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
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" width={140} height={40} />
              </a>
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
          <Link href="/contact">
            <a className="theme-btn mt-30">Consultation</a>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <FaDribbble />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffsetMenu;
