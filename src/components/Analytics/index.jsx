import React from 'react';
import analyticsData from './analyticsData';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Analytics() {
    const { t } = useTranslation(); // Access translation function

    return (
        <section className="analytis-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 pr-xl-5 col-12">
                        <div className="block-contents">
                            <span>{t('business_analytics')}</span>
                            <h1>{t(analyticsData.heading)}</h1>
                            <h4>{t(analyticsData.subHeading)}</h4>
                            <p>{t(analyticsData.desc)}</p>
                        </div>
                        <div className="user-data mr-45 d-flex align-items-center">
                            <div
                                className="user-img bg-cover"
                                style={{
                                    backgroundImage: `url(${analyticsData.userImg})`,
                                }}
                            />
                            <div className="user-info">
                                <h5>{t(analyticsData.userName)}</h5>
                                <span>{t(analyticsData.userPosition)}</span>
                            </div>
                            <div className="phone-info">
                                <a href="/">{t(analyticsData.userPhone)}</a>
                                <span>{t('make_a_call')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-5 mt-xl-0">
                        <div className="chart-wrapper">
                            <img src={analyticsData.chart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analytics;
