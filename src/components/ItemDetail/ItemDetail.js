import { useContext, useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import { getCategoryByDbValue } from "../../data/productCategories"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'

const ItemDetail = ({ id, name, img, description, price, category, stock }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const { user } = useContext(LoginContext)
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const location = useLocation()

    const categoryInfo = getCategoryByDbValue(category)
    const inCart = isInCart(id)
    const lowStock = stock > 0 && stock < 5

    const handleAgregar = () => {
        if (!user.logged) {
            navigate('/login', { state: { from: location.pathname, reason: 'cart' } })
            return
        }
        agregarAlCarrito({
            id,
            name,
            stock,
            cantidad,
            price,
            img,
            category,
            description,
        })
    }

    return (
        <article className="product-detail">
            <nav className="product-detail__breadcrumb" aria-label="Miga de pan">
                <Link to="/productos">Productos</Link>
                {categoryInfo && (
                    <>
                        <span aria-hidden="true">/</span>
                        <Link to={`/productos/${categoryInfo.slug}`}>{categoryInfo.label}</Link>
                    </>
                )}
                <span aria-hidden="true">/</span>
                <span className="product-detail__breadcrumb-current" aria-current="page">{name}</span>
            </nav>

            <div className="row g-4 g-lg-5 align-items-start">
                <div className="col-lg-6">
                    <div className="product-detail__media">
                        <img
                            className="product-detail__img"
                            src={img}
                            alt={name}
                            loading="eager"
                        />
                        {lowStock && (
                            <span className="product-detail__badge product-detail__badge--stock">
                                Últimas unidades
                            </span>
                        )}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="product-detail__panel">
                        {category && (
                            <span className="product-detail__category">{categoryInfo?.label ?? category}</span>
                        )}
                        <h1 className="product-detail__title">{name}</h1>

                        <div className="product-detail__meta">
                            <p className="product-detail__price">
                                <span className="product-detail__price-label">Precio</span>
                                <span className="product-detail__price-value">USD {price}</span>
                            </p>
                            <p className="product-detail__stock">
                                Stock disponible: <strong>{stock}</strong>
                            </p>
                        </div>

                        <div className="product-detail__description">
                            <h2 className="product-detail__description-title">Descripción</h2>
                            <p>{description}</p>
                        </div>

                        <div className="product-detail__actions">
                            {!inCart ? (
                                <>
                                    {!user.logged && (
                                        <p className="product-detail__login-hint">
                                            Para agregar al carrito necesitás{' '}
                                            <Link
                                                to="/login"
                                                state={{ from: location.pathname, reason: 'cart' }}
                                            >
                                                iniciar sesión
                                            </Link>.
                                        </p>
                                    )}
                                    <ItemCount
                                        max={stock}
                                        cantidad={cantidad}
                                        setCantidad={setCantidad}
                                        addItem={handleAgregar}
                                    />
                                </>
                            ) : (
                                <div className="product-detail__in-cart">
                                    <p className="product-detail__in-cart-msg">Este producto ya está en tu carrito.</p>
                                    <Link to="/cart" className="product-detail__btn product-detail__btn--primary">
                                        Ir al carrito
                                    </Link>
                                </div>
                            )}
                        </div>

                        <button
                            type="button"
                            className="product-detail__back"
                            onClick={() => navigate(-1)}
                        >
                            ← Volver
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail
