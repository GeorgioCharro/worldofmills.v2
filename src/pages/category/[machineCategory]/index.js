import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import MachineItem from '../../../components/MachineItem';

export default function CategoryPage({ machines, machineCategory }) {
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

// Serialize Firestore timestamps
const serializeTimestamps = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] =
      value instanceof Date
        ? value.toISOString()
        : value?.toDate?.()
        ? value.toDate().toISOString()
        : value;
    return acc;
  }, {});
};

export async function getServerSideProps(context) {
  const { machineCategory } = context.params;

  try {
    const q = query(
      collection(db, 'machines'),
      where('machineType', '==', machineCategory)
    );
    const querySnapshot = await getDocs(q);

    const machinesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...serializeTimestamps(doc.data()),
    }));

    return {
      props: {
        machines: machinesData,
        machineCategory,
      },
    };
  } catch (error) {
    console.error('Error fetching machines:', error);
    return {
      props: {
        machines: [],
        machineCategory,
      },
    };
  }
}
