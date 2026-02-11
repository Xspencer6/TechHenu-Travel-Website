import Image from "next/image"
import Link from "next/link"

export default function TravelVlogs() {
    return (
        <section id="vlogs"className="py-16 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Travel Highlights
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience the highlights of every journey.
                    </p>
              </div>
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                  <div className="grid grid-cols-1 auto-rows-[300px] gap-4 sm:grid-cols-4 sm:auto-rows-[220px] grid-flow-dense md:gap-2 xl:gap-4">
                      {/* 1x1 grid */}
                      <a href="#" className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                          <img 
                              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" 
                              loading="lazy" 
                              alt="Photo by Minh Pham" 
                              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"/>
                          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Baguio</span>
                      </a>
                        {/* 4x4 grid */}
                      <a href="#" className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:col-span-2 sm:row-span-2">
                          <img
                              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                              loading="lazy"
                              alt="Photo by Minh Pham"
                              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                              Ilocos
                          </span>
                      </a>

                      {/* 3x1 grid */}
                        <a href="#" className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:row-span-3">
                            <img
                                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Baler
                            </span>
                        </a>

                        {/* 2x1 grid */}
                        <a
                          href="#"
                          className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:row-span-2"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                            loading="lazy"
                            alt="Photo by Minh Pham"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                            Vigan
                          </span>
                        </a>

                        {/* 1x2 grid */}
                        <a
                          href="#"
                          className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:col-span-2"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                            loading="lazy"
                            alt="Photo by Minh Pham"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                            Sagada
                          </span>
                        </a>
                </div>
            </div>
        </div>
    </section>
  )
}