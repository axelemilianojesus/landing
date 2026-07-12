"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

// ─── PALETA PROFESIONAL COMPLETA ───────────────────────────────────────────────
const colorFamilies = [
  {
    name: "Neutros",
    dot: "#C2B9A7",
    colors: [
      { name: "Alabaster",       code: "SW 7008", hex: "#F4EFE6" },
      { name: "Accessible Beige",code: "SW 7036", hex: "#D4C5AE" },
      { name: "Agreeable Gray",  code: "SW 7029", hex: "#C2B9A7" },
      { name: "Repose Gray",     code: "SW 7015", hex: "#B2ACA4" },
      { name: "Worldly Gray",    code: "SW 7043", hex: "#A89F93" },
      { name: "Requisite Gray",  code: "SW 7023", hex: "#8E8880" },
      { name: "Mindful Gray",    code: "SW 7016", hex: "#9A9390" },
      { name: "Mega Greige",     code: "SW 7031", hex: "#B8AA98" },
      { name: "Balanced Beige",  code: "SW 7037", hex: "#C9BAA3" },
      { name: "Functional Gray", code: "SW 7024", hex: "#A09893" },
      { name: "Anew Gray",       code: "SW 7030", hex: "#BFB5A8" },
      { name: "Versatile Gray",  code: "SW 6072", hex: "#9A9898" },
    ],
  },
  {
    name: "Blancos",
    dot: "#EDE3D2",
    colors: [
      { name: "Extra White",           code: "SW 7006", hex: "#F5F4EF" },
      { name: "Pure White",            code: "SW 7005", hex: "#EEE9E1" },
      { name: "High Reflective White", code: "SW 7757", hex: "#F7F6F2" },
      { name: "Snowbound",             code: "SW 7004", hex: "#EAE6DE" },
      { name: "Dover White",           code: "SW 6385", hex: "#EDE3D2" },
      { name: "Creamy",                code: "SW 7012", hex: "#EDE0C8" },
      { name: "Original White",        code: "SW 7077", hex: "#F0ECE3" },
      { name: "Aesthetic White",       code: "SW 7035", hex: "#E6E0D4" },
      { name: "Antique White",         code: "SW 6119", hex: "#EDDFCA" },
      { name: "Marshmallow",           code: "SW 7001", hex: "#F0EDE8" },
      { name: "Ivory Lace",            code: "SW 7013", hex: "#EDE5D3" },
      { name: "White Duck",            code: "SW 7010", hex: "#E7E1D6" },
    ],
  },
  {
    name: "Azules",
    dot: "#7AA8BF",
    colors: [
      { name: "Rarified Air",   code: "SW 6525", hex: "#C8D8E2" },
      { name: "Misty",          code: "SW 6232", hex: "#B3C8D3" },
      { name: "Upward",         code: "SW 6239", hex: "#9AB8CB" },
      { name: "Breezy",         code: "SW 6478", hex: "#7AA8BF" },
      { name: "Leisure Blue",   code: "SW 6510", hex: "#5D8FAA" },
      { name: "Indigo Batik",   code: "SW 7602", hex: "#3D6A87" },
      { name: "Bluebell",       code: "SW 6523", hex: "#8AAFC4" },
      { name: "Waterfall",      code: "SW 6750", hex: "#6496B0" },
      { name: "Sozou",          code: "SW 0052", hex: "#4A7A9B" },
      { name: "Secure Blue",    code: "SW 6508", hex: "#3B6F8C" },
      { name: "Loyal Blue",     code: "SW 6510", hex: "#2E5F7E" },
      { name: "Commodore",      code: "SW 6524", hex: "#254E6F" },
    ],
  },
  {
    name: "Verdes",
    dot: "#6B9476",
    colors: [
      { name: "Patience",       code: "SW 0054", hex: "#C5D0C0" },
      { name: "Clary Sage",     code: "SW 6178", hex: "#96A88B" },
      { name: "Jade Dragon",    code: "SW 6454", hex: "#6B9476" },
      { name: "Basil",          code: "SW 6194", hex: "#4E6E51" },
      { name: "Rosemary",       code: "SW 6187", hex: "#4A6444" },
      { name: "Hunt Club",      code: "SW 6468", hex: "#3A5A3A" },
      { name: "Pale Moss",      code: "SW 0152", hex: "#B8C4AF" },
      { name: "Artichoke",      code: "SW 9132", hex: "#8A9A7F" },
      { name: "Laos Jade",      code: "SW 6460", hex: "#5C8C68" },
      { name: "Ripe Olive",     code: "SW 9127", hex: "#5E6E4A" },
      { name: "Eco Green",      code: "SW 6721", hex: "#4A6B44" },
      { name: "Cilantro",       code: "SW 6453", hex: "#607A55" },
    ],
  },
  {
    name: "Rojos",
    dot: "#C45A3E",
    colors: [
      { name: "Intimate White",    code: "SW 6322", hex: "#E8D5C8" },
      { name: "Ravishing Coral",   code: "SW 6611", hex: "#D4826A" },
      { name: "Fireworks",         code: "SW 6902", hex: "#C45A3E" },
      { name: "Antique Red",       code: "SW 0046", hex: "#A84433" },
      { name: "Rave Red",          code: "SW 6608", hex: "#9B2B1F" },
      { name: "Burgundy",          code: "SW 6300", hex: "#6E2127" },
      { name: "Coral Reef",        code: "SW 6606", hex: "#CC7055" },
      { name: "Reddened Earth",    code: "SW 6053", hex: "#B84A37" },
      { name: "Vermillion",        code: "SW 6886", hex: "#AA3C2E" },
      { name: "Red Tomato",        code: "SW 6607", hex: "#963025" },
      { name: "Claret",            code: "SW 6301", hex: "#7C2530" },
      { name: "Deep Maroon",       code: "SW 6302", hex: "#5C1E24" },
    ],
  },
  {
    name: "Amarillos",
    dot: "#E8B84B",
    colors: [
      { name: "Pale Sun",           code: "SW 6670", hex: "#F5E4B2" },
      { name: "Jonquil",            code: "SW 6678", hex: "#F0D282" },
      { name: "Sunflower",          code: "SW 6902", hex: "#E8B84B" },
      { name: "Daffodil",           code: "SW 6681", hex: "#D9A027" },
      { name: "Goldenrod",          code: "SW 6380", hex: "#C08A1A" },
      { name: "Antiquarian Brown",  code: "SW 0044", hex: "#9A6B14" },
      { name: "Butter Up",          code: "SW 6672", hex: "#F2E4A0" },
      { name: "Nugget",             code: "SW 6697", hex: "#DDB030" },
      { name: "Harvest Gold",       code: "SW 6376", hex: "#C8950E" },
      { name: "Golden Fleece",      code: "SW 6395", hex: "#B87E0A" },
      { name: "Ochre",              code: "SW 6385", hex: "#A8720A" },
      { name: "Mustardseed",        code: "SW 6698", hex: "#C09020" },
    ],
  },
  {
    name: "Tierra",
    dot: "#B8845A",
    colors: [
      { name: "Sturdy Brown",     code: "SW 6082", hex: "#A06040" },
      { name: "Toasty",           code: "SW 6095", hex: "#C0906A" },
      { name: "Caramelized",      code: "SW 7518", hex: "#B8845A" },
      { name: "Confident Yellow", code: "SW 6394", hex: "#C8A060" },
      { name: "Sand Dune",        code: "SW 7547", hex: "#C4A87A" },
      { name: "Toasted Sesame",   code: "SW 9105", hex: "#B88C5A" },
      { name: "Humus",            code: "SW 6138", hex: "#A87848" },
      { name: "Antler",           code: "SW 6139", hex: "#C09058" },
      { name: "Pecan",            code: "SW 6094", hex: "#D0A870" },
      { name: "Pale Almond",      code: "SW 6388", hex: "#DEC48A" },
      { name: "Gauze",            code: "SW 6390", hex: "#D4BC8A" },
      { name: "Oak Barrel",       code: "SW 7521", hex: "#906040" },
    ],
  },
  {
    name: "Grises",
    dot: "#7A7A82",
    colors: [
      { name: "Dovetail",         code: "SW 7018", hex: "#8C8580" },
      { name: "Peppercorn",       code: "SW 7674", hex: "#5A5A5A" },
      { name: "Cityscape",        code: "SW 7067", hex: "#787878" },
      { name: "Pewter Cast",      code: "SW 7684", hex: "#8A8A8E" },
      { name: "Gauntlet Gray",    code: "SW 7019", hex: "#7E7A74" },
      { name: "Porpoise",         code: "SW 7047", hex: "#969292" },
      { name: "Hardware",         code: "SW 7525", hex: "#7E7870" },
      { name: "Magnetic Gray",    code: "SW 0052", hex: "#6A6A6E" },
      { name: "Felted Wool",      code: "SW 9171", hex: "#8A8882" },
      { name: "Intellectual Gray",code: "SW 7045", hex: "#9A9490" },
      { name: "Storm Cloud",      code: "SW 6249", hex: "#727880" },
      { name: "Quicksilver",      code: "SW 7550", hex: "#969AA0" },
    ],
  },
]

