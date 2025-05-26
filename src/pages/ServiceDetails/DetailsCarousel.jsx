import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your images
import img1 from '../../assets/img/gallery/1.jpg';
import img2 from '../../assets/img/gallery/2.jpg';
import img3 from '../../assets/img/gallery/3.jpg';

function DetailsCarousel() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]} // Pass modules to Swiper
                navigation
                pagination={{ clickable: true }}
                className="service-gallery"
            >
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img1})` }}
                    />
                    <p>Hello</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img2})` }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img3})` }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default DetailsCarousel;
