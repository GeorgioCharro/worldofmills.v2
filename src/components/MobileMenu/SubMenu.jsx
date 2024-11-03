import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    background: #ffc107;
    color: white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #fff;
  font-weight: 400;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  &:hover,
  &:active {
    background: #ffc107;
    cursor: pointer;
    color: white;
  }
`;

const SubMenu = ({ item, closeSidebar }) => {
  const { t } = useTranslation();
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={() => {
          if (!item.subNav) closeSidebar();
          showSubnav();
        }}
      >
        <div>
          {item.icon}
          <SidebarLabel>
            {t(`menu.${item.title.toLowerCase().replace(/ /g, "_")}`)}
          </SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav?.map(
          (
            data,
            index // Optional chaining used here
          ) => (
            <DropdownLink
              to={data.path}
              key={index}
              onClick={closeSidebar} // Close sidebar on dropdown link click
            >
              {item.icon}
              <SidebarLabel>
                {t(`menu.${data.title.toLowerCase().replace(/ /g, "_")}`)}
              </SidebarLabel>
            </DropdownLink>
          )
        )}
    </>
  );
};

export default SubMenu;
