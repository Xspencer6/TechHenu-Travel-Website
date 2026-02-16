import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const DestinationPage = () => {

    const tour_spots = [
        {
            id: 1,
            name: "Bangui Windmills",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
            header_desc: "Iconic coastal views",
            description: "Towering turbines line the shoreline of Bangui Bay, creating a striking landscape where wind power and seaside vistas meet for memorable photos.",
        },
        {
            id: 2,
            name: "Saud Beach",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
            header_desc: "Beach relaxation & water sports",
            description: "One of the region’s most serene beaches with soft white sand and clear waters—popular for swimming and watersports.",
        },
        {
            id: 3,
            name: "Patapat Viaduct",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
            header_desc: "Scenic coastal drive & photos",
            description: "A dramatic stretch of elevated roadway along the northern coast, offering sweeping views of sea and cliffs—great for road trips and photography.",
        },
        {
            id: 4,
            name: "Kapurpurawan Rock Formation",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            header_desc: "Natural limestone landscapes",
            description: "Unique pale limestone outcrops shaped by wind and waves—an otherworldly natural landmark perfect for walking and capturing striking shots.",
        },
        {
            id: 5,
            name: "Paoay Church (San Agustin Church)",
            header_desc: "History & architecture",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
            description: "A UNESCO World Heritage Site famed for its massive buttresses and ecclesiastical stone architecture—a classic Ilocos historical landmark."
        },
        {
            id: 6,
            name: "La Paz Sand Dunes",
            header_desc: "Off‑road adventure & sandboarding",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
            description: "Expansive golden dunes near Laoag that invite 4×4 rides and sandboarding for thrill‑seekers."
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
                            Discover Ilocos Norte&apos;s Windswept Wonders
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Towering windmills, rugged coastlines, and historic landmarks make every journey a scenic adventure.
                        </p>
                    </div>
                    <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif text-lg">
                        <p>
                            Ilocos Norte stretches along the northernmost coast of Luzon, where windswept beaches meet dramatic cliffs and 
                            centuries-old heritage sites. From the iconic Bangui Windmills to the pristine sands of Saud Beach, the region 
                            offers a blend of nature, history, and vibrant culture. Travelers can explore colonial churches, marvel at limestone 
                            formations, or ride the coastal roads that frame the South China Sea. Ilocos Norte is a destination of 
                            contrasts—where modern energy meets timeless landscapes, and adventure greets every visitor at the horizon.
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