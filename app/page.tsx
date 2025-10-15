import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Truck, Clock, Award, ShieldCheck, Users, Tag } from "lucide-react"
import { products } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 3)
  const allProducts = products

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/images/local-todocolor-fachada.jpeg"
            alt="Todo Color Pinturerías - Casa Central en Mendoza"
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Sherwin Williams Badge */}
        <div className="sherwin-badge-container">
          <div className="sherwin-badge">
            <div className="sherwin-badge-content">
              <div className="sherwin-logo">
                <Image src="/images/sherwin-williams-logo.png" alt="Sherwin Williams" fill className="logo-image" />
              </div>
              <div className="sherwin-text">
                <div className="sherwin-text-line">Distribuidor</div>
                <div className="sherwin-text-line">certificado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom hero-content-wrapper">
          <div className="hero-content-box">
            <h1 className="hero-title">Tu proyecto merece los mejores colores</h1>
            <p className="hero-description">
              Expertos en pintura con más de 50 años de trayectoria. 7 sucursales para estar siempre cerca.
            </p>
            <div className="hero-cta">
              <Link href="/contacto" className="btn-primary-large">
                Asesoramiento Gratuito
                <ArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Grid - Promotional Banners */}
      <section className="promotional-section">
        <div className="container-custom">
          <div className="promotional-grid">
            {/* Banner Grande - Ofertas Especiales */}
            <div className="promo-banner promo-banner-large">
              <div className="promo-background">
                <Image
                  src="/images/sherwin-williams-novacor.jpg"
                  alt="Sherwin Williams Promoción"
                  fill
                  className="promo-bg-image"
                />
              </div>
              <div className="promo-content">
                <div className="promo-tag">
                  <span className="promo-tag-text">PROMOCIÓN ESPECIAL</span>
                </div>
                <h2 className="promo-title-large">Aprovechá las mejores ofertas</h2>
                <p className="promo-description-large">Descuentos de hasta 40% en productos seleccionados</p>
                <div className="promo-discount-badge">
                  <Tag className="discount-icon" />
                  40% OFF
                </div>
                <div className="promo-financing">
                  <span className="financing-title">6 cuotas sin interés</span>
                  <span className="financing-subtitle">con tarjetas seleccionadas</span>
                </div>
              </div>
            </div>

            {/* Banner - Látex */}
            <div className="promo-banner promo-banner-medium">
              <div className="promo-background">
                <Image src="/images/pintura-hogar.jpeg" alt="Látex" fill className="promo-bg-image" />
              </div>
              <div className="promo-content">
                <h3 className="promo-title-medium">Látex para todos los ambientes</h3>
                <div className="promo-price-tag">
                  <span className="price-text">Desde $29.990</span>
                </div>
                <button className="btn-promo">Ver más</button>
              </div>
            </div>

            {/* Banner - Impermeabilizantes */}
            <div className="promo-banner promo-banner-small promo-banner-blue">
              <div className="promo-background">
                <Image src="/images/piscinas-2.jpeg" alt="Impermeabilizantes" fill className="promo-bg-image" />
              </div>
              <div className="promo-content">
                <h3 className="promo-title-small">Impermeabilizantes</h3>
                <p className="promo-description-small">Protege del agua y la humedad</p>
                <div className="promo-badge-small">
                  <span className="badge-text">30% OFF</span>
                </div>
              </div>
            </div>

            {/* Banner - Revestimientos */}
            <div className="promo-banner promo-banner-small promo-banner-amber">
              <div className="promo-background">
                <Image
                  src="/images/revestimientos-sherwin-williams.jpg"
                  alt="Revestimientos Sherwin Williams"
                  fill
                  className="promo-bg-image"
                />
              </div>
              <div className="promo-content">
                <h3 className="promo-title-small">Revestimientos</h3>
                <p className="promo-description-small">Dale textura y color a tus paredes</p>
                <button className="btn-promo-small">Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sherwin Williams Certification Banner */}
      <section className="certification-section">
        <div className="certification-background">
          <div className="cert-decoration cert-decoration-1"></div>
          <div className="cert-decoration cert-decoration-2"></div>
          <div className="cert-pattern"></div>
        </div>

        <div className="container-custom certification-wrapper">
          <div className="certification-container">
            <div className="certification-grid">
              {/* Badge */}
              <div className="cert-badge-wrapper">
                <div className="cert-badge-pulse"></div>
                <div className="cert-badge-image">
                  <Image
                    src="/images/distribuidor-certificado-sherwin-williams.jpeg"
                    alt="Distribuidor Certificado Sherwin Williams"
                    fill
                    className="badge-img"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="cert-content">
                <div className="cert-quality-badge">
                  <div className="quality-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="star-icon"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="quality-text">Calidad Premium</span>
                </div>

                <h2 className="cert-title">
                  Distribuidor certificado
                  <span className="cert-title-highlight">Sherwin-Williams</span>
                </h2>

                <p className="cert-description">
                  Acceso exclusivo a la línea completa de pinturas premium.{" "}
                  <strong className="cert-emphasis">Más de 150 años</strong> de innovación y excelencia respaldando cada
                  proyecto con productos de calidad superior y asesoramiento técnico especializado.
                </p>

                <div className="cert-badges">
                  <div className="cert-badge-item">
                    <div className="badge-icon badge-icon-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="badge-label">Certificación Oficial</span>
                  </div>

                  <div className="cert-badge-item">
                    <div className="badge-icon badge-icon-blue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-layers"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <span className="badge-label">Stock Completo</span>
                  </div>

                  <div className="cert-badge-item">
                    <div className="badge-icon badge-icon-amber">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-award"
                      >
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <span className="badge-label">Garantía Total</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="cert-cta">
                <div className="cert-experience-badge">
                  <span className="experience-number">+150 años</span>
                  <span className="experience-text">de experiencia</span>
                </div>
                <Link href="/contacto" className="btn-cert">
                  Asesoramiento
                  <ArrowRight className="btn-icon-small" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="products-featured-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Productos Destacados</h2>
            <p className="section-description">Los mejores precios en pinturas de primera calidad</p>
          </div>

          <div className="products-grid products-grid-featured">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/productos/${product.slug}`} className="product-card">
                <div className="product-image-wrapper">
                  <div className="product-badge-discount">
                    <span className="badge-text">{product.discount}% OFF</span>
                  </div>
                  <div className="product-badge-size">
                    <span className="size-text">{product.size}</span>
                  </div>
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <div className="product-brand">{product.brand}</div>
                  <p className="product-name">{product.name}</p>
                  <div className="product-pricing">
                    <span className="price-old">${product.oldPrice.toLocaleString("es-AR")}</span>
                    <div className="price-current">${product.price.toLocaleString("es-AR")}</div>
                    <p className="price-installments">3 cuotas sin interés de ${(product.price / 3).toFixed(0)}</p>
                  </div>
                  <div className="product-pickup-badge">Retiro en 2 hs</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-cta">
            <Link href="#todos-los-productos" className="btn-primary-xl">
              Ver todos los productos
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Todos los Productos */}
      <section id="todos-los-productos" className="products-all-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Catálogo Completo de Productos</h2>
            <p className="section-description">
              Descubre nuestra línea completa de pinturas Sherwin Williams para cada necesidad
            </p>
          </div>

          <div className="products-grid products-grid-all">
            {allProducts.map((product) => (
              <Link key={product.id} href={`/productos/${product.slug}`} className="product-card-compact">
                <div className="product-image-compact">
                  {product.discount > 0 && (
                    <div className="product-badge-compact">
                      <span className="badge-text-compact">{product.discount}% OFF</span>
                    </div>
                  )}
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="product-image"
                  />
                </div>
                <div className="product-info-compact">
                  <div className="product-brand-compact">{product.brand}</div>
                  <h3 className="product-name-compact">{product.name}</h3>
                  <div className="product-pricing-compact">
                    <div className="price-old-compact">${product.oldPrice.toLocaleString("es-AR")}</div>
                    <div className="price-current-compact">${product.price.toLocaleString("es-AR")}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container-custom">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin className="icon" />
              </div>
              <h3 className="feature-title">
                7 Sucursales
                <span className="feature-subtitle">en Mendoza</span>
              </h3>
              <p className="feature-description">Estamos siempre cerca tuyo en toda la provincia de Mendoza</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Truck className="icon" />
              </div>
              <h3 className="feature-title">
                Envíos a<span className="feature-subtitle">Domicilio</span>
              </h3>
              <p className="feature-description">Llevamos tu pedido donde lo necesites de forma rápida y segura</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock className="icon" />
              </div>
              <h3 className="feature-title">
                Retiro
                <span className="feature-subtitle">Rápido</span>
              </h3>
              <p className="feature-description">Comprá online y retirá en 2 horas en cualquier sucursal</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container-custom">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image-decoration"></div>
              <div className="about-image-container">
                <Image
                  src="/images/local-todocolor-fachada.jpeg"
                  alt="Sucursal Todo Color Pinturerías en Mendoza"
                  width={700}
                  height={500}
                  className="about-image"
                />
              </div>
            </div>

            <div className="about-content">
              <h2 className="about-title">Más de 50 años siendo los especialistas en pintura</h2>
              <p className="about-description">
                Con más de 50 años de experiencia, somos la cadena de pinturerías más grande de Mendoza y Cuyo, con
                presencia en toda la provincia.
              </p>

              <ul className="about-features">
                <li className="about-feature-item">
                  <div className="about-feature-icon">
                    <Award className="icon" />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">Experiencia comprobada</h3>
                    <p className="about-feature-text">
                      Más de cinco décadas brindando soluciones profesionales en pintura
                    </p>
                  </div>
                </li>

                <li className="about-feature-item">
                  <div className="about-feature-icon">
                    <Users className="icon" />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">Asesoramiento experto</h3>
                    <p className="about-feature-text">Equipo capacitado para ayudarte en cada proyecto</p>
                  </div>
                </li>

                <li className="about-feature-item">
                  <div className="about-feature-icon">
                    <ShieldCheck className="icon" />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">Calidad garantizada</h3>
                    <p className="about-feature-text">Trabajamos con las mejores marcas del mercado</p>
                  </div>
                </li>
              </ul>

              <Link href="/quienes-somos" className="about-cta-link">
                Conocer más sobre nosotros
                <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final-section">
        <div className="cta-background">
          <Image src="/images/piscinas-2.jpeg" alt="Background" fill className="cta-bg-image" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container-custom cta-content-wrapper">
          <h2 className="cta-title">Comprá online y recibí en tu casa</h2>
          <p className="cta-description">Envíos a todo Mendoza. ¡Fácil, rápido y seguro!</p>
          <Link href="https://wa.me/2616142848" className="btn-cta-whatsapp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="whatsapp-icon"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 6.988 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  )
}
