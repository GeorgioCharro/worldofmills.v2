import React from "react";
import Services1 from "../components/Services1";
import Portfolio1 from "../components/Portfolio1";
import Promo from "../components/Promo";
import Faq from "../components/Faq";
import RoomIcon from "@mui/icons-material/Room";
import BadgeIcon from "@mui/icons-material/Badge";
import BuildIcon from "@mui/icons-material/Build";
import AboutUs from "../assets/AboutUsImg.jpg";
import { Link as RouterLink } from "react-router-dom";
import AnimalFoodImage from "../assets/animalfoodproductionline.webp";
import ChocolateImage from "../assets/chocolatemachine.webp";
import DairyImage from "../assets/dairy.webp";
import FillingImage from "../assets/fillingmachine.webp";
import FilteringImage from "../assets/filteringmachine.webp";
import NutsImage from "../assets/nuts.webp";
import OthersImage from "../assets/others.webp";
import SpicesImage from "../assets/spices.webp";
import StainlessImage from "../assets/stainless-steel.jpg";
import TahiniImage from "../assets/tahiniandhalawi.webp";
import ThymeImage from "../assets/thymeandspices.webp";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import AnimatedNumber from "../components/AnimatedNumber";
import CompaniesCarousel from "../components/CompaniesCarousel";
import Analytics from "../components/Analytics";
import Subscribe from "../components/Subscribe";
import Hero3 from "../components/Hero3";

function Home() {
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

      <div className="p-4 bg-gray-100 rounded-lg shadow-xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-lg rounded-lg max-w-sm bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <RouterLink
                to={category.path}
                className="w-full h-48 rounded-lg bg-cover bg-center flex flex-col justify-end"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              >
                <div className="bg-black bg-opacity-60 p-2 w-full text-center rounded-b-lg">
                  <h2 className="text-lg font-bold text-white">
                    {t(category.label)}
                  </h2>
                </div>
              </RouterLink>
            </div>
          ))}
        </div>
      </div>

      <Element id="services" name="services">
        <Services1 />
      </Element>
      <CompaniesCarousel />
      <Faq />

      <Portfolio1 />
      <Analytics />
      <Subscribe />

      <div className="bg-[#cfac6e] mt-100 mb-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <RoomIcon style={{ fontSize: 48 }} />
            <p className="text-4xl font-bold mt-4">
              <AnimatedNumber value={15} />+
            </p>
            <p className="text-lg">{t("countries_export")}</p>
          </div>
          <div className="flex flex-col items-center">
            <BadgeIcon style={{ fontSize: 48 }} />
            <p className="text-4xl font-bold mt-4">
              <AnimatedNumber value={30} />+
            </p>
            <p className="text-lg">{t("years_experience_count")}</p>
          </div>
          <div className="flex flex-col items-center">
            <BuildIcon style={{ fontSize: 48 }} />
            <p className="text-4xl font-bold mt-4">
              <AnimatedNumber value={2000} />+
            </p>
            <p className="text-lg">{t("manufactured_machines")}</p>
          </div>
        </div>
      </div>

      <Element id="learnmore" name="learnmore">
        <div
          className="relative bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${AboutUs})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 text-white max-w-2xl ml-auto">
            <h2 className="text-3xl font-bold mb-4">{t("why_us")}</h2>
            <ul className="space-y-2">
              <li>{t("Rapid Implementation")}</li>
              <li>{t("Keeping up with the latest technologies")}</li>
              <li>{t("Simplifying the manufacturing of food materials")}</li>
              <li>{t("After-sales services")}</li>
              <li>{t("Warranty not less than 1 years")}</li>
            </ul>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Home;
