"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MapPin, Truck, Phone, ShoppingCart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`bg-primary text-white py-2 transition-all duration-300 ${isScrolled ? "py-1" : ""}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm">
              <div className="hidden md:flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="font-medium">7 Sucursales!</span>
              </div>
              <div className="hidden md:flex items-center">
                <Truck className="w-4 h-4 mr-1" />
                <span className="font-medium">Envíos a domicilio!</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span className="font-medium">2616142848</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.975.207 1.504.344 1.857.181.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.975-.045 1.504-.208 1.858-.345.465-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.053.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.975-.208-1.504-.345-1.858a3.097 3.097 0 0 0-.747-1.15 3.098 3.098 0 0 0-1.15-.747c-.353-.137-.883-.3-1.857-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-secondary text-white shadow-md transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Todo Color Pinturerías"
                width={252}
                height={84}
                className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-20"} w-auto`}
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="relative overflow-hidden font-kanit font-medium text-white hover:text-primary py-2"
              >
                Inicio
              </Link>
              <Link
                href="/quienes-somos"
                className="relative overflow-hidden font-kanit font-medium text-white hover:text-primary py-2"
              >
                Quienes Somos
              </Link>
              <Link
                href="/sucursales"
                className="relative overflow-hidden font-kanit font-medium text-white hover:text-primary py-2"
              >
                Sucursales
              </Link>
              <Link
                href="/novedades"
                className="relative overflow-hidden font-kanit font-medium text-white hover:text-primary py-2"
              >
                Novedades
              </Link>
              <Link
                href="/contacto"
                className="relative overflow-hidden font-kanit font-medium text-white hover:text-primary py-2"
              >
                Contacto
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-10 py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cotizar
              </button>
            </div>

            <button className="md:hidden text-white hover:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-secondary border-t border-gray-700 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-primary font-kanit font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/quienes-somos"
              className="text-white hover:text-primary font-kanit font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Quienes Somos
            </Link>
            <Link
              href="/sucursales"
              className="text-white hover:text-primary font-kanit font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sucursales
            </Link>
            <Link
              href="/novedades"
              className="text-white hover:text-primary font-kanit font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Novedades
            </Link>
            <Link
              href="/contacto"
              className="text-white hover:text-primary font-kanit font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <button className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-10 py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cotizar
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
