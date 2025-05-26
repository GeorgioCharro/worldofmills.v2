import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import AgeImg from '../../assets/img/age.webp';
import { useTranslation } from "react-i18next";

function Promo() {
    const { t } = useTranslation();

    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    {/* Image Section */}
                    <div className="col-xl-6 col-12 text-center">
                        <Image 
                            src={AgeImg} 
                            alt={t("innovating_food_processing_machinery")} 
                            width={500} 
                            height={400}
                            className="img-fluid"
                            style={{ objectFit: 'contain' }}
                        />
                        <h5>
                            <b>{t("over_30_years_experience")}</b> in 
                            <strong> {t("mills_food_machines_machineries")}</strong>
                        </h5>
                    </div>

                    {/* Content Section */}
                    <div className="col-xl-6 col-12">
                        <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
                            <span>{t("partner_advanced_food_automation")}</span>
                            <h1>{t("innovating_food_processing_machinery")}</h1>
                            <h4>{t("harness_cutting_edge_mills")}</h4>
                            <p>
                                <strong className=''>World of Mills</strong> {t("specializes_in_high_quality_machineries")}
                            </p>
                            <p>{t("expertise_in_advanced_design")}</p>
                            <p>{t("specialized_machineries_production_lines")}</p>
                            <p>{t("improve_production_reduce_downtime")}</p>

                            {/* Call to Action Button */}
                            <Link href="/contact" legacyBehavior>
                                <a
                                    className="theme-btn inline-flex items-center space-x-2"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <span>{t("contact_world_of_mills")}</span>
                                    <BsArrowRight style={{ fontSize: '20px' }} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
