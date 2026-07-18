# TODO COLOR — Design System para Elementor Pro + Hello Theme
# Compartir este archivo con Claude para aplicar via MCP a WordPress

---

## CONTEXTO DEL PROYECTO

**Marca:** Todo Color Pinturerías  
**Sitio:** Cadena de pinturerías líder en Mendoza, Argentina  
**Distribuidor certificado:** Sherwin-Williams  
**WordPress Theme:** Hello Elementor (Elementor Ltd.)  
**Builder:** Elementor Pro  
**Objetivo:** Replicar exactamente el sistema de diseño del sitio Next.js en WordPress/Elementor, aplicando todos los tokens de color, tipografía, espaciado y componentes usando la API de Elementor Pro via MCP.

---

## 1. PALETA DE COLORES — TOKENS SEMÁNTICOS

### Colores principales (aplicar en Elementor > Site Settings > Global Colors)

| Token semántico        | Nombre en Elementor   | Valor HEX  | Uso                                               |
|------------------------|-----------------------|------------|---------------------------------------------------|
| `--primary`            | Primary               | `#fb3234`  | Botones CTA, header nav, acentos principales      |
| `--primary-dark`       | Primary Dark          | `#c81e1e`  | Hover de botones primarios                        |
| `--secondary`          | Secondary             | `#2d2d2d`  | Top bar header, footer, textos oscuros            |
| `--background`         | Background            | `#ffffff`  | Fondo general del sitio                           |
| `--foreground`         | Foreground            | `#333333`  | Texto principal del cuerpo                        |
| `--card`               | Card Background       | `#ffffff`  | Fondo de tarjetas y paneles                       |
| `--muted`              | Muted Background      | `#f9fafb`  | Fondos de secciones suaves, inputs                |
| `--muted-foreground`   | Muted Text            | `#6b7280`  | Textos secundarios, subtítulos, hints             |
| `--accent`             | Accent                | `#e0f2fe`  | Fondos de instrucciones, highlights suaves        |
| `--accent-foreground`  | Accent Text           | `#1e3a8a`  | Textos sobre accent, badge Sherwin Williams       |
| `--border`             | Border                | `#e5e7eb`  | Bordes de cards, inputs, separadores              |
| `--destructive`        | Destructive           | `#ef4444`  | Mensajes de error, alertas                        |

### Colores de texto estructurado

| Uso                       | Valor HEX  | Clase Elementor sugerida         |
|---------------------------|------------|----------------------------------|
| Título hero               | `#1f2937`  | Heading color override           |
| Descripción hero          | `#374151`  | Text color override              |
| Badge Sherwin text        | `#1e3a8a`  | Custom color inline              |
| Footer copyright text     | `rgba(255,255,255,0.8)` | White 80% opacity      |
| Nav links (sobre primary) | `#ffffff`  | White                            |
| Nav links hover           | `rgba(255,255,255,0.8)` | White 80% opacity      |

---

## 2. TIPOGRAFÍA — TOKENS DE FUENTES

### Fuentes (aplicar en Elementor > Site Settings > Global Fonts)

| Rol              | Fuente Google Fonts | Pesos disponibles                     | Uso                                          |
|------------------|---------------------|---------------------------------------|----------------------------------------------|
| **Headings**     | Maven Pro           | 400, 500, 600, 700, 800, 900          | Todos los títulos H1–H6, botones CTA, nav    |
| **Body**         | Mulish              | 300, 400, 500, 600, 700               | Textos de cuerpo, párrafos, spans, inputs    |

### Escala tipográfica

| Elemento         | Mobile           | Tablet (768px)   | Desktop (1025px) | Desktop XL (1280px) | Font         | Weight |
|------------------|------------------|------------------|------------------|---------------------|--------------|--------|
| H1 Hero          | 1.5rem (24px)    | 2.25rem (36px)   | 3rem (48px)      | 3.75rem (60px)      | Maven Pro    | 700    |
| H2 Sección       | 1.5rem (24px)    | 2rem (32px)      | 2.5rem (40px)    | —                   | Maven Pro    | 700    |
| H3 Card          | 1.125rem (18px)  | 1.25rem (20px)   | 1.5rem (24px)    | —                   | Maven Pro    | 700    |
| Body normal      | 0.875rem (14px)  | 1rem (16px)      | 1rem (16px)      | —                   | Mulish       | 400    |
| Body grande      | 0.875rem (14px)  | 1.125rem (18px)  | 1.25rem (20px)   | —                   | Mulish       | 400    |
| Nav links        | —                | —                | 0.9375rem (15px) | —                   | Maven Pro    | 300    |
| Botón primario   | 0.875rem (14px)  | 1rem (16px)      | 1rem (16px)      | —                   | Maven Pro    | 600    |
| Badge / etiqueta | 0.75rem (12px)   | 0.75rem (12px)   | 0.75rem (12px)   | —                   | Maven Pro    | 700    |
| Subtexto / hint  | 0.8125rem (13px) | 0.8125rem (13px) | 0.8125rem (13px) | —                   | Mulish       | 400    |

