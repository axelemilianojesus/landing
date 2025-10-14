"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Truck, Store, Tag, Minus, Plus, Check } from "lucide-react"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    brand: "CASABLANCA",
    name: "Enduido para Interior 1 lt",
    code: "55772",
    category: "Preparación de superficies",
    oldPrice: 5529.0,
    price: 4423.0,
    priceUSD: 4.423,
    priceWithoutTax: 3655,
    discount: 20,
    coupon: "Extra10",
    images: ["/images/pintura-hogar.jpeg", "/images/pintura-hogar2.jpeg", "/images/pintura-industrial.jpeg"],
    description:
      "ENDUIDO INTERIOR MATE BLANCO - CASABLANCA es un producto especialmente diseñado para corregir imperfecciones en paredes. Rellena fisuras, poros y grietas, posibilitando una terminación uniforme y perfectamente lisa. Su consistencia homogénea y cremosa permite una fácil aplicación, evitando irregularidades y grumos al momento de realizar retoques. De gran adherencia, rápido secado y excelente lijabilidad.",
    features: [
      "Rellena fisuras, poros y grietas",
      "Terminación uniforme y lisa",
      "Fácil aplicación",
      "Gran adherencia",
      "Rápido secado",
      "Excelente lijabilidad",
    ],
    relatedProducts: [
      {
        name: "Látex Interior Alba",
        price: 8990,
        image: "/images/pintura-hogar.jpeg",
      },
      {
        name: "Rodillo Profesional",
        price: 2500,
        image: "/images/wooden-paint-brushes.jpeg",
      },
      {
        name: "Sellador Casablanca",
        price: 5200,
        image: "/images/pintura-industrial.jpeg",
      },
      {
        name: "Kit Completo",
        price: 12900,
        image: "/images/pintura-hogar2.jpeg",
      },
    ],
  }

  const installments = [
    { bank: "BBV", cuotas: 6, total: 3980, logo: "💳" },
    { bank: "Banco Naranja", cuotas: 3, total: 4201, logo: "🟠" },
    { bank: "Banco Rojo", cuotas: 3, total: 3980, logo: "🔴" },
    { bank: "Banco Provincia", cuotas: 4, total: 0, logo: "🏦" },
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 font-mulish">
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span>›</span>
          <Link href="/productos" className="hover:text-primary transition-colors">
            Pinturas
          </Link>
          <span>›</span>
          <span className="text-gray-800">{product.category}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-mulish font-medium mb-8 hover:underline transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a productos
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-primary text-white px-6 py-3 rounded-xl font-maven font-bold text-lg shadow-lg">
                    {product.discount}% OFF
                  </div>
                </div>
              )}
              {product.coupon && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-maven font-bold shadow-lg">
                    cupón de descuento
                    <div className="text-xl mt-1">{product.coupon}</div>
                  </div>
                </div>
              )}
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image src={image || "/placeholder.svg"} alt={`Vista ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-maven font-bold text-primary mb-2">{product.brand}</div>
              <h1 className="text-4xl md:text-5xl font-maven font-bold text-gray-800 mb-4">{product.name}</h1>
              <div className="text-sm text-gray-600 font-mulish">CÓDIGO: {product.code}</div>
            </div>

            {/* Pricing */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-gray-400 line-through font-mulish">
                  ${product.oldPrice.toLocaleString("es-AR")}
                </span>
              </div>
              <div className="text-5xl font-maven font-bold text-primary">${product.price.toLocaleString("es-AR")}</div>
              <div className="space-y-1 text-sm text-gray-600 font-mulish">
                <div>Precio por UD ${product.priceUSD.toLocaleString("es-AR")}</div>
                <div>PRECIO SIN IMPUESTOS NACIONALES ${product.priceWithoutTax.toLocaleString("es-AR")}</div>
              </div>
              <div className="text-xl font-maven font-bold text-gray-800 pt-2">
                3 Cuotas sin interés de ${(product.price / 3).toFixed(0).toLocaleString("es-AR")}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  <Minus className="w-5 h-5 text-gray-600" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="w-16 h-12 text-center font-maven font-semibold text-lg border-x-2 border-gray-300 focus:outline-none"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-maven font-bold text-lg h-14 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                AGREGAR AL CARRITO
              </button>
            </div>

            {/* Payment Options */}
            <div className="space-y-3 border-t border-gray-200 pt-8">
              <h3 className="font-maven font-bold text-lg text-gray-800 mb-4">Opciones de pago</h3>
              {installments.map((option, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-2xl">{option.logo}</span>
                  <div className="flex-1 font-mulish">
                    <span className="font-semibold text-gray-800">
                      {option.cuotas} cuotas sin interés
                      {option.total > 0 && ` total con reintegro incluido $${option.total.toLocaleString("es-AR")}`}
                    </span>
                    {option.bank !== "Banco Provincia" && (
                      <div className="text-sm text-gray-600">con {option.bank}</div>
                    )}
                    {option.bank === "Banco Provincia" && (
                      <div className="text-sm text-gray-600">con {option.bank}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              <button className="flex items-center justify-center gap-2 p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-mulish font-medium text-gray-700">
                <Truck className="w-5 h-5 text-primary" />
                Calcular envío
              </button>
              <button className="flex items-center justify-center gap-2 p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-mulish font-medium text-gray-700">
                <Store className="w-5 h-5 text-primary" />
                Retiro en local
              </button>
              <button className="flex items-center justify-center gap-2 p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-mulish font-medium text-gray-700">
                <Tag className="w-5 h-5 text-primary" />
                Ver promociones
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-3xl font-maven font-bold text-gray-800 mb-6">Descripción</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-mulish">{product.description}</p>

          <h3 className="text-2xl font-maven font-bold text-gray-800 mb-4">Características principales</h3>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700 font-mulish">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-maven font-bold text-gray-800 mb-8">Completá tu proyecto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((related, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 bg-gray-50">
                  <Image src={related.image || "/placeholder.svg"} alt={related.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-mulish font-semibold text-gray-800 mb-2">{related.name}</h3>
                  <div className="text-2xl font-maven font-bold text-primary">
                    ${related.price.toLocaleString("es-AR")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
