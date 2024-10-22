import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AgeImg from '../../assets/img/age.png';

function Promo() {
    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    {/* Image Section */}
                    <div className="col-xl-6 col-12 text-center">
                        <img 
                            src={AgeImg} 
                            alt="World of Mills - Leaders in Food Machines and Automation" 
                        />
                        <h5>
                            <b>Over 10 Years of Experience</b> in 
                            <strong> Mills, Food Machines, and Machineries</strong>
                        </h5>
                    </div>

                    {/* Content Section */}
                    <div className="col-xl-6 col-12">
                        <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
                            <span>Your Partner in Advanced Food Machines & Automation</span>
                            <h1>World of Mills: Innovating Food Processing Machinery</h1>
                            <h4>
                                Harness the power of cutting-edge mills and food machines 
                                to stay ahead of market trends.
                            </h4>
                            <p>
                                <strong>World of Mills</strong> specializes in providing 
                                high-quality <b>food machineries</b> and custom automation 
                                solutions to enhance production efficiency. Our expertise 
                                lies in designing advanced mills and food machines to 
                                support businesses that focus on **organic products** 
                                and **streamlined production processes**.
                            </p>

                            <p>
                                Whether you need specialized food machineries or complete 
                                production-line automation, we deliver solutions tailored 
                                to your requirements. Trust us to improve production, 
                                reduce downtime, and ensure your business remains at the 
                                forefront of the **food machinery industry**.
                            </p>

                            {/* Call to Action Button */}
                            <Link
                                to="/contact"
                                className="theme-btn inline-flex items-center space-x-2"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                }}
                            >
                                <span>Contact World of Mills Today</span>
                                <BsArrowRight style={{ fontSize: '20px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
