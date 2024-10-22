import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ServicesOneCard({ bgImg, icon, heading, btnText }) {
    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-item service-1">
                <div
                    className="service-bg bg-cover w-full h-48"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                />
                {/* Icon Container */}
                <div
                    className="icon bg-yellow-400 rounded-full"
                    style={{
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={icon}
                        alt="icon"
                        style={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <h3 className="text-lg font-semibold">{heading}</h3>

                {/* Button with Inline-Flex for Alignment */}
                <Link
                    to="/services-details"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:underline"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                    }}
                >
                    <span>{btnText}</span>
                    <BsArrowRight style={{ fontSize: '18px' }} />
                </Link>
            </div>
        </div>
    );
}

export default ServicesOneCard;
