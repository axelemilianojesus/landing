import type React from "react"
import type { Metadata } from "next"
import { Kanit, Mulish } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Kanit para títulos, subtítulos y botones
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
})

// Mulish para textos
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
})

export const metadata: Metadata = {
  title: "Todo Color Pinturerías | Especialistas en Pinturas en Mendoza",
  description:
    "Primera cadena de pinturerías en Mendoza con 7 sucursales. Especialistas en pinturas y accesorios con envíos a domicilio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${kanit.variable} ${mulish.variable} font-mulish`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
