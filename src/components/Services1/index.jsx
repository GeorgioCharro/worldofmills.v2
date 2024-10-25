import React from 'react';
import ServicesOneCard from './ServicesOneCard';
import servicesOneData from './servicesOneData';
import { useTranslation } from 'react-i18next';

function Services1() {
    const { t } = useTranslation(); // Access the translation function

    return (
        <section className="services-wrapper services-1 section-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            <span>{t('services')}</span>
                            <p>{t('our_services')}</p>
                            <h1>{t('what_we_do')}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesOneData.map((item) => (
                        <ServicesOneCard
                            key={item.id}
                            bgImg={item.bgImg}
                            icon={item.icon}
                            heading={t(item.heading)} // Translated heading
                            btnText={t(item.btnText)} // Translated button text
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services1;
