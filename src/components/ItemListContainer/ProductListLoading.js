import './ProductListLoading.scss'

const SKELETON_COUNT = 8

const ProductListLoading = ({ categoryLabel }) => {
    const title = categoryLabel || 'Nuestros productos'

    return (
        <div className="productos-list productos-list--loading" aria-busy="true" aria-live="polite">
            <header className="productos-list__header">
                <h2 className="productos-list__title">{title}</h2>
                <p className="productos-list__loading-status">Buscando en el catálogo…</p>
            </header>

            <div className="row g-3 g-md-4 productos-skeleton-grid">
                {Array.from({ length: SKELETON_COUNT }, (_, index) => (
                    <div
                        key={index}
                        className="product-skeleton col-sm-6 col-lg-4 col-xl-3"
                        aria-hidden="true"
                    >
                        <div className="product-skeleton__media" />
                        <div className="product-skeleton__body">
                            <div className="product-skeleton__line product-skeleton__line--short" />
                            <div className="product-skeleton__line product-skeleton__line--title" />
                            <div className="product-skeleton__line product-skeleton__line--price" />
                            <div className="product-skeleton__btn" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListLoading
