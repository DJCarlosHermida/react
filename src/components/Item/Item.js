import { Link } from 'react-router-dom'
import { getCategoryByDbValue } from '../../data/productCategories'
import './Item.scss'

const Item = ({ id, stock, name, img, price, category }) => {
    const categoryInfo = getCategoryByDbValue(category)
    const lowStock = stock > 0 && stock < 5

    return (
        <article className="product-card col-sm-6 col-lg-4 col-xl-3">
            <Link to={`/detail/${id}`} className="product-card__media">
                <img
                    src={img}
                    className="product-card__img"
                    alt={name}
                    title={name}
                    loading="lazy"
                />
                {lowStock && (
                    <span className="product-card__badge">Últimas unidades</span>
                )}
            </Link>
            <div className="product-card__body">
                {category && (
                    <span className="product-card__category">
                        {categoryInfo?.label ?? category}
                    </span>
                )}
                <h3 className="product-card__name">
                    <Link to={`/detail/${id}`}>{name}</Link>
                </h3>
                <p className="product-card__price">
                    <span className="product-card__price-label">USD</span>
                    <span className="product-card__price-value">{price}</span>
                </p>
                <Link to={`/detail/${id}`} className="product-card__btn">
                    Ver detalle
                </Link>
            </div>
        </article>
    )
}

export default Item
