"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FBMetaData {
  id: number;
  header: string;
  description: string;
  link: string;
  date: string;
  comment_no: number;
}

const meta_data: FBMetaData[] = [
  {
    id: 0,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 1,
  },
  {
    id: 1,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 2,
  },
  {
    id: 2,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 7,
  },
  {
    id: 3,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 9,
  },
  {
    id: 4,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 10,
  },
  {
    id: 5,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 3,
  },
  {
    id: 6,
    header: "dasasdfasf",
    description: "sasassas",
    link: "",
    date: "1/1/1902",
    comment_no: 18,
  },
];

export default function Highlights() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const items = 3;
  const dotCount = Math.ceil(meta_data.length / items);

  useEffect(() => {
    const view = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % dotCount);
    }, 3000);

    return () => clearInterval(view);
  }, [dotCount]);

  const handleHighlight = () => {
    const start = currentHighlight * items;
    const end = start + items;

    return meta_data.slice(start, end);
  };

  const highlights = handleHighlight();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {highlights.map((data) => (
          <motion.div
            key={data.id}
            className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative">
              <a href="#">
                <Image className="w-full" fill src={""} alt={""} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href={data.link}
                className="font-medium text-lg text-gray-800 hover:text-orange-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                {data.header}
              </a>
              <p className="text-gray-500 text-sm">{data.description}</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <span className="ml-1">{data.date}</span>
              </span>
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  className="h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <span className="ml-1">{data.comment_no} Comments</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: dotCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to review ${index + 1}`}
            onClick={() => setCurrentHighlight(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentHighlight
                ? "w-6 bg-orange-600"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
