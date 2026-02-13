import Header from "@/components/layout/header/Header"
import TravelPackages from "@/components/tours/home/TravelPackages"
import Footer from "@/components/layout/footer/Footer"

const PackagesPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <TravelPackages />
            </main>
            {}
            <Footer />
        </div>
    )
}

export default PackagesPage;
