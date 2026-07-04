import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import { BsTrash, BsCart } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./Cart.scss"

const Cart = () => {
    const { cart, emptycart, totalCart, removeItem, updateItemQuantity } = useContext(CartContext)
    const { user } = useContext(LoginContext)

    const [stockNoticeId, setStockNoticeId] = useState(null)

    const itemCount = cart.reduce((sum, item) => sum + item.cantidad, 0)

    const handleIncrease = (item) => {
        if (item.cantidad >= item.stock) {
            setStockNoticeId(item.id)
            return
        }
        setStockNoticeId(null)
        updateItemQuantity(item.id, item.cantidad + 1)
    }

    if (cart.length === 0) {
        return (
            <section className="cart-page">
                <div className="container">
                    <div className="cart-page__hero">
                        <p className="cart-page__kicker">Tu pedido</p>
                        <h1 className="cart-page__title">Carrito</h1>
                    </div>
                    <div className="cart-empty">
                        <div className="cart-empty__icon" aria-hidden="true">
                            <BsCart />
                        </div>
                        <h2 className="cart-empty__title">Tu carrito está vacío</h2>
                        <p className="cart-empty__text">
                            Explorá el catálogo y agregá equipos para simular el flujo de compra.
                        </p>
                        <Link to="/productos" className="cart-btn cart-btn--primary">
                            Ver productos
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="cart-page">
            <div className="container">
                <div className="cart-page__hero">
                    <p className="cart-page__kicker">Tu pedido</p>
                    <h1 className="cart-page__title">Carrito</h1>
                    <p className="cart-page__lead">
                        {itemCount} {itemCount === 1 ? "artículo" : "artículos"} en tu selección
                    </p>
                </div>

                <div className="row g-4 g-lg-5 align-items-start">
                    <div className="col-lg-8">
                        <div className="cart-items">
                            {cart.map((item) => {
                                const subtotal = item.price * item.cantidad
                                return (
                                    <article key={item.id} className="cart-item">
                                        <Link to={`/detail/${item.id}`} className="cart-item__media">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="cart-item__img"
                                                loading="lazy"
                                            />
                                        </Link>
                                        <div className="cart-item__body">
                                            <div className="cart-item__head">
                                                <div>
                                                    {item.category && (
                                                        <span className="cart-item__category">{item.category}</span>
                                                    )}
                                                    <h2 className="cart-item__name">
                                                        <Link to={`/detail/${item.id}`}>{item.name}</Link>
                                                    </h2>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="cart-item__remove"
                                                    onClick={() => removeItem(item.id)}
                                                    aria-label={`Quitar ${item.name} del carrito`}
                                                >
                                                    <BsTrash aria-hidden="true" />
                                                </button>
                                            </div>
                                            <div className="cart-item__meta">
                                                <div className="cart-item__qty" aria-label={`Cantidad de ${item.name}`}>
                                                    <button
                                                        type="button"
                                                        className="cart-item__qty-btn cart-item__qty-btn--minus"
                                                        onClick={() => {
                                                            setStockNoticeId(null)
                                                            updateItemQuantity(item.id, item.cantidad - 1)
                                                        }}
                                                        aria-label={item.cantidad === 1 ? "Quitar del carrito" : "Quitar una unidad"}
                                                    >
                                                        −
                                                    </button>
                                                    <span className="cart-item__qty-value">
                                                        {item.cantidad} {item.cantidad === 1 ? "unidad" : "unidades"}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="cart-item__qty-btn cart-item__qty-btn--plus"
                                                        onClick={() => handleIncrease(item)}
                                                        aria-label="Agregar una unidad"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                {stockNoticeId === item.id && (
                                                    <span className="cart-item__stock-notice" role="status">
                                                        Stock máximo alcanzado ({item.stock} unidades)
                                                    </span>
                                                )}
                                                <span className="cart-item__unit-price">
                                                    Precio unitario: <strong>USD {item.price}</strong>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cart-item__subtotal">
                                            <span className="cart-item__subtotal-label">Subtotal</span>
                                            <span className="cart-item__subtotal-value">USD {subtotal}</span>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <aside className="cart-summary">
                            <h2 className="cart-summary__title">Resumen</h2>
                            <div className="cart-summary__row">
                                <span>Artículos</span>
                                <span>{itemCount}</span>
                            </div>
                            <div className="cart-summary__row cart-summary__row--total">
                                <span>Total</span>
                                <span>USD {totalCart()}</span>
                            </div>
                            <p className="cart-summary__note">
                                Demostración ficticia — el total es referencial para el flujo de compra.
                            </p>

                            {user.logged ? (
                                <Link to="/checkout" className="cart-btn cart-btn--primary cart-btn--block">
                                    Terminar compra
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    state={{ from: "/checkout", reason: "checkout" }}
                                    className="cart-btn cart-btn--primary cart-btn--block"
                                >
                                    Iniciar sesión para comprar
                                </Link>
                            )}

                            <button
                                type="button"
                                className="cart-btn cart-btn--ghost cart-btn--block"
                                onClick={emptycart}
                            >
                                Vaciar carrito
                            </button>
                            <Link to="/productos" className="cart-summary__back">
                                ← Seguir comprando
                            </Link>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
