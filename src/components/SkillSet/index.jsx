import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import bgImg from '../../assets/img/skill_bg.jpg';
import leftImg from '../../assets/img/skill_img.jpg';
import SkillBar from './SkillBar';

function SkillSet() {
    const { t } = useTranslation(); // Access the translation function

    return (
        <section className="skill-wrapper section-padding pt-0">
            <div className="container">
                <div
                    className="skill-bg pt-100 pb-100 bg-center bg-cover bg-overlay text-white"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-12 text-center d-none d-xl-block">
                            <img 
                                src={leftImg} 
                                className="mlm-100" 
                                alt={t('professional_team_heading')} 
                            />
                        </div>
                        <div className="col-xl-6 offset-1 offset-xl-0 col-10 pr-lg-5">
                            <div className="block-contents">
                                <span>{t('our_expertise')}</span>
                                <h1>{t('professional_team_heading')}</h1>
                                <h4>{t('professional_team_description')}</h4>
                            </div>
                            {/* PROGRESS BARS */}
                            <SkillBar heading={t('food_machinery_solutions')} progress="90%" />
                            <SkillBar heading={t('industrial_automation')} progress="85%" />
                            <SkillBar heading={t('sustainable_manufacturing')} progress="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSet;
