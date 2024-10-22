import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogo = ({ image, altText, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-7 sm:mx-10 md:mx-14 mb-14 mt-4 overflow-hidden flex items-center justify-between p-2 shadow-lg cursor-pointer"
        whileHover={{
          y: -10, // Slight upward motion
          backgroundColor: '#f0f0f0', // Light gray overlay
          transition: { duration: 0.3 }, // Smooth transition
        }}
      >
        <img src={image} alt={altText} className="w-full h-auto object-contain" />
      </motion.div>
    </a>
  );
};

export default CompanyLogo;
