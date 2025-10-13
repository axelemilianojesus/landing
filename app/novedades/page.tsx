import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Nueva línea de pinturas ecológicas",
      excerpt: "Conoce nuestra nueva línea de pinturas ecológicas, amigables con el medio ambiente y de alta calidad.",
      date: "15 de Abril, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "nueva-linea-pinturas-ecologicas",
    },
    {
      id: 2,
      title: "Inauguración de nuestra sexta sucursal",
      excerpt:
        "Con gran alegría anunciamos la apertura de nuestra sexta sucursal en Maipú, ampliando nuestra presencia en Mendoza.",
      date: "28 de Marzo, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "inauguracion-sexta-sucursal",
    },
    {
      id: 3,
      title: "Tendencias en colores para 2025",
      excerpt: "Descubre las tendencias en colores para este año y renueva tus espacios con los tonos más actuales.",
      date: "10 de Febrero, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "tendencias-colores-2025",
    },
    {
      id: 4,
      title: "Guía para elegir la pintura adecuada",
      excerpt:
        "Te presentamos una guía completa para ayudarte a elegir la pintura perfecta según el tipo de superficie y ambiente.",
      date: "5 de Enero, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "guia-elegir-pintura-adecuada",
    },
    {
      id: 5,
      title: "Promociones especiales de verano",
      excerpt:
        "Aprovecha nuestras promociones especiales de verano con descuentos en pinturas para exterior e interior.",
      date: "20 de Diciembre, 2024",
      image: "/placeholder.svg?height=400&width=600",
      slug: "promociones-especiales-verano",
    },
    {
      id: 6,
      title: "Consejos para pintar en época de calor",
      excerpt:
        "Te compartimos algunos consejos prácticos para pintar durante la época de calor y obtener los mejores resultados.",
      date: "5 de Diciembre, 2024",
      image: "/placeholder.svg?height=400&width=600",
      slug: "consejos-pintar-epoca-calor",
    },
  ]

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Novedades</h1>
        <p className="text-lg text-gray-700">
          Mantente al día con las últimas noticias, tendencias y promociones de Todo Color Pinturerías.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {news.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden group">
            <Link href={`/novedades/${item.slug}`} className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{item.title}</h2>
                <p className="text-gray-700 mb-6">{item.excerpt}</p>
                <div className="inline-flex items-center text-primary font-medium">
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-24 bg-gray-100 rounded-lg p-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold mb-6">Suscríbete a nuestro Boletín</h2>
          <p className="text-lg text-gray-700">
            Recibe las últimas novedades, promociones y consejos directamente en tu correo electrónico.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-6">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap text-lg font-semibold">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
