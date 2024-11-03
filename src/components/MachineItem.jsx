import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const MachineItem = ({ machine }) => {
  const { language } = useContext(LanguageContext);

  // Language-based rendering logic
  const machineName =
    language === "ar" ? machine.machineNameAr : machine.machineName;
  const machineUse =
    language === "ar" ? machine.machineUseAr : machine.machineUse;
  const material = language === "ar" ? machine.materialAr : machine.material;
  const capacity = language === "ar" ? machine.capacityAr : machine.capacity;
  const voltage = language === "ar" ? machine.voltageAr : machine.voltage;
  const dimensions =
    language === "ar" ? machine.dimensionsAr : machine.dimensions;
  const heatingSystem =
    language === "ar" ? machine.HeatingSystemAr : machine.HeatingSystem;
  const vibratorMotor =
    language === "ar" ? machine.VibratorMotorAr : machine.VibratorMotor;
  const fanMotor = language === "ar" ? machine.FanMotorAr : machine.FanMotor;
  const roasteryMotor =
    language === "ar" ? machine.RoasteryMotorAr : machine.RoasteryMotor;
  // Helper function to render a table row only if the value is present and not "HP"
  const renderRow = (label, value) => {
    if (!value || value.trim() === "" || value.trim().toLowerCase() === "hp")
      return null;
    return (
      <tr className={label === "Voltage" ? "bg-[#cfac6e]" : "bg-[#353941]"}>
        <td className="py-2 px-4 font-semibold border border-gray-300">
          {label}
        </td>
        <td className="py-2 px-4 border border-gray-300">{value}</td>
      </tr>
    );
  };

  return (
    <div className="relative my-10 bg-white shadow-lg rounded-lg overflow-visible flex flex-col md:flex-row pt-10">
      {/* Machine Name Header */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#cfac6e] px-6 py-2 rounded-md shadow-lg z-10">
        <h2 className="md:text-xl text-xs font-bold text-black">
          {machineName}
        </h2>
      </div>

      {/* Machine Details */}
      <div className="p-4 flex-1 flex flex-col justify-center">
        {machineUse && (
          <>
            <p className="mb-4 font-bold text-xl">Machine Uses:</p>
            <p className="text-gray-700 mb-4">{machineUse}</p>
          </>
        )}

        {/* Details Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 border text-white border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-2 px-4 text-center" colSpan="2">
                  Machine Details
                </th>
              </tr>
            </thead>
            <tbody>
              {renderRow("Material", material)}
              {renderRow("Roastery Motor", roasteryMotor)}
              {renderRow("Fan Motor", fanMotor)}
              {renderRow("Vibrator Motor", vibratorMotor)}
              {renderRow("Heating System", heatingSystem)}
              {renderRow("Capacity", capacity)}
              {renderRow("Voltage", voltage)}
              {renderRow("Dimensions", dimensions)}
            </tbody>
          </table>
        </div>
      </div>

      {/* Machine Image */}
      <div className="w-full md:w-1/2 flex-1 flex items-center justify-center">
        {machine.imgUrls.length > 0 && (
          <div className="w-full h-96 md:h-[500px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={machine.imgUrls[0]}
              alt={machineName}
              className="w-full h-full object-contain p-4 object-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineItem;
