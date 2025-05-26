import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function SevicesTwoCard({ thumbnail, icon, heading, text }) {
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    style={{
                        backgroundImage: `url(${thumbnail.src})`,
                    }}
                />
                <div className="content">
                    <div className="case-cat">
                        <Link href="/services-details" legacyBehavior>
                            <a>{icon}</a>
                        </Link>
                    </div>
                    <h3>
                        <Link href="/services-details" legacyBehavior>
                            <a>{heading}</a>
                        </Link>
                    </h3>
                    <p>{text}</p>
                    <Link href="/services-details" legacyBehavior>
                        <a className="read-btn">
                            Read More <BsArrowRight />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SevicesTwoCard;
