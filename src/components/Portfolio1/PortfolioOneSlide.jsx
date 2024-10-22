import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function PortfolioOneSlide({ image, category, client, title, desc, btnText }) {
    return (
        <div className="single-project">
            <div className="project-contents">
                <div className="row">
                    {/* Project Details */}
                    <div className="project-details col-lg-4 offset-lg-1 pl-lg-0 order-2 order-lg-1 col-12">
                        <div className="project-meta">
                            {/* Category and Client Info in Flexbox */}
                            <div className="flex items-center space-x-4">
                                <a href="/" className="project-cat">
                                    {category}
                                </a>
                                <div className="client-info flex items-center space-x-2">
                                    <AiOutlineUser />
                                    <span>Client: {client}</span>
                                </div>
                            </div>
                        </div>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <Link to="/project-details" className="read-btn theme-btn">
                            {btnText}
                        </Link>
                    </div>

                    {/* Project Thumbnail */}
                    <div className="project-thumbnail col-lg-5 offset-lg-1 p-lg-0 order-1 order-lg-2 col-12">
                        <a
                            href="/"
                            className="popup-gallery bg-cover"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            {null}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioOneSlide;
