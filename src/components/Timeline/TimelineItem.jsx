import React from 'react';

function TimelineItem({ year, icon, heading, text, transform }) {
    return (
        <div className={`single-time-line ${transform}`}>
            <h2 className="text-center text-2xl font-bold mb-4">{year}</h2>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full mb-4">
                <div className="text-3xl">{icon}</div>
            </div>
            <div className="content text-center">
                <h4 className="text-lg font-semibold mb-2">{heading}</h4>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
}

export default TimelineItem;