// ─── ESCENAS DEL VISUALIZADOR ──────────────────────────────────────────────────
type ColorPoint = {
  x: number   // % desde izquierda
  y: number   // % desde arriba
  label: string
  defaultHex: string
  defaultName: string
}

type Scene = {
  id: string
  title: string
  image: string
  points: ColorPoint[]
}

const scenes: Scene[] = [
  {
    id: "pool",
    title: "Piscina exterior",
    image: "/images/visualizer-pool.png",
    points: [
      { x: 72, y: 55, label: "Paredes del hogar",  defaultHex: "#F4EFE6", defaultName: "Alabaster SW 7008" },
      { x: 35, y: 75, label: "Deck / piso",         defaultHex: "#D4C5AE", defaultName: "Accessible Beige SW 7036" },
      { x: 18, y: 45, label: "Borde de piscina",    defaultHex: "#C8D8E2", defaultName: "Rarified Air SW 6525" },
    ],
  },
  {
    id: "interior",
    title: "Interior moderno",
    image: "/images/visualizer-interior.png",
    points: [
      { x: 20, y: 35, label: "Pared principal",  defaultHex: "#EEE9E1", defaultName: "Pure White SW 7005" },
      { x: 65, y: 28, label: "Pared lateral",    defaultHex: "#C2B9A7", defaultName: "Agreeable Gray SW 7029" },
      { x: 78, y: 62, label: "Frente de cocina", defaultHex: "#3D6A87", defaultName: "Indigo Batik SW 7602" },
      { x: 45, y: 80, label: "Zócalo / piso",    defaultHex: "#DEC48A", defaultName: "Pale Almond SW 6388" },
      { x: 50, y: 15, label: "Cielorraso",        defaultHex: "#F5F4EF", defaultName: "Extra White SW 7006" },
    ],
  },
  {
    id: "patio",
    title: "Patio privado",
    image: "/images/visualizer-patio.png",
    points: [
      { x: 25, y: 40, label: "Fachada principal", defaultHex: "#EDE3D2", defaultName: "Dover White SW 6385" },
      { x: 68, y: 35, label: "Pared lateral",     defaultHex: "#C5D0C0", defaultName: "Patience SW 0054" },
      { x: 50, y: 72, label: "Piso exterior",      defaultHex: "#C4A87A", defaultName: "Sand Dune SW 7547" },
    ],
  },
]

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "#1a1a1a" : "#ffffff"
}

