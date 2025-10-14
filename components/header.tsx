"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MapPin, Phone, ShoppingCart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary shadow-sm">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-white py-3">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-mulish font-medium">7 Sucursales en Mendoza</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-mulish font-medium">2616142848</span>
              </div>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <Phone className="w-4 h-4" />
              <span className="font-mulish font-medium">2616142848</span>
            </div>
            <div className="flex gap-3">
              <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.975.207 1.504.344 1.857.181.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.059 4.041.058 2.67 0 2.987-.01 4.04-.058.975-.045 1.504-.208 1.858-.345.465-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.053.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.975-.208-1.504-.345-1.858a3.097 3.097 0 0 0-.747-1.15 3.098 3.098 0 0 0-1.15-.747c-.353-.137-.883-.3-1.857-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-4 bg-red-700">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Inicio">
              <Image
                src="/images/logo.png"
                alt="Todo Color Pinturerías"
                width={180}
                height={60}
                priority
                className="h-16 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="font-maven font-light text-white hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                Inicio
              </Link>
              <Link
                href="/quienes-somos"
                className="font-maven font-light text-white hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                Quienes Somos
              </Link>
              <Link
                href="/sucursales"
                className="font-maven font-light text-white hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                Sucursales
              </Link>
              <Link
                href="/novedades"
                className="font-maven font-light text-white hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                Novedades
              </Link>
              <Link
                href="/contacto"
                className="font-maven font-light text-white hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                Contacto
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center font-maven font-semibold bg-white text-primary hover:bg-gray-100 h-11 px-6 rounded-lg shadow-md hover:shadow-lg transition-all uppercase tracking-wide"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cotizar
              </Link>
            </div>

            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t shadow-lg">
          <nav className="container-custom py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="font-maven font-light text-white hover:text-white/80 uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/quienes-somos"
              className="font-maven font-light text-white hover:text-white/80 uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Quienes Somos
            </Link>
            <Link
              href="/sucursales"
              className="font-maven font-light text-white hover:text-white/80 uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Sucursales
            </Link>
            <Link
              href="/novedades"
              className="font-maven font-light text-white hover:text-white/80 uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Novedades
            </Link>
            <Link
              href="/contacto"
              className="font-maven font-light text-white hover:text-white/80 uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center font-maven font-semibold bg-white text-primary hover:bg-gray-100 h-11 px-6 rounded-lg shadow-md mt-2 uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cotizar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
