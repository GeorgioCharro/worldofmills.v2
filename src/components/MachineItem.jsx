import React from 'react';

const MachineItem = ({ machine }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={machine.imgUrls[0]} alt={machine.machineName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{machine.machineName}</h2>
        <p className="text-gray-700">{machine.description}</p>
      </div>
    </div>
  );
};

export default MachineItem;
