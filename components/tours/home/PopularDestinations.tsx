"use client";

import { destinations } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  tourCount: number;
}

export default function PopularDestinations() {
  const popularDest = destinations;
  return (
    <motion.section
      id="destinations"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Popular <span className="text-orange-600">Destinations</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Discover the world&apos;s most beautiful places and create
            unforgettable memories
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
        >
          {popularDest.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.name.toLowerCase().split(/\s+/).join("-")}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {destination.tourCount} Tours Available
                  </span>
                  <span className="text-orange-300 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
