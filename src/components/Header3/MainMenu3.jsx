import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import logo from '../../assets/logo.png';
import MobileMenu from '../MobileMenu';

function MainMenu3() {
    const { t } = useTranslation(); // Access translation function

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
                                    <Link to="/">{t('menu_home')}</Link>
                                </li>
                                <li>
                                    <Link to="/about">{t('menu_about')}</Link>
                                </li>
                                <li>
                                    <Link to="#">{t('menu_category')}</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/category/Thyme%20and%20Spices">
                                                {t('category_thyme_spices')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/nuts">{t('category_nuts')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/nuts">
                                                {t('category_animal_feed')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Chocolate">
                                                {t('category_chocolate')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/dairy">{t('category_dairy')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Filling">
                                                {t('category_filling')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Filtering">
                                                {t('category_filtering')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Mills">{t('category_mills')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Stainless">
                                                {t('category_stainless')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Tahina">{t('category_tahina')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/Others">{t('category_others')}</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/services">{t('menu_services')}</Link>
                                </li>
                                <li>
                                    <Link to="/contact">{t('menu_contact')}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-6 col-md-5 text-right d-in-flex align-items-center">
                        <Link to="/contact" className="theme-btn theme-3">
                            {t('get_a_quote')}
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
