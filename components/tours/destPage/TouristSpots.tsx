import Image from "next/image";

type TourSpot = {
    id: number,
    name: string,
    image: string,
    header_desc: string,
    description: string
}

type TouristSpotsProps = {
  tourSpots: TourSpot[];
};

export default function TouristSpots({tourSpots}: TouristSpotsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
            {tourSpots.map((spots) => (
                <div key={spots.id} className="grop relative py-5">
                    <div className="relative h-64 w-full">
                        <Image
                            src={spots.image}
                            alt={spots.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="py-2">
                        <h1 className="text-2xl font-bold text-orange-800">
                            {spots.name}
                        </h1>
                    </div>
                    <div className="text-lg text-[#3f280a] font-serif">
                        <p>
                            <span className="font-bold">Go for: </span>
                            {spots.header_desc}
                        </p>
                        <div className="border-t border-gray-300 my-4"/>
                        <p>
                            {spots.description}
                        </p>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}