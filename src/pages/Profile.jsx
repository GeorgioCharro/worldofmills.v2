import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc, addDoc, collection } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const storage = getStorage();

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const [machineData, setMachineData] = useState({
    machineName: "",
    machineNameAr: "",
    machineType: "Feeder",
    machineUse: "",
    machineUseAr: "",
    material: "",
    materialAr: "",
    dimensions: "",
    dimensionsAr: "",
    voltage: "",
    voltageAr: "",
    capacity: "",
    capacityAr: "",
    RoastingSystem: "",
    RoastingSystemAr: "",
    FanMotor: "",
    FanMotorGearbox: false,
    FanMotorAr: "",
    VibratorMotor: "",
    VibratorMotorGearbox: false,
    VibratorMotorAr: "",
    RoasteryMotor: "",
    RoasteryMotorGearbox: false,
    RoasteryMotorAr: "",
    HeatingSystem: "",
    HeatingSystemAr: "",
    productionCapacity: "",
    productionCapacityAr: "",
    rotationMotorPower: "",
    rotationMotorPowerGearbox: false,
    rotationMotorPowerAr: "",
    craneMotorPower: "",
    craneMotorPowerGearbox: false,
    craneMotorPowerAr: "",
    flippingMotorPower: "",
    flippingMotorPowerGearbox: false,
    flippingMotorPowerAr: "",
    imgFiles: [],
  });

  const machineTypes = ["Feeder", "Filtering", "Halawi", "Chocolate", "Mills", "Nuts", "Tahina", "Thyme and Spices","Others"];

  const machineFields = [
    { id: "machineName", label: "Machine Name", type: "text", isArabic: false },
    {
      id: "machineNameAr",
      label: "Machine Name",
      type: "text",
      isArabic: true,
    },
    {
      id: "machineType",
      label: "Machine Type",
      type: "select",
      options: machineTypes,
      isArabic: false,
    },
    {
      id: "machineUse",
      label: "Machine Use",
      type: "textarea",
      isArabic: false,
    },
    {
      id: "machineUseAr",
      label: "Machine Use",
      type: "textarea",
      isArabic: true,
    },
    { id: "material", label: "Material", type: "text", isArabic: false },
    { id: "materialAr", label: "Material", type: "text", isArabic: true },
    { id: "dimensions", label: "Dimensions", type: "text", isArabic: false },
    { id: "dimensionsAr", label: "Dimensions", type: "text", isArabic: true },
    { id: "voltage", label: "Voltage", type: "text", isArabic: false },
    { id: "voltageAr", label: "Voltage", type: "text", isArabic: true },
    { id: "capacity", label: "Capacity", type: "text", isArabic: false },
    { id: "capacityAr", label: "Capacity", type: "text", isArabic: true },
    {
      id: "RoastingSystem",
      label: "Roasting System",
      type: "text",
      isArabic: false,
    },
    {
      id: "RoastingSystemAr",
      label: "Roasting System",
      type: "text",
      isArabic: true,
    },
    { id: "FanMotor", label: "Fan Motor (HP)", type: "number", isArabic: false, isMotor: true },
    { id: "FanMotorAr", label: "Fan Motor", type: "text", isArabic: true },
    { id: "VibratorMotor", label: "Vibrator Motor (HP)", type: "number", isArabic: false, isMotor: true },
    { id: "VibratorMotorAr", label: "Vibrator Motor", type: "text", isArabic: true },
    { id: "RoasteryMotor", label: "Roastery Motor (HP)", type: "number", isArabic: false, isMotor: true },
    { id: "RoasteryMotorAr", label: "Roastery Motor", type: "text", isArabic: true },
    { id: "HeatingSystem", label: "Heating System", type: "text", isArabic: false },
    { id: "HeatingSystemAr", label: "Heating System", type: "text", isArabic: true },
    { id: "productionCapacity", label: "Production Capacity", type: "text", isArabic: false },
    { id: "productionCapacityAr", label: "Production Capacity", type: "text", isArabic: true },
    { id: "rotationMotorPower", label: "Rotation Motor Power (HP)", type: "number", isArabic: false, isMotor: true },
    { id: "rotationMotorPowerAr", label: "Rotation Motor Power", type: "text", isArabic: true },
    { id: "craneMotorPower", label: "Crane Motor Power (HP)", type: "number", isArabic: false, isMotor: true },
    { id: "craneMotorPowerAr", label: "Crane Motor Power", type: "text", isArabic: true },
    { id: "flippingMotorPower", label: "Flipping Motor Power (HP)", type: "number", isArabic: false, isMotor: true },
    { id: "flippingMotorPowerAr", label: "Flipping Motor Power", type: "text", isArabic: true },
  ];

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
        toast.success("Successfully updated profile details");
      }
    } catch (error) {
      toast.error("Could not update profile details");
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleMachineChange = (e) => {
    const { id, value, files, type, checked } = e.target;
    if (id === "imgFiles") {
        setMachineData((prevState) => ({
            ...prevState,
            imgFiles: Array.from(files),
        }));
    } else if (type === "checkbox") {
        setMachineData((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    } else {
        setMachineData((prevState) => {
            const updatedState = {
                ...prevState,
                [id]: value,
            };
            // Automatically update the Arabic version only for motor fields
            if (!id.endsWith("Ar") && id.includes("Motor")) {
                const arabicFieldId = `${id}Ar`;
                if (arabicFieldId in updatedState) {
                    updatedState[arabicFieldId] = value;
                }
            }
            return updatedState;
        });
    }
};

  const storeImage = async (image) => {
    return new Promise((resolve, reject) => {
      const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
      const storageRef = ref(storage, "images/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Optional: Track upload progress here if needed
        },
        (error) => {
          console.error("Upload failed:", error);
          toast.error("Error uploading image: " + error.message);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              toast.error("Error getting image URL: " + error.message);
              reject(error);
            });
        }
      );
    });
  };

  const handleAddMachine = async (e) => {
    e.preventDefault();
    try {
      const imgUrls = await Promise.all(
        machineData.imgFiles.map((file) => storeImage(file))
      ).catch(() => {
        toast.error("Images not uploaded");
        return;
      });

      if (!imgUrls) return;

      const { imgFiles, ...machineDataWithoutFiles } = machineData;

      // Concatenate motor power values with gearbox information
      const updatedMachineData = { ...machineDataWithoutFiles };
      Object.keys(updatedMachineData).forEach((key) => {
        if (key.endsWith("Motor") && !key.includes("Ar")) {
          const gearboxKey = `${key}Gearbox`;
          updatedMachineData[key] = `${updatedMachineData[key]} HP`;
          updatedMachineData[`${key}Ar`] = `${updatedMachineData[key]}`;
          if (updatedMachineData[gearboxKey]) {
            updatedMachineData[key] += " + gearbox";
            updatedMachineData[`${key}Ar`] += " + ﻋﻠﺒﺔ السرعة";
          }
          delete updatedMachineData[gearboxKey];
        }
      });

      await addDoc(collection(db, "machines"), {
        ...updatedMachineData,
        imgUrls,
        userRef: auth.currentUser.uid,
        timestamp: new Date(),
      });

      toast.success("Machine added successfully");
      setMachineData({
        machineName: "",
        machineNameAr: "",
        machineType: "Feeder",
        machineUse: "",
        machineUseAr: "",
        material: "",
        materialAr: "",
        dimensions: "",
        dimensionsAr: "",
        voltage: "",
        voltageAr: "",
        capacity: "",
        capacityAr: "",
        RoastingSystem: "",
        RoastingSystemAr: "",
        FanMotor: "",
        FanMotorGearbox: false,
        FanMotorAr: "",
        VibratorMotor: "",
        VibratorMotorGearbox: false,
        VibratorMotorAr: "",
        RoasteryMotor: "",
        RoasteryMotorGearbox: false,
        RoasteryMotorAr: "",
        HeatingSystem: "",
        HeatingSystemAr: "",
        productionCapacity: "",
        productionCapacityAr: "",
        rotationMotorPower: "",
        rotationMotorPowerGearbox: false,
        rotationMotorPowerAr: "",
        craneMotorPower: "",
        craneMotorPowerGearbox: false,
        craneMotorPowerAr: "",
        flippingMotorPower: "",
        flippingMotorPowerGearbox: false,
        flippingMotorPowerAr: "",
        imgFiles: [],
      });
    } catch (error) {
      toast.error("Error adding machine");
    }
  };

  return (
    <div className="m-8">
      <div className="flex justify-between">
        <p className="text-3xl text-gray-700 font-bold">My Profile</p>
        <button
          className="btn btn-sm btn-success btn-outline"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <p className="text-gray-700 font-semibold text-lg">
            Personal Details
          </p>
          <button
            className="text-green-500 font-bold"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-bold text-gray-700 mb-2 text-sm">Name</p>
        <label className="input input-bordered flex items-center gap-2 border-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="black"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            id="name"
            value={name}
            onChange={onChange}
            disabled={!changeDetails}
          />
        </label>
      </div>

      <div className="mt-4">
        <p className="font-bold text-gray-700 mb-2 text-sm">Email</p>
        <label className="input input-bordered border-yellow-500 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="black"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
            disabled
          />
        </label>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Machine</h2>
        <form onSubmit={handleAddMachine}>
          {machineFields.map((field) => (
            <div className="mb-4" key={field.id}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={field.id}
              >
                {field.label} {field.isArabic ? "(Arabic)" : "(English)"}
              </label>
              {field.type === "text" && (
                <input
                  type="text"
                  id={field.id}
                  value={machineData[field.id]}
                  onChange={handleMachineChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
              {field.type === "textarea" && (
                <textarea
                  id={field.id}
                  value={machineData[field.id]}
                  onChange={handleMachineChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
              {field.type === "number" && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id={field.id}
                    value={machineData[field.id]}
                    onChange={handleMachineChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <span className="text-sm">HP</span>
                  <input
                    type="checkbox"
                    id={`${field.id}Gearbox`}
                    checked={machineData[`${field.id}Gearbox`]}
                    onChange={handleMachineChange}
                  />
                  <label htmlFor={`${field.id}Gearbox`} className="text-sm">
                    Gearbox
                  </label>
                </div>
              )}
              {field.type === "select" && (
                <select
                  id={field.id}
                  value={machineData[field.id]}
                  onChange={handleMachineChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imgFiles"
            >
              Upload Images
            </label>
            <input
              type="file"
              id="imgFiles"
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              multiple
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Machine
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;