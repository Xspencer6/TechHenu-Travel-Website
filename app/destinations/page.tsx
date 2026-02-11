import Header from "@/components/layout/header/Header"
import PopularDestinations from "@/components/tours/homePage/PopularDestinations"
import TravelVlogs from "@/components/tours/homePage/TravelVlogs"
import Footer from "@/components/layout/footer/Footer"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <PopularDestinations />
        <TravelVlogs />
      </main>

      <Footer />
    </div>
  )
}
