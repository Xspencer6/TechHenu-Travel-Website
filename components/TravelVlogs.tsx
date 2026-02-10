import Image from "next/image"
import Link from "next/link"

interface Vlog {
  id: string
  title: string
  thumbnail: string
  author: string
  authorImage?: string
  date: string
  views: number
  category: string
}

// Sample data - replace with data from Firestore later
const vlogs: Vlog[] = [
  {
    id: "1",
    title: "Exploring the Hidden Temples of Angkor Wat",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "2024-01-15",
    views: 12500,
    category: "Adventure"
  },
  {
    id: "2",
    title: "A Week in the Swiss Alps: Mountain Adventures",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    author: "Mike Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "2024-01-10",
    views: 18900,
    category: "Nature"
  },
  {
    id: "3",
    title: "Street Food Tour Through Bangkok Night Markets",
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    author: "Emma Davis",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "2024-01-08",
    views: 22100,
    category: "Food"
  },
  {
    id: "4",
    title: "Safari Experience in Serengeti National Park",
    thumbnail: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    author: "David Wilson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    date: "2024-01-05",
    views: 15600,
    category: "Wildlife"
  },
  {
    id: "5",
    title: "Island Hopping in the Philippines",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    author: "Lisa Anderson",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    date: "2024-01-03",
    views: 19800,
    category: "Beach"
  },
  {
    id: "6",
    title: "Northern Lights Adventure in Iceland",
    thumbnail: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=600&fit=crop",
    author: "James Taylor",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "2024-01-01",
    views: 31200,
    category: "Nature"
  },
]

export default function TravelVlogs() {
  return (
    <section id="vlogs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Travel Vlogs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get inspired by real travel experiences and adventures from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vlogs.map((vlog) => (
            <Link
              key={vlog.id}
              href={`/vlogs/${vlog.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {vlog.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                  {vlog.views.toLocaleString()} views
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {vlog.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {vlog.authorImage && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={vlog.authorImage}
                          alt={vlog.author}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        {vlog.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(vlog.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/vlogs"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Travel Vlogs
          </Link>
        </div>
      </div>
    </section>
  )
}
