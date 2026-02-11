import TouristSpots from "@/components/tours/destPage/TouristSpots";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const DestinationPage = () => {

    const tour_spots = [
        {
            id: 1,
            name: "Sumaguing Cave",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
            header_desc: "Spelunking adventure",
            description: "Nicknamed “Big Cave,” this guided cave system presents dramatic limestone formations and tunnels—ideal for explorers with sturdy shoes and a sense of adventure.",
        },
        {
            id: 2,
            name: "Bomod‑ok Falls",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
            header_desc: "Hike & waterfall swim",
            description: "A scenic trek through rice terraces leads to a tall, cool waterfall where visitors can swim or relax beside cascading natural pools.",
        },
        {
            id: 3,
            name: "Kiltepan Peak",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
            header_desc: "Sunrise views & sea of clouds",
            description: "This early‑morning viewpoint rewards visitors with breathtaking vistas over rolling hills and clouds floating through deep valleys at dawn.",
        },
        {
            id: 4,
            name: "Echo Valley & Hanging Coffins",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            header_desc: "Culture & nature walk",
            description: "A short trail through lush forests leads to cliff‑side locations with traditional hanging coffins and echoing rock formations—an iconic Sagada cultural experience.",
        },
        {
            id: 5,
            name: "Sagada Weaving",
            header_desc: "Cultural crafts & souvenirs",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            description: "A heritage weaving center where you can observe traditional textile‑making and take home handcrafted inabel items."
        },
        {
            id: 6,
            name: "Lake Danum",
            header_desc: "Relaxing sunset stroll",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
            description: "A peaceful mountain lake framed by pine forests—ideal for picnics, reflections, and watching the sun dip over still waters."
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
                            Discover Sagada&apos;s Misty Highland Mystique
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Lush forests, echoing caves, and serene mountain trails invite visitors to slow down and connect with nature.
                        </p>
                    </div>
                    <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif text-lg">
                        <p>
                            Tucked in the heart of the Cordillera Mountains, Sagada is a serene town where towering cliffs, caves, and
                            pine-covered hills meet centuries-old traditions. Known for its hanging coffins and breathtaking sunrise views
                            at Kiltepan Peak, the town offers a tranquil escape from the bustle of modern life. Verdant trails, cascading 
                            waterfalls, and cultural experiences like weaving and local markets make Sagada a place to connect with both nature 
                            and heritage. Whether exploring hidden caves or hiking through rice terraces, visitors can immerse themselves in a 
                            quiet, reflective highland world.
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