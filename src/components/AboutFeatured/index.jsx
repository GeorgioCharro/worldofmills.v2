import React, { useState } from 'react';
import { FaHardHat, FaPlay, FaRoad } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';

import aboutImg from '../../assets/img/about_us.jpg';
import btnImg from '../../assets/img/skill_bg.jpg';
import IconBox from './IconBox';

function AboutFeatured() {
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
                                <span>Your Trusted Partner in Food Machinery & Automation</span>
                                <h1>World of Mills: Transforming Food Production</h1>
                                <h4>
                                    Our mission is to empower businesses with **cutting-edge food
                                    machines** and **automation solutions** tailored to meet the
                                    growing demand for **organic and sustainable products**.
                                </h4>
                            </div>

                            {/* Icon Boxes Section */}
                            <div className="icon-boxs ml-lg-5">
                                <IconBox
                                    icon={<FaHardHat />}
                                    heading="Machinery Renewal & Maintenance"
                                    text="We specialize in renewing and maintaining food machineries, ensuring smooth operations, reduced downtime, and optimal performance."
                                />
                                <IconBox
                                    icon={<FaRoad />}
                                    heading="Tailored Automation Solutions"
                                    text="From custom milling machines to fully automated production lines, we help businesses streamline their processes and improve efficiency."
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
