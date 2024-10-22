import React from "react";
import bannerBg from "../assets/img/page-banner.jpg";

import PageBanner from "../components/PageBanner";
import PortfolioDetails from "../components/PortfolioDetails";

function ProjectDetails() {
  return (
    <>
      <PageBanner
        bannerBg={bannerBg}
        heading="Portfolio Details"
        currentPage="Portfolio Details"
      />
      <PortfolioDetails />
    </>
  );
}

export default ProjectDetails;
