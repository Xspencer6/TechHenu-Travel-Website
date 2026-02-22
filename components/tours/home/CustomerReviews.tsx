"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { reviews } from "@/lib/data";

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const dotCount = Math.ceil(reviews.length / itemsPerView);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dotCount);
    }, 5000); // 5 seconds per step

    return () => clearInterval(interval);
  }, [dotCount]);

  const getVisibleReviews = () => {
    const start = currentIndex;
    const end = start + itemsPerView;

    return reviews.slice(start, end); // slice reviews to proper indices
  };

  const visibleReviews = getVisibleReviews();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <motion.section
      id="reviews"
      className="py-16 bg-gradient-to-br from-orange-50 to-indigo-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.275,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.375,
            }}
          >
            Shared Memories, Top Ratings
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
          >
            A look at where our clients have been lately. Thank you for the
            5-star adventures and for letting us share your world!
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            duration: 0.1,
          }}
        >
          {visibleReviews.map((review) => (
            <a
              key={review.id}
              href={
                review.reviewUrl ||
                "https://www.facebook.com/profile.php?id=100083007744889"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-5 flex flex-col h-full">
                {/* Header: Facebook badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {review.customerImage ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={review.customerImage}
                          alt={review.customerName}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                        {review.customerName.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {review.customerName}
                      </h3>
                      {review.location && (
                        <p className="text-xs text-gray-500">
                          {review.location}
                        </p>
                      )}
                      <div className="flex items-center space-x-1 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-lg leading-none">
                      f
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-800 text-sm mb-3 leading-relaxed line-clamp-4">
                  &quot;{review.review}&quot;
                </p>

                {/* Review Image */}
                {review.reviewImage && (
                  <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3">
                    <Image
                      src={review.reviewImage}
                      alt={`Review by ${review.customerName}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                  <p>
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="font-medium text-[#1877F2] group-hover:underline">
                    View on Facebook
                  </p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Pagination dots (dots per item slice) */}
        <motion.div
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
          }}
        >
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-orange-600"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.425,
          }}
        >
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100083007744889"
              target="_blank"
            >
              Read More Reviews
            </a>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
