import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Faq() {
  const { t } = useTranslation(); // Access translation function

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="content-block">
              <p>{t('get_answers')}</p>
              <h1>{t('get_single_answers')}</h1>
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
