import { Link } from 'react-router-dom'
import { PRODUCT_CATEGORIES } from '../../data/productCategories'
import './Nosotros.scss'

const PILLARS = [
    {
        title: 'Solución integral',
        text: 'Coordinamos audio, iluminación y equipamiento DJ en un solo servicio, adaptado al tipo y escala de tu evento.',
    },
    {
        title: 'Equipamiento profesional',
        text: 'Trabajamos con tecnología de calidad para fiestas, salones y eventos corporativos, con opciones para distintos presupuestos.',
    },
    {
        title: 'Asesoramiento personalizado',
        text: 'Te ayudamos a elegir lo que realmente necesitás según lugar, cantidad de personas y momento de la celebración.',
    },
    {
        title: 'Experiencia en eventos',
        text: 'Bodas, 15 años, despedidas, infantiles y eventos empresariales: sabemos qué funciona en cada formato.',
    },
]

const CATEGORIES = PRODUCT_CATEGORIES.map(({ slug, label }) => ({
    label,
    to: `/productos/${slug}`,
}))

const Nosotros = () => {
    return (
        <section className="nosotros-page">
            <div className="container nosotros-page__hero">
                <p className="nosotros-page__kicker">DJ Team</p>
                <h1 className="nosotros-page__title">Nosotros</h1>
                <p className="nosotros-page__lead">
                    Brindamos soluciones integrales para tu fiesta o evento, con una amplia gama de
                    equipamiento profesional y el respaldo de un equipo que conoce cada detalle del
                    montaje en vivo.
                </p>
            </div>

            <div className="container nosotros-page__body">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="nosotros-intro">
                            <h2 className="nosotros-intro__title">Tu evento, bien equipado de principio a fin</h2>
                            <p className="nosotros-intro__text">
                                En DJ Team combinamos productos de audio, iluminación y DJ con una
                                mirada práctica: entendemos que cada celebración es distinta y que
                                el sonido, la luz y la puesta en escena marcan la diferencia.
                            </p>
                            <p className="nosotros-intro__text">
                                Desde salones íntimos hasta eventos de mayor convocatoria, te
                                acompañamos con equipos confiables, asesoramiento claro y una
                                propuesta pensada para que disfrutes sin preocuparte por la técnica.
                            </p>
                            <blockquote className="nosotros-intro__quote">
                                Más que alquilar equipos, ofrecemos una experiencia completa para que
                                tu fiesta tenga el nivel que imaginás.
                            </blockquote>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="nosotros-highlight">
                            <p className="nosotros-highlight__label">Qué ofrecemos</p>
                            <ul className="nosotros-highlight__list">
                                <li>Audio PA y refuerzo sonoro</li>
                                <li>Iluminación LED, efectos y ambiente</li>
                                <li>Consolas y equipos para DJ</li>
                                <li>Micrófonos e interfaces para presentaciones</li>
                                <li>Asesoramiento según tipo de evento</li>
                            </ul>
                            <div className="nosotros-highlight__actions">
                                <Link to="/productos" className="nosotros-btn nosotros-btn--primary">
                                    Ver productos
                                </Link>
                                <Link to="/contacto" className="nosotros-btn nosotros-btn--ghost">
                                    Consultar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nosotros-pillars">
                    {PILLARS.map((item) => (
                        <article key={item.title} className="nosotros-pillar">
                            <h3 className="nosotros-pillar__title">{item.title}</h3>
                            <p className="nosotros-pillar__text">{item.text}</p>
                        </article>
                    ))}
                </div>

                <div className="nosotros-categories">
                    <p className="nosotros-categories__label">Explorá por categoría</p>
                    <div className="nosotros-categories__grid">
                        {CATEGORIES.map((cat) => (
                            <Link key={cat.to} to={cat.to} className="nosotros-categories__chip">
                                {cat.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros
