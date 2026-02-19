"use client";

import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";

const DestinationPage = () => {
  const tour_spots = [
    {
      id: 1,
      name: "Calle Crisologo",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      header_desc: "Timeless heritage strolls",
      description:
        "Walk or ride a traditional kalesa down this cobblestone street lined with centuries-old Spanish houses — a living picture of colonial Philippines.",
    },
    {
      id: 2,
      name: "Plaza Burgos / Plaza Salcedo",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      header_desc: "Local life and light shows",
      description:
        "These historic town squares offer a central gathering place, water shows, and a taste of Vigan’s community rhythm.",
    },
    {
      id: 3,
      name: "Vigan Cathedral",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      header_desc: "Earthquake Baroque history",
      description:
        "This grand cathedral, part of the UNESCO-listed historic town, blends Spanish and local architectural influences, anchoring Vigan’s rich cultural roots.",
    },
    {
      id: 4,
      name: "Baluarte Zoo",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      header_desc: "Family fun and wildlife encounters",
      description:
        "Spanning wide savannah-like grounds, this zoo brings visitors up close with exotic animals and interactive exhibits that delight kids and adults alike.",
    },
    {
      id: 5,
      name: "Ilocos Sur Adventure Zone",
      header_desc: "Ziplines and outdoor thrills",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      description:
        "Just outside the city, this outdoor activity hub offers ziplines, kayaking, and challenge courses against a backdrop of river and mountain scenery.",
    },
    {
      id: 6,
      name: "Mindoro Beach",
      header_desc: "Quiet sunset walks",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      description:
        "A short drive from historic sites leads to a calm shoreline with dark sands and sea views — a nice contrast after city explorations.",
    },
  ];

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
          <TouristSpots tourSpots={tour_spots} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
