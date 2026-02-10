import Image from "next/image"

interface Review {
  id: string
  customerName: string
  customerImage?: string
  rating: number
  review: string
  location?: string
  reviewImage?: string
  date: string
}

// Sample data - replace with data from Firestore later
const reviews: Review[] = [
  {
    id: "1",
    customerName: "Jennifer Martinez",
    customerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    review: "Amazing experience! The tour guide was knowledgeable and the destinations were breathtaking. Highly recommend!",
    location: "Bali, Indonesia",
    reviewImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
    date: "2024-01-20"
  },
  {
    id: "2",
    customerName: "Robert Kim",
    customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    review: "Best travel experience ever! Everything was well-organized and the accommodations were top-notch.",
    location: "Santorini, Greece",
    reviewImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
    date: "2024-01-18"
  },
  {
    id: "3",
    customerName: "Amanda Thompson",
    customerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    review: "The trip exceeded all expectations! The itinerary was perfect and we saw so many incredible places.",
    location: "Tokyo, Japan",
    reviewImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    date: "2024-01-15"
  },
  {
    id: "4",
    customerName: "Michael Brown",
    customerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 4,
    review: "Great service and beautiful destinations. The only minor issue was the weather, but that's beyond anyone's control!",
    location: "Paris, France",
    reviewImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
    date: "2024-01-12"
  },
]

export default function CustomerReviews() {
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
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from travelers who have explored the world with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Customer Info */}
              <div className="flex items-center space-x-4 mb-4">
                {review.customerImage ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.customerImage}
                      alt={review.customerName}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                    {review.customerName.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">
                    {review.customerName}
                  </h3>
                  {review.location && (
                    <p className="text-sm text-gray-500">{review.location}</p>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;{review.review}&quot;
              </p>

              {/* Review Image */}
              {review.reviewImage && (
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={review.reviewImage}
                    alt={`Review by ${review.customerName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Date */}
              <p className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}
