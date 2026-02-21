"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type TourSpot = {
  id: number;
  name: string;
  image: string;
  header_desc: string;
  description: string;
};

type TouristSpotsProps = {
  tourSpots: TourSpot[];
};

export default function TouristSpots({ tourSpots }: TouristSpotsProps) {
  return (
    <>
      <div className="inline-block mb-6">
        <h3 className="text-3xl font-bold text-orange-800 underline">
          Popular spots
        </h3>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {tourSpots.map((spots) => (
            <div
              key={spots.id}
              className="group relative overflow-hidden py-5 px-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={spots.image}
                  alt={spots.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="py-2">
                <h1 className="text-2xl font-bold text-orange-800">
                  {spots.name}
                </h1>
              </div>
              <div className="text-lg text-[#3f280a] font-serif">
                <p>
                  <span className="font-bold">Go for: </span>
                  {spots.header_desc}
                </p>
                <div className="border-t border-gray-300 my-4" />
                <p>{spots.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
