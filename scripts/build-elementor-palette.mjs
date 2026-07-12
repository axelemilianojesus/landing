import { writeFileSync, readFileSync } from "node:fs"
import zlib from "node:zlib"

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */
let n = 0
const id = () => (Date.now().toString(36) + (n++).toString(36)).slice(-7)
const pad = (t, r, b, l) => ({ unit: "px", top: `${t}`, right: `${r}`, bottom: `${b}`, left: `${l}`, isLinked: false })

function container(settings, elements = [], isInner = true) {
  return {
    _id: id(),
    elType: "container",
    settings: { content_width: isInner ? "full" : "boxed", ...settings },
    elements,
    isInner,
  }
}
function widget(widgetType, settings) {
  return { _id: id(), elType: "widget", widgetType, settings }
}
const html = (h) => widget("html", { html: h })

/* ------------------------------------------------------------------ */
/* ZIP writer (no external deps)                                       */
/* ------------------------------------------------------------------ */
function writeZip(jsonPath, entryName, zipPath) {
  const data = readFileSync(jsonPath)
  const crc32 = (buf) => {
    let c = ~0
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i]
      for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
    }
    return ~c >>> 0
  }
  const crc = crc32(data)
  const comp = zlib.deflateRawSync(data, { level: 9 })
  const nameBuf = Buffer.from(entryName)
  const lfh = Buffer.alloc(30)
  lfh.writeUInt32LE(0x04034b50, 0)
  lfh.writeUInt16LE(20, 4)
  lfh.writeUInt16LE(8, 8)
  lfh.writeUInt32LE(crc, 14)
  lfh.writeUInt32LE(comp.length, 18)
  lfh.writeUInt32LE(data.length, 22)
  lfh.writeUInt16LE(nameBuf.length, 26)
  const local = Buffer.concat([lfh, nameBuf, comp])
  const cd = Buffer.alloc(46)
  cd.writeUInt32LE(0x02014b50, 0)
  cd.writeUInt16LE(20, 4)
  cd.writeUInt16LE(20, 6)
  cd.writeUInt16LE(8, 10)
  cd.writeUInt32LE(crc, 16)
  cd.writeUInt32LE(comp.length, 20)
  cd.writeUInt32LE(data.length, 24)
  cd.writeUInt16LE(nameBuf.length, 28)
  const central = Buffer.concat([cd, nameBuf])
  const eocd = Buffer.alloc(22)
  eocd.writeUInt32LE(0x06054b50, 0)
  eocd.writeUInt16LE(1, 8)
  eocd.writeUInt16LE(1, 10)
  eocd.writeUInt32LE(central.length, 12)
  eocd.writeUInt32LE(local.length, 16)
  writeFileSync(zipPath, Buffer.concat([local, central, eocd]))
}

/* ------------------------------------------------------------------ */
/* data (identical to components/color-palette.tsx)                    */
/* ------------------------------------------------------------------ */
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

const PRIMARY = "#fb3234"
const PRIMARY_DARK = "#d81f21"
const LOGO = "https://mantelloencasa.com/wp-content/uploads/sherwin-williams-logo.png"

