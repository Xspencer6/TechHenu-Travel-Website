"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PackageForm from "../package/form/PackageForm";

interface Package {
    id: number;
    title: string;
    description: string;
    duration: string;
    inclusions: string;
    exclusions: string;
    sites: string;
    thumbnail: string;
    is_popular: boolean;
}

const packages: Package[] = [
    {
        id: 0,
        title: "Baler Tour Package",
        description: "Chase waterfalls, stroll along pristine beaches, and uncover the charm of Baler. Adventure and relaxation await in every corner.",
        duration: "3 Days 2 Nights - P3299, 2 Days 1 Night - P2299",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1494676051766-7a7454d53904?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        is_popular: true,
    },
    {
        id: 1,
        title: "Baguio Tour Package",
        duration: "3 Days 2 Nights - P3299, 2 Days 1 Night - P2299",
        description: "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio’s culture and charm are waiting for you.",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 2,
        title: "Baguio Tour Package with Northern Blossom",
        duration: "3 Days 2 Nights - P3599, 2 Days 1 Night - P2699",
        description: "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio’s culture and charm are waiting for you.",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 3,
        title: "Sagada Tour Package",
        description: "Explore mystical caves, towering cliffs, and hanging coffins in Sagada. A journey full of adventure and unforgettable views.",
        duration: "3 Days 2 Nights - P3299, 2 Days 1 Night - P2299",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 4,
        title: "Ilocos Tour Package",
        description: "Step back in time through historic towns, lighthouse views, and rolling coastlines. Ilocos blends culture, scenery, and discovery.",
        duration: "3 Days 2 Nights - P3299, 2 Days 1 Night - P2299",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 5,
        title: "Vigan/Baguio Tour Package",
        description: "Experience the colonial streets of Vigan and the serene highlands of Baguio. A perfect mix of history, scenery, and relaxation.",
        duration: "3 Days 2 Nights - P3299, 2 Days 1 Night - P2299",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
];

export default function TravelPackages() {
    const [isAvail, setIsAvail] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

    const openPackageForm = (pack: Package) => {
        setSelectedPackage(pack);
        setIsAvail(true);
    };
    const closePackageForm = () => setIsAvail(false);

    return (
        <div className="relative w-screen overflow-hidden">
            <section id="packages" className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Travel <span className="text-orange-600">Packages</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover bundled adventures featuring iconic landmarks, hidden gems, and local flavors
                        </p>
                    </div>

                    <div className="flex w-full transition-all duration-300">
                        {/* Adjust grid when package is clicked */}
                        <div className={`transition-all duration-300 ${isAvail ? "w-[calc(100%-540px)]" : "w-full"}`}
                        >
                            <div className="grid w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                                {packages.map((pack) => (
                                    <div
                                        key={pack.id}
                                        onClick={() => openPackageForm(pack)}
                                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                    >
                                        <div className="relative h-96 w-full">
                                            <Image
                                                src={pack.thumbnail}
                                                alt={pack.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute top-3 left-3">
                                                {pack.is_popular && (
                                                    <span className="bg-amber-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                                                        Top Pick
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                                                {pack.title}
                                            </h3>
                                            <p className="text-lg text-gray-800 mb-3 line-clamp-2 font-serif">
                                                {pack.description}
                                            </p>
                                            <div className="flex items-center justify-end">
                                                <span className="text-gray-800 font-semibold group-hover:translate-x-2 transition-transform inline-block group-hover:text-orange-500">
                                                    Avail Now →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar package */}
                        <div
                            className={`fixed top-16 right-0 h-screen lg:w-[540px] bg-slate-200 shadow-xl transition-transform duration-300 ease-in-out ${
                                isAvail ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <PackageForm
                                handlePackageForm={closePackageForm}
                                packageData={selectedPackage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