### Configuración de texto global

```
letter-spacing headings: -0.02em
letter-spacing body: 0
line-height body: 1.5–1.6 (relaxed)
line-height headings: 1.2
text-transform nav links: UPPERCASE
letter-spacing nav links: wider (0.05em)
```

---

## 3. ESPACIADO Y LAYOUT

### Container

```
max-width: 1280px (7xl)
padding horizontal mobile: 1rem (16px)
padding horizontal tablet: 1.5rem (24px)
padding horizontal desktop: 2rem (32px)
margin: auto (centrado)
```

### Secciones (padding vertical estándar)

| Sección                  | Mobile          | Desktop         |
|--------------------------|-----------------|-----------------|
| Sección normal           | 48px top/bottom | 80px top/bottom |
| Sección grande / hero    | 32px top/bottom | 96–120px        |
| Visualizador color       | 80px top/bottom | 80px top/bottom |
| Footer columnas          | 40px top/bottom | 64px top/bottom |
| Top bar header           | 12px top/bottom | 12px top/bottom |
| Nav principal header     | 16px top/bottom | 16px top/bottom |

### Grid system

```
Cards de productos:     1 col mobile → 2 col tablet → 3–4 col desktop, gap: 24px
Cards de servicios:     2 col mobile → 3 col desktop, gap: 16px
Sección con imagen:     1 col mobile → 2 col desktop (50/50 o 60/40), gap: 32–48px
Footer columnas:        1 col mobile → 4 col desktop, gap: 32px
```

---

## 4. RADIO DE BORDES (Border Radius)

```
--radius base:    0.375rem (6px)   → inputs, badges pequeños
--radius-sm:      0.25rem  (4px)   → chips, tags
--radius-md:      0.375rem (6px)   → cards pequeñas
--radius-lg:      0.5rem   (8px)   → botones, cards
--radius-xl:      0.75rem  (12px)  → cards grandes, modales, hero box
--radius-2xl:     1rem     (16px)  → panels, visualizador
Círculos:         50%              → avatares, puntos de color
```

---

## 5. SOMBRAS

```
Shadow SM:   0 1px 2px rgba(0,0,0,0.05)           → elementos sutiles
Shadow MD:   0 4px 6px -1px rgba(0,0,0,0.1)       → cards normales
Shadow LG:   0 10px 15px -3px rgba(0,0,0,0.1)     → botones, cards hover
Shadow XL:   0 20px 25px -5px rgba(0,0,0,0.1)     → hero box, modales
```

---

## 6. COMPONENTES — ESPECIFICACIONES EXACTAS

### 6.1 Header

**Estructura (de arriba a abajo):**

**Top Bar:**
- Background: `#2d2d2d` (secondary)
- Text color: `#ffffff` (primary-foreground)
- Height: 48px
- Font: Mulish 500, 14px
- Contenido izquierda: MapPin icon + "7 Sucursales en Mendoza" | Phone icon + "2616142848"
- Contenido derecha: iconos Facebook + Instagram (SVG inline, 18×18px, color white)
- Mobile: solo muestra teléfono a la izquierda + iconos sociales a la derecha

