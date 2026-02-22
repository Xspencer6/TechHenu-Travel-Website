import Header from "@/components/layout/Header";
import PopularDestinations from "@/components/tours/home/PopularDestinations";
import Footer from "@/components/layout/Footer";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PopularDestinations />
      <Footer />
    </div>
  );
};

export default DestinationsPage;
