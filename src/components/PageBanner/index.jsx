import React from "react";
import { useTranslation } from "react-i18next";

function PageBanner({ bannerBg, currentPage, heading }) {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#cfac6e] py-[120px] md:py-[100px] sm:py-[70px] overflow-hidden">
      <img
        src={bannerBg}
        alt="Page Banner Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10" />

      <div className="container relative">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="breadcrumb-wrap overflow-hidden">
              <nav>
                <ol className="breadcrumb bg-transparent p-0 mb-[10px]">
                  <li className="breadcrumb-item text-[#cfac6e] text-[15px] font-medium capitalize">
                    <a href="index.html" className="text-white hover:text-[#ff5e14]">
                      {t("breadcrumb_home")}
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item active text-[#c5c2c2] text-[15px] font-medium capitalize"
                    aria-current="page"
                  >
                    | {t(currentPage)}
                  </li>
                </ol>
              </nav>
            </div>

            <div className="page-heading text-white">
              <h1 className="text-[80px] leading-[1.1] md:text-[60px] sm:text-[40px]">
                {t(heading)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
