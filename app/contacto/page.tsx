import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-kanit font-bold mb-6 text-secondary">Contacto</h1>
          <p className="text-lg text-gray-600 font-mulish">
            Por consultas o presupuestos. Respondemos a la brevedad. Tenemos stock, precios y variedad. ¡Consúltenos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 shadow-xl border-b-4 border-primary h-full">
              <h2 className="text-3xl font-kanit font-semibold mb-8 pb-3 relative inline-block text-secondary">
                Información de Contacto
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h2>

              <div className="space-y-8 font-mulish">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-kanit font-medium mb-2 text-secondary">Dirección</h3>
                    <p className="text-gray-600">7 Sucursales en Mendoza</p>
                    <p className="text-gray-600">Consultá ubicaciones en la sección Sucursales</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-kanit font-medium mb-2 text-secondary">Teléfono</h3>
                    <p className="text-gray-600">2616142848</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-kanit font-medium mb-2 text-secondary">Email</h3>
                    <p className="text-gray-600">info@todocolorpinturerias.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-kanit font-medium mb-2 text-secondary">Horarios de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:30 - 18:00</p>
                    <p className="text-gray-600">Sábados: 8:30 - 13:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-kanit font-medium mb-2 text-secondary">WhatsApp</h3>
                    <p className="text-gray-600">2616142848</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-kanit font-semibold mb-4 text-secondary">Síguenos</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.975.207 1.504.344 1.857.181.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.975-.045 1.504-.208 1.858-.345.465-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.053.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.975-.208-1.504-.345-1.858a3.097 3.097 0 0 0-.747-1.15 3.098 3.098 0 0 0-1.15-.747c-.353-.137-.883-.3-1.857-.344-1.054-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white p-8 shadow-xl border-b-4 border-primary">
              <h2 className="text-3xl font-kanit font-semibold mb-8 pb-3 relative inline-block text-secondary">
                Envíanos un mensaje
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h2>

              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-kanit font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mulish"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-kanit font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mulish"
                      placeholder="Tu email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-kanit font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mulish"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-kanit font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mulish"
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-kanit font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mulish"
                    placeholder="Tu mensaje"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white font-kanit py-3 text-lg shadow-lg hover:bg-primary-dark transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-kanit font-semibold mb-8 pb-3 relative inline-block text-secondary">
            Ubicación
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h2>
          <div className="bg-white shadow-xl h-96 overflow-hidden">
            {/* Aquí se podría integrar un mapa de Google Maps */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-600 text-lg font-mulish">Mapa de ubicaciones de nuestras sucursales</p>
            </div>
          </div>
        </div>

        {/* Seguinos TC Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-kanit font-semibold mb-8 pb-3 relative inline-block text-secondary">
            Seguinos TC
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/seguinos-TC.png"
                alt="Todo Color - Seguinos TC"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-kanit font-semibold mb-4 text-secondary">¿Cómo podemos ayudarte?</h3>
              <p className="text-gray-600 mb-6 font-mulish">
                Nuestro equipo de expertos está listo para asesorarte en tu próximo proyecto. Contáctanos por WhatsApp y
                recibe atención personalizada.
              </p>

              <Link
                href="https://wa.me/2616142848"
                className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-12 py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
