import React from "react";
import bannerBg from "../assets/HeroPicture.jpeg";

import PageBanner from "../components/PageBanner";
import Process from "../components/Process";

import Services2 from "../components/Services2";

function Services() {
  return (
    <>
      <PageBanner
        bannerBg={bannerBg}
        currentPage="Services"
        heading="What We Do"
      />
      <Services2 />
      <Process />
    </>
  );
}

export default Services;
