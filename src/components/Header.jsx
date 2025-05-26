import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { LanguageContext } from "../contexts/LanguageContext";
import { t } from "i18next";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleButtonClick = () => {
    toggleLanguage();
    toggleSidebar();
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:worldofmills1@gmail.com";
  };
  const handleContactUsClick = () => {
    window.location.href = "https://wa.me/971526211664";
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 mb-10 bg-white lg:mx-auto lg:max-w-screen-xl">
        <div className="flex items-center mx-4 lg:mx-0">
          <Link href="/">
            <a className="flex items-center">
              <Image src={Logo} alt="Logo" height={56} />
              <span className="text-3xl font-bold text-black ml-2"></span>
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black cursor-pointer mx-4 lg:mx-0" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <CloseIcon className="cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className="p-4 space-y-4 font-semibold text-lg ml-4">
          <li><Link href="/"><a>{t("Home")}</a></Link></li>
          <li><button onClick={handleContactUsClick}>{t("Contact Us")}</button></li>
          <li>{t("Catalogue")}</li>
          <li className="m-4 text-sm"><Link href="/category/Thyme%20and%20Spices"><a>{t("Thyme And Spices")}</a></Link></li>
          <li className="m-4 text-sm"><Link href="/category/Nuts"><a>{t("Nuts")}</a></Link></li>
          <li className="m-4 text-sm"><Link href="/category/Feeder"><a>{t("Animal Feed Production Lines")}</a></Link></li>
          <li className="m-4 text-sm"><Link href="/category/Chocolate"><a>{t("Chocolate Machines")}</a></Link></li>
          <li className="m-4 text-sm"><Link href="/category/Dairy"><a>{t("Dairy")}</a></Link></li>
          <li className="m-4 text-sm"><Link href="/category/Filling"><a>{t("Filtering Machines")}</a></Link></li>
          <li className="m-4 text-sm"><Link href="/category/Others"><a>{"Others"}</a></Link></li>
        </ul>

        <button onClick={handleButtonClick} className="text-lg font-bold ml-4">
          {language === "en" ? "Arabic" : "English"}
        </button>

        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleEmailClick}>
            <EmailIcon />
            <p>worldofmills1@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon />
            <p>+971 52 621 1664</p>
          </div>
          <div className="flex justify-center">
            <Link href="/contact-form">
              <a className="#cfac6e text-white font-bold p-4 rounded-lg mt-4">{t("Get a Quote")}</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar Section */}
      <div className="top-28 left-0 right-0 z-30 hidden lg:block absolute">
        <div className="flex justify-between items-stretch font-oswald font-bold text-xl mx-auto max-w-screen-xl shadow-xl">
          <div className="flex-grow bg-white shadow-lg p-6 flex space-x-16 items-center rounded-l-lg">
            <a href="#home" className="text-gray-800 hover:underline">Home</a>
            <a href="#about" className="text-gray-800 hover:underline">About</a>
            <a href="#pages" className="text-gray-800 hover:underline">Pages</a>
            <a href="#services" className="text-gray-800 hover:underline">Services</a>
            <a href="#contact" className="text-gray-800 hover:underline">Contact</a>
          </div>
          <div className="#cfac6e p-6 flex items-center rounded-r-lg">
            <span className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16m-7 4h7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
