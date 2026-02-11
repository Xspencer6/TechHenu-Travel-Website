import TouristSpots from "@/components/tours/destPage/TouristSpots";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const DestinationPage = () => {

    const tour_spots = [
        {
            id: 1,
            name: "Bantay Bell Tower & Church",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
            header_desc: "Historic views and heritage",
            description: "This hilltop belfry offers sweeping vistas over Vigan and countryside, and its adjacent church reflects Spanish colonial history and architecture.",
        },
        {
            id: 2,
            name: "Pagburnayan (Burnay Pottery)",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
            header_desc: "Hands on culture and crafts",
            description: "See traditional Ilocano pottery in action — form clay on a wheel and learn an art that’s been practiced here for generations.",
        },
        {
            id: 3,
            name: "Aw-asen Falls",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
            header_desc: "Nature trek and waterfall cool-down",
            description: "A hidden highland waterfall with a refreshing plunge pool — perfect for cooling off after hiking through lush surroundings.",
        },
        {
            id: 4,
            name: "Sangbay ni Ragsak Falls",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            header_desc: "Picturesque waterfall hikes",
            description: "Surrounded by rainforests and verdant cliffs, this cascading fall rewards hikers with nature’s serenity and dramatic views.",
        },
        {
            id: 5,
            name: "Dawara Falls",
            header_desc: "Gentel waterfall views",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            description: "A short trek leads to beautiful falls giving misty sprays and peaceful vibes — great for contemplative nature moments."
        },
        {
            id: 6,
            name: "Yamashita Cave",
            header_desc: "Historic spelunking and hiking",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
            description: "A WWII-era cave with compelling backstory surrounded by grassy ridges — a mix of history and outdoor exploration."
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
                            Explore Ilocos Sur&apos;s Cultural Heartland
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Historic churches, coastal landscapes, and countryside charm reveal a province steeped in tradition.
                        </p>
                    </div>
                    <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif">
                        <p>
                            Beyond Vigan lies the wider province of Ilocos Sur, home to heritage towns, scenic beaches, and centuries-old 
                            landmarks. From the Bantay Bell Tower and Santa Maria Church to quiet seaside stretches and rural communities, 
                            the province showcases a blend of faith, history, and natural beauty. Ideal for travelers seeking a fuller northern 
                            experience, Ilocos Sur offers a slower, deeper exploration of Ilocano culture beyond the city walls.
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