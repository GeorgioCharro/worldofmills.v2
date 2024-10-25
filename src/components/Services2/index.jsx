import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import servicesTwoData from './servicesTwoData';
import ServicesTwoCard from './SevicesTwoCard';

function Services2() {
    const { t } = useTranslation(); // Access the translation function

    return (
        <section className="our-service-wrapper section-padding mtm-30">
            <div className="container">
                <div className="row">
                    {servicesTwoData.map((data) => (
                        <ServicesTwoCard
                            key={data.id}
                            thumbnail={data.thumbnail}
                            icon={data.icon}
                            heading={t(data.heading)} // Use translation
                            text={t(data.text)} // Use translation
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services2;
