  import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AbidoImage from "../assets/abido.png";
import BeryTechImage from "../assets/Berytech.png";
import DiraniImage from "../assets/Dirani.png";
import HelbawiFoodsImage from "../assets/HelbawiFoods.png";
import MercyCorpsImage from "../assets/MercyCorps.jpg";
import SamihAlYamanImage from "../assets/SamihAlYaman.png";
import CompanyLogo from "./CompanyLogoContainer";
import { useTranslation } from "react-i18next";

export default function CompaniesCarousel() {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <div className="text-center mb-4">
        <p className="h3 text-dark">
          <span
            className="fw-bold"
            style={{ color: "#cfac6e", fontFamily: "Oswald, sans-serif" }}
          >
            {t("explore")}
          </span>{" "}
          {t("selection_of_clients")}
        </p>
      </div>

      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {[ 
            { img: AbidoImage, link: "https://abido.com/", alt: "Abido" },
            { img: BeryTechImage, link: "https://berytech.org/", alt: "Berytech" },
            { img: DiraniImage, link: "https://dirani-group.com/en", alt: "Dirani" },
            { img: HelbawiFoodsImage, link: "https://helbawifoods.com", alt: "Helbawi Foods" },
            { img: MercyCorpsImage, link: "https://www.mercycorps.org/", alt: "Mercy Corps" },
            { img: SamihAlYamanImage, link: "https://alyamanfactories.com/", alt: "Samih Al Yaman" },
          ].map(({ img, link, alt }, idx) => (
            <SwiperSlide key={idx} className="d-flex mb-5 justify-content-center align-items-center">
              <CompanyLogo image={img} link={link} altText={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
