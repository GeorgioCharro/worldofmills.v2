import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import MobileMenu from '../MobileMenu';

function MainMenu3() {
    return (
        <header className="header-wrap header-3">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2 col-5 col-md-4">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-3 header-none">
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="#">Category</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/team">Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects">Projects</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>

                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-6 col-md-5 text-right d-in-flex align-items-center">
                        <Link to="/contact" className="theme-btn theme-3">
                            Get A Quote
                        </Link>

                        <div className="col mobile-menu-bar">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu3;
