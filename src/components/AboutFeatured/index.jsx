import React, { useState } from 'react';
import { FaHardHat, FaPlay, FaRoad } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import aboutImg from '../../assets/img/about_us.jpg';
import btnImg from '../../assets/img/skill_bg.jpg';
import IconBox from './IconBox';

function AboutFeatured() {
    const { t } = useTranslation(); // Access translation function
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="EZ9DrY43wtw"
                onClose={() => setOpen(false)}
            />
            <section className="about-featured-wrapper section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Video Section */}
                        <div className="col-xl-6 col-lg-5 col-12">
                            <div
                                className="about-promo bg-cover"
                                style={{ backgroundImage: `url(${aboutImg})` }}
                            >
                                <div
                                    className="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                                    style={{ backgroundImage: `url(${btnImg})` }}
                                >
                                    <div className="video-play-btn">
                                        <button
                                            type="button"
                                            className="modal-btn"
                                            onClick={() => setOpen(true)}
                                        >
                                            <FaPlay />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                            <div className="block-contents ml-lg-5">
                                <span>{t('about_video_heading')}</span>
                                <h1>{t('about_video_title')}</h1>
                                <h4>{t('about_video_description')}</h4>
                            </div>

                            {/* Icon Boxes Section */}
                            <div className="icon-boxs ml-lg-5">
                                <IconBox
                                    icon={<FaHardHat />}
                                    heading={t('iconbox_renewal_heading')}
                                    text={t('iconbox_renewal_text')}
                                />
                                <IconBox
                                    icon={<FaRoad />}
                                    heading={t('iconbox_automation_heading')}
                                    text={t('iconbox_automation_text')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutFeatured;
