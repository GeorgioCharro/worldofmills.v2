import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeroBg1 from "../../assets/HeroPicture.jpeg";

function Hero1() {
  return (
    <section className="hero-slide-wrapper hero-1">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="hero-slider-active"
      >
        <SwiperSlide>
          <div
            className="single-slide bg-cover"
            style={{ backgroundImage: `url(${HeroBg1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-6">
                  <div className="hero-contents">
                    <h1>Global Automotive</h1>
                    {/* Button with Inline-Flex for Same Line */}
                    <Link
                      to="/services"
                      className="theme-btn inline-flex items-center space-x-2"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      <span>Our Services</span>
                      <BsArrowRight
                        style={{
                          fontSize: "18px",
                        }}
                      />
                    </Link>

                    <Link
                      to="/about"
                      className="theme-btn black inline-block mt-4"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero1;
