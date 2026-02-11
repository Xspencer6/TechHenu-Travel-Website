import Header from "@/components/layout/header/Header"
import TravelPackages from "@/components/tours/homePage/TravelPackages"
import Footer from "@/components/layout/footer/Footer"

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
