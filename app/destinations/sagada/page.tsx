"use client";

import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import { sagada_spots } from "@/lib/data";

const DestinationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <motion.section
        className="relative h-[500px] flex items-center justify-center bg-[url('assets/images/sagada-hero.png')] bg-center bg-cover text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </motion.section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-[rgba(10,58,63,1)]">
            <motion.h2
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover Sagada&apos;s Misty Highland Mystique
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.325 }}
            >
              Lush forests, echoing caves, and serene mountain trails invite
              visitors to slow down and connect with nature.
            </motion.p>
          </div>
          <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif text-lg">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Tucked in the heart of the Cordillera Mountains, Sagada is a
              serene town where towering cliffs, caves, and pine-covered hills
              meet centuries-old traditions. Known for its hanging coffins and
              breathtaking sunrise views at Kiltepan Peak, the town offers a
              tranquil escape from the bustle of modern life. Verdant trails,
              cascading waterfalls, and cultural experiences like weaving and
              local markets make Sagada a place to connect with both nature and
              heritage. Whether exploring hidden caves or hiking through rice
              terraces, visitors can immerse themselves in a quiet, reflective
              highland world.
            </motion.p>
          </div>
          <TouristSpots tourSpots={sagada_spots} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
