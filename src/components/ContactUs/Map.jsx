import React from 'react';

function Map() {
    return (
        <div id="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1019002701763!2d55.41199!3d25.2932354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f0011c81579%3A0xe871ebf64a1b380!2sWORLD%20OF%20MILLS!5e0!3m2!1sen!2s!4v1697820725684!5m2!1sen!2s"
                frameBorder="0"
                style={{
                    border: '0',
                    width: '100%',
                    height: '400px',
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
    );
}

export default Map;