// ─── COMPONENTE PRINCIPAL ───────────────────────────────────────────────────────
export default function ColorPalette() {
  // Paleta
  const [activeFamily, setActiveFamily] = useState(0)
  const [selectedColor, setSelectedColor] = useState<{ name: string; code: string; hex: string } | null>(null)

  // Visualizador
  const [activeScene, setActiveScene] = useState(0)
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [sceneColors, setSceneColors] = useState<Record<string, Record<number, { hex: string; name: string }>>>({})

  const currentColors = colorFamilies[activeFamily].colors
  const scene = scenes[activeScene]

  const getPointColor = (sceneId: string, pointIdx: number, defaultHex: string, defaultName: string) => {
    return sceneColors[sceneId]?.[pointIdx] ?? { hex: defaultHex, name: defaultName }
  }

  const applyColorToPoint = (hex: string, name: string, code: string) => {
    if (activePoint === null) return
    setSceneColors((prev) => ({
      ...prev,
      [scene.id]: {
        ...(prev[scene.id] ?? {}),
        [activePoint]: { hex, name: `${name} ${code}` },
      },
    }))
  }

  return (
    <>
      {/* ── SECCIÓN 1: PALETA DE COLORES ─────────────────────────────────────── */}
      <section className="color-palette-section">
        <div className="container-custom">
          <div className="section-header">
            <div className="section-badge">
              <div className="section-badge-logo">
                <Image src="/images/sherwin-williams-logo.png" alt="Sherwin Williams" fill className="logo-image" />
              </div>
              <span>Colores Sherwin-Williams</span>
            </div>
            <h2 className="section-title">Explorá nuestra paleta de colores</h2>
            <p className="section-description">
              Más de 1.500 colores premium disponibles en todas nuestras sucursales
            </p>
          </div>

          {/* Tabs de familia */}
          <div className="color-family-tabs">
            {colorFamilies.map((family, index) => (
              <button
                key={family.name}
                onClick={() => { setActiveFamily(index); setSelectedColor(null) }}
                className={`color-family-tab ${activeFamily === index ? "color-family-tab-active" : ""}`}
              >
                <div className="color-family-dot" style={{ backgroundColor: family.dot }} />
                {family.name}
              </button>
            ))}
          </div>

          {/* Grid de swatches + panel de preview */}
          <div className="color-palette-wrapper">
            <div className="color-swatches-grid color-swatches-grid-xl">
              {currentColors.map((color) => (
                <button
                  key={color.code + color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`color-swatch ${selectedColor?.code === color.code && selectedColor?.name === color.name ? "color-swatch-selected" : ""}`}
                  title={`${color.name} — ${color.code}`}
                >
                  <div className="color-swatch-fill" style={{ backgroundColor: color.hex }} />
                  <div className="color-swatch-info">
                    <span className="color-swatch-name">{color.name}</span>
                    <span className="color-swatch-code">{color.code}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Panel de preview */}
            <div className="color-preview-panel">
              {selectedColor ? (
                <>
                  <div className="color-preview-large" style={{ backgroundColor: selectedColor.hex }}>
                    <div className="color-preview-label" style={{ color: getContrastColor(selectedColor.hex) }}>
                      <span className="preview-color-name">{selectedColor.name}</span>
                      <span className="preview-color-code">{selectedColor.code}</span>
                    </div>
                  </div>
                  <div className="color-preview-info">
                    <div className="color-hex-display">
                      <span className="hex-label">HEX</span>
                      <span className="hex-value">{selectedColor.hex.toUpperCase()}</span>
                    </div>
                    <div className="color-preview-room">
                      <div className="room-wall-top" style={{ backgroundColor: selectedColor.hex }} />
                      <div className="room-floor" />
                    </div>
                    <p className="color-preview-cta-text">
                      Consultanos por este color en cualquiera de nuestras sucursales
                    </p>
                    <a href="/contacto" className="btn-color-consult">
                      Consultar disponibilidad
                    </a>
                    {/* Aplicar al visualizador */}
                    {activePoint !== null && (
                      <button
                        className="btn-apply-visualizer"
                        onClick={() => applyColorToPoint(selectedColor.hex, selectedColor.name, selectedColor.code)}
                      >
                        Aplicar en visualizador
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="color-preview-empty">
                  <div className="empty-swatches">
                    {currentColors.slice(0, 4).map((c) => (
                      <div key={c.code + c.name} className="empty-swatch" style={{ backgroundColor: c.hex }} />
                    ))}
                  </div>
                  <p className="empty-text">Seleccioná un color para ver la vista previa</p>
                </div>
              )}
            </div>
          </div>

          <div className="color-palette-footer">
            <p className="palette-footer-text">
              Disponemos de la colección completa Sherwin-Williams con más de 1.500 tonos.
              Visitá cualquier sucursal para ver las muestras físicas.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2: VISUALIZADOR DE COLOR ─────────────────────────────────── */}
      <section className="color-visualizer-section">
        <div className="container-custom">
          <div className="section-header">
            <div className="section-badge section-badge-dark">
              <span>Visualizador de Ambientes</span>
            </div>
            <h2 className="section-title">Imaginá tu espacio con color</h2>
            <p className="section-description">
              Seleccioná un punto en la imagen, elegí un color de la paleta y mirá cómo transforma el ambiente
            </p>
          </div>

          {/* Tabs de escena */}
          <div className="visualizer-scene-tabs">
            {scenes.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setActiveScene(i); setActivePoint(null) }}
                className={`visualizer-scene-tab ${activeScene === i ? "visualizer-scene-tab-active" : ""}`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="visualizer-layout">
            {/* Imagen con puntos */}
            <div className="visualizer-image-wrapper">
              <div className="visualizer-image-container">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  className="visualizer-image"
                />

                {/* Overlay de color por zona — solo cuando hay color aplicado */}
                {scene.points.map((pt, idx) => {
                  const c = getPointColor(scene.id, idx, pt.defaultHex, pt.defaultName)
                  return (
                    <div
                      key={idx}
                      className="visualizer-color-overlay"
                      style={{
                        // Mostramos un bloque de color cerca del punto para simular el cambio
                        left: `${pt.x - 8}%`,
                        top: `${pt.y - 8}%`,
                        width: "16%",
                        height: "12%",
                        backgroundColor: c.hex,
                        opacity: sceneColors[scene.id]?.[idx] ? 0.45 : 0,
                        borderRadius: "4px",
                        pointerEvents: "none",
                        transition: "opacity 0.4s ease, background-color 0.4s ease",
                      }}
                    />
                  )
                })}

                {/* Puntos interactivos */}
                {scene.points.map((pt, idx) => {
                  const c = getPointColor(scene.id, idx, pt.defaultHex, pt.defaultName)
                  const isActive = activePoint === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePoint(isActive ? null : idx)}
                      className={`visualizer-point ${isActive ? "visualizer-point-active" : ""}`}
                      style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                      title={pt.label}
                    >
                      <span className="visualizer-point-dot" style={{ backgroundColor: c.hex, borderColor: isActive ? "#1e2d4d" : "#fff" }} />
                      {isActive && (
                        <div className="visualizer-point-tooltip">
                          <span className="tooltip-label">{pt.label}</span>
                          <span className="tooltip-color" style={{ backgroundColor: c.hex }} />
                          <span className="tooltip-name">{c.name}</span>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              <p className="visualizer-hint">
                Toca un punto para activarlo, luego elegí un color de la paleta de abajo
              </p>
            </div>

            {/* Panel lateral de puntos */}
            <div className="visualizer-points-panel">
              <h3 className="visualizer-points-title">Zonas de color</h3>
              <div className="visualizer-points-list">
                {scene.points.map((pt, idx) => {
                  const c = getPointColor(scene.id, idx, pt.defaultHex, pt.defaultName)
                  const isActive = activePoint === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePoint(isActive ? null : idx)}
                      className={`visualizer-zone-item ${isActive ? "visualizer-zone-item-active" : ""}`}
                    >
                      <div className="zone-color-dot" style={{ backgroundColor: c.hex }} />
                      <div className="zone-info">
                        <span className="zone-label">{pt.label}</span>
                        <span className="zone-color-name">{c.name}</span>
                      </div>
                      {isActive && <span className="zone-active-badge">Activo</span>}
                    </button>
                  )
                })}
              </div>

              {activePoint !== null && (
                <div className="visualizer-instruction">
                  <p className="instruction-text">
                    Zona seleccionada: <strong>{scene.points[activePoint].label}</strong>
                  </p>
                  <p className="instruction-sub">
                    Elegí un color de la paleta de arriba o usá la mini-paleta:
                  </p>
                  <div className="quick-palette">
                    {colorFamilies.flatMap((f) => f.colors.slice(0, 3)).slice(0, 12).map((c) => (
                      <button
                        key={c.code + c.name}
                        className="quick-swatch"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} ${c.code}`}
                        onClick={() => applyColorToPoint(c.hex, c.name, c.code)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <Link href="/contacto" className="btn-visualizer-cta">
                Asesoramiento gratuito
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
