import React from 'react';
import Image from 'next/image';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';
import { useTranslation } from 'react-i18next';

function Faq() {
  const { t } = useTranslation();

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="row">
          {/* Left Content Block */}
          <div className="col-xl-6 col-12">
            <div className="content-block relative">
              <p>{t('get_answers')}</p>
              <h1>{t('get_single_answers')}</h1>

              {/* Background image container */}
              <div className="bg-img relative w-full h-64 mt-6">
                <Image
                  src={bgImg}
                  alt="Map Pattern"
                  fill
                  className="object-contain"
                />

                {/* Man figures positioned with absolute positioning */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <Image
                    src={man1}
                    alt="man1"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="absolute top-8 left-24 w-16 h-16">
                  <Image
                    src={man1}
                    alt="man2"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="absolute top-16 left-40 w-16 h-16">
                  <Image
                    src={man1}
                    alt="man3"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Faq Accordions */}
          <div className="col-xl-6 col-12 mt-4 mt-xl-0 space-y-6">
            <FaqAccordion
              question={t('faq_question_1')}
              answer={t('faq_answer_1')}
            />
            <FaqAccordion
              question={t('faq_question_2')}
              answer={t('faq_answer_2')}
            />
            <FaqAccordion
              question={t('faq_question_3')}
              answer={t('faq_answer_3')}
            />
            <FaqAccordion
              question={t('faq_question_4')}
              answer={t('faq_answer_4')}
            />
            <FaqAccordion
              question={t('faq_question_5')}
              answer={t('faq_answer_5')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
