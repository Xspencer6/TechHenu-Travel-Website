"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const SECTION_IDS = ["home", "destinations", "packages", "vlogs", "about"] as const

type SectionId = (typeof SECTION_IDS)[number]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>("home")

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            const id = entry.target.id as SectionId
            if (SECTION_IDS.includes(id)) {
              setActiveSection(id)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-80px 0px -40% 0px",
      }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const desktopLinkClass = (id: SectionId) =>
    [
      "pb-1 border-b-2 transition-colors",
      activeSection === id
        ? "border-orange-500 text-orange-500"
        : "border-transparent text-gray-700 hover:text-orange-500 hover:border-orange-500",
    ].join(" ")

  const mobileLinkClass = (id: SectionId) =>
    [
      "block transition-colors",
      activeSection === id ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-blue-600",
    ].join(" ")

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.ico"
              alt="NJoy Travel & Tours Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="text-2xl font-bold text-orange-500">
              NJoy
            </div>
            <span className="text-gray-700">Travel & Tours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              className={desktopLinkClass("home")}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              type="button"
              className={desktopLinkClass("destinations")}
              onClick={() => scrollToSection("destinations")}
            >
              Destinations
            </button>
            <button
              type="button"
              className={desktopLinkClass("packages")}
              onClick={() => scrollToSection("packages")}
            >
              Travel Packages
            </button>
            <button
              type="button"
              className={desktopLinkClass("vlogs")}
              onClick={() => scrollToSection("vlogs")}
            >
              Travel Vlogs
            </button>
            <button
              type="button"
              className={desktopLinkClass("about")}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            {/*
            <Link 
              href="/auth/signin" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
            */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              type="button"
              className={mobileLinkClass("home")}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              type="button"
              className={mobileLinkClass("destinations")}
              onClick={() => scrollToSection("destinations")}
            >
              Destinations
            </button>
            <button
              type="button"
              className={mobileLinkClass("packages")}
              onClick={() => scrollToSection("packages")}
            >
              Travel Packages
            </button>
            <button
              type="button"
              className={mobileLinkClass("vlogs")}
              onClick={() => scrollToSection("vlogs")}
            >
              Travel Vlogs
            </button>
            <button
              type="button"
              className={mobileLinkClass("about")}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <Link 
              href="/auth/signin" 
              className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
