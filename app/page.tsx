import Image from "next/image"
import Link from "next/link"
import { MapPin, Truck, CreditCard, Phone, ArrowRight, Check, Star, Mail } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-bg text-white pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 hero-content">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-kanit font-bold mb-12 leading-tight tracking-tight mt-8">
              La cadena de pinturerías más grande de Mendoza y Cuyo
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-mulish">
              Somos los verdaderos especialistas en Pintura y todos sus accesorios. Con 7 sucursales para estar siempre
              cerca tuyo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-white text-primary hover:bg-white/90 h-12 py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactar ahora
              </Link>
              <Link
                href="/sucursales"
                className="inline-flex items-center justify-center text-sm font-kanit font-medium border-2 border-white text-white hover:bg-white/10 h-12 py-3 px-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Ver sucursales
              </Link>
            </div>
          </div>
        </div>

        {/* Animated paint splashes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 animate-bounce"></div>
        <div className="absolute top-40 left-1/4 w-16 h-16 bg-white/10 animate-spin"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-xl border-b-4 border-primary transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden z-10">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5"></div>
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-primary text-white shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-kanit font-semibold mb-3 text-secondary">7 Sucursales</h3>
              <p className="text-gray-600 font-mulish">Estamos siempre cerca tuyo en toda la provincia de Mendoza.</p>
            </div>

            <div className="bg-white p-8 shadow-xl border-b-4 border-primary transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden z-10">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5"></div>
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-primary text-white shadow-lg">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-kanit font-semibold mb-3 text-secondary">Envíos a Domicilio</h3>
              <p className="text-gray-600 font-mulish">
                ¡Todo lo que necesitás a tu alcance! Armá tu pedido y lo llevamos a tu casa.
              </p>
            </div>

            <div className="bg-white p-8 shadow-xl border-b-4 border-primary transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden z-10">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5"></div>
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-primary text-white shadow-lg">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-kanit font-semibold mb-3 text-secondary">Facilidades de Pago</h3>
              <p className="text-gray-600 font-mulish">
                Tenemos cuotas, tarjetas bancarias, Mercado Pago y financiación a tu medida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Sucursales */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/pintar-casa-profesional.jpeg" alt="Fondo de sucursales" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-kanit font-bold mb-6 text-white">7 SUCURSALES A TU SERVICIO</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-mulish">
              Estamos cerca tuyo en toda la provincia de Mendoza para brindarte la mejor atención y asesoramiento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {["Mendoza Capital", "Godoy Cruz", "Las Heras", "Guaymallén", "Luján de Cuyo", "Maipú", "San Rafael"].map(
              (location, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  <h3 className="text-white font-kanit font-semibold">{location}</h3>
                </div>
              ),
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/sucursales"
              className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-white text-primary hover:bg-white/90 h-12 py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver todas las sucursales
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">
              Expertos en color desde hace más de 20 años
            </h2>
            <p className="text-lg text-gray-600 font-mulish">
              Todo Color Pinturerías se ha convertido en la cadena de pinturerías más grande de Mendoza y Cuyo,
              ofreciendo la mejor calidad, variedad y asesoramiento profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary"></div>
              <div className="relative z-10 overflow-hidden shadow-xl">
                <Image
                  src="/images/pintura-hogar.jpeg"
                  alt="Nuestros productos"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-kanit font-semibold mb-6 relative inline-block pb-3 text-secondary">
                ¿Por qué somos líderes en el mercado?
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center shadow-md">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-kanit font-medium mb-2 text-secondary">Experiencia y trayectoria</h4>
                    <p className="text-gray-600 font-mulish">
                      Con más de 20 años en el mercado, somos expertos en color y acabados. Nuestra experiencia nos
                      permite ofrecerte soluciones profesionales para cada proyecto.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center shadow-md">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-kanit font-medium mb-2 text-secondary">Asesoramiento personalizado</h4>
                    <p className="text-gray-600 font-mulish">
                      Nuestro equipo de especialistas te guiará para encontrar la solución perfecta. Desde la elección
                      del color hasta la técnica de aplicación, estamos para ayudarte.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center shadow-md">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-kanit font-medium mb-2 text-secondary">Calidad garantizada</h4>
                    <p className="text-gray-600 font-mulish">
                      Trabajamos con las mejores marcas del mercado y ofrecemos garantía en todos nuestros productos. Tu
                      satisfacción es nuestra prioridad.
                    </p>
                  </div>
                </li>
              </ul>

              <Link
                href="/quienes-somos"
                className="inline-flex items-center text-primary font-kanit font-medium mt-8 text-lg hover:underline"
              >
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">Soluciones para cada proyecto</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mulish">
              Ofrecemos una amplia gama de pinturas y accesorios para todo tipo de proyectos, desde hogar hasta obra y
              automotor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/pintura-hogar2.jpeg"
                  alt="Pinturas para hogar"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-kanit font-bold text-white">
                  Pinturas para Hogar
                </h3>
              </div>
              <div className="p-6 bg-white border-b-4 border-primary">
                <p className="text-gray-600 mb-4 font-mulish">
                  Látex, esmaltes, barnices y todo lo que necesitas para renovar tu hogar.
                </p>
                <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                  Ver productos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/pintura-industrial.jpeg"
                  alt="Pinturas para obra"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-kanit font-bold text-white">
                  Pinturas para Obra
                </h3>
              </div>
              <div className="p-6 bg-white border-b-4 border-primary">
                <p className="text-gray-600 mb-4 font-mulish">
                  Impermeabilizantes, revestimientos y productos para construcción.
                </p>
                <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                  Ver productos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/wooden-paint-brushes.jpeg"
                  alt="Pinturas automotor"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-kanit font-bold text-white">
                  Pinturas Automotor
                </h3>
              </div>
              <div className="p-6 bg-white border-b-4 border-primary">
                <p className="text-gray-600 mb-4 font-mulish">
                  Pinturas y accesorios para el cuidado y renovación de tu vehículo.
                </p>
                <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                  Ver productos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">Marcas líderes en un solo lugar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mulish">
              Trabajamos con las mejores marcas del mercado para garantizar la calidad de nuestros productos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Sucursal Capital", image: "/images/local.jpeg" },
              { name: "Sucursal Godoy Cruz", image: "/images/pintura-hogar.jpeg" },
              { name: "Sucursal Las Heras", image: "/images/pintura-hogar2.jpeg" },
              { name: "Sucursal Guaymallén", image: "/images/pintura-industrial.jpeg" },
              { name: "Sucursal Luján", image: "/images/pintura-home-03.jpeg" },
              { name: "Sucursal Maipú", image: "/images/wooden-paint-brushes.jpeg" },
            ].map((branch, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md flex items-center justify-center h-32 transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  src={branch.image || "/placeholder.svg"}
                  alt={branch.name}
                  width={120}
                  height={80}
                  className="max-h-16 w-auto object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/piscinas-2.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white mb-6">
            ENVÍOS A TODO MENDOZA Y 7 SUCURSALES
          </h2>
          <p className="text-white text-xl mb-10 max-w-3xl mx-auto font-mulish">
            ¡Todo lo que necesitás a tu alcance! Armá tu pedido y lo llevamos a tu casa. ¡Fácil, rápido y seguro!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="https://wa.me/2616142848"
              className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-14 py-4 px-8 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              WhatsApp
            </Link>
            <Link
              href="tel:2616142848"
              className="inline-flex items-center justify-center text-sm font-kanit font-medium border-2 border-white text-white hover:bg-white/10 h-14 py-4 px-8 font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Llamar
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">Clientes satisfechos nos avalan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mulish">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-8 shadow-xl relative">
                <div className="absolute -top-5 right-10">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="white"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 font-mulish">
                  "Excelente atención y asesoramiento. Encontré todo lo que necesitaba para mi proyecto y a muy buen
                  precio. Recomiendo 100% Todo Color Pinturerías."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-kanit font-semibold text-secondary">Cliente Satisfecho</h4>
                    <p className="text-sm text-gray-500 font-mulish">Mendoza Capital</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 bg-white" id="colores">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">Descubre nuestra paleta de colores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mulish">
              Explora nuestra amplia gama de colores para encontrar el tono perfecto para tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {[
              "#FFFFFF", // Blanco puro
              "#F8F8FF", // Blanco fantasma
              "#F5F5DC", // Beige
              "#FFF8DC", // Blanco maíz
              "#E6E6FA", // Lavanda
              "#F0F8FF", // Azul alice
              "#F0FFFF", // Azure
              "#F5FFFA", // Menta crema
              "#D3D3D3", // Gris claro
              "#C0C0C0", // Plata
              "#A9A9A9", // Gris oscuro
              "#808080", // Gris
              "#696969", // Gris tenue
              "#2F4F4F", // Gris pizarra oscuro
              "#708090", // Gris pizarra
              "#778899", // Gris pizarra claro
              "#87CEEB", // Azul cielo
              "#4682B4", // Azul acero
              "#1E90FF", // Azul dodger
              "#0000CD", // Azul medio
              "#000080", // Azul marino
              "#191970", // Azul medianoche
              "#6495ED", // Azul maíz
              "#4169E1", // Azul real
              "#98FB98", // Verde pálido
              "#90EE90", // Verde claro
              "#00FF7F", // Verde primavera
              "#32CD32", // Verde lima
              "#228B22", // Verde bosque
              "#006400", // Verde oscuro
              "#9ACD32", // Verde amarillo
              "#7CFC00", // Verde césped
              "#FFB6C1", // Rosa claro
              "#FFA07A", // Salmón claro
              "#FA8072", // Salmón
              "#E9967A", // Salmón oscuro
              "#F08080", // Coral claro
              "#CD5C5C", // Rojo indio
              "#DC143C", // Carmesí
              "#B22222", // Ladrillo
              "#FFFFE0", // Amarillo claro
              "#FFFF00", // Amarillo
              "#FFD700", // Oro
              "#FFA500", // Naranja
              "#FF8C00", // Naranja oscuro
              "#FF6347", // Tomate
              "#FF4500", // Rojo naranja
              "#FF0000", // Rojo
              "#DEB887", // Madera
              "#D2B48C", // Bronceado
              "#BC8F8F", // Rosa marrón
              "#F4A460", // Marrón arena
              "#DAA520", // Vara de oro
              "#B8860B", // Vara de oro oscuro
              "#CD853F", // Perú
              "#A0522D", // Siena
              "#8B4513", // Marrón silla
              "#800000", // Granate
              "#654321", // Marrón oscuro
              "#5D4037", // Marrón chocolate
              "#3E2723", // Marrón café
              "#1B1B1B", // Casi negro
            ].map((color, index) => (
              <div
                key={index}
                className="aspect-square shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-3/4" style={{ backgroundColor: color }}></div>
                <div className="h-1/4 bg-white p-3 flex items-center justify-center">
                  <span className="font-mulish font-medium text-xs md:text-sm">{color}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/colores"
              className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-secondary text-white hover:bg-secondary-light h-10 py-3 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver todos los colores
            </Link>
          </div>
        </div>
      </section>

      {/* Color Catalog Full Section */}
      <section className="py-20 bg-gray-50" id="catalogo-colores">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">Catálogo completo de colores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mulish">
              Encuentra la inspiración perfecta para tu próximo proyecto con nuestra extensa gama de colores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white shadow-xl p-6">
              <h3 className="text-2xl font-kanit font-bold mb-4 text-secondary">Blancos y Neutros</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["#FFFFFF", "#F8F8FF", "#F5F5DC", "#FFF8DC", "#E6E6FA", "#F0F8FF", "#F0FFFF", "#F5FFFA"].map(
                  (color, index) => (
                    <div key={index} className="aspect-square shadow-sm" style={{ backgroundColor: color }}></div>
                  ),
                )}
              </div>
              <p className="text-gray-600 mb-4 font-mulish">
                Perfectos para ampliar espacios y crear ambientes luminosos. Ideales para techos, paredes principales y
                espacios pequeños.
              </p>
              <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                Ver colección
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white shadow-xl p-6">
              <h3 className="text-2xl font-kanit font-bold mb-4 text-secondary">Azules</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["#87CEEB", "#4682B4", "#1E90FF", "#0000CD", "#000080", "#191970", "#6495ED", "#4169E1"].map(
                  (color, index) => (
                    <div key={index} className="aspect-square shadow-sm" style={{ backgroundColor: color }}></div>
                  ),
                )}
              </div>
              <p className="text-gray-600 mb-4 font-mulish">
                Ideales para crear ambientes relajantes y frescos. Perfectos para dormitorios, baños y espacios de
                descanso.
              </p>
              <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                Ver colección
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white shadow-xl p-6">
              <h3 className="text-2xl font-kanit font-bold mb-4 text-secondary">Grises</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969", "#2F4F4F", "#708090", "#778899"].map(
                  (color, index) => (
                    <div key={index} className="aspect-square shadow-sm" style={{ backgroundColor: color }}></div>
                  ),
                )}
              </div>
              <p className="text-gray-600 mb-4 font-mulish">
                Versátiles y elegantes. Perfectos como base para cualquier espacio o para combinar con colores más
                vibrantes.
              </p>
              <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                Ver colección
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-xl p-6">
              <h3 className="text-2xl font-kanit font-bold mb-4 text-secondary">Verdes</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["#98FB98", "#90EE90", "#00FF7F", "#32CD32", "#228B22", "#006400", "#9ACD32", "#7CFC00"].map(
                  (color, index) => (
                    <div key={index} className="aspect-square shadow-sm" style={{ backgroundColor: color }}></div>
                  ),
                )}
              </div>
              <p className="text-gray-600 mb-4 font-mulish">
                Inspirados en la naturaleza. Perfectos para crear ambientes frescos, vitales y conectados con el
                exterior.
              </p>
              <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                Ver colección
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white shadow-xl p-6">
              <h3 className="text-2xl font-kanit font-bold mb-4 text-secondary">Tierras y Marrones</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["#DEB887", "#D2B48C", "#BC8F8F", "#F4A460", "#DAA520", "#CD853F", "#A0522D", "#8B4513"].map(
                  (color, index) => (
                    <div key={index} className="aspect-square shadow-sm" style={{ backgroundColor: color }}></div>
                  ),
                )}
              </div>
              <p className="text-gray-600 mb-4 font-mulish">
                Colores cálidos y acogedores. Ideales para crear ambientes rústicos, elegantes y con personalidad.
              </p>
              <Link href="#" className="text-primary font-kanit font-medium hover:underline inline-flex items-center">
                Ver colección
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Mascot */}
      <section className="py-20 bg-white" id="seguinos">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kanit font-bold mb-6 text-secondary">Seguinos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mulish">
              Mantente conectado con nosotros para recibir las últimas novedades, promociones y consejos de pintura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/seguinos-TC.png"
                alt="Todo Color - Seguinos"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-kanit font-semibold mb-6 text-secondary">¿Cómo podemos ayudarte?</h3>
              <p className="text-gray-600 mb-6 font-mulish">
                Completa el formulario y nuestro equipo de expertos te contactará a la brevedad para asesorarte en tu
                próximo proyecto.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Tu teléfono"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Tu email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="departamento" className="block text-sm font-medium text-gray-700 mb-1">
                    Departamento
                  </label>
                  <select
                    id="departamento"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  >
                    <option value="">Selecciona tu departamento</option>
                    <option value="Capital">Capital</option>
                    <option value="Godoy Cruz">Godoy Cruz</option>
                    <option value="Las Heras">Las Heras</option>
                    <option value="Guaymallén">Guaymallén</option>
                    <option value="Luján de Cuyo">Luján de Cuyo</option>
                    <option value="Maipú">Maipú</option>
                    <option value="San Rafael">San Rafael</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="producto" className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Qué producto necesitas?
                  </label>
                  <select
                    id="producto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  >
                    <option value="">Selecciona el tipo de producto</option>
                    <option value="Pintura para interiores">Pintura para interiores</option>
                    <option value="Pintura para exteriores">Pintura para exteriores</option>
                    <option value="Pintura para pisos">Pintura para pisos</option>
                    <option value="Pintura para techos">Pintura para techos</option>
                    <option value="Pintura para piscinas">Pintura para piscinas</option>
                    <option value="Pintura automotor">Pintura automotor</option>
                    <option value="Accesorios">Accesorios (pinceles, rodillos, etc.)</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Cuéntanos más sobre tu proyecto o consulta"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-12 py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Enviar consulta
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-kanit font-medium text-secondary text-xl mb-4">También puedes contactarnos por:</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-lg mr-4">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-mulish">2616142848</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 font-mulish">2616142848</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-lg mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-mulish">info@todocolorpinturerias.com.ar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
