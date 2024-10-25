import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function PageBanner({ bannerBg, currentPage, heading }) {
    const { t } = useTranslation(); // Access the translation function

    return (
        <section
            className="page-banner-wrap bg-cover"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="breadcrumb-wrap">
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">{t('breadcrumb_home')}</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {t(currentPage)}
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <div className="page-heading text-white">
                            <h1>{t(heading)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageBanner;
