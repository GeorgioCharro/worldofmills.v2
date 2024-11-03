import React, { useState, useContext } from "react";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuContent from "./MenuContent";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../contexts/LanguageContext"; // Import LanguageContext
import menuData from "./menuData";
import SubMenu from "./SubMenu";

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const MobileMenuContainer = styled.div`
  position: relative;
  z-index: 10001;
`;

const SidebarNav = styled.nav`
  background-color: black;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10001;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const LanguageSelect = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center;
  color: white;
`;

const MobileMenu = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useContext(LanguageContext); // Access language and toggle function
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    if ((selectedLanguage === "ar" && language !== "ar") || (selectedLanguage === "en" && language !== "en")) {
      toggleLanguage();
    }
  };

  return (
    <MobileMenuContainer>
      <NavIcon
        className="d-lg-none"
        to="#"
        style={{ justifyContent: "flex-end" }}
      >
        <AiOutlineBars onClick={showSidebar} />
      </NavIcon>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose
              style={{
                color: "white",
                fontSize: "18px",
                justifyContent: "flex-start",
              }}
              onClick={showSidebar}
            />
          </NavIcon>
          {menuData.map((item, index) => (
            <SubMenu
              item={{
                ...item,
                title: t(`menu.${item.title.toLowerCase().replace(/ /g, "_")}`)
              }}
              key={index}
            />
          ))}
          <MenuContent />
          <LanguageSelect>
            <select
              id="lan"
              value={language}
              onChange={handleLanguageChange}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "1px solid white",
                padding: "5px",
                borderRadius: "5px"
              }}
            >
              <option value="en">{t("language_english")}</option>
              <option value="ar">{t("language_arabic")}</option>
            </select>
          </LanguageSelect>
        </SidebarWrap>
      </SidebarNav>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
