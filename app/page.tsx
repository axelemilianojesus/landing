import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Truck, Clock, Award, ShieldCheck, Users, Tag } from "lucide-react"
import { products } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 3)
  const allProducts = products

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white min-h-[500px] md:min-h-[600px] lg:min-h-screen max-h-[700px] md:max-h-[900px] overflow-hidden bg-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/local-todocolor-fachada.jpeg"
            alt="Todo Color Pinturerías - Casa Central en Mendoza"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent"></div>
        </div>

        {/* Sherwin Williams Badge - Top Right */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-3 md:p-4 border border-gray-200">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image src="/images/sherwin-williams-logo.png" alt="Sherwin Williams" fill className="object-contain" />
              </div>
              <div className="text-left">
                <div className="text-[10px] md:text-xs font-maven font-bold text-blue-900 uppercase tracking-tight leading-none">
                  Distribuidores
                </div>
                <div className="text-[10px] md:text-xs font-maven font-bold text-blue-900 uppercase tracking-tight leading-none">
                  Oficiales
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom relative z-10 py-8 md:py-12">
          <div className="max-w-2xl bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-maven font-bold mb-3 md:mb-6 leading-tight text-gray-800">
              Tu proyecto merece los mejores colores
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 mb-5 md:mb-10 font-mulish">
              Expertos en pintura con más de 20 años de trayectoria. 7 sucursales para estar siempre cerca.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center font-maven font-semibold bg-primary text-white hover:bg-primary-dark h-11 md:h-12 px-6 md:px-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-sm md:text-base"
              >
                Asesoramiento Gratuito
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Grid - Promotional Banners */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="container-custom">
          {/* MOBILE: Optimized vertical layout */}
          <div className="md:hidden">
            {/* Banner Grande - Ofertas Especiales - NUEVA IMAGEN */}
            <div className="mb-6 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/sherwin-williams-novacor.jpg"
                  alt="Sherwin Williams Promoción"
                  fill
                  className="object-cover opacity-40"
                />
              </div>
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="font-maven font-bold text-white text-xs">PROMOCIÓN ESPECIAL</span>
                </div>
                <h2 className="text-3xl font-maven font-bold text-white mb-3">Aprovechá las mejores ofertas</h2>
                <p className="text-lg text-white/95 mb-6 font-mulish">
                  Descuentos de hasta 40% en productos seleccionados
                </p>
                <div className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-xl font-maven font-bold text-2xl shadow-xl mb-4">
                  <Tag className="w-6 h-6 mr-2" />
                  40% OFF
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl inline-block">
                  <span className="font-maven font-bold text-base block">6 cuotas sin interés</span>
                  <span className="text-xs opacity-90 font-mulish">con tarjetas seleccionadas</span>
                </div>
              </div>
            </div>

            {/* Banner - Látex */}
            <div className="mb-6 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="absolute inset-0 z-0">
                <Image src="/images/pintura-hogar.jpeg" alt="Látex" fill className="object-cover opacity-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-maven font-bold text-white mb-3">Látex para todos los ambientes</h3>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block mb-3">
                  <span className="text-white font-maven font-bold text-sm">Desde $29.990</span>
                </div>
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-maven font-semibold hover:bg-gray-100 transition-colors duration-300 ease-in-out text-sm">
                  Ver más
                </button>
              </div>
            </div>

            {/* Bottom row - 2 columns */}
            <div className="grid grid-cols-2 gap-4">
              {/* Banner - Impermeabilizantes */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/piscinas-2.jpeg"
                    alt="Impermeabilizantes"
                    fill
                    className="object-cover opacity-40"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-maven font-bold text-white mb-2">Impermeabilizantes</h3>
                  <p className="text-white/90 mb-3 font-mulish text-xs">Protege del agua y la humedad</p>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                    <span className="text-white font-maven font-bold text-base">30% OFF</span>
                  </div>
                </div>
              </div>

              {/* Banner - Revestimientos - NUEVA IMAGEN */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-5 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/sherwin-williams-colores.webp"
                    alt="Sherwin Williams Colores"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-maven font-bold text-white mb-2">Revestimientos</h3>
                  <p className="text-white/95 mb-3 font-mulish text-xs">Dale textura y color a tus paredes</p>
                  <button className="bg-white text-amber-700 px-3 py-1.5 rounded-lg font-maven font-semibold text-xs hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP: 2-column layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* LEFT COLUMN: Large promotional banner - NUEVA IMAGEN */}
            <div className="row-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-12 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/sherwin-williams-novacor.jpg"
                  alt="Sherwin Williams Promoción"
                  fill
                  className="object-cover opacity-40"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 w-fit">
                  <span className="font-maven font-bold text-white text-sm">PROMOCIÓN ESPECIAL</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-maven font-bold text-white mb-4">
                  Aprovechá las mejores ofertas
                </h2>
                <p className="text-xl text-white/95 mb-8 font-mulish">
                  Descuentos de hasta 40% en productos seleccionados
                </p>
                <div className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-maven font-bold text-3xl shadow-xl mb-6 w-fit">
                  <Tag className="w-8 h-8 mr-3" />
                  40% OFF
                </div>
                <div className="bg-blue-600 text-white px-6 py-3 rounded-xl inline-block w-fit">
                  <span className="font-maven font-bold text-lg block">6 cuotas sin interés</span>
                  <span className="text-sm opacity-90 font-mulish">con tarjetas seleccionadas</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN TOP: Látex banner */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="absolute inset-0 z-0">
                <Image src="/images/pintura-hogar.jpeg" alt="Látex" fill className="object-cover opacity-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-maven font-bold text-white mb-4">Látex para todos los ambientes</h3>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-4">
                  <span className="text-white font-maven font-bold text-base">Desde $29.990</span>
                </div>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-maven font-semibold hover:bg-gray-100 transition-colors duration-300 ease-in-out text-base">
                  Ver más
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN BOTTOM: 2 smaller banners side by side */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {/* Impermeabilizantes */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/piscinas-2.jpeg"
                    alt="Impermeabilizantes"
                    fill
                    className="object-cover opacity-40"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-maven font-bold text-white mb-3">Impermeabilizantes</h3>
                  <p className="text-white/90 mb-4 font-mulish text-base">Protege del agua y la humedad</p>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    <span className="text-white font-maven font-bold text-xl">30% OFF</span>
                  </div>
                </div>
              </div>

              {/* Revestimientos - NUEVA IMAGEN */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 lg:p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/sherwin-williams-colores.webp"
                    alt="Sherwin Williams Colores"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-maven font-bold text-white mb-3">Revestimientos</h3>
                  <p className="text-white/95 mb-4 font-mulish text-base">Dale textura y color a tus paredes</p>
                  <button className="bg-white text-amber-700 px-4 py-2 rounded-lg font-maven font-semibold text-sm hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sherwin Williams Certification Banner */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-700/20 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center p-6 md:p-8 lg:p-12">
              {/* LEFT: Certification Badge - Smaller on mobile, optimal on desktop */}
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <Image
                    src="/images/distribuidor-certificado-sherwin-williams.jpeg"
                    alt="Distribuidor Certificado Sherwin Williams"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* CENTER: Main Content */}
              <div className="md:col-span-6 text-center md:text-left">
                {/* Excellence indicators */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-maven font-bold text-amber-400 uppercase tracking-wider">
                    Calidad Premium
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-maven font-bold mb-2 md:mb-3 text-white leading-tight">
                  Distribuidores Oficiales
                  <span className="block text-amber-400 mt-1">Sherwin-Williams</span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-white/90 font-mulish leading-relaxed mb-4 md:mb-6">
                  Acceso exclusivo a la línea completa de pinturas premium.{" "}
                  <strong className="text-white">Más de 150 años</strong> de innovación y excelencia respaldando cada
                  proyecto con productos de calidad superior y asesoramiento técnico especializado.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 lg:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs font-maven font-semibold text-white/90">
                      Certificación Oficial
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-400/20 border border-blue-300/30 flex items-center justify-center backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs font-maven font-semibold text-white/90">
                      Stock Completo
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/20 border border-amber-300/30 flex items-center justify-center backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300"
                      >
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs font-maven font-semibold text-white/90">
                      Garantía Total
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Call to Action */}
              <div className="md:col-span-3 flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
                <div className="text-center md:text-right mb-2">
                  <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg shadow-lg mb-2">
                    <span className="font-maven font-bold text-base sm:text-lg block">+150 años</span>
                    <span className="text-[10px] sm:text-xs opacity-90">de experiencia</span>
                  </div>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center font-maven font-semibold bg-white text-blue-900 hover:bg-amber-400 hover:text-blue-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm w-full md:w-auto"
                >
                  Asesoramiento
                  <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-maven font-bold mb-4 md:mb-6 text-gray-800">
              Productos Destacados
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-mulish">
              Los mejores precios en pinturas de primera calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/productos/${product.slug}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="relative h-56 md:h-72 overflow-hidden bg-gray-100">
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                    <div className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-maven font-bold shadow-lg text-sm md:text-base">
                      {product.discount}% OFF
                    </div>
                  </div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
                    <div className="bg-gray-700 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-maven">
                      {product.size}
                    </div>
                  </div>
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xs md:text-sm font-maven font-bold text-primary mb-2">{product.brand}</h3>
                  <p className="text-gray-700 font-mulish mb-4 h-10 md:h-12 line-clamp-2 text-sm md:text-base">
                    {product.name}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-gray-400 line-through text-xs md:text-sm font-mulish">
                        ${product.oldPrice.toLocaleString("es-AR")}
                      </span>
                    </div>
                    <div className="text-2xl md:text-3xl font-maven font-bold text-primary">
                      ${product.price.toLocaleString("es-AR")}
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 font-mulish">
                      3 cuotas sin interés de ${(product.price / 3).toFixed(0)}
                    </p>
                  </div>
                  <div className="bg-red-50 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-maven font-semibold inline-block">
                    Retiro en 2 hs
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              href="#todos-los-productos"
              className="inline-flex items-center justify-center font-maven font-semibold bg-primary text-white hover:bg-primary-dark h-12 md:h-16 px-10 md:px-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-base md:text-xl"
            >
              Ver todos los productos
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Todos los Productos */}
      <section id="todos-los-productos" className="py-16 md:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-maven font-bold mb-4 md:mb-6 text-gray-800">
              Catálogo Completo de Productos
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-mulish">
              Descubre nuestra línea completa de pinturas Sherwin Williams para cada necesidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.id}
                href={`/productos/${product.slug}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="relative h-40 md:h-56 overflow-hidden bg-gray-50">
                  {product.discount > 0 && (
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 z-10">
                      <div className="bg-primary text-white px-2 md:px-4 py-1 md:py-2 rounded-lg font-maven font-bold shadow-md text-xs md:text-sm">
                        {product.discount}% OFF
                      </div>
                    </div>
                  )}
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-2 md:p-3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <div className="text-[10px] md:text-xs font-maven font-bold text-primary mb-1">{product.brand}</div>
                  <h3 className="text-xs md:text-sm font-mulish font-semibold text-gray-800 mb-2 md:mb-3 h-8 md:h-10 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="space-y-0.5 md:space-y-1">
                    <div className="text-[10px] md:text-xs text-gray-400 line-through font-mulish">
                      ${product.oldPrice.toLocaleString("es-AR")}
                    </div>
                    <div className="text-lg md:text-2xl font-maven font-bold text-primary">
                      ${product.price.toLocaleString("es-AR")}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-10">
            {[
              {
                icon: MapPin,
                title: "7 Sucursales en Mendoza",
                description: "Estamos siempre cerca tuyo en toda la provincia de Mendoza",
              },
              {
                icon: Truck,
                title: "Envíos a Domicilio",
                description: "Llevamos tu pedido donde lo necesites de forma rápida y segura",
              },
              {
                icon: Clock,
                title: "Retiro Rápido",
                description: "Comprá online y retirá en 2 horas en cualquier sucursal",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-12 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto md:mx-0">
                  <feature.icon className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-sm md:text-2xl font-maven font-bold mb-0 md:mb-4 text-gray-800 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-mulish leading-relaxed text-sm md:text-base hidden md:block">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/local-todocolor-fachada.jpeg"
                  alt="Sucursal Todo Color Pinturerías en Mendoza"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-maven font-bold mb-6 md:mb-8 text-gray-800">
                Más de 20 años siendo los especialistas en pintura
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 font-mulish leading-relaxed">
                La cadena de pinturerías más grande de Mendoza y Cuyo, con presencia en toda la provincia.
              </p>

              <ul className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: Award,
                    title: "Experiencia comprobada",
                    description: "Más de dos décadas brindando soluciones profesionales en pintura",
                  },
                  {
                    icon: Users,
                    title: "Asesoramiento experto",
                    description: "Equipo capacitado para ayudarte en cada proyecto",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Calidad garantizada",
                    description: "Trabajamos con las mejores marcas del mercado",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-maven font-bold mb-1 md:mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-mulish leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/quienes-somos"
                className="inline-flex items-center text-primary font-maven font-semibold mt-8 md:mt-10 text-base md:text-lg hover:underline transition-all duration-300 ease-in-out"
              >
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/piscinas-2.jpeg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-maven font-bold text-white mb-4 md:mb-6">
            Comprá online y recibí en tu casa
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8 md:mb-12 max-w-2xl mx-auto font-mulish">
            Envíos a todo Mendoza. ¡Fácil, rápido y seguro!
          </p>
          <Link
            href="https://wa.me/2616142848"
            className="inline-flex items-center justify-center font-maven font-bold bg-white text-primary hover:bg-gray-100 h-12 md:h-16 px-10 md:px-14 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out text-base md:text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 md:mr-3 md:w-6 md:h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 6.988 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  )
}
