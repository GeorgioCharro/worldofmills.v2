import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config"; // Adjust the path as necessary

function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleEmailClick = () => {
    window.location.href = "mailto:worldofmills1@gmail.com";
  };

  const handleSubscribe = async () => {
    if (!email) {
      setError(t("email_required"));
      return;
    }
    try {
      await addDoc(collection(db, "newsletter"), { email });
      setEmail("");
      setError(null);
    } catch (e) {
      setError(t("error_saving_email"));
    }
  };

  return (
    <footer className="bg-black text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t("about_us")}</h2>
          <p>{t("footer_about_text")}</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/World-of-Mills/61556702016508/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/_worldofmills_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t("newsletter")}</h2>
          <p>{t("newsletter_text")}</p>
          <div className="flex">
            <input
              type="email"
              placeholder={t("enter_email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#cfac6e] text-black font-bold p-2 rounded-r"
              aria-label="Subscribe to our newsletter"
            >
              Subscribe
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t("get_in_touch")}</h2>
          <div className="flex items-center space-x-2">
            <Phone className="#cfac6e p-2 rounded-full text-black" />
            <p>+971 52 621 1664</p>
          </div>
          <div
            className="flex items-center space-x-2"
            onClick={handleEmailClick}
          >
            <Email className="#cfac6e p-2 rounded-full text-black" />
            <p>worldofmills1@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <LocationOn className="#cfac6e p-2 rounded-full text-black" />
            <p>{t("Sharjah, Dubai, United Arab Emirates")}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>
          {" "}
          {t("copyright")}{" "}
          <span className="font-bold text-yellow-500">WorldOfMills</span>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
