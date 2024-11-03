import React from "react";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";

const menuData = [
  {
    title: "Home",
    path: "/",
    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,
  },

  {
    title: "About",
    path: "/about",
  },

  {
    title: "Category",
    path: "/",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Thyme And Spices",
        path: "/category/Thyme%20and%20Spices",
        cName: "sub-nav",
      },
      {
        title: "Nuts",
        path: "/category/nuts",
        cName: "sub-nav",
      },
      {
        title: "Chocolate",
        path: "/category/Chocolate",
      },
      {
        title: "Dairy",
        path: "/category/dairy",
      },
      {
        title: "Filling Machines",
        path: "/category/Filling",
      },
      {
        title: "Filtering",
        path: "/category/Filtering",
      },

      {
        title: "Tahina",
        path: "/category/Tahina",
      },
    ],
  },

  {
    title: "Services",
    path: "/services",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];

export default menuData;
