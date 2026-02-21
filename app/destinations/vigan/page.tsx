"use client";

import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import { vigan_spots } from "@/lib/data";

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
              Step Back in Time in Vigan&apos;s Heritage Streets
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.325 }}
            >
              Cobblestone roads, ancestral homes, and golden sunsets turn every
              stroll into a journey through history.
            </motion.p>
          </div>
          <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Recognized as a UNESCO World Heritage City, Vigan is one of the
              best-preserved Spanish colonial towns in Asia. Its iconic Calle
              Crisologo, horse-drawn kalesas, and centuries-old architecture
              create a setting where past and present coexist effortlessly.
              Visitors can explore museums, taste authentic Ilocano cuisine, and
              watch the evening lights glow across historic plazas. Compact yet
              rich in character, Vigan offers an immersive cultural escape
              perfect for a focused city getaway.
            </motion.p>
          </div>
          <TouristSpots tourSpots={vigan_spots} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
