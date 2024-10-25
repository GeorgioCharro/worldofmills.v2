import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function PortfolioOneSlide({ image, category, client, title, desc, btnText }) {
  const { t } = useTranslation(); // Access translation function

  return (
    <div className="single-project">
      <div className="project-contents">
        <div className="row">
          <div className="project-details col-lg-4 offset-lg-1 pl-lg-0 order-2 order-lg-1 col-12">
            <div className="project-meta">
              <div className="flex items-center space-x-4">
                <a href="/" className="project-cat">
                  {t(category)}
                </a>
                <div className="client-info flex items-center space-x-2">
                  <AiOutlineUser />
                  <span>{t(client)}</span>
                </div>
              </div>
            </div>
            <h2>{t(title)}</h2>
            <p>{t(desc)}</p>
            <Link to="/project-details" className="read-btn theme-btn">
              {t(btnText)}
            </Link>
          </div>
          <div className="project-thumbnail col-lg-5 offset-lg-1 p-lg-0 order-1 order-lg-2 col-12">
            <a
              href="/"
              className="popup-gallery bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            >
              <span className="sr-only">{t(title)}</span>{" "}
              {/* Screen reader-only content */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioOneSlide;
