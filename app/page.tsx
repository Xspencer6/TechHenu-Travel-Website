"use client";

import Header from "@/components/layout/Header"
import WhyChooseUs from "@/components/tours/home/WhyChooseUs";
import CustomerReviews from "@/components/tours/home/CustomerReviews"
import Footer from "@/components/layout/Footer"
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <motion.section id="home"
            className="relative h-[600px] flex items-center justify-center bg-[url('assets/images/roadtravel-hero.png')] bg-center bg-cover text-white"
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.2
            }}
        >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1 className="text-5xl md:text-6xl font-bold mb-6"
                    initial={{opacity: 0, y: -70}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3
                    }}
                >
                    Discover Your Next Adventure
                </motion.h1>
                <motion.p className="text-xl md:text-2xl mb-8 text-gray-100"
                    initial={{opacity: 0, y: -70}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.35
                    }}
                >
                    Explore breathtaking destinations and create memories that last a lifetime
                </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a href="/packages"
                        className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                        initial ={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                            delay: 0.35
                  }}
                    >
                      Browse Tours
                  </motion.a>
                  <motion.a href="/destinations"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                        initial ={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                            delay: 0.35
                        }}
                  >
                    Explore Destinations
                  </motion.a>
              </div>
            </div>
        </motion.section>

        <main className="flex-grow">
            <WhyChooseUs />
            <CustomerReviews />
        </main>

        <Footer />
    </div>
  )
}

export default HomePage;
