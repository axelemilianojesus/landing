import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { Maven_Pro, Mulish, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

// Maven Pro para títulos
const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-maven-pro",
  display: "swap",
})

// Mulish para textos
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Todo Color | Pinturerías Líderes en Mendoza",
  description:
    "Descubre Todo Color, la cadena de pinturerías líder en Mendoza. Con 7 sucursales, ofrecemos pinturas, accesorios y asesoramiento experto. ¡Envíos a domicilio!",
  keywords:
    "pinturerias en mendoza, pintureria, todo color, venta de pintura mendoza, cadena de pinturerias, sherwin williams mendoza, alba mendoza",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${mavenPro.variable} ${mulish.variable} font-mulish antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
