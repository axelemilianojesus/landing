import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="py-16 bg-primary">
        <div className="container-custom">
          {/* Mobile: 2 columns for links/contact, Desktop: 4 columns */}
          <div className="grid grid-cols-1 gap-10">
            {/* Logo and description - Full width on mobile */}
            <div className="md:hidden">
              <Image
                src="/images/logo.png"
                alt="Todo Color Pinturerías"
                width={180}
                height={60}
                className="h-16 w-auto mb-6"
              />
              <p className="text-white/90 mt-4 font-mulish leading-relaxed">
                La cadena de pinturerías más grande de Mendoza y Cuyo. Especialistas con más de 20 años de experiencia
                en el mercado.
              </p>
              <div className="flex space-x-4 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.975.207 1.504.344 1.857.181.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.059 4.041.059 2.67 0 2.987-.01 4.04-.058.975-.045 1.504-.208 1.858-.345.465-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.053.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.975-.208-1.504-.345-1.858a3.097 3.097 0 0 0-.747-1.15 3.098 3.098 0 0 0-1.15-.747c-.353-.137-.883-.3-1.857-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Enlaces y Contacto - 2 columns on mobile */}
            <div className="grid grid-cols-2 md:hidden gap-6">
              <div>
                <h3 className="text-lg font-maven font-bold mb-6 text-white">Enlaces Rápidos</h3>
                <ul className="space-y-3 font-mulish">
                  <li>
                    <Link href="/" className="flex items-center text-white/90 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4 mr-2 text-white" />
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quienes-somos"
                      className="flex items-center text-white/90 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-white" />
                      Quienes Somos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sucursales"
                      className="flex items-center text-white/90 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-white" />
                      Sucursales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/novedades"
                      className="flex items-center text-white/90 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-white" />
                      Novedades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="flex items-center text-white/90 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-white" />
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-maven font-bold mb-6 text-white">Contacto</h3>
                <ul className="space-y-4 font-mulish">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0 text-white" />
                    <span className="text-white/90 text-sm">7 Sucursales</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 shrink-0 text-white" />
                    <span className="text-white/90 text-sm">2616142848</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-1 shrink-0 text-white" />
                    <span className="text-white/90 text-sm">
                      Lun-Vie: 8:30-18:00
                      <br />
                      Sáb: 8:30-13:00
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Boletín - Full width on mobile */}
            <div className="md:hidden">
              <h3 className="text-lg font-maven font-bold mb-6 text-white">Boletín</h3>
              <p className="text-white/90 mb-4 font-mulish">
                Suscríbete para recibir las últimas novedades y promociones.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white text-white placeholder:text-white/60 font-mulish"
                />
                <button
                  type="submit"
                  className="bg-white text-primary font-maven font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          {/* Desktop: Original 4-column layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image
                src="/images/logo.png"
                alt="Todo Color Pinturerías"
                width={180}
                height={60}
                className="h-16 w-auto mb-6"
              />
              <p className="text-white/90 mt-4 font-mulish leading-relaxed">
                La cadena de pinturerías más grande de Mendoza y Cuyo. Especialistas con más de 20 años de experiencia
                en el mercado.
              </p>
              <div className="flex space-x-4 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.975.207 1.504.344 1.857.181.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.059 4.041.059 2.67 0 2.987-.01 4.04-.058.975-.045 1.504-.208 1.858-.345.465-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.053.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.975-.208-1.504-.345-1.858a3.097 3.097 0 0 0-.747-1.15 3.098 3.098 0 0 0-1.15-.747c-.353-.137-.883-.3-1.857-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-maven font-bold mb-6 text-white">Enlaces Rápidos</h3>
              <ul className="space-y-3 font-mulish">
                <li>
                  <Link href="/" className="flex items-center text-white/90 hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-white" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quienes-somos"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-white" />
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sucursales"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-white" />
                    Sucursales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/novedades"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-white" />
                    Novedades
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="flex items-center text-white/90 hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-white" />
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-maven font-bold mb-6 text-white">Contacto</h3>
              <ul className="space-y-4 font-mulish">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0 text-white" />
                  <span className="text-white/90">7 Sucursales en Mendoza</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 shrink-0 text-white" />
                  <span className="text-white/90">2616142848</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 shrink-0 text-white" />
                  <span className="text-white/90">info@todocolorpinturerias.com.ar</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 shrink-0 text-white" />
                  <span className="text-white/90">
                    Lunes a Viernes: 8:30 - 18:00
                    <br />
                    Sábados: 8:30 - 13:00
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-maven font-bold mb-6 text-white">Boletín</h3>
              <p className="text-white/90 mb-4 font-mulish">
                Suscríbete para recibir las últimas novedades y promociones.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white text-white placeholder:text-white/60 font-mulish"
                />
                <button
                  type="submit"
                  className="bg-white text-primary font-maven font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sherwin Williams Distributor Badge */}
      <div className="py-8 md:py-12 bg-blue-900 border-t border-blue-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="relative w-32 h-16 md:w-40 md:h-20">
              <Image src="/images/sherwin-williams-logo.png" alt="Sherwin Williams" fill className="object-contain" />
            </div>
            <div className="text-center md:text-left">
              <div className="text-white font-maven font-bold text-lg md:text-xl mb-1">Distribuidores Oficiales</div>
              <div className="text-white/80 font-mulish text-sm md:text-base">Pinturas Premium Sherwin-Williams</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1f2937] py-6">
        <div className="container-custom text-center text-sm font-mulish text-white/80">
          <p>© {new Date().getFullYear()} Todo Color Pinturerías. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
