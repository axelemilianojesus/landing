import Image from "next/image"
import Link from "next/link"
import { Award, ShieldCheck, Users, Package, Monitor, Heart, Eye, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quienes Somos - Todo Color, Pinturerías en Mendoza",
  description:
    "Conoce la historia, misión y visión de Todo Color, la cadena de pinturerías líder en Mendoza y Cuyo. Descubre por qué somos los especialistas en pintura.",
}

export default function AboutPage() {
  return (
    <div className="container-custom py-12 md:py-16 pt-32">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Sobre Todo Color Pinturerías</h1>
        <p className="text-lg text-gray-600">
          La historia de la cadena de pinturerías que se convirtió en la número uno de Mendoza.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/images/sucursal-todocolor.jpeg"
            alt="Fachada de Todo Color Pinturerías - Casa Central en Mendoza"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 mb-4">
            Todo Color Pinturerías nació con la visión de convertirse en la referencia en el mercado de pinturas en
            Mendoza. A lo largo de los años, hemos crecido hasta convertirnos en la{" "}
            <strong>primera cadena de pinturerías</strong> de la región, con 7 sucursales estratégicamente ubicadas para
            estar siempre cerca de nuestros clientes.
          </p>
          <p className="text-gray-700 mb-4">
            Nuestra trayectoria está marcada por un compromiso constante con la calidad, el servicio al cliente y la
            innovación. Nos enorgullece ser reconocidos como los verdaderos{" "}
            <strong>especialistas en pinturas y accesorios</strong> en Mendoza y Cuyo.
          </p>
          <p className="text-gray-700">
            Hoy, Todo Color Pinturerías continúa creciendo y evolucionando, manteniendo siempre los valores que nos han
            caracterizado desde el principio: profesionalismo, honestidad y pasión por lo que hacemos.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Nuestra Misión y Visión</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <Target className="w-10 h-10 text-primary mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">Misión</h3>
            </div>
            <p className="text-gray-800">
              Ofrecer soluciones integrales en pinturas y accesorios de la más alta calidad, brindando asesoramiento
              profesional y personalizado para satisfacer las necesidades de nuestros clientes, contribuyendo a mejorar
              sus espacios y proyectos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <Eye className="w-10 h-10 text-primary mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">Visión</h3>
            </div>
            <p className="text-gray-800">
              Ser reconocidos como la <strong>empresa líder en el mercado de pinturas en Mendoza y Cuyo</strong>,
              expandiendo nuestra presencia y manteniendo los más altos estándares de calidad, innovación y servicio al
              cliente.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">¿Por qué elegir nuestra pinturería?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Experiencia</h3>
            <p className="text-gray-800">
              Contamos con 50 años de experiencia en el mercado, lo que nos permite ofrecer el mejor asesoramiento y
              soluciones para cada proyecto.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Calidad</h3>
            <p className="text-gray-800">
              Trabajamos con las mejores marcas y productos del mercado, garantizando resultados óptimos en todos los
              proyectos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Servicio</h3>
            <p className="text-gray-800">
              Nuestro equipo está capacitado para brindar atención personalizada y resolver todas tus dudas y
              necesidades.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Package className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Variedad</h3>
            <p className="text-gray-800">
              Ofrecemos una amplia gama de productos para satisfacer todas las necesidades, desde hogar hasta obra y
              automotor.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Monitor className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Tecnología</h3>
            <p className="text-gray-800">
              Utilizamos tecnología de punta para la preparación de colores y acabados, garantizando precisión y
              calidad.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Equipo</h3>
            <p className="text-gray-800">
              Contamos con un equipo de profesionales capacitados y apasionados por brindar el mejor servicio y
              asesoramiento.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">¿Listo para comenzar tu proyecto?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          En Todo Color Pinturerías estamos listos para ayudarte a hacer realidad tus ideas. Contáctanos hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-12 py-3 px-6 shadow-lg hover:shadow-xl transition-all"
          >
            Contactar ahora
          </Link>
          <Link
            href="/sucursales"
            className="inline-flex items-center justify-center text-sm font-kanit font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-white h-12 py-3 px-6 shadow-md hover:shadow-lg transition-all"
          >
            Ver sucursales
          </Link>
        </div>
      </div>
    </div>
  )
}
