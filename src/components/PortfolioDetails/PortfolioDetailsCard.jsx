import React from 'react';

function PortfolioDetailsCard({ icon, num, heading, text }) {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="single-process-box bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                    <div className="relative w-20 h-20 rounded-full bg-gray-100 flex justify-center items-center">
                        <img src={icon} alt="icon" className="max-w-10 max-h-10" />
                        <span className="absolute -bottom-3 bg-yellow-600 text-white rounded-full px-3 py-1 text-sm">
                            {num}
                        </span>
                    </div>
                </div>
                <div className="content">
                    <h3 className="text-xl font-bold">{heading}</h3>
                    <p className="text-gray-600">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetailsCard;
