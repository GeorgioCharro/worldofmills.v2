import React from 'react';

function IconBox({ icon, heading, text }) {
    return (
        <div className="single-icon-box text-center p-6 rounded-lg shadow-md bg-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full mb-4">
                <div className="text-3xl">{icon}</div>
            </div>
            <div className="content">
                <h3 className="text-lg font-semibold mb-2">{heading}</h3>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
}

export default IconBox;
