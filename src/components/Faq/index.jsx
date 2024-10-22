import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';

function Faq() {
  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="content-block">
              <p>Get Answers</p>
              <h1>Get every single answers from here.</h1>
              <div className="bg-img">
                <img src={bgImg} alt="" />
                <div
                  className="man bg-cover man-1"
                  style={{
                    backgroundImage: `url(${man1})`,
                  }}
                />
                <div
                  className="man bg-cover man-2"
                  style={{
                    backgroundImage: `url(${man1})`,
                  }}
                />
                <div
                  className="man bg-cover man-3"
                  style={{
                    backgroundImage: `url(${man1})`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12 mt-4 mt-xl-0 space-y-6">
            {/* Add vertical space between FAQ items */}
            <FaqAccordion
              question="What types of food machines and equipment does World of Mills offer?"
              answer="World of Mills provides a wide range of food machines, including drying machines, milling equipment, packaging systems, and automated food production lines. Our solutions cater to businesses focused on organic and healthy products, ensuring efficient and high-quality manufacturing."
            />
            <FaqAccordion
              question="How can World of Mills help improve production efficiency?"
              answer="We specialize in industrial automation that streamlines production, reduces downtime, and optimizes resource management. Our food machineries and custom automation solutions allow businesses to increase output while minimizing operational costs."
            />
            <FaqAccordion
              question="What is included in your machinery maintenance and renewal services?"
              answer="Our machinery maintenance & renewal services include regular inspections, performance optimization, parts replacement, and upgrades. These services ensure that your equipment remains up-to-date and fully operational, reducing the risk of breakdowns."
            />
            <FaqAccordion
              question="Do you provide after-sales support and training for the machinery?"
              answer="Yes, we offer comprehensive after-sales support, including installation, troubleshooting, and training for your team. Our goal is to ensure that you can operate our food machines efficiently from day one."
            />
            <FaqAccordion
              question="Can World of Mills automate my entire production line?"
              answer="Absolutely! We provide end-to-end industrial automation solutions for food manufacturers. From ingredient processing to packaging, we help automate every stage of production to improve speed and consistency."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
