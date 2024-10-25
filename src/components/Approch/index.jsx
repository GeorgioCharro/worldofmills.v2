import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import ApprochCard from './ApprochCard';
import approchData from './approchData';

function Approch() {
    const { t } = useTranslation(); // Access the translation function

    return (
        <section className="our-approch-wrapper section-padding section-bg">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            
                            <p>{t('approch_title')}</p>
                            <h1>{t('capitalise_heading')}</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {approchData.map((data) => (
                        <ApprochCard
                            key={data.id}
                            thumbnail={data.thumb}
                            icon={data.icon}
                            heading={t(data.heading)} // Use translation key
                            text={t(data.text)} // Use translation key
                            btnText={t(data.btnText)} // Use translation key
                            pageLink={data.pageLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Approch;
