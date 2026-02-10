import Image from "next/image";
import diamond from "@/app/assets/icons/diamond.svg.svg";
import ticket from "@/app/assets/icons/ticket.svg.svg";
import balloon from "@/app/assets/icons/hot-air-balloon.svg.svg"

// No need for firebase, static elements
const WhyChooseUs = () => {
    const provisions = [
        {
            icon: diamond,
            what: 'Skilled and Accommodating Drivers',
            why: 'Drivers ensure every journey safe, smooth, and enjoyable for the whole family.',
        },
        {
            icon: ticket,
            what: 'Complete Tour',
            why: 'Experience all the highlights with a carefully planned itinerary that maximizes your adventure.',
        },
        {
            icon: balloon,
            what: 'Round Trip Van Transfers',
            why: 'Round-trip transfers are handled in comfort, taking care of every detail from start to finish.',
        }
    ]
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Choose NJOY Travel and Tours?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Quality Service is assured
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {provisions.map((provide) => (
                        <div
                            key={provide.what}
                            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-110 max-w-96"
                        >
                            <div className="relative h-64 w-full">
                                <div className="p-2 h-16 flex justify-center">
                                    <Image src={provide.icon} alt={"icon"} width={50} height={50} />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                        {provide.what}
                                    </h2>
                                    <div className="p-2">
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                            {provide.why}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;