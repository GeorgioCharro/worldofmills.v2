import React from "react";
import AboutFeatured from "../components/AboutFeatured";
import Approch from "../components/Approch";
import HeroBg1 from "../assets/HeroPicture.jpeg";
import PageBanner from "../components/PageBanner";
import SkillSet from "../components/SkillSet";
import Timeline from "../components/Timeline";
import { useTranslation } from "react-i18next"; // Import useTranslation

function About() {
    const { t } = useTranslation(); // Access the translation function

    return (
        <>
            <PageBanner
                bannerBg={HeroBg1}
                currentPage="page_about_us" // Use translation key
                heading="page_about_us" // Use translation key
            />
            <AboutFeatured />
            <Approch />
            <SkillSet />
            <Timeline />
        </>
    );
}

export default About;
