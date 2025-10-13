import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Truck, Clock, Award, ShieldCheck, Users, Tag } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-bg text-white pt-48 pb-32 overflow-hidden">
        <div className="container-custom relative z-10 hero-content">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-maven font-bold mb-8 leading-tight">
              La cadena de pinturerías líder en Mendoza
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-12 font-mulish font-light">
              Especialistas con más de 20 años de experiencia. 7 sucursales para estar siempre cerca tuyo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center font-maven font-semibold bg-white text-primary hover:bg-gray-50 h-14 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-lg"
              >
                Asesoramiento Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/sucursales"
                className="inline-flex items-center justify-center font-maven font-semibold border-2 border-white text-white hover:bg-white/10 h-14 px-8 rounded-lg transition-all duration-300 ease-in-out text-lg"
              >
                Ver Sucursales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Grid - Promotional Banners */}
      <section className="py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {/* Banner Grande - Ofertas Especiales */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border-destructive">
                  <span className="font-maven font-bold text-white text-sm">PROMOCIÓN ESPECIAL</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-maven font-bold text-white mb-4">
                  Aprovechá las mejores ofertas
                </h2>
                <p className="text-xl text-white/95 mb-8 font-mulish">
                  Descuentos de hasta 40% en productos seleccionados
                </p>
                <div className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-maven font-bold text-3xl shadow-xl mb-6">
                  <Tag className="w-8 h-8 mr-3" />
                  40% OFF
                </div>
                <div className="bg-blue-600 text-white px-6 py-3 rounded-xl inline-block">
                  <span className="font-maven font-bold text-lg block">6 cuotas sin interés</span>
                  <span className="text-sm opacity-90 font-mulish">con tarjetas seleccionadas</span>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10">
                <Image src="/images/pintura-home-03.jpeg" alt="Promoción" fill className="object-cover" />
              </div>
            </div>

            {/* Banner - Látex */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="relative z-10">
                <h3 className="text-3xl font-maven font-bold text-white mb-4">Látex para todos los ambientes</h3>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-4">
                  <span className="text-white font-maven font-bold">Desde $29.990</span>
                </div>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-maven font-semibold hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                  Ver más
                </button>
              </div>
            </div>

            {/* Banner - Impermeabilizantes */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="relative z-10">
                <h3 className="text-2xl font-maven font-bold text-white mb-3">Impermeabilizantes</h3>
                <p className="text-white/90 mb-4 font-mulish">Protege del agua y la humedad</p>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  <span className="text-white font-maven font-bold text-xl">30% OFF</span>
                </div>
              </div>
            </div>

            {/* Banner - Revestimientos */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-lg">
              <div className="relative z-10">
                <h3 className="text-2xl font-maven font-bold text-white mb-3">Revestimientos</h3>
                <p className="text-white/90 mb-4 font-mulish">Dale textura y color a tus paredes</p>
                <button className="bg-white text-amber-700 px-4 py-2 rounded-lg font-maven font-semibold text-sm hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-maven font-bold mb-6 text-gray-800">Productos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mulish">
              Los mejores precios en pinturas de primera calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                brand: "SHERWIN WILLIAMS",
                name: "Látex Interior Loxon Mate Blanco",
                size: "20 lts",
                oldPrice: "$247.856",
                price: "$173.499",
                discount: "30",
                cuotas: "$57.833",
                image: "/images/pintura-hogar.jpeg",
              },
              {
                brand: "ALBA",
                name: "Látex Interior Albalatex Mate Blanco",
                size: "20 lts",
                oldPrice: "$174.987",
                price: "$139.990",
                discount: "20",
                cuotas: "$46.663",
                image: "/images/pintura-hogar2.jpeg",
              },
              {
                brand: "SHERWIN WILLIAMS",
                name: "Látex Interior Pro 700 Mate Blanco",
                size: "20 lts",
                oldPrice: "$114.270",
                price: "$79.989",
                discount: "30",
                cuotas: "$26.663",
                image: "/images/pintura-industrial.jpeg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-primary text-white px-6 py-3 rounded-lg font-maven font-bold shadow-lg text-base">
                      {product.discount}% OFF
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm font-maven">{product.size}</div>
                  </div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-sm font-maven font-bold text-primary mb-2">{product.brand}</h3>
                  <p className="text-gray-700 font-mulish mb-4 h-12 line-clamp-2">{product.name}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-gray-400 line-through text-sm font-mulish">{product.oldPrice}</span>
                    </div>
                    <div className="text-3xl font-maven font-bold text-primary">{product.price}</div>
                    <p className="text-sm text-gray-600 font-mulish">3 cuotas sin interés de {product.cuotas}</p>
                  </div>
                  <div className="bg-red-50 text-primary px-4 py-2 rounded-lg text-sm font-maven font-semibold inline-block">
                    Retiro en 2 hs
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="inline-flex items-center justify-center font-maven font-semibold bg-primary text-white hover:bg-primary-dark h-16 px-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-xl">
              Ver todos los productos
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                className="bg-white p-12 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-maven font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 font-mulish leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/local.jpeg"
                  alt="Sucursal Todo Color"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-maven font-bold mb-8 text-gray-800">
                Más de 20 años siendo los especialistas en pintura
              </h2>
              <p className="text-xl text-gray-600 mb-10 font-mulish leading-relaxed">
                La cadena de pinturerías más grande de Mendoza y Cuyo, con presencia en toda la provincia.
              </p>

              <ul className="space-y-8">
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
                  <li key={index} className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-maven font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 font-mulish leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/quienes-somos"
                className="inline-flex items-center text-primary font-maven font-semibold mt-10 text-lg hover:underline transition-all duration-300 ease-in-out"
              >
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/piscinas-2.jpeg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-maven font-bold text-white mb-6">
            Comprá online y recibí en tu casa
          </h2>
          <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto font-mulish">
            Envíos a todo Mendoza. ¡Fácil, rápido y seguro!
          </p>
          <Link
            href="https://wa.me/2616142848"
            className="inline-flex items-center justify-center font-maven font-bold bg-white text-primary hover:bg-gray-100 h-16 px-14 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out text-xl"
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
            Consultar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  )
}
