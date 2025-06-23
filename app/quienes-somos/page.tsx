import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container-custom py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Quienes Somos</h1>
        <p className="text-lg text-gray-600">
          Conoce más sobre Todo Color Pinturerías, la primera cadena de pinturerías en Mendoza.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/images/local.jpeg"
            alt="Todo Color Pinturerías"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 mb-4">
            Todo Color Pinturerías nació con la visión de convertirse en la referencia en el mercado de pinturas en
            Mendoza. A lo largo de los años, hemos crecido hasta convertirnos en la primera cadena de pinturerías de la
            región, con 6 sucursales estratégicamente ubicadas para estar siempre cerca de nuestros clientes.
          </p>
          <p className="text-gray-700 mb-4">
            Nuestra trayectoria está marcada por un compromiso constante con la calidad, el servicio al cliente y la
            innovación. Nos enorgullece ser reconocidos como los verdaderos especialistas en pinturas y accesorios en
            Mendoza y Cuyo.
          </p>
          <p className="text-gray-700">
            Hoy, Todo Color Pinturerías continúa creciendo y evolucionando, manteniendo siempre los valores que nos han
            caracterizado desde el principio: profesionalismo, honestidad y pasión por lo que hacemos.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Misión y Visión</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">Misión</h3>
            <p className="text-gray-700">
              Ofrecer soluciones integrales en pinturas y accesorios de la más alta calidad, brindando asesoramiento
              profesional y personalizado para satisfacer las necesidades de nuestros clientes, contribuyendo a mejorar
              sus espacios y proyectos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">Visión</h3>
            <p className="text-gray-700">
              Ser reconocidos como la empresa líder en el mercado de pinturas en Mendoza y Cuyo, expandiendo nuestra
              presencia y manteniendo los más altos estándares de calidad, innovación y servicio al cliente.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
            <p className="text-gray-700">
              Contamos con años de experiencia en el mercado, lo que nos permite ofrecer el mejor asesoramiento y
              soluciones para cada proyecto.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad</h3>
            <p className="text-gray-700">
              Trabajamos con las mejores marcas y productos del mercado, garantizando resultados óptimos en todos los
              proyectos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Servicio</h3>
            <p className="text-gray-700">
              Nuestro equipo está capacitado para brindar atención personalizada y resolver todas tus dudas y
              necesidades.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Variedad</h3>
            <p className="text-gray-700">
              Ofrecemos una amplia gama de productos para satisfacer todas las necesidades, desde hogar hasta obra y
              automotor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tecnología</h3>
            <p className="text-gray-700">
              Utilizamos tecnología de punta para la preparación de colores y acabados, garantizando precisión y
              calidad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Equipo</h3>
            <p className="text-gray-700">
              Contamos con un equipo de profesionales capacitados y apasionados por brindar el mejor servicio y
              asesoramiento.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">¿Listo para comenzar tu proyecto?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          En Todo Color Pinturerías estamos listos para ayudarte a hacer realidad tus ideas. Contáctanos hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contacto" className="btn btn-primary">
            Contactar ahora
          </Link>
          <Link href="/sucursales" className="btn btn-outline">
            Ver sucursales
          </Link>
        </div>
      </div>
    </div>
  )
}
