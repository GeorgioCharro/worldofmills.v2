import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import AbidoImage from "../assets/abido.png";
import BeryTechImage from "../assets/Berytech.png";
import DiraniImage from "../assets/Dirani.png";
import HelbawiFoodsImage from "../assets/HelbawiFoods.png";
import MercyCorpsImage from "../assets/MercyCorps.jpg";
import SamihAlYamanImage from "../assets/SamihAlYaman.png";
import CompanyLogo from "./CompanyLogoContainer";
import { useTranslation } from "react-i18next"; // Import useTranslation

function CompaniesCarousel() {
  const { t } = useTranslation(); // Access translation function

  return (
    <div className="mt-14">
      <div className="flex justify-center mb-4">
        <p className="lg:text-4xl text-2xl text-black">
          <span className="font-oswald text-[#cfac6e] font-bold">
            {t("explore")}
          </span>{" "}
          {t("selection_of_clients")}
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-4 relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide className="mb-4">
            <CompanyLogo
              image={AbidoImage}
              link={"https://abido.com/"}
              altText="Abido"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyLogo
              image={BeryTechImage}
              link={"https://berytech.org/"}
              altText="Berytech"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyLogo
              image={DiraniImage}
              link={"https://dirani-group.com/en"}
              altText="Dirani"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyLogo
              image={HelbawiFoodsImage}
              link={"https://helbawifoods.com"}
              altText="Helbawi Foods"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyLogo
              image={MercyCorpsImage}
              link={"https://www.mercycorps.org/"}
              altText="Mercy Corps"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyLogo
              image={SamihAlYamanImage}
              link={"https://alyamanfactories.com/"}
              altText="Samih Al Yaman"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev absolute top-1/2 -left-6 md:-left-12 transform -translate-y-1/2 z-10 p-2 cursor-pointer">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="swiper-button-next absolute top-1/2 -right-8 md:-right-14 transform -translate-y-1/2 z-10 p-2 cursor-pointer">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 5.293a1 1 0 011.414 0L13.707 10l-5.293 5.293a1 1 0 01-1.414-1.414L11.586 10 7.293 6.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CompaniesCarousel;
