import React from 'react';
import Image from 'next/image';
import analyticsData from './analyticsData';
import { useTranslation } from 'react-i18next';

function Analytics() {
  const { t } = useTranslation();

  return (
    <section className="analytis-wrapper section-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-6 pr-xl-5 col-12">
            <div className="block-contents">
              <span>{t('business_analytics')}</span>
              <h1>{t(analyticsData.heading)}</h1>
              <h4>{t(analyticsData.subHeading)}</h4>
              <p>{t(analyticsData.desc)}</p>
            </div>

            <div className="user-data mr-45 d-flex align-items-center mt-6">
              {/* User Image */}
              <div
                className="user-img bg-cover relative rounded-full overflow-hidden"
                style={{ width: '100px', height: '100px', position: 'relative' }}
              >
                <Image
                  src={analyticsData.userImg}
                  alt="User"
                  fill
                  className="object-cover"
                />
              </div>

              {/* User Info */}
              <div className="user-info ml-4">
                <h5>{t(analyticsData.userName)}</h5>
                <span>{t(analyticsData.userPosition)}</span>
              </div>

              {/* Phone Info */}
              <div className="phone-info ml-auto">
                <a href={`tel:${analyticsData.userPhone}`}>
                  {t(analyticsData.userPhone)}
                </a>
                <span>{t('make_a_call')}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[800px] aspect-[2/1] mx-auto">
            <Image
              src={analyticsData.chart}
              alt="Analytics Chart"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Analytics;
