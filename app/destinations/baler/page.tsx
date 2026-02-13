import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const DestinationPage = () => {

    const tour_spots = [
        {
            id: 1,
            name: "Sabang Beach",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
            header_desc: "Surf culture and waves",
            description: "This broad, rolling stretch of Pacific coastline is famous among surfers and beach lovers for consistent waves and relaxed seaside energy.",
        },
        {
            id: 2,
            name: "Dicasalarin Cove",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
            header_desc: "Secluded beach camping",
            description: "Hidden away from the main town, this white-sand cove is ideal for camping, relaxing beside the Pacific, and soaking in serenity.",
        },
        {
            id: 3,
            name: "Baler Church (San Luis Obispo Parish)",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
            header_desc: "Heritage and quiet reflection",
            description: "One of the oldest churches in the region, this historic parish witnessed pivotal events in Philippine history and stands peacefully amid town life.",
        },
        {
            id: 4,
            name: "Museo de Baler",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            header_desc: "Local history and exhibits",
            description: "Step inside to learn about Baler’s past, including the famed Siege of Baler, presidential stories, and cultural milestones in Aurora.",
        },
        {
            id: 5,
            name: "Diguisit Beach & Rock Formations",
            header_desc: "Scenic shorelines and sunrise views",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            description: "Rocky outcrops and calm waters make this a beautiful sunrise destination, with tide-pools and dramatic seascapes to enjoy."
        },
        {
            id: 6,
            name: "Quezon Park",
            header_desc: "Leisurely walks and shade",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
            description: "A leafy park in the heart of Baler town where locals and visitors alike enjoy shaded paths, open lawns, and moments of relaxation between beach excursions."
        },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <section
                className="relative h-[500px] flex items-center justify-center bg-[url('assets/images/sagada-hero.png')] bg-center bg-cover text-white"
            >
                <div className="absolute inset-0 bg-black/20" />
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 text-[rgba(10,58,63,1)]">
                        <h2 className="text-5xl font-bold mb-4">
                            Ride the Waves in Baler&apos;s Coastal Escape
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Surfing, sun-kissed beaches, and dramatic cliffs make Baler a haven for adventure and relaxation alike.
                        </p>
                    </div>
                    <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif">
                        <p>
                            Situated along the northeastern coast of Luzon, Baler is a laid-back town where the mountains meet the sea. Its long 
                            stretches of sandy beaches, rolling waves, and forested hills draw both surfers and nature lovers. Visitors can 
                            explore historical landmarks, trek to scenic viewpoints, or simply relax beside the bay. With a blend of natural 
                            beauty, surf culture, and quiet charm, Baler offers a refreshing coastal getaway that rejuvenates the body and spirit.
                        </p>
                    </div>
                    <TouristSpots tourSpots={tour_spots} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default DestinationPage;