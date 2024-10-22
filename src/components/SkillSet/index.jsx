import React from 'react';
import bgImg from '../../assets/img/skill_bg.jpg';
import leftImg from '../../assets/img/skill_img.jpg';
import SkillBar from './SkillBar';

function SkillSet() {
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
                                alt="Professional Team at World of Mills" 
                            />
                        </div>
                        <div className="col-xl-6 offset-1 offset-xl-0 col-10 pr-lg-5">
                            <div className="block-contents">
                                <span>Our Expertise</span>
                                <h1>Professional and Innovative Team</h1>
                                <h4>
                                    At World of Mills, we focus on delivering advanced food 
                                    machines, industrial automation, and sustainable solutions 
                                    to meet modern market needs.
                                </h4>
                            </div>
                            {/* PROGRESS BARS */}
                            <SkillBar heading="Food Machinery Solutions" progress="90%" />
                            <SkillBar heading="Industrial Automation" progress="85%" />
                            <SkillBar heading="Sustainable Manufacturing Practices" progress="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSet;
