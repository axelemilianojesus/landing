"use client"

import type React from "react"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [formState, setFormState] = useState({ status: "idle", message: "" })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState({ status: "loading", message: "" })

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulación de éxito
    setFormState({ status: "success", message: "¡Gracias por tu mensaje! Nos pondremos en contacto a la brevedad." })
    ;(event.target as HTMLFormElement).reset()

    // Para volver al estado inicial después de un tiempo
    setTimeout(() => setFormState({ status: "idle", message: "" }), 5000)
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-maven font-bold mb-6 text-gray-800">Contacto y Asesoramiento</h1>
          <p className="text-lg text-gray-700 font-mulish">
            Por consultas o presupuestos para tu proyecto de pintura. Respondemos a la brevedad. Tenemos stock, los
            mejores precios y variedad. ¡Consúltenos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-50 p-8 shadow-xl border-b-4 border-primary h-full">
              <h2 className="text-3xl font-maven font-semibold mb-8 pb-3 relative inline-block text-gray-800">
                Información de Contacto
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
              </h2>

              <div className="space-y-8 font-mulish">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-maven font-medium mb-2 text-gray-800">Dirección</h3>
                    <p className="text-gray-700">7 Sucursales en Mendoza</p>
                    <p className="text-gray-700">Consultá ubicaciones en la sección Sucursales</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-maven font-medium mb-2 text-gray-800">Teléfono</h3>
                    <p className="text-gray-700">2616142848</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-maven font-medium mb-2 text-gray-800">Email</h3>
                    <p className="text-gray-700">info@todocolorpinturerias.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-maven font-medium mb-2 text-gray-800">Horarios de Atención</h3>
                    <p className="text-gray-700">Lunes a Viernes: 8:30 - 18:00</p>
                    <p className="text-gray-700">Sábados: 8:30 - 13:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-maven font-medium mb-2 text-gray-800">WhatsApp</h3>
                    <p className="text-gray-700">2616142848</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-maven font-semibold mb-4 text-gray-800">Síguenos</h3>
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

          <div className="relative">
            {/* Mascot positioned organically */}
            <div className="absolute -top-20 -right-4 md:-right-8 z-10 hidden md:block">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <Image
                  src="/images/mascot-painter.png"
                  alt="Todo Color Mascot - Experto en pintura"
                  fill
                  className="object-contain drop-shadow-2xl animate-bounce-slow"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-primary">
                <p className="text-primary font-maven font-bold text-sm whitespace-nowrap">
                  ¡Estoy aquí para ayudarte!
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl border-b-4 border-primary relative">
              <h2 className="text-3xl font-maven font-semibold mb-8 pb-3 relative inline-block text-gray-800">
                Envíanos un mensaje
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
              </h2>

              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-maven font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-mulish"
                      placeholder="Tu nombre"
                      required
                      aria-label="Nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-maven font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-mulish"
                      placeholder="Tu email"
                      required
                      aria-label="Email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-maven font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-mulish"
                    placeholder="Tu teléfono"
                    aria-label="Teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base font-maven font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-mulish"
                    placeholder="Asunto de tu mensaje"
                    required
                    aria-label="Asunto"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-maven font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-mulish"
                    placeholder="Tu mensaje"
                    required
                    aria-label="Mensaje"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white font-maven py-3 text-lg shadow-lg hover:bg-primary-dark transition-colors w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={formState.status === "loading"}
                >
                  {formState.status === "loading" ? "Enviando..." : "Enviar mensaje"}
                </button>
                {formState.status === "success" && (
                  <p className="text-green-600 text-center font-mulish">{formState.message}</p>
                )}
                {formState.status === "error" && (
                  <p className="text-red-600 text-center font-mulish">{formState.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-maven font-semibold mb-8 pb-3 relative inline-block text-gray-800">
            Ubicación de Casa Central
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="bg-white shadow-xl h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.083553971239!2d-68.8571688848146!3d-32.8963289809358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090f3f23a9a7%3A0xabe4c71e2a333acd!2sAv.%20Ej%C3%A9rcito%20de%20los%20Andes%20358%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1626885681365!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Ubicación de Todo Color Pinturerías Casa Central"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
