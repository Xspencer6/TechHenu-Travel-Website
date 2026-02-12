import Highlights from "../destPage/HighLights"

export default function TravelHighlights() {
    return (
        <section id="vlogs"className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Travel <span className="text-orange-600">Highlights</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience the highlights of every journey.
                    </p>
                </div>
                <Highlights/>
            </div>
        </section>
    )
}