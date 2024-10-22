import React from "react";
import AboutFeatured from "../components/AboutFeatured";
import Approch from "../components/Approch";
import HeroBg1 from "../assets/HeroPicture.jpeg";
import PageBanner from "../components/PageBanner";
import SkillSet from "../components/SkillSet";

import Timeline from "../components/Timeline";

function About() {
  return (
    <>
      <PageBanner
        bannerBg={HeroBg1}
        currentPage="About Us"
        heading="About Us"
      />
      <AboutFeatured />
      <Approch />
      <SkillSet />
      <Timeline />
    </>
  );
}

export default About;
