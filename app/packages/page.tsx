"use client";

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Image from "next/image";
import { useState } from "react";
import PackageForm from "@/components/tours/package/form/PackageForm";
import { packages } from "@/lib/tempdata";

interface Package {
    id: number;
    title: string;
    description: string;
    duration: string[];
    inclusions: string;
    exclusions: string;
    sites: string;
    thumbnail: string;
    is_popular: boolean;
}

const PackagesPage = () => {

    const packageData = packages;

    const [isAvail, setIsAvail] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

    const openPackageForm = (pack: Package) => {
        setSelectedPackage(pack);
        setIsAvail(true);
    };
    const closePackageForm = () => setIsAvail(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
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
                            <div className={`transition-all duration-300 ${isAvail ? "w-[calc(100% - 540px)] lg:w-[calc(100% - 600px)]" : "w-full"}`}
                            >
                                <div className="grid w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                                    {packageData.map((pack) => (
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
                                className={`fixed right-0 z-50 bg-slate-200 shadow-xl transition-transform duration-300 ease-in-out top-[70px]
                                    w-full sm:w-[540px] lg:w-[600px] h-[calc(100vh-70px)] flex flex-col ${isAvail ? "translate-x-0" : "translate-x-full"}`}
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
            <Footer />
        </div>
    )
}

export default PackagesPage;
