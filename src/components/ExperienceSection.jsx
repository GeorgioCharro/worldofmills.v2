import React from "react";

const ExperienceSection = ({ ExperienceImage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-16 px-8 gap-12 md:gap-24">
      {/* Left Section - The Number with Image */}
      <div className="relative flex items-center justify-center w-full md:w-auto overflow-hidden">
        {/* Background Image */}
        <img
          src={ExperienceImage}
          alt="Experience"
          className="w-full h-full object-contain md:object-cover mix-blend-overlay"
        />
        {/* Large Number */}
        <h1 className="absolute text-white text-[14rem] md:text-[20rem] font-extrabold z-10 mix-blend-overlay">
          30
        </h1>
      </div>

      {/* Right Section - Content */}
      <div className="max-w-lg">
        <p className="text-gray-500 mb-2">Easily import the whole Industry</p>
        <h2 className="text-5xl font-bold text-black mb-6">
          Amwerk is always interested.
        </h2>
        <p className="text-lg font-semibold text-black mb-6">
          <span className="text-yellow-500">|</span> Capitalise on low hanging
          fruit to identify a ballpark value added activity to beta test.
        </p>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button className="#cfac6e hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg shadow-md transition duration-300">
          Get In Touch →
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
