import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import heroImg from '../../assets/img/home3/hero-3.jpg';
import { useTranslation } from "react-i18next";

function Hero3() {
    const { t } = useTranslation();

    return (
        <section className="hero-slide-wrapper hero-3">
            <div className="slide-items">
                <div className="single-slide bg-cover">
                    <div className="container">
                        <div className="row align-items-center text-center text-xl-start">
                            <div className="col-12 col-lg-8 offset-lg-2 offset-xl-0 col-xl-7">
                                <div className="hero-contents">
                                    <p>{t("innovative_food_processing_solutions")}</p>
                                    <h1>{t("advanced_machinery_modern_food_industry")}</h1>

                                    <Link href="/services" legacyBehavior>
                                        <a
                                            className="theme-btn theme-3"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                whiteSpace: 'nowrap',
                                                gap: '8px',
                                            }}
                                        >
                                            {t("our_services")} <BsArrowRight />
                                        </a>
                                    </Link>

                                    <Link href="/about" legacyBehavior>
                                        <a
                                            className="theme-btn theme-3"
                                            style={{ marginLeft: '15px' }}
                                        >
                                            {t("learn_more")}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 d-none d-xl-block">
                                <div
                                    className="hero-img bg-cover"
                                    style={{ backgroundImage: `url(${heroImg})` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
