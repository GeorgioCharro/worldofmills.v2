import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import portfolioOneData from './porfolioOneData';
import PortfolioOneSlide from './PortfolioOneSlide';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Portfolio1() {
    const { t } = useTranslation(); // Access translation function

    return (
        <section className="portfolio-section section-padding pt-0">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        className="portfolio-carousel-active owl-carousel"
                    >
                        {portfolioOneData.map((data) => (
                            <SwiperSlide key={data.id}>
                                <PortfolioOneSlide
                                    image={data.image}
                                    imgLink={data.imgLink}
                                    category={t(data.category)} // Translate category
                                    client={t(data.client)} // Translate client name
                                    title={t(data.heading)} // Translate title
                                    desc={t(data.desc)} // Translate description
                                    btnText={t(data.btnText)} // Translate button text
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Portfolio1;
