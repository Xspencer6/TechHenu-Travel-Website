"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(path)
  }

  const desktopLinkClass = (path: string) =>
    [
      "pb-1 border-b-2 transition-colors",
      isActive(path)
        ? "border-orange-500 text-orange-500"
        : "border-transparent text-gray-700 hover:text-orange-500 hover:border-orange-500",
    ].join(" ")

  const mobileLinkClass = (path: string) =>
    [
      "block transition-colors",
      isActive(path) ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-600",
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
            <Link
              href="/"
              className={desktopLinkClass("/")}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className={desktopLinkClass("/destinations")}
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className={desktopLinkClass("/packages")}
            >
              Travel Packages
            </Link>
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
            <Link
              href="/"
              className={mobileLinkClass("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className={mobileLinkClass("/destinations")}
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className={mobileLinkClass("/packages")}
              onClick={() => setIsMenuOpen(false)}
            >
              Travel Packages
            </Link>
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
