import React, { useContext } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LanguageContext } from "../../contexts/LanguageContext"; // Import the context
import { useTranslation } from "react-i18next"; // Import useTranslation

function Topbar3() {
  const { t } = useTranslation(); // Access the translation function
  const { language, toggleLanguage } = useContext(LanguageContext); // Access language and toggle function

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    if (
      (selectedLanguage === "ar" && language !== "ar") ||
      (selectedLanguage === "en" && language !== "en")
    ) {
      toggleLanguage(); // Toggle only if different
    }
  };

  return (
    <div className="top-bar style-3 d-none d-sm-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <div className="contact-data">
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
                }}
              >
                <li style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineMail
                    style={{
                      fontSize: "16px",
                      color: "white",
                      marginRight: "8px",
                    }}
                  />
                  <span style={{ color: "white" }}>
                    {t("contact_email")}
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlinePhone
                    style={{
                      fontSize: "16px",
                      color: "white",
                      marginRight: "8px",
                    }}
                  />
                  <span style={{ color: "white" }}>
                    {t("contact_phone")}
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <FaMapMarkerAlt
                    style={{
                      fontSize: "16px",
                      color: "white",
                      marginRight: "8px",
                    }}
                  />
                  <span style={{ color: "white" }}>
                    {t("contact_address")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="lan-select">
              <form>
                <select
                  id="lan"
                  value={language} // Set the current language as the value
                  onChange={handleLanguageChange} // Handle language change
                >
                  <option value="en">{t("language_english")}</option>
                  <option value="ar">{t("language_arabic")}</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar3;
