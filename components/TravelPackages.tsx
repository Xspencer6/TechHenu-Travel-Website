import Link from "next/link";
import Image from "next/image";

const TravelPackages = () => {
    // Add to firebase later

    interface Package {
        id: number;
        title: string;
        duration: string;
        thumbnail: string;
        is_popular: boolean;
    }

    const packages = [
        {
            id: 0,
            title: "Baler Tour Package",
            duration: "3 Days 2 Nights, 2 Days 1 Night",
            thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
            is_popular: true,
        },
        {
            id: 1,
            title: "Baguio Tour Package",
            duration: "3 Days 2 Nights, 2 Days 1 Night",
            thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
            is_popular: false,
        },
        {
            id: 2,
            title: "Sagada Tour Package",
            duration: "3 Days 2 Nights, 2 Days 1 Night",
            thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
            is_popular: false,
        },
        {
            id: 3,
            title: "Ilocos Tour Package",
            duration: "3 Days 2 Nights, 2 Days 1 Night",
            thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
            is_popular: false,
        },
        {
            id: 4,
            title: "Vigan/Baguio Tour Package",
            duration: "3 Days 2 Nights, 2 Days 1 Night",
            thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
            is_popular: false,
        },
    ]
    return (
        <section className="py-16 bg-neutral-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Travel Packages
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        dadasdad
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pack) =>
                        <Link
                            key={pack.id}
                            href={`${pack.id}}`}
                            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={pack.thumbnail}
                                    alt={pack.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute top-3 left-3">
                                    {pack.is_popular ?
                                        <span className="bg-amber-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                                            Top Pick
                                        </span>
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {pack.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div className="grid grid-rows-2 gap-2">
                                        {pack.duration.split(",").map((d) => (
                                            <span key={d} className="text-gray-800 px-3 py-1 rounded text-xs font-semibold border shadow">
                                                {d}
                                            </span>
                                        ))}

                                    </div>
                                    <span className="text-gray-800 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                                            Avail Now →
                                        </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/vlogs"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        View All Travel Vlogs
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TravelPackages;