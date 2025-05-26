import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import MachineItem from "../../components/MachineItem";

function Category() {
  const { machineCategory } = useParams();
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const q = query(
          collection(db, "machines"),
          where("machineType", "==", machineCategory)
        );
        const querySnapshot = await getDocs(q);
        const machinesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMachines(machinesData);
      } catch (error) {
        console.error("Error fetching machines: ", error);
      }
    };

    fetchMachines();
  }, [machineCategory]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Machines for {machineCategory}
      </h1>
      <div className="flex flex-col gap-8">
        {machines.length > 0 ? (
          machines.map((machine) => (
            <div key={machine.id} className="w-full">
              <MachineItem machine={machine} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">
            No machines found for this category. {machineCategory}
          </p>
          
        )}
      </div>
    </div>
  );
}

export default Category;
