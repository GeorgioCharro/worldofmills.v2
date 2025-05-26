import React from "react";
import Services1 from "../components/Services1";
import Portfolio1 from "../components/Portfolio1";
import Promo from "../components/Promo";
import Faq from "../components/Faq";
import RoomIcon from "@mui/icons-material/Room";
import BadgeIcon from "@mui/icons-material/Badge";
import BuildIcon from "@mui/icons-material/Build";
import AboutUs from "../assets/AboutUsImg.jpg";
import Link from "next/link";
import Image from "next/image";
import TestCard from "../components/Categories/CategoriesCard";
import AnimalFoodImage from "../assets/animalfoodproductionline.webp";
import ChocolateImage from "../assets/chocolatemachine.webp";
import DairyImage from "../assets/dairy.webp";
import FillingImage from "../assets/fillingmachine.webp";
import FilteringImage from "../assets/filteringmachine.webp";
import NutsImage from "../assets/nuts.webp";
import SpicesImage from "../assets/spices.webp";
import TahiniImage from "../assets/tahiniandhalawi.webp";
import ThymeImage from "../assets/thymeandspices.webp";

import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import AnimatedNumber from "../components/AnimatedNumber";
import CompaniesCarousel from "../components/CompaniesCarousel";
import Subscribe from "../components/Subscribe";
import Hero3 from "../components/Hero3";

export default function Home() {
  const { t } = useTranslation();

  const categories = [
    {
      path: "/category/Thyme and Spices",
      image: ThymeImage,
      label: "Thyme And Spices Machines",
    },
    { path: "/category/Nuts", image: NutsImage, label: "Nuts Machines" },
    {
      path: "/category/Feeder",
      image: AnimalFoodImage,
      label: "Animal Feed Production Lines",
    },
    {
      path: "/category/Chocolate",
      image: ChocolateImage,
      label: "Chocolate Machines",
    },
    { path: "/category/Dairy", image: DairyImage, label: "Dairy Machines" },
    {
      path: "/category/Filling",
      image: FillingImage,
      label: "Filling Machines",
    },
    {
      path: "/category/Filtering",
      image: FilteringImage,
      label: "Filtering Machines",
    },
    { path: "/category/Mills", image: SpicesImage, label: "Mills" },
    {
      path: "/category/Tahina",
      image: TahiniImage,
      label: "Tahini and Halawi Machines",
    },
  ];

  return (
    <>
      <Hero3 />
      <Promo />

      {/* Category Cards */}
      <div className="category-wrapper">
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <Link href={category.path} legacyBehavior>
                <a
                  className="category-card-link"
                  style={{ backgroundImage: `url(${category.image.src})` }}
                >
                  <div className="category-label">
                    <h2>{t(category.label)}</h2>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>











      {/* Services Section */}
      <Element id="services" name="services">
        <Services1 />
      </Element>

      <CompaniesCarousel />
      <Faq />
      <Portfolio1 />
      <Subscribe />

      {/* Stats Section */}
<div className="bg-warning py-5" style={{ backgroundColor: '#cfac6e', marginTop: '100px', marginBottom: '100px' }}>
  <div className="container">
    <div className="row text-center text-black">
      <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
        <RoomIcon style={{ fontSize: 48 }} />
        <p className="h2 mt-3 mb-1">
          <AnimatedNumber value={15} />+
        </p>
        <p className="fs-5">{t("countries_export")}</p>
      </div>
      <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
        <BadgeIcon style={{ fontSize: 48 }} />
        <p className="h2 mt-3 mb-1">
          <AnimatedNumber value={30} />+
        </p>
        <p className="fs-5">{t("years_experience_count")}</p>
      </div>
      <div className="col-12 col-md-4 d-flex flex-column align-items-center">
        <BuildIcon style={{ fontSize: 48 }} />
        <p className="h2 mt-3 mb-1">
          <AnimatedNumber value={2000} />+
        </p>
        <p className="fs-5">{t("manufactured_machines")}</p>
      </div>
    </div>
  </div>
</div>




    </>
  );
}
