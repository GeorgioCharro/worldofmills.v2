import Image from "next/image";
import thymeImage from "../../assets/thymeandspices.webp"; // Make sure this path is correct

export default function TestCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 w-64">
          <div className="p-4 flex justify-center">
            <Image
              src={thymeImage}
              alt="Thyme and Spices"
              width={160}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="py-3 px-4 text-center">
            <h2 className="text-lg font-bold text-black hover:underline">
              Thyme And Spices Machines
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
