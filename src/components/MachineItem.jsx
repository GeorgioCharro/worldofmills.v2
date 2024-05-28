import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const MachineItem = ({ machine }) => {
  const { language } = useContext(LanguageContext);

  const machineName = language === 'ar' ? machine.machineName_ar : machine.machineName;
  const description = language === 'ar' ? machine.description_ar : machine.description;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={machine.imgUrls[0]} alt={machineName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{machineName}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default MachineItem;
