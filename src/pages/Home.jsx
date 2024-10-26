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

  return (
    <>
      <Hero3 />
      <Promo />

      <div className="p-8 bg-gray-100 rounded-lg shadow-xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Thyme and Spices"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={ThymeImage}
                  alt="ThymeAndSpices"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Thyme And Spices")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Nuts"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={NutsImage}
                  alt="NutsImage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">{t("Nuts")}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Feeder"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={AnimalFoodImage}
                  alt="AnimalFood"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Animal Feed Production Lines")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Chocolate"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={ChocolateImage}
                  alt="Chocolate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Chocolate Machines")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Dairy"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={DairyImage}
                  alt="Dairy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">{t("Dairy")}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Filling"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={FillingImage}
                  alt="Filling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Filling Machines")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Filtering"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={FilteringImage}
                  alt="Filtering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Filtering Machines")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Mills"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={SpicesImage}
                  alt="MillsImage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">{t("Mills")}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Stainless"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={StainlessImage}
                  alt="Stainless Steel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Stainless Steel")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Tahina"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={TahiniImage}
                  alt="Tahini and Halawi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">
                  {t("Tahini and Halawi")}
                </h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={"/category/Others"}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={OthersImage}
                  alt="Others"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 #cfac6e w-full">
                <h2 className="text-lg font-bold text-center">{t("Others")}</h2>
              </div>
            </RouterLink>
          </div>
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
