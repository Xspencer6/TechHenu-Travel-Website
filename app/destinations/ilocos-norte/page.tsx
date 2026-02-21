"use client";

import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import { ilocos_nor_spots } from "@/lib/data";

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
              Discover Ilocos Norte&apos;s Windswept Wonders
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.325 }}
            >
              Towering windmills, rugged coastlines, and historic landmarks make
              every journey a scenic adventure.
            </motion.p>
          </div>
          <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif text-lg">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Ilocos Norte stretches along the northernmost coast of Luzon,
              where windswept beaches meet dramatic cliffs and centuries-old
              heritage sites. From the iconic Bangui Windmills to the pristine
              sands of Saud Beach, the region offers a blend of nature, history,
              and vibrant culture. Travelers can explore colonial churches,
              marvel at limestone formations, or ride the coastal roads that
              frame the South China Sea. Ilocos Norte is a destination of
              contrasts—where modern energy meets timeless landscapes, and
              adventure greets every visitor at the horizon.
            </motion.p>
          </div>
          <TouristSpots tourSpots={ilocos_nor_spots} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
