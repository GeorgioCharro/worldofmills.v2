import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import PhotoGrid from './PhotoGrid';
import ProcessItem from './ProcessItem';
import processItemData from './processItemData';

function Process() {
    const { t } = useTranslation(); // Access the translation function

    return (
        <section className="process-wrapper section-padding section-bg">
            <div className="container">
                <div className="row align-center">
                    <PhotoGrid />
                    <div className="col-xl-6 col-12 offset-xl-1">
                        <div className="section-title">
                            <p>{t('process_title')}</p>
                            <h1>{t('process_title')}</h1>
                        </div>

                        <div className="process-setps mt-5 mt-xl-0">
                            {processItemData.map((data) => (
                                <ProcessItem
                                    key={data.id}
                                    number={data.number}
                                    heading={t(data.heading)} // Use translation
                                    text={t(data.text)} // Use translation
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;