/* ------------------------------------------------------------------ */
/* self-contained interactive widget (markup + scoped CSS + JS)        */
/* ------------------------------------------------------------------ */
const widgetHtml = `
<div class='tcpal' id='tcpal-root'>
  <div class='tcpal-container'>
    <div class='tcpal-header'>
      <div class='tcpal-badge'>
        <img class='tcpal-badge-logo' src='${LOGO}' alt='Logo Sherwin-Williams distribuidor Mantello en Casa' loading='lazy' width='20' height='20' />
        <span>Colores Sherwin-Williams</span>
      </div>
      <h2 class='tcpal-title'>Explorá nuestra paleta de colores</h2>
      <p class='tcpal-desc'>Más de 1.500 colores premium disponibles en todas nuestras sucursales</p>
    </div>

    <div class='tcpal-tabs' id='tcpal-tabs'></div>

    <div class='tcpal-wrapper'>
      <div class='tcpal-swatches' id='tcpal-swatches'></div>
      <div class='tcpal-preview' id='tcpal-preview'></div>
    </div>

    <div class='tcpal-footer'>
      <p class='tcpal-footer-text'>Disponemos de la colección completa Sherwin-Williams con más de 1.500 tonos. Visitá cualquier sucursal para ver las muestras físicas.</p>
    </div>
  </div>
</div>

<style>
.tcpal{background-color:#f8f8f6;border-top:1px solid #e5e5e0;border-bottom:1px solid #e5e5e0;padding:4rem 1rem;font-family:'Mulish',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-sizing:border-box}
.tcpal *,.tcpal *::before,.tcpal *::after{box-sizing:border-box}
@media(min-width:768px){.tcpal{padding:6rem 1.5rem}}
.tcpal-container{max-width:1280px;margin:0 auto}
.tcpal-header{text-align:center;margin-bottom:2.5rem}
.tcpal-badge{display:inline-flex;align-items:center;gap:.5rem;background-color:#1e3a8a;color:#fff;font-size:.75rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:.375rem 1rem;border-radius:9999px;margin-bottom:1rem}
.tcpal-badge-logo{width:1.25rem;height:1.25rem;flex-shrink:0;object-fit:contain;background:#fff;border-radius:3px;padding:1px}
.tcpal-title{font-family:'Maven Pro',-apple-system,sans-serif;font-weight:700;font-size:1.875rem;margin:0 0 1rem;color:#1f2937;line-height:1.15}
@media(min-width:768px){.tcpal-title{font-size:2.25rem;margin-bottom:1.5rem}}
@media(min-width:1025px){.tcpal-title{font-size:3rem}}
.tcpal-desc{font-size:1.125rem;color:#4b5563;max-width:768px;margin:0 auto;line-height:1.5}
@media(min-width:768px){.tcpal-desc{font-size:1.25rem}}
.tcpal-tabs{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem;justify-content:center}
@media(min-width:768px){.tcpal-tabs{justify-content:flex-start;gap:.75rem;margin-bottom:2.5rem}}
.tcpal-tab{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1.25rem;border-radius:9999px;border:1.5px solid #d1d5db;background-color:#fff;color:#374151;font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease;font-family:inherit}
.tcpal-tab:hover{border-color:${PRIMARY};color:${PRIMARY}}
.tcpal-tab.is-active{background-color:${PRIMARY};border-color:${PRIMARY};color:#fff}
.tcpal-dot{width:.75rem;height:.75rem;border-radius:9999px;border:1.5px solid rgba(0,0,0,.1);flex-shrink:0}
.tcpal-wrapper{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:768px){.tcpal-wrapper{grid-template-columns:1fr 280px;gap:2rem}}
@media(min-width:1025px){.tcpal-wrapper{grid-template-columns:1fr 320px;gap:2.5rem}}
.tcpal-swatches{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem}
@media(min-width:640px){.tcpal-swatches{grid-template-columns:repeat(6,1fr)}}
.tcpal-swatch{display:flex;flex-direction:column;border-radius:.75rem;overflow:hidden;border:2px solid transparent;cursor:pointer;transition:all .2s ease;box-shadow:0 1px 3px rgba(0,0,0,.08);background-color:#fff;padding:0;text-align:left;font-family:inherit}
.tcpal-swatch:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.12)}
.tcpal-swatch.is-selected{border-color:${PRIMARY};box-shadow:0 0 0 3px rgba(251,50,52,.2)}
.tcpal-swatch-fill{height:5rem;width:100%}
@media(min-width:768px){.tcpal-swatch-fill{height:6rem}}
.tcpal-swatch-info{padding:.5rem .5rem .625rem;background-color:#fff}
.tcpal-swatch-name{display:block;font-size:.6875rem;font-weight:600;color:#1f2937;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tcpal-swatch-code{display:block;font-size:.625rem;color:#6b7280;margin-top:.125rem}
.tcpal-preview{border-radius:1rem;overflow:hidden;border:1px solid #e5e7eb;background-color:#fff;display:flex;flex-direction:column}
.tcpal-preview-large{flex:1;min-height:10rem;position:relative;display:flex;align-items:flex-end;padding:1.25rem;transition:background-color .3s ease}
@media(min-width:768px){.tcpal-preview-large{min-height:14rem}}
.tcpal-preview-label{display:flex;flex-direction:column}
.tcpal-preview-name{font-size:1.125rem;font-weight:700;line-height:1.2}
.tcpal-preview-code{font-size:.875rem;font-weight:400;opacity:.75;margin-top:.25rem}
.tcpal-preview-info{padding:1.25rem;display:flex;flex-direction:column;gap:.875rem}
.tcpal-hex{display:flex;align-items:center;gap:.5rem;padding:.5rem .875rem;background-color:#f9fafb;border-radius:.5rem;border:1px solid #e5e7eb}
.tcpal-hex-label{font-size:.6875rem;font-weight:700;color:#6b7280;letter-spacing:.1em}
.tcpal-hex-value{font-size:.875rem;font-weight:600;color:#111827;font-family:monospace}
.tcpal-room{border-radius:.5rem;overflow:hidden;height:4rem;display:flex;flex-direction:column;border:1px solid #e5e7eb}
.tcpal-room-wall{flex:1;transition:background-color .3s ease}
.tcpal-room-floor{height:.875rem;background-color:#d4c5ae}
.tcpal-cta-text{font-size:.8125rem;color:#6b7280;line-height:1.5;margin:0}
.tcpal-btn{display:flex;align-items:center;justify-content:center;background-color:${PRIMARY};color:#fff;font-weight:600;font-size:.875rem;padding:.625rem 1.25rem;border-radius:.625rem;transition:background-color .2s ease;text-decoration:none}
.tcpal-btn:hover{background-color:${PRIMARY_DARK}}
.tcpal-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2.5rem 1.5rem;gap:1.25rem;height:100%;min-height:16rem}
.tcpal-empty-swatches{display:grid;grid-template-columns:repeat(2,1fr);gap:.5rem;width:5rem}
.tcpal-empty-swatch{height:2rem;border-radius:.375rem;border:1px solid rgba(0,0,0,.08)}
.tcpal-empty-text{font-size:.875rem;color:#9ca3af;text-align:center;line-height:1.5;margin:0}
.tcpal-footer{margin-top:2rem;padding-top:1.5rem;border-top:1px solid #e5e7eb;text-align:center}
.tcpal-footer-text{font-size:.875rem;color:#6b7280;max-width:540px;margin:0 auto;line-height:1.6}
</style>

<script>
(function(){
  var families = ${JSON.stringify(colorFamilies)};
  var root = document.getElementById("tcpal-root");
  if(!root || root.dataset.init) return;
  root.dataset.init = "1";
  var tabsEl = root.querySelector("#tcpal-tabs");
  var swatchesEl = root.querySelector("#tcpal-swatches");
  var previewEl = root.querySelector("#tcpal-preview");
  var activeFamily = 0;
  var selected = null;

  function contrast(hex){
    var r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
    return (0.299*r+0.587*g+0.114*b)/255 > 0.5 ? "#1a1a1a" : "#ffffff";
  }

  function renderTabs(){
    tabsEl.innerHTML="";
    families.forEach(function(fam,i){
      var b=document.createElement("button");
      b.className="tcpal-tab"+(i===activeFamily?" is-active":"");
      b.type="button";
      b.innerHTML='<span class="tcpal-dot" style="background-color:'+fam.colors[2].hex+'"></span>'+fam.name;
      b.addEventListener("click",function(){activeFamily=i;selected=null;renderTabs();renderSwatches();renderPreview();});
      tabsEl.appendChild(b);
    });
  }

  function renderSwatches(){
    swatchesEl.innerHTML="";
    families[activeFamily].colors.forEach(function(c){
      var b=document.createElement("button");
      b.className="tcpal-swatch"+(selected&&selected.code===c.code&&selected.hex===c.hex?" is-selected":"");
      b.type="button";
      b.title=c.name+" - "+c.code;
      b.innerHTML='<span class="tcpal-swatch-fill" style="background-color:'+c.hex+'"></span>'+
        '<span class="tcpal-swatch-info"><span class="tcpal-swatch-name">'+c.name+'</span>'+
        '<span class="tcpal-swatch-code">'+c.code+'</span></span>';
      b.addEventListener("click",function(){selected=c;renderSwatches();renderPreview();});
      swatchesEl.appendChild(b);
    });
  }

  function renderPreview(){
    if(selected){
      var tc=contrast(selected.hex);
      previewEl.innerHTML=
        '<div class="tcpal-preview-large" style="background-color:'+selected.hex+'">'+
          '<div class="tcpal-preview-label" style="color:'+tc+'">'+
            '<span class="tcpal-preview-name">'+selected.name+'</span>'+
            '<span class="tcpal-preview-code">'+selected.code+'</span>'+
          '</div>'+
        '</div>'+
        '<div class="tcpal-preview-info">'+
          '<div class="tcpal-hex"><span class="tcpal-hex-label">HEX</span><span class="tcpal-hex-value">'+selected.hex.toUpperCase()+'</span></div>'+
          '<div class="tcpal-room"><div class="tcpal-room-wall" style="background-color:'+selected.hex+'"></div><div class="tcpal-room-floor"></div></div>'+
          '<p class="tcpal-cta-text">Consultanos por este color en cualquiera de nuestras sucursales</p>'+
          '<a href="/contacto" class="tcpal-btn">Consultar disponibilidad</a>'+
        '</div>';
    } else {
      var four=families[activeFamily].colors.slice(0,4).map(function(c){
        return '<div class="tcpal-empty-swatch" style="background-color:'+c.hex+'"></div>';
      }).join("");
      previewEl.innerHTML=
        '<div class="tcpal-empty"><div class="tcpal-empty-swatches">'+four+'</div>'+
        '<p class="tcpal-empty-text">Seleccioná un color para ver la vista previa</p></div>';
    }
  }

  renderTabs();renderSwatches();renderPreview();
})();
</script>
`

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */
const jsonLd = html(
  `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Mantello en Casa — Distribuidor Sherwin-Williams",
    description:
      "Explorá la paleta de más de 1.500 colores premium Sherwin-Williams disponibles en todas nuestras sucursales.",
    brand: { "@type": "Brand", name: "Sherwin-Williams" },
    makesOffer: {
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: "Pinturas y colores Sherwin-Williams" },
    },
  })}</script>`,
)

