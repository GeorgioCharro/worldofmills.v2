import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import bannerBg from "../../assets/HeroPicture.jpeg";
import ContactForm from "../../components/ContactForm";
import ContactUs from "../../components/ContactUs";
import PageBanner from "../../components/PageBanner";

function Contact() {
  const { t } = useTranslation(); // Access translation function

  return (
    <>
      <PageBanner
        bannerBg={bannerBg}
        heading={t("page_banner_contact_heading")}
        currentPage={t("page_banner_contact_current_page")}
      />
      <ContactUs />
      <ContactForm
        title={t("contact_form_title")}
        heading={t("contact_form_heading")}
      />
    </>
  );
}

export default Contact;
