import TouristSpots from "@/components/tours/destination/TouristSpots";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { baler_spots } from "@/lib/data";

const DestinationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <section className="relative h-[500px] flex items-center justify-center bg-[url('assets/images/sagada-hero.png')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/20" />
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-[rgba(10,58,63,1)]">
            <h2 className="text-5xl font-bold mb-4">
              Ride the Waves in Baler&apos;s Coastal Escape
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Surfing, sun-kissed beaches, and dramatic cliffs make Baler a
              haven for adventure and relaxation alike.
            </p>
          </div>
          <div className="p-6 text-center mb-12 text-[rgba(10,58,63,1)] font-serif">
            <p>
              Situated along the northeastern coast of Luzon, Baler is a
              laid-back town where the mountains meet the sea. Its long
              stretches of sandy beaches, rolling waves, and forested hills draw
              both surfers and nature lovers. Visitors can explore historical
              landmarks, trek to scenic viewpoints, or simply relax beside the
              bay. With a blend of natural beauty, surf culture, and quiet
              charm, Baler offers a refreshing coastal getaway that rejuvenates
              the body and spirit.
            </p>
          </div>
          <TouristSpots tourSpots={baler_spots} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
