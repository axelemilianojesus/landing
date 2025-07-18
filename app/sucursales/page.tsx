import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

export default function BranchesPage() {
  const branches = [
    {
      id: 1,
      name: "Casa Central",
      address: "Av. Ejército de los Andes 358, Mendoza",
      phone: "3807903",
      phone2: "2615563094",
      whatsapp: "+54 9 2616142848",
      email: "todocolorpinturerias@gmail.com",
      hours: "Lunes a Viernes: 8:30 - 18:00, Sábados: 8:30 - 13:00",
      mapUrl: "#",
      image: "/images/local.jpeg",
    },
    {
      id: 2,
      name: "Sucursal Godoy Cruz",
      address: "Av. San Martín Sur 567, Godoy Cruz, Mendoza",
      phone: "2616142848",
      hours: "Lunes a Viernes: 8:30 - 18:00, Sábados: 8:30 - 13:00",
      mapUrl: "#",
      image: "/images/pintura-hogar.jpeg",
    },
    {
      id: 3,
      name: "Sucursal Las Heras",
      address: "Av. Acceso Norte 890, Las Heras, Mendoza",
      phone: "2616142848",
      hours: "Lunes a Viernes: 8:30 - 18:00, Sábados: 8:30 - 13:00",
      mapUrl: "#",
      image: "/images/pintura-hogar2.jpeg",
    },
    {
      id: 4,
      name: "Sucursal Guaymallén",
      address: "Av. Acceso Este 1234, Guaymallén, Mendoza",
      phone: "2616142848",
      hours: "Lunes a Viernes: 8:30 - 18:00, Sábados: 8:30 - 13:00",
      mapUrl: "#",
      image: "/images/pintura-industrial.jpeg",
    },
    {
      id: 5,
      name: "Sucursal Luján de Cuyo",
      address: "Av. San Martín 456, Luján de Cuyo, Mendoza",
      phone: "2616142848",
      hours: "Lunes a Viernes: 8:30 - 18:00, Sábados: 8:30 - 13:00",
      mapUrl: "#",
      image: "/images/pintura-home-03.jpeg",
    },
    {
      id: 6,
      name: "Sucursal Maipú",
      address: "Av. Ozamis Sur 789, Maipú, Mendoza",
      phone: "2616142848",
      hours: "Lunes a Viernes: 8:30 - 18:00, Sábados: 8:30 - 13:00",
      mapUrl: "#",
      image: "/images/wooden-paint-brushes.jpeg",
    },
    {
      id: 7,
      name: "Sucursal Maipú",
      address: "Ozamis, Almte. Brown y, M5511 Maipú, Mendoza",
      phone: "0261 692-7926",
      whatsapp: "+54 9 261 614-2848",
      email: "todocolorpinturerias@gmail.com",
      hours: "De 9 a 13hs. / de 15 a 19hs. // Sab: 9 a 13 hs.",
      mapUrl: "#",
      image: "/images/piscinas-2.jpeg",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16 pt-32">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-kanit font-bold mb-4 text-secondary">Red de Sucursales</h1>
        <p className="text-lg text-gray-600 font-mulish">
          La cadena de pinturerías más grande de Mendoza, con 7 sucursales estratégicamente ubicadas para estar siempre
          cerca tuyo.
        </p>
      </div>

      {/* Casa Central Destacada */}
      <div className="mb-16 bg-white shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto relative">
            <Image src={branches[0].image || "/placeholder.svg"} alt={branches[0].name} fill className="object-cover" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-kanit font-bold mb-4 text-secondary">{branches[0].name}</h2>
            <div className="space-y-4 font-mulish">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <p className="text-gray-700">{branches[0].address}</p>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <p className="text-gray-700">{branches[0].phone}</p>
                  <p className="text-gray-700">{branches[0].phone2}</p>
                  <p className="text-gray-700">{branches[0].whatsapp}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <p className="text-gray-700">{branches[0].hours}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href={`https://wa.me/${branches[0].whatsapp?.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-10 py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                WhatsApp
              </Link>
              <Link
                href={branches[0].mapUrl}
                className="inline-flex items-center text-primary font-kanit font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en el mapa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Otras Sucursales */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {branches.slice(1).map((branch) => (
          <div key={branch.id} className="bg-white shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <Image src={branch.image || "/placeholder.svg"} alt={branch.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-kanit font-semibold mb-4 text-secondary">{branch.name}</h2>
              <div className="space-y-3 font-mulish">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">{branch.address}</p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">{branch.phone}</p>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">{branch.hours}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={branch.mapUrl}
                  className="inline-flex items-center text-primary font-kanit font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en el mapa
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-kanit font-semibold mb-4 text-secondary">Servicio de Envíos Premium</h2>
          <p className="text-lg text-gray-700 font-mulish">
            Además de nuestras 7 sucursales, ofrecemos servicio de envío a domicilio en toda la provincia de Mendoza.
            ¡Fácil, rápido y seguro!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-kanit font-semibold mb-4 text-secondary">Información de Envíos</h3>
              <ul className="space-y-3 font-mulish">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">Envíos a toda la provincia de Mendoza</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">Tiempos de entrega según zona (consultar)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">Envíos gratis en compras superiores a cierto monto (consultar)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">Seguimiento de pedido vía WhatsApp</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="https://wa.me/2616142848"
                  className="inline-flex items-center justify-center text-sm font-kanit font-medium bg-primary text-white hover:bg-primary-dark h-10 py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-full">
            <Image src="/images/phone-x.png" alt="Envíos a domicilio" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
