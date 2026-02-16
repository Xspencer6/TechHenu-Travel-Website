"use client";

import { provisions } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const provision = provisions;

    return (
        <motion.section id="about" className="py-16 bg-white"
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.25
            }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl font-bold text-gray-800 mb-4"
                            initial={{opacity: 0, y: -70}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                delay: 0.35
                            }}
                    >
                        Why Choose NJOY Travel and Tours?
                    </motion.h2>
                    <motion.p className="text-gray-600 text-lg max-w-2xl mx-auto"
                            initial={{opacity: 0, y: -70}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                delay: 0.375
                            }}
                    >
                        Quality Service is assured
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {provision.map((provide) => (
                        <motion.div key={provide.what}
                            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-110 max-w-96"
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                    delay: 0.3,
                                    type: "spring",
                                    duration: 0.1
                            }}
                        >
                            <div className="group relative h-64 w-full">
                                <div className="p-2 h-16 flex justify-center">
                                    <Image src={provide.icon} 
                                        alt={"icon"} 
                                        width={50} 
                                        height={50}
                                        className="opacity-70 group-hover:translate-y-1 transition"
                                    />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                        {provide.what}
                                    </h2>
                                    <div className="p-2">
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                            {provide.why}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}