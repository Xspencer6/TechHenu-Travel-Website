"use client";

import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import { baguio_spots } from "@/lib/data";

const DestinationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <motion.section
        className="relative h-[500px] flex items-center justify-center bg-[url('assets/images/baguio-hero.png')] bg-center bg-cover text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </motion.section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-[#3f280a]">
            <motion.h2
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover Baguio&apos;s City Above the Clouds
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.325 }}
            >
              Cool breezes, vibrant markets, and panoramic views make every turn
              a photo moment.
            </motion.p>
          </div>
          <div className="p-6 text-center mb-12 text-[#3f280a] font-serif text-lg">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Perched high in the Cordillera highlands, Baguio is defined by its
              pine-covered hills, crisp air, and sweeping mountain views. Often
              called the “Summer Capital of the Philippines,” the city offers a
              refreshing break from the tropical heat below. Its landscape of
              rolling terrain and misty mornings shapes both its character and
              its culture, from scenic parks and gardens to lively markets and
              art-filled streets. Visitors come to slow down, breathe deeply,
              and enjoy a blend of natural beauty and city comfort. Whether
              you&apos;re seeking quiet moments among the pines or vibrant local
              experiences, Baguio offers a cool escape with a charm all its own.
            </motion.p>
          </div>
          <TouristSpots tourSpots={baguio_spots} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
