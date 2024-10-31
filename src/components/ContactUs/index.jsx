import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import contactData from './contactData';
import ContactItem from './ContactItem';
import Map from './Map';

function ContactUs() {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="contact-page-wrap section-padding">
      <div className="container">
        <div className="row">
          {contactData.map((data) => (
            <ContactItem
              key={data.id}
              heading={t(data.heading)}
              text={t(data.text)}
              icon={data.icon}
              item1={data.item1}
              item2={data.item2}
              link={data.link}
            />
          ))}
        </div>

        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="contact-map-wrap">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
