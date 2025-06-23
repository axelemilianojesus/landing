import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image
                src="/images/logo.png"
                alt="Todo Color Pinturerías"
                width={180}
                height={60}
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/90 mt-4 font-mulish">
                La cadena de pinturerías más grande de Mendoza y Cuyo. Especialistas con más de 20 años de experiencia
                en el mercado.
              </p>
              <div className="flex space-x-4 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.975.207 1.504.344 1.857.181.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.975-.045 1.504-.208 1.858-.345.465-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.053.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.975-.208-1.504-.345-1.858a3.097 3.097 0 0 0-.747-1.15 3.098 3.098 0 0 0-1.15-.747c-.353-.137-.883-.3-1.857-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-kanit font-semibold mb-6 relative inline-block pb-2">
                Enlaces Rápidos
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3 font-mulish">
                <li>
                  <Link href="/" className="flex items-center text-white/90 hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quienes-somos"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sucursales"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Sucursales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/novedades"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Novedades
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="flex items-center text-white/90 hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-kanit font-semibold mb-6 relative inline-block pb-2">
                Contacto
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-4 font-mulish">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0" />
                  <span className="text-white/90">7 Sucursales en Mendoza</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 shrink-0" />
                  <span className="text-white/90">2616142848</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 shrink-0" />
                  <span className="text-white/90">info@todocolorpinturerias.com.ar</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 shrink-0" />
                  <span className="text-white/90">
                    Lunes a Viernes: 8:30 - 18:00
                    <br />
                    Sábados: 8:30 - 13:00
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-kanit font-semibold mb-6 relative inline-block pb-2">
                Boletín
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <p className="text-white/90 mb-4 font-mulish">
                Suscríbete a nuestro boletín para recibir las últimas novedades y promociones.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary font-mulish"
                />
                <button
                  type="submit"
                  className="bg-primary text-white font-kanit font-medium py-3 px-4 hover:bg-primary-dark transition-colors"
                >
                  Suscribirse
                </button>
              </form>

              <div className="mt-6">
                <h4 className="text-lg font-kanit font-medium mb-3">Formas de Pago</h4>
                <p className="text-white/90 font-mulish">
                  Tarjetas bancarias, Mercado Pago y financiación a tu medida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-dark text-white py-4">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center text-sm font-mulish">
          <p>© {new Date().getFullYear()} Todo Color Pinturerías. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
