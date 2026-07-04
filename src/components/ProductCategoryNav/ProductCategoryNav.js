import { Link, useParams } from 'react-router-dom'
import { PRODUCT_CATEGORIES, getCategoryBySlug } from '../../data/productCategories'
import './ProductCategoryNav.scss'

const ProductCategoryNav = () => {
    const { categoryId } = useParams()
    const active = getCategoryBySlug(categoryId)

    return (
        <nav className="product-breadcrumb" aria-label="Categorías de productos">
            <ol className="product-breadcrumb__trail">
                <li className="product-breadcrumb__item">
                    <Link to="/productos">Productos</Link>
                </li>
                {active && (
                    <>
                        <li className="product-breadcrumb__sep" aria-hidden="true">/</li>
                        <li className="product-breadcrumb__item product-breadcrumb__item--current" aria-current="page">
                            {active.label}
                        </li>
                    </>
                )}
            </ol>

            <div className="product-breadcrumb__filters" role="toolbar" aria-label="Filtrar por categoría">
                <Link
                    to="/productos"
                    className={`product-breadcrumb__chip ${!categoryId ? 'product-breadcrumb__chip--active' : ''}`}
                    aria-current={!categoryId ? 'page' : undefined}
                >
                    Todos
                </Link>
                {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                        key={cat.slug}
                        to={`/productos/${cat.slug}`}
                        className={`product-breadcrumb__chip ${categoryId === cat.slug ? 'product-breadcrumb__chip--active' : ''}`}
                        aria-current={categoryId === cat.slug ? 'page' : undefined}
                    >
                        {cat.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default ProductCategoryNav
