import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function ServicesOneCard({ bgImg, icon, heading, btnText }) {
    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-item service-1 relative">
                {/* Background Image */}
                <div className="relative w-full h-48">
                    <Image
                        src={bgImg}
                        alt="service background"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>

                {/* Icon Container */}
                <div
                    className="icon bg-yellow-400 rounded-full mx-auto -mt-12 relative z-10"
                    style={{
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={icon}
                        alt="icon"
                        width={60}
                        height={60}
                        objectFit="contain"
                    />
                </div>

                {/* Content */}
                <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold">{heading}</h3>
                    <Link href="/services" legacyBehavior>
                        <a
                            className="inline-flex items-center space-x-2 text-blue-600 hover:underline mt-2"
                            style={{
                                fontWeight: 'bold',
                            }}
                        >
                            <span>{btnText}</span>
                            <BsArrowRight style={{ fontSize: '18px' }} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicesOneCard;
