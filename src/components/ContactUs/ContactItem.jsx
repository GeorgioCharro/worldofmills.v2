import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function ContactItem({ icon, heading, text, item1, item2 }) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
                {/* Top Part */}
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="text-2xl text-yellow-500">{icon}</div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">{heading}</h4>
                        <span className="text-gray-500">{text}</span>
                    </div>
                </div>

                {/* Bottom Part */}
                <div className="flex justify-between items-center">
                    <div>
                        <p>{item1}</p>
                        <p>{item2}</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <BsArrowRight className="text-xl text-gray-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactItem;
