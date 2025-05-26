import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CompanyLogo = ({ image, altText, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-7 sm:mx-10 md:mx-14 mb-14 mt-4 overflow-hidden flex items-center justify-center p-2 shadow-lg cursor-pointer"
        whileHover={{
          y: -10,
          backgroundColor: '#f0f0f0',
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={image}
          alt={altText}
          width={160}
          height={120}
          className="object-contain w-full h-full"
        />
      </motion.div>
    </a>
  );
};

export default CompanyLogo;
