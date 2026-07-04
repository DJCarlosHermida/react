import { Link } from 'react-router-dom'
import { PRODUCT_CATEGORIES } from '../../data/productCategories'
import './Inicio.scss'

const FEATURED_SLUGS = ['parlantes', 'iluminacion', 'dj']

const Inicio = () => {
    const featured = PRODUCT_CATEGORIES.filter((c) =>
        FEATURED_SLUGS.includes(c.slug)
    )

    return (
        <section className="home-page">
            <div className="home-hero">
                <div className="container home-hero__inner">
                    <p className="home-hero__kicker">E-commerce ficticio</p>
                    <h1 className="home-hero__title">DJ Team</h1>
                    <p className="home-hero__lead">
                        Equipamiento profesional para audio, iluminación y DJ.
                        Explorá el catálogo y simulá el flujo de compra completo.
                    </p>
                    <div className="home-hero__actions">
                        <Link to="/productos" className="home-btn home-btn--primary">
                            Ver productos
                        </Link>
                        <Link to="/nosotros" className="home-btn home-btn--ghost">
                            Conocenos
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container home-body">
                <div className="home-categories">
                    <h2 className="home-categories__title">Categorías destacadas</h2>
                    <div className="home-categories__grid">
                        {featured.map(({ slug, label }) => (
                            <Link
                                key={slug}
                                to={`/productos/${slug}`}
                                className="home-category-card"
                            >
                                <span className="home-category-card__label">{label}</span>
                                <span className="home-category-card__cta">Explorar →</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <aside className="home-demo">
                    <p className="home-demo__label">Demostración</p>
                    <p className="home-demo__text">
                        Proyecto de portfolio — login, carrito y checkout son simulados.
                        No se procesan pagos ni envíos reales.
                    </p>
                </aside>
            </div>
        </section>
    )
}

export default Inicio
