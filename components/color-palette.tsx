"use client"

import { useState } from "react"
import Image from "next/image"

const colorFamilies = [
  {
    name: "Neutros",
    colors: [
      { name: "Alabaster", code: "SW 7008", hex: "#F4EFE6" },
      { name: "Accessible Beige", code: "SW 7036", hex: "#D4C5AE" },
      { name: "Agreeable Gray", code: "SW 7029", hex: "#C2B9A7" },
      { name: "Repose Gray", code: "SW 7015", hex: "#B2ACA4" },
      { name: "Worldly Gray", code: "SW 7043", hex: "#A89F93" },
      { name: "Requisite Gray", code: "SW 7023", hex: "#8E8880" },
    ],
  },
  {
    name: "Blancos",
    colors: [
      { name: "Extra White", code: "SW 7006", hex: "#F5F4EF" },
      { name: "Pure White", code: "SW 7005", hex: "#EEE9E1" },
      { name: "High Reflective White", code: "SW 7757", hex: "#F7F6F2" },
      { name: "Snowbound", code: "SW 7004", hex: "#EAE6DE" },
      { name: "Dover White", code: "SW 6385", hex: "#EDE3D2" },
      { name: "Creamy", code: "SW 7012", hex: "#EDE0C8" },
    ],
  },
  {
    name: "Azules",
    colors: [
      { name: "Rarified Air", code: "SW 6525", hex: "#C8D8E2" },
      { name: "Misty", code: "SW 6232", hex: "#B3C8D3" },
      { name: "Upward", code: "SW 6239", hex: "#9AB8CB" },
      { name: "Breezy", code: "SW 6478", hex: "#7AA8BF" },
      { name: "Leisure Blue", code: "SW 6510", hex: "#5D8FAA" },
      { name: "Indigo Batik", code: "SW 7602", hex: "#3D6A87" },
    ],
  },
  {
    name: "Verdes",
    colors: [
      { name: "Patience", code: "SW 0054", hex: "#C5D0C0" },
      { name: "Clary Sage", code: "SW 6178", hex: "#96A88B" },
      { name: "Jade Dragon", code: "SW 6454", hex: "#6B9476" },
      { name: "Basil", code: "SW 6194", hex: "#4E6E51" },
      { name: "Rosemary", code: "SW 6187", hex: "#4A6444" },
      { name: "Hunt Club", code: "SW 6468", hex: "#3A5A3A" },
    ],
  },
  {
    name: "Rojos",
    colors: [
      { name: "Intimate White", code: "SW 6322", hex: "#E8D5C8" },
      { name: "Ravishing Coral", code: "SW 6611", hex: "#D4826A" },
      { name: "Fireworks", code: "SW 6902", hex: "#C45A3E" },
      { name: "Antique Red", code: "SW 0046", hex: "#A84433" },
      { name: "Rave Red", code: "SW 6608", hex: "#9B2B1F" },
      { name: "Burgundy", code: "SW 6300", hex: "#6E2127" },
    ],
  },
  {
    name: "Amarillos",
    colors: [
      { name: "Pale Sun", code: "SW 6670", hex: "#F5E4B2" },
      { name: "Jonquil", code: "SW 6678", hex: "#F0D282" },
      { name: "Sunflower", code: "SW 6678", hex: "#E8B84B" },
      { name: "Daffodil", code: "SW 6902", hex: "#D9A027" },
      { name: "Goldenrod", code: "SW 6380", hex: "#C08A1A" },
      { name: "Antiquarian Brown", code: "SW 0044", hex: "#9A6B14" },
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

export default function ColorPalette() {
  const [activeFamily, setActiveFamily] = useState(0)
  const [selectedColor, setSelectedColor] = useState<{ name: string; code: string; hex: string } | null>(null)

  const currentColors = colorFamilies[activeFamily].colors

  return (
    <section className="color-palette-section">
      <div className="container-custom">
        <div className="section-header">
          <div className="section-badge">
            <div className="section-badge-logo">
              <Image
                src="/images/sherwin-williams-logo.png"
                alt="Sherwin Williams"
                fill
                className="logo-image"
              />
            </div>
            <span>Colores Sherwin-Williams</span>
          </div>
          <h2 className="section-title">Explorá nuestra paleta de colores</h2>
          <p className="section-description">
            Más de 1.500 colores premium disponibles en todas nuestras sucursales
          </p>
        </div>

        {/* Family tabs */}
        <div className="color-family-tabs">
          {colorFamilies.map((family, index) => (
            <button
              key={family.name}
              onClick={() => setActiveFamily(index)}
              className={`color-family-tab ${activeFamily === index ? "color-family-tab-active" : ""}`}
            >
              <div
                className="color-family-dot"
                style={{ backgroundColor: family.colors[2].hex }}
              />
              {family.name}
            </button>
          ))}
        </div>

        {/* Color grid + preview */}
        <div className="color-palette-wrapper">
          {/* Color swatches */}
          <div className="color-swatches-grid">
            {currentColors.map((color) => (
              <button
                key={color.code}
                onClick={() => setSelectedColor(color)}
                className={`color-swatch ${selectedColor?.code === color.code ? "color-swatch-selected" : ""}`}
                title={`${color.name} - ${color.code}`}
              >
                <div
                  className="color-swatch-fill"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="color-swatch-info">
                  <span className="color-swatch-name">{color.name}</span>
                  <span className="color-swatch-code">{color.code}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <div className="color-preview-panel">
            {selectedColor ? (
              <>
                <div
                  className="color-preview-large"
                  style={{ backgroundColor: selectedColor.hex }}
                >
                  <div
                    className="color-preview-label"
                    style={{ color: getContrastColor(selectedColor.hex) }}
                  >
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
                    <div
                      className="room-wall-top"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <div className="room-floor" />
                  </div>
                  <p className="color-preview-cta-text">
                    Consultanos por este color en cualquiera de nuestras sucursales
                  </p>
                  <a href="/contacto" className="btn-color-consult">
                    Consultar disponibilidad
                  </a>
                </div>
              </>
            ) : (
              <div className="color-preview-empty">
                <div className="empty-swatches">
                  {currentColors.slice(0, 4).map((c) => (
                    <div key={c.code} className="empty-swatch" style={{ backgroundColor: c.hex }} />
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
  )
}
