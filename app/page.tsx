import Header from "@/components/Header"
import PopularDestinations from "@/components/PopularDestinations"
import TravelVlogs from "@/components/TravelVlogs"
import CustomerReviews from "@/components/CustomerReviews"
import Footer from "@/components/Footer"
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelPackages from "@/components/TravelPackages";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] flex items-center justify-center bg-[url('assets/images/roadtravel-hero.png')] bg-center bg-cover text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Explore breathtaking destinations and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Browse Tours
            </a>
            <a
              href="/destinations"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <WhyChooseUs />
        <PopularDestinations />
        <TravelPackages />
        <TravelVlogs />
        <CustomerReviews />
      </main>

      <Footer />
    </div>
  )
}
