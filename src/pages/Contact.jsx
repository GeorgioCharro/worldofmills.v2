import React from "react";
import bannerBg from "../assets/HeroPicture.jpeg";
import ContactForm from "../components/ContactForm";
import ContactUs from "../components/ContactUs";

import PageBanner from "../components/PageBanner";

function Contact() {
  return (
    <>
      <PageBanner
        bannerBg={bannerBg}
        heading="Contact Us"
        currentPage="Contact"
      />
      <ContactUs />
      <ContactForm title="Write Message" heading="Get In Touch" />
    </>
  );
}

export default Contact;
