import React, { useState, useContext } from "react";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import Link from "next/link";
import styled from "styled-components";
import MenuContent from "./MenuContent";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../contexts/LanguageContext";
import menuData from "./menuData";
import SubMenu from "./SubMenu";

const NavIcon = styled.a`
  font-size: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
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
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => setSidebar(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    if (
      (selectedLanguage === "ar" && language !== "ar") ||
      (selectedLanguage === "en" && language !== "en")
    ) {
      toggleLanguage();
    }
  };

  const translateMenuTitle = (title) => {
    const translationKey = `menu.${title.toLowerCase().replace(/ /g, "_")}`;
    const translatedTitle = t(translationKey);
    return translatedTitle.startsWith("menu.") ? title : translatedTitle;
  };

  return (
    <MobileMenuContainer>
      <Link href="#" legacyBehavior>
        <NavIcon className="d-lg-none" style={{ justifyContent: "flex-end" }}>
          <AiOutlineBars onClick={toggleSidebar} />
        </NavIcon>
      </Link>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <Link href="#" legacyBehavior>
            <NavIcon>
              <AiIcons.AiOutlineClose
                style={{
                  color: "white",
                  fontSize: "18px",
                  justifyContent: "flex-start",
                }}
                onClick={toggleSidebar}
              />
            </NavIcon>
          </Link>

          {menuData.map((item, index) => (
            <SubMenu
              item={{
                ...item,
                title: translateMenuTitle(item.title),
              }}
              key={index}
              closeSidebar={closeSidebar}
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
                borderRadius: "5px",
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
