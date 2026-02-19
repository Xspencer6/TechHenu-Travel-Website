"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Review {
  id: string;
  customerName: string;
  customerImage?: string;
  rating: number;
  review: string;
  location?: string;
  reviewImage?: string;
  date: string;
  reviewUrl?: string;
}

// Sample data - replace with data from Firestore later
const reviews: Review[] = [
  {
    id: "1",
    customerName: "Anonymous Client",
    customerImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop",
    rating: 5,
    review:
      "Amazing experience! The tour guide was knowledgeable and the destinations were breathtaking. Highly recommend!",
    location: "Baguio Tour Package",
    reviewImage:
      "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/482026314_628382216605364_4781700013255460887_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGvuzNqPHsbHNoTqmUioQQz5kEKrh0eV9zmQQquHR5X3MKdbWUg_OOm4yf5T8eVVRlzClk-dbT-O3QRIC3kHtxk&_nc_ohc=yyKRVE1W_OEQ7kNvwEU1l_4&_nc_oc=Admy_tJce6IZwa6lr4Y2IooxfdM7ksMLh7bHXC5KHA7ReP3P1B6k6Uxl4DRarimuAcs&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=PAJ857umSlW2PRddyxHseg&oh=00_Aft8_Zi4yfWxdHMqfFjJETh7SM96o4gGbQWc6KEHq2I7lg&oe=699CF62A",
    date: "2023-09-26",
    reviewUrl:
      "https://www.facebook.com/share/p/14UJ7Y8e6e7/", // example URL
  },
  {
    id: "2",
    customerName: "Anonymous Client",
    customerImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop",
    rating: 5,
    review:
      "Best travel experience ever! Everything was well-organized and the accommodations were top-notch.",
    location: "Ilocos Tour Package",
    reviewImage:
      "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/480527928_624004147043171_3768540539245032761_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGBkfIyTtNPr8nWS2-Xi0W8Teji1Yt9KmlN6OLVi30qaTu4tNxfGpLfwHWf74hVV9xqu07tRnb-xLbaTckLCVqF&_nc_ohc=n8ZrWLva5uoQ7kNvwHeW5qD&_nc_oc=AdmvjBo1OEe7eaEuU_fUyDY4Piqr8_kSn-xPHUC6PPW5l_qXDiW-Qis1LMmHn6BROfw&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=TsyYqZ5DewR6F_pokWE0cw&oh=00_AfsAgzXZJcAuUryIkXVLfcz7rSUzMIufQCJwmfpneuRuRw&oe=699D06FA",
    date: "2023-09-22",
    reviewUrl:
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02eGst11BzoPhSRqEvZGBs6rzBr5w4jPdiJUZMYzFvCkYmZFy9qCzbQgDpmuFR4Rsol&id=100083007744889", // example URL
  },
  {
    id: "3",
    customerName: "Anonymous Client",
    customerImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop",
    rating: 5,
    review:
      "The trip exceeded all expectations! The itinerary was perfect and we saw so many incredible places.",
    location: "Baguio Tour Package",
    reviewImage:
      "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/478189816_619300600846859_6771092389557776382_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHweo9V8ZO66Q9a8hW_JTGBLUrK1y2yARItSsrXLbIBEsSsnYqTiyehzHmbX2Ca5MX0eFxdbTsHs5u5n5k-o0k_&_nc_ohc=GIakg8rV9wgQ7kNvwE3GF2y&_nc_oc=Adm7wm7xn6jB6NrIjzX2cg6Bpd3aho7_F7OarWl6ghqv6HD01-zCO8Buho0gZw_6bpA&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=ulW7tAOdc_fvm60t_uAD2g&oh=00_Aft24lK9CS0wOhIW1tCAlKvUFVcDqZNOAkDQxmbYwt-8Rw&oe=699CEA4D",
    date: "2023-05-29",
    reviewUrl:
      "https://www.facebook.com/permalink.php?story_fbid=pfbid0u8L12sSRDMEQPfeW35b6E66pibBqghMrTqq9zaWjXh5ibyaPGwHSBXVJqdjEgUXml&id=100083007744889", // example URL
  },
  {
    id: "4",
    customerName: "Anonymous Client",
    customerImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop",
    rating: 5,
    review:
      "Great service and beautiful destinations. The only minor issue was the weather, but that's beyond anyone's control!",
    location: "Boracay Tour Package",
    reviewImage:
      "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/493223035_24137800262488482_2436139229207833098_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG_8lhln5-xYBm9jrDUwHwIMvO-h7vtkyAy876Hu-2TIOUJ1t3VZLAKkw6f9X1ZCUu3NJQg2YRD-sYCXpbRvzhs&_nc_ohc=ehwTSRVd7_AQ7kNvwEX46UP&_nc_oc=AdluMfEfLzWBvqKiXRosy6BeUzo8fTyd75jQFtSW-Bl6CPkj1ZaC2m1l1jUbywg6eMw&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=eY32F8pXwYEGdeXLSHZtaQ&oh=00_AfsoTO_pXvkXZBHPNQi7is0aVxygnVoFfhUkHS7rkLTkyQ&oe=699D0A99",
    date: "2023-03-30",
    reviewUrl:
      "https://www.facebook.com/share/p/1AbudKvFTs/", // example URL
  },
];

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
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
          >
            Real experiences from travelers who have explored the world with us
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
              href={review.reviewUrl || "https://www.facebook.com/profile.php?id=100083007744889"}
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
