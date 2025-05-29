import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import logo from './logo.png';
import MobileMenu from '../MobileMenu';

function MainMenu3() {
  const { t } = useTranslation();

  return (
    <header className="header-wrap header-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 col-5 col-md-4">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="logo" width={200} />
              </Link>
            </div>
          </div>

          <div className="col-lg-7 pl-lg-3 header-none">
            <div className="main-menu">
              <ul>
                <li>
                  <Link href="/">{t('menu_home')}</Link>
                </li>
                <li>
                  <Link href="/about">{t('menu_about')}</Link>
                </li>
                <li>
                  <Link href="#">{t('menu_category')}</Link>
                  <ul className="sub-menu">
                    <li><Link href="/category/thyme-and-spices">{t('category_thyme_spices')}</Link></li>
                    <li><Link href="/category/nuts">{t('category_nuts')}</Link></li>
                    <li><Link href="/category/Feeder">{t('category_animal_feed')}</Link></li>
                    <li><Link href="/category/Chocolate">{t('category_chocolate')}</Link></li>
                    <li><Link href="/category/dairy">{t('category_dairy')}</Link></li>
                    <li><Link href="/category/Filling">{t('category_filling')}</Link></li>
                    <li><Link href="/category/Filtering">{t('category_filtering')}</Link></li>
                    <li><Link href="/category/Mills">{t('category_mills')}</Link></li>
                    <li><Link href="/category/Stainless">{t('category_stainless')}</Link></li>
                    <li><Link href="/category/Tahina">{t('category_tahina')}</Link></li>
                    <li><Link href="/category/Others">{t('category_others')}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/services">{t('menu_services')}</Link>
                </li>
                <li>
                  <Link href="/contact">{t('menu_contact')}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 col-6 col-md-5 ml-3 text-right d-in-flex align-items-center">
            <Link href="/contact" className="theme-btn theme-3">
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
