import Link from "next/link"
import { Download, FileJson, CheckCircle } from "lucide-react"

export default function ElementorExportPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm max-w-lg w-full p-8 flex flex-col gap-6">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0">
            <FileJson className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">
              Plantilla Elementor Pro
            </h1>
            <p className="text-sm text-gray-500">Paleta de colores Sherwin-Williams</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2.5">
          {[
            "100% Flexbox Containers (sin section/column legacy)",
            "Interactivo: pestañas + swatches + vista previa en vivo",
            "Responsive: desktop, tablet y mobile",
            "SEO: meta title, meta description y JSON-LD",
            "Importable directo en Elementor Pro",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <a
            href="/api/elementor-zip"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            Descargar ZIP para Elementor
          </a>
          <a
            href="/paleta-colores-sherwin-williams.json"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 font-medium text-sm px-5 py-3 rounded-xl transition-colors duration-200"
          >
            <FileJson className="w-4 h-4" />
            Ver JSON directo
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700 block mb-1">Cómo importar en WordPress:</strong>
          Elementor Pro &rarr; Templates &rarr; Saved Templates &rarr; Import Templates &rarr;
          seleccionar el <code className="bg-gray-100 px-1 rounded">.zip</code> descargado.
          Luego insertar la sección en cualquier página con el botón &ldquo;Insert&rdquo;.
        </div>

        <Link href="/" className="text-xs text-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
          Volver al sitio
        </Link>
      </div>
    </main>
  )
}
