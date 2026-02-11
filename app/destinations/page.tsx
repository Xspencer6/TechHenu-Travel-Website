import Header from "@/components/Header"
import PopularDestinations from "@/components/PopularDestinations"
import TravelVlogs from "@/components/TravelVlogs"
import Footer from "@/components/Footer"

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