/* ------------------------------------------------------------------ */
/* structure: one full-bleed flexbox container + html widget + JSON-LD */
/* ------------------------------------------------------------------ */
const section = container(
  {
    content_width: "full",
    padding: pad(0, 0, 0, 0),
  },
  [html(widgetHtml), jsonLd],
  false,
)

const template = {
  version: "0.4",
  title: "Mantello en Casa — Paleta de colores Sherwin-Williams",
  type: "section",
  page_settings: {
    meta_title: "Paleta de colores Sherwin-Williams | Mantello en Casa",
    meta_description:
      "Explorá más de 1.500 colores premium Sherwin-Williams: neutros, blancos, azules, verdes, rojos y amarillos. Disponibles en todas nuestras sucursales.",
  },
  content: [section],
}

const slug = "paleta-colores-sherwin-williams"
writeFileSync(`public/${slug}.json`, JSON.stringify(template, null, 2))
writeZip(`public/${slug}.json`, `${slug}.json`, `public/${slug}.zip`)

/* ------------------------------------------------------------------ */
/* validation                                                          */
/* ------------------------------------------------------------------ */
const obj = JSON.parse(readFileSync(`public/${slug}.json`, "utf8"))
const str = JSON.stringify(obj)
console.log("[v0] sections (must be 0):", (str.match(/"elType":"section"/g) || []).length)
console.log("[v0] columns  (must be 0):", (str.match(/"elType":"column"/g) || []).length)
console.log("[v0] containers:", (str.match(/"elType":"container"/g) || []).length)
console.log("[v0] meta_title:", obj.page_settings.meta_title)
console.log("[v0] JSON-LD:", str.includes("application/ld+json") ? "yes" : "no")
let issues = []
const walk = (el, p) => {
  if (!el._id) issues.push("no _id " + p)
  if (el.elType === "widget" && !el.widgetType) issues.push("no widgetType " + p)
  ;(el.elements || []).forEach((c, i) => walk(c, p + ">" + i))
}
obj.content.forEach((s, i) => walk(s, "c" + i))
console.log("[v0] structural issues:", issues.length ? issues.join(", ") : "NONE")
