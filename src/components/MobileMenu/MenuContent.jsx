import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MenuContent = () => (
    <div className="mobile-menu-bottom">
        <ul className="space-y-4 ml-8 text-white">
            <li className="bottom-item flex items-center space-x-3">
                <AiOutlineMail className="icon text-lg" />
                <span>worldofmills0@gmail.com</span>
            </li>
            <li className="bottom-item flex items-center space-x-3">
                <AiOutlinePhone className="icon text-lg" />
                <span>987-098-098-09</span>
            </li>
        </ul>
        <div className="bottom-btn mt-6">
            <Link to="/contact" className="d-btn theme-btn d-block text-white">
                Contact Us
            </Link>
        </div>
    </div>
);

export default MenuContent;
