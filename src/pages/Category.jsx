import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import MachineItem from '../components/MachineItem';

function Category() {
  const { machineCategory } = useParams();
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      const q = query(collection(db, 'machines'), where('type', '==', machineCategory));
      const querySnapshot = await getDocs(q);
      const machinesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMachines(machinesData);
    };

    fetchMachines();
  }, [machineCategory]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Machines for {machineCategory}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {machines.map(machine => (
          <MachineItem key={machine.id} machine={machine} />
        ))}
      </div>
    </div>
  );
}

export default Category;

