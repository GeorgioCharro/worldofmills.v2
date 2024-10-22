import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const MachineItem = ({ machine }) => {
  const { language } = useContext(LanguageContext);

  const machineName = language === 'ar' ? machine.machineName_ar : machine.machineName;
  const description = language === 'ar' ? machine.description_ar : machine.description;

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-visible flex flex-col md:flex-row pt-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#cfac6e] px-6 py-2 rounded-md shadow-lg z-10">
        <h2 className="text-xl font-bold text-black">{machineName}</h2>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-center">
        <p className='mb-4 font-bold text-xl'>Machine Uses:</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 border text-white border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-2 px-4 text-center" colSpan="2">RST-301</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#cfac6e]">
                <td className="py-2 px-4 font-semibold border border-gray-300">Material</td>
                <td className="py-2 px-4 border border-gray-300">Full Stainless Steel</td>
              </tr>
              <tr className='bg-[#353941]'>
                <td className="py-2 px-4 font-semibold border border-gray-300">Roastery Motor</td>
                <td className="py-2 px-4 border border-gray-300">2hp + gearbox</td>
              </tr>
              <tr className="bg-[#cfac6e]">
                <td className="py-2 px-4 font-semibold border border-gray-300">Fan motor</td>
                <td className="py-2 px-4 border border-gray-300">1hp</td>
              </tr>
              <tr className='bg-[#353941]'>
                <td className="py-2 px-4 font-semibold border border-gray-300">Vibrator motor</td>
                <td className="py-2 px-4 border border-gray-300">1hp</td>
              </tr>
              <tr className="bg-[#cfac6e]">
                <td className="py-2 px-4 font-semibold border border-gray-300">Roasting system</td>
                <td className="py-2 px-4 border border-gray-300">Diesel or Gaz burner (Italy)</td>
              </tr>
              <tr className='bg-[#353941]'>
                <td className="py-2 px-4 font-semibold border border-gray-300">Capacity</td>
                <td className="py-2 px-4 border border-gray-300">25 to 50 kg (depending on the consumption)</td>
              </tr>
              <tr className="bg-[#cfac6e]">
                <td className="py-2 px-4 font-semibold border border-gray-300">Voltage</td>
                <td className="py-2 px-4 border border-gray-300">220V or 380V</td>
              </tr>
              <tr className='bg-[#353941]'>
                <td className="py-2 px-4 font-semibold border border-gray-300">Dimensions</td>
                <td className="py-2 px-4 border border-gray-300">100(L) * 120(W) * 230(H) cm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-96 md:w-1/2 md:h-auto flex-1">
        <img src={machine.imgUrls[0]} alt={machineName} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default MachineItem;
