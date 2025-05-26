import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Image from "next/image";

const MachineItem = ({ machine }) => {
  const { language } = useContext(LanguageContext);

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

  const renderRow = (label, value) => {
    if (!value || value.trim() === "" || value.trim().toLowerCase() === "hp")
      return null;

    // Background colors from Tailwind replaced with inline style here
    const bgColor = label === "Voltage" ? "#cfac6e" : "#353941";
    const textColor = label === "Voltage" ? "black" : "white";

    return (
      <tr style={{ backgroundColor: bgColor, color: textColor }}>
        <td className="py-2 px-3 fw-semibold border border-secondary">{label}</td>
        <td className="py-2 px-3 border border-secondary">{value}</td>
      </tr>
    );
  };

  return (
    <div
      className="card my-4"
      style={{ overflow: "visible", position: "relative" }}
    >
      {/* Machine Name Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#cfac6e",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.375rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          zIndex: 10,
        }}
      >
        <h2 className="fw-bold mb-0" style={{ fontSize: "1.25rem", color: "black" }}>
          {machineName}
        </h2>
      </div>

      <div className="row g-0">
        {/* Machine Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4">
          {machineUse && (
            <>
              <p className="mb-3 fw-bold fs-4">Machine Uses:</p>
              <p className="text-muted mb-4">{machineUse}</p>
            </>
          )}

          {/* Details Table */}
          <div className="table-responsive">
            <table className="table table-bordered text-white mb-0" style={{ backgroundColor: "#212529" }}>
              <thead>
                <tr style={{ backgroundColor: "black" }}>
                  <th className="text-center" colSpan="2">
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
        <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
          {machine.imgUrls?.length > 0 && (
            <div
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                backgroundColor: "#f8f9fa",
                borderRadius: "0.375rem",
                overflow: "hidden",
                padding: "1rem",
              }}
            >
              <Image
                src={machine.imgUrls[0]}
                alt={machineName}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineItem;
