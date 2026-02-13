import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const DestinationPage = () => {
    // Map to firebase later for final design
    const tour_spots = [
        {
            id: 1,
            name: "Burnham Park",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
            header_desc: "Go for: Peaceful strolls, bike rides, boating",
            description: "This iconic urban park in the heart of Baguio boasts a scenic lake, manicured gardens, and tree‑lined walking paths—perfect for relaxing, picnics, or trying local street food right in the city center.",
        },
        {
            id: 2,
            name: "Mines View Park",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
            header_desc: "Peaceful strolls, bike rides, boating",
            description: "A classic viewpoint overlooking rugged highland terrain and deep valleys, with souvenir stalls and photo spots that capture Baguio’s cool, misty landscape.",
        },
        {
            id: 3,
            name: "La Trinidad Strawberry Farm",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
            header_desc: "Peaceful strolls, bike rides, boating",
            description: "Just outside Baguio, this expansive farm lets visitors pick fresh strawberries (seasonal) and enjoy fresh produce while enjoying sweeping mountain views.",
        },
        {
            id: 4,
            name: "Camp John Hay",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            header_desc: "Peaceful strolls, bike rides, boating",
            description: "A historic woodland retreat with cool pine forests, café spots, historical sites, and bike and walking trails that weave through the old hill station grounds.",
        },
        {
            id: 5,
            name: "Baguio Cathedral (Our Lady of Atonement)",
            header_desc: "Peaceful strolls, bike rides, boating",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            description: "Perched on a hill, this cathedral is known for its vivid stained glass and sweeping views of the city—an iconic symbol of Baguio’s cultural landscape."
        },
        {
            id: 6,
            name: "Session Road",
            header_desc: "Peaceful strolls, bike rides, boating",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
            description: "Baguio’s main thoroughfare is lined with local cafés, restaurants, bakeries, and boutiques—a perfect spot to taste local specialties and unwind."
        },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <section
                className="relative h-[500px] flex items-center justify-center bg-[url('assets/images/baguio-hero.png')] bg-center bg-cover text-white"
            >
                <div className="absolute inset-0 bg-black/20" />
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 text-[#3f280a]">
                        <h2 className="text-5xl font-bold mb-4">
                            Discover Baguio&apos;s City Above the Clouds
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Cool breezes, vibrant markets, and panoramic views make every turn a photo moment.
                        </p>
                    </div>
                    <div className="p-6 text-center mb-12 text-[#3f280a] font-serif text-lg">
                        <p>
                            Perched high in the Cordillera highlands, Baguio is defined by its pine-covered hills,
                            crisp air, and sweeping mountain views. Often called the “Summer Capital of the
                            Philippines,” the city offers a refreshing break from the tropical heat below.
                            Its landscape of rolling terrain and misty mornings shapes both its character
                            and its culture, from scenic parks and gardens to lively markets and art-filled
                            streets. Visitors come to slow down, breathe deeply, and enjoy a blend of natural
                            beauty and city comfort. Whether you&apos;re seeking quiet moments among the pines or
                            vibrant local experiences, Baguio offers a cool escape with a charm all its own.
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