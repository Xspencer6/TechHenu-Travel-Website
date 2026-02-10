import Image from "next/image"
import Link from "next/link"

interface Destination {
  id: number
  name: string
  image: string
  description: string
  tourCount: number
}

// Sample data - replace with data from Firestore later
const destinations: Destination[] = [
  {
    id: 1,
    name: "Baguio",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    description: "Cool mountain escape known for pine forests, scenic views, and a relaxed city vibe.",
    tourCount: 12
  },
  {
    id: 2,
    name: "Sagada",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    description: "Quiet highland town offering misty mountains, ancient traditions, and soulful adventure.",
    tourCount: 8
  },
  {
    id: 3,
    name: "Ilocos Norte",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    description: "Land of wind-swept coasts, historic landmarks, and dramatic northern landscapes.",
    tourCount: 15
  },
  {
    id: 4,
    name: "Ilocos Sur",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description: "Cultural heartland blending Spanish-era heritage, artisan crafts, and local flavors.",
    tourCount: 10
  },
  {
    id: 5,
    name: "Baler",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description: "Laid-back surf town where golden beaches meet lush mountains and rich history.",
    tourCount: 10
  },
  {
    id: 6,
    name: "Vigan",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description: "Timeless heritage city with cobblestone streets, colonial charm, and living history.",
    tourCount: 6
  },
]

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the world&apos;s most beautiful places and create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {destination.tourCount} Tours Available
                  </span>
                  <span className="text-orange-300 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}
