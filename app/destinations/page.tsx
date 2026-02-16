import Header from "@/components/layout/Header"
import PopularDestinations from "@/components/tours/home/PopularDestinations"
import TravelHighlights from "@/components/tours/home/TravelHighlights"
import Footer from "@/components/layout/Footer"

const DestinationsPage = () => {
    return (
      <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
              <PopularDestinations />
              <TravelHighlights />
          </main>
          <Footer />
      </div>
    )
}

export default DestinationsPage