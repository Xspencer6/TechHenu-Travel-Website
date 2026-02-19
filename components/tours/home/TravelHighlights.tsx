"use client";

import Highlights from "../destination/HighLights";
import { motion } from "framer-motion";

export default function TravelHighlights() {
  return (
    <motion.section
      id="vlogs"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Travel <span className="text-orange-600">Highlights</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.375 }}
          >
            Experience the highlights of every journey.
          </motion.p>
        </div>
        <Highlights />
      </div>
    </motion.section>
  );
}