**Nav Principal:**
- Background: `#fb3234` (primary)
- Height: 80px (desktop), auto (mobile)
- Logo: logo-blanco.png, height 48px, width auto
- Links: Maven Pro 300, uppercase, tracking-wider, color white, hover: white/80
- Links: Inicio | Quienes Somos | Sucursales | Reseñas | Novedades | Productos | Cotizar
- Botón "Cotizar": Maven Pro 600, uppercase, background white, color primary (#fb3234), h-11 (44px), px-6, rounded-lg, shadow-md
- Mobile: hamburger menu (Menu/X Lucide icon, 24px, color white)

---

### 6.2 Botones

**Primario grande:**
```
font-family: Maven Pro, 600
background: #fb3234
color: #ffffff
height: 44px (mobile) / 48px (desktop)
padding: 0 24px (mobile) / 0 28px (desktop)
border-radius: 8px
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
font-size: 14px (mobile) / 16px (desktop)
hover background: #c81e1e
transition: all 0.3s ease-in-out
```

**Secundario / outline:**
```
font-family: Maven Pro, 600
background: transparent
color: #fb3234
border: 2px solid #fb3234
height: 44px
padding: 0 24px
border-radius: 8px
hover: background #fb3234, color white
transition: all 0.3s ease-in-out
```

**Blanco sobre fondo primario (header, footer):**
```
background: #ffffff
color: #fb3234
font-family: Maven Pro, 600
height: 44px, padding: 0 24px, border-radius: 8px
hover background: #f9fafb
```

---

### 6.3 Cards de Productos

```
background: #ffffff
border: 1px solid #e5e7eb
border-radius: 12px
padding: 16px (mobile) / 24px (desktop)
box-shadow: 0 1px 2px rgba(0,0,0,0.05)
hover box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
hover transform: translateY(-2px)
transition: all 0.3s ease-in-out
Image: aspect-ratio 4/3, object-fit contain, background #f9fafb
Title: Maven Pro 700, 18px, color #1f2937
Description: Mulish 400, 14px, color #6b7280
Badge categoría: Maven Pro 700, 11px, uppercase, background #e0f2fe, color #1e3a8a, border-radius 50px, px-3 py-1
```

---

### 6.4 Sección Badge / Etiqueta de sección

```
display: inline-flex
background: #e0f2fe (accent) o #2d2d2d (dark variant)
color: #1e3a8a (accent-foreground) o #ffffff (dark variant)
font-family: Maven Pro 700, 12px, uppercase
letter-spacing: 0.05em
padding: 4px 16px
border-radius: 50px
border: 1px solid color-match
margin-bottom: 16px
```

---

### 6.5 Cards de Reseñas / Testimonios

```
background: #ffffff
border: 1px solid #e5e7eb
border-left: 4px solid #fb3234  ← acento rojo izquierdo OBLIGATORIO
border-radius: 8px
padding: 24px
NO usar gradientes, NO fondos de colores en cards de reseñas
Stars: Lucide Star icon filled, color #f59e0b (amber-400), size 16px
Quote text: Mulish 400, 15px, color #374151, line-height 1.6
Author name: Maven Pro 700, 14px, color #1f2937
Author subtitle: Mulish 400, 12px, color #6b7280
```

---

### 6.6 Footer

**Columna 1 (About):**
- Logo blanco, 120px de ancho
- Descripción: Mulish 400, 14px, color white/70
- Iconos sociales: botón 40×40px, background white/10, border-radius 8px, icon blanco 20px
- Hover: background white, icon color primary

**Columnas 2–3 (Links):**
- Título: Maven Pro 700, 13px, uppercase, white, letter-spacing 0.1em
- Separator: 2px, color primary, width 24px, margin-bottom 16px
- Links: Mulish 400, 14px, color white/70, hover: white, no underline

**Columna 4 (Newsletter):**
- Descripción: Mulish 400, 13px, white/70
- Input: background white/10, border: 1px solid white/20, border-radius 8px, color white, placeholder white/50
- Botón: background white, color primary (#fb3234), Maven Pro 600, border-radius 8px

**Badge Sherwin Williams:**
- Background: `#1e3a8a` (accent-foreground / deep blue)
- Separador con borde superior

**Copyright bar:**
- Background: `#2d2d2d` (secondary / dark)
- Text: Mulish 400, 14px, color white/80
- py-6

---

### 6.7 Visualizador de Colores (sección interactiva)

```
Section background: #f9fafb (muted)
Section padding: 80px vertical

Tabs de escena:
  - border: 2px solid #e5e7eb, border-radius 50px, background white
  - font: Maven Pro 600, 15px, color #333333
  - hover: border-color #fb3234, color #fb3234
  - active: background #2d2d2d, border #2d2d2d, color white

Imagen principal:
  - aspect-ratio: 16/9
  - border-radius: 16px
  - box-shadow: 0 8px 32px rgba(0,0,0,0.14)

Puntos interactivos (spots):
  - dot size: 28×28px, border-radius 50%
  - border: 3px solid white
  - box-shadow: 0 2px 8px rgba(0,0,0,0.3)
  - hover/active: scale 1.25

Tooltip:
  - background: #2d2d2d
  - color: white
  - border-radius: 8px
  - padding: 8px 12px
  - min-width: 160px
  - box-shadow: 0 4px 16px rgba(0,0,0,0.2)

Panel lateral de zonas:
  - background: white
  - border: 1px solid #e5e7eb
  - border-radius: 16px
  - padding: 24px

Zone item:
  - border: 2px solid #e5e7eb, border-radius 10px, background #f9fafb
  - hover: border-color #fb3234
  - active: border-color #2d2d2d, background #e0f2fe

Botón CTA del visualizador:
  - background: #fb3234 (primary)
  - color: white
  - font: Maven Pro 700, 15px
  - border-radius: 10px
  - padding: 14px 20px
```

---

## 7. PALETA SHERWIN-WILLIAMS (para Elementor Global Colors adicionales)

### Familias de color disponibles en el selector

| Familia      | Ejemplos de colores (nombre SW → HEX)                          |
|--------------|----------------------------------------------------------------|
| Blancos      | Alabaster SW7008 #F4EFE6 · Pure White SW7005 #EEE9E1 · Extra White SW7006 #F5F4EF |
| Neutros      | Accessible Beige SW7036 #D4C5AE · Agreeable Gray SW7029 #C2B9A7 · Practical Beige SW6100 #D5C4AD |
| Azules       | Rarified Air SW6525 #C8D8E2 · Indigo Batik SW7602 #3D6A87 · Naval SW6244 #3C4F6A |
| Verdes       | Clary Sage SW6178 #8EA58A · Evergreen Fog SW9130 #8A9E8C · Retreat SW6207 #739B82 |
| Tierra       | Sand Dune SW7547 #C4A87A · Pale Almond SW6388 #DEC48A · Toasty SW6095 #C4916B |
| Rojos / cálidos | Burgundy SW6300 #7D2027 · Antique Red SW0046 #A33B2A · Rustic Red SW7589 #8B2E2E |
| Grises       | Mindful Gray SW7016 #C0B9AF · Dovetail SW7018 #8C8279 · Anonymous SW7046 #898176 |
| Profundos    | Tricorn Black SW6258 #2C2C2C · Iron Ore SW7069 #393532 · Caviar SW6990 #3C3232 |

---

## 8. INSTRUCCIONES PARA CLAUDE VIA MCP WORDPRESS

### Objetivo
Aplicar este design system a WordPress con Hello Elementor + Elementor Pro usando el MCP de WordPress/Elementor.

### Pasos de implementación sugeridos:

**PASO 1 — Fuentes (Elementor > Site Settings > Custom Fonts o Google Fonts)**
```
1. Registrar Maven Pro desde Google Fonts → asignar como "Primary Font" (Headings)
2. Registrar Mulish desde Google Fonts → asignar como "Secondary Font" (Body Text)
3. En Site Settings > Typography:
   - Body: Mulish 400, 16px, line-height 1.6, letter-spacing 0
   - H1: Maven Pro 700, 60px desktop / 36px tablet / 24px mobile, line-height 1.2, letter-spacing -0.02em
   - H2: Maven Pro 700, 40px desktop / 32px tablet / 24px mobile
   - H3: Maven Pro 700, 24px desktop / 20px tablet
   - H4–H6: Maven Pro 700
```

**PASO 2 — Colores globales (Elementor > Site Settings > Global Colors)**
```
Crear los siguientes colores globales exactamente:
- "Primary"         → #fb3234
- "Primary Dark"    → #c81e1e
- "Secondary"       → #2d2d2d
- "Background"      → #ffffff
- "Foreground"      → #333333
- "Muted"           → #f9fafb
- "Muted Text"      → #6b7280
- "Accent"          → #e0f2fe
- "Accent Text"     → #1e3a8a
- "Border"          → #e5e7eb
- "Card"            → #ffffff
```

**PASO 3 — Botones globales (Elementor > Site Settings > Buttons)**
```
Typography: Maven Pro 600, 16px, uppercase
Background: #fb3234
Color: #ffffff
Border radius: 8px
Padding: 12px 28px
Hover background: #c81e1e
Hover color: #ffffff
Box shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
```

**PASO 4 — Hello Theme customizer (Appearance > Customize)**
```
Header: desactivar (usaremos header de Elementor Pro)
Footer: desactivar (usaremos footer de Elementor Pro)
Body font: Mulish
Heading font: Maven Pro
Link color: #fb3234
Background color: #ffffff
```

**PASO 5 — Custom CSS global (Elementor > Custom CSS o Appearance > Additional CSS)**
```css
/* === TODO COLOR — CSS Global === */
:root {
  --primary: #fb3234;
  --primary-dark: #c81e1e;
  --secondary: #2d2d2d;
  --background: #ffffff;
  --foreground: #333333;
  --muted: #f9fafb;
  --muted-foreground: #6b7280;
  --accent: #e0f2fe;
  --accent-foreground: #1e3a8a;
  --border: #e5e7eb;
  --card: #ffffff;
}

body {
  font-family: 'Mulish', sans-serif;
  color: #333333;
  background-color: #ffffff;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Maven Pro', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

a {
  color: #fb3234;
  transition: color 0.2s ease;
}

a:hover {
  color: #c81e1e;
}

.elementor-button {
  font-family: 'Maven Pro', sans-serif !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  border-radius: 8px !important;
  transition: all 0.3s ease-in-out !important;
}

/* Container max-width */
.elementor-section.elementor-section-boxed > .elementor-container {
  max-width: 1280px;
}
```

**PASO 6 — Header Elementor Pro (estructura)**
```
Template tipo: Header
Condición: Entire Site

Estructura:
[Section — background: #2d2d2d, padding: 12px 0]
  [Columna izq — MapPin + "7 Sucursales" | Phone + "2616142848"]
  [Columna der — Iconos FB + IG (SVG, 18px, color white)]

[Section — background: #fb3234, padding: 16px 0]
  [Columna izq — Logo blanco (logo-blanco.png, h:48px)]
  [Columna centro — Nav Links: Mulish 300, uppercase, tracking-wider, color white]
  [Columna der — Botón "Cotizar": bg white, color #fb3234, Maven Pro 600]
```

**PASO 7 — Footer Elementor Pro (estructura)**
```
Template tipo: Footer
Condición: Entire Site

Fondo footer principal: #2d2d2d
Fondo badge Sherwin: #1e3a8a
Fondo copyright bar: #2d2d2d

[4 columnas desktop / 1 columna mobile]
Col 1: Logo blanco + descripción Mulish 400 white/70 + social icons
Col 2: "Servicios" (título) + lista links white/70
Col 3: "Nosotros" (título) + lista links white/70
Col 4: "Novedades" (título) + input newsletter + botón blanco
```

---

## 9. NOTAS IMPORTANTES PARA CLAUDE

1. **NO usar colores hardcodeados en los widgets de Elementor** — siempre referenciar los Global Colors creados en el Paso 2.

2. **Regla de botones**: NUNCA usar `hover:scale-*` ni efectos de zoom. Solo `transition-colors` en hover. Los botones son profesionales, no SaaS.

3. **Cards de reseñas/testimonios**: Siempre fondo blanco `#ffffff`, borde `1px solid #e5e7eb`, con borde izquierdo de acento `4px solid #fb3234`. Sin gradientes en cards.

4. **Emojis**: PROHIBIDO usar emojis en ningún texto del sitio. Usar iconos SVG o Lucide equivalentes.

5. **Tipografía sobre fondos de color**:
   - Sobre `#fb3234` (primary): texto `#ffffff`
   - Sobre `#2d2d2d` (secondary): texto `#ffffff`
   - Sobre `#ffffff` (background): texto `#333333`
   - Sobre `#f9fafb` (muted): texto `#333333` o `#6b7280`

6. **Logo**: Usar `logo.png` sobre fondos blancos, `logo-blanco.png` sobre fondos oscuros/de color.

7. **Paleta Sherwin-Williams**: Los colores de la paleta SW son solo para el visualizador de colores y secciones de producto. No mezclar con la paleta de marca de Todo Color.

8. **Responsivo**: Siempre configurar los tres breakpoints en Elementor:
   - Desktop: > 1024px
   - Tablet: 768px–1024px
   - Mobile: < 768px

---

## 10. ARCHIVOS DE REFERENCIA

- Logo color: `/public/images/logo.png`
- Logo blanco: `/public/images/logo-blanco.png`
- Logo Sherwin-Williams: `/public/images/sherwin-williams-logo.png`
- Imagen hero principal: `/public/images/pintura-hogar.jpeg`
- Badge Sherwin: `/public/images/distribuidor-certificado-sherwin-williams.jpeg`
- Visualizador piscina: `/public/images/visualizer-pool.png`
- Visualizador interior: `/public/images/visualizer-interior.png`
- Visualizador patio: `/public/images/visualizer-patio.png`

---

*Generado desde el proyecto Next.js de Todo Color — v0.app — Julio 2026*
*Sistema de diseño v1.0 — Compatible con Elementor Pro 3.x + Hello Theme*
