import Header from "@/components/Header"
import TravelPackages from "@/components/TravelPackages"
import Footer from "@/components/Footer"

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <TravelPackages />
      </main>

      <Footer />
    </div>
  )
}
