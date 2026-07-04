import { useState, useContext, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { BsCheckCircle, BsShieldCheck, BsBagCheck } from "react-icons/bs"
import { useCartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import { db } from "../../firebase/config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import "./Checkout.scss"

const Checkout = () => {
    const { cart, totalCart, totalCantidad, emptycart } = useCartContext()
    const { user } = useContext(LoginContext)

    const [orderId, setOrderId] = useState(null)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [fieldErrors, setFieldErrors] = useState({})

    const [values, setValues] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })

    useEffect(() => {
        if (!user.logged) return
        setValues((prev) => ({
            ...prev,
            nombre: prev.nombre || user.displayName || "",
            email: prev.email || user.email || "",
        }))
    }, [user.logged, user.displayName, user.email])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues((prev) => ({ ...prev, [name]: value }))
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({ ...prev, [name]: null }))
        }
        if (error) setError(null)
    }

    const validate = () => {
        const errors = {}
        const nombre = values.nombre.trim()
        const email = values.email.trim()
        const telefono = values.telefono.trim()

        if (nombre.length < 3) {
            errors.nombre = "Ingresá un nombre válido (mínimo 3 caracteres)."
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Ingresá un correo electrónico válido."
        }
        if (telefono && telefono.length < 6) {
            errors.telefono = "El teléfono debe tener al menos 6 dígitos."
        }

        setFieldErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setSubmitting(true)
        setError(null)

        const orden = {
            cliente: {
                nombre: values.nombre.trim(),
                telefono: values.telefono.trim(),
                email: values.email.trim(),
            },
            items: cart,
            total: totalCart(),
            cantidad: totalCantidad(),
            createdAt: serverTimestamp(),
            status: "simulada",
            source: "dj-team-ecommerce-demo",
        }

        try {
            const docRef = await addDoc(collection(db, "orders"), orden)
            setOrderId(docRef.id)
            emptycart()
        } catch (err) {
            console.error("Error al registrar pedido:", err)
            setError("No se pudo completar la simulación. Intentá de nuevo en unos minutos.")
        } finally {
            setSubmitting(false)
        }
    }

    if (orderId) {
        return (
            <section className="checkout-page">
                <div className="container">
                    <div className="checkout-success">
                        <div className="checkout-success__icon" aria-hidden="true">
                            <BsCheckCircle />
                        </div>
                        <p className="checkout-page__kicker">Simulación completada</p>
                        <h1 className="checkout-success__title">¡Pedido registrado!</h1>
                        <p className="checkout-success__text">
                            Este es un e-commerce ficticio: no se realizó ningún cobro ni envío real.
                            Tu pedido quedó guardado como demostración del flujo de compra.
                        </p>
                        <p className="checkout-success__ref">
                            Nº de referencia: <code>{orderId}</code>
                        </p>
                        <div className="checkout-success__actions">
                            <Link to="/productos" className="checkout-btn checkout-btn--primary">
                                Seguir explorando
                            </Link>
                            <Link to="/" className="checkout-btn checkout-btn--ghost">
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (!user.logged) {
        return <Navigate to="/login" state={{ from: "/checkout", reason: "checkout" }} replace />
    }

    if (cart.length === 0) {
        return <Navigate to="/cart" replace />
    }

    const itemCount = totalCantidad()

    return (
        <section className="checkout-page">
            <div className="container">
                <div className="checkout-page__hero">
                    <p className="checkout-page__kicker">Último paso</p>
                    <h1 className="checkout-page__title">Terminar compra</h1>
                    <p className="checkout-page__lead">
                        Completá tus datos para simular la confirmación del pedido.
                    </p>
                </div>

                <nav className="checkout-steps" aria-label="Pasos del pedido">
                    <span className="checkout-steps__item checkout-steps__item--done">
                        <span className="checkout-steps__num">1</span>
                        Carrito
                    </span>
                    <span className="checkout-steps__line" aria-hidden="true" />
                    <span className="checkout-steps__item checkout-steps__item--active">
                        <span className="checkout-steps__num">2</span>
                        Datos
                    </span>
                    <span className="checkout-steps__line" aria-hidden="true" />
                    <span className="checkout-steps__item">
                        <span className="checkout-steps__num">3</span>
                        Confirmación
                    </span>
                </nav>

                <div className="row g-4 g-lg-5 align-items-start">
                    <div className="col-lg-7">
                        <div className="checkout-form-card">
                            <div className="checkout-form-card__head">
                                <h2 className="checkout-form__title">Datos de contacto</h2>
                                <p className="checkout-form__hint">
                                    Información de demostración — no se procesan pagos reales.
                                </p>
                            </div>

                            {error && (
                                <p className="checkout-form__error" role="alert">
                                    {error}
                                </p>
                            )}

                            <form onSubmit={handleSubmit} className="checkout-form" noValidate>
                                <div className="checkout-form__field">
                                    <label htmlFor="checkout-nombre" className="checkout-form__label">
                                        Nombre completo
                                    </label>
                                    <input
                                        id="checkout-nombre"
                                        className={`checkout-form__input${fieldErrors.nombre ? " checkout-form__input--error" : ""}`}
                                        onChange={handleInputChange}
                                        type="text"
                                        name="nombre"
                                        value={values.nombre}
                                        placeholder="Ej. Juan Pérez"
                                        autoComplete="name"
                                        disabled={submitting}
                                    />
                                    {fieldErrors.nombre && (
                                        <span className="checkout-form__field-error">{fieldErrors.nombre}</span>
                                    )}
                                </div>

                                <div className="checkout-form__field">
                                    <label htmlFor="checkout-email" className="checkout-form__label">
                                        Correo electrónico
                                    </label>
                                    <input
                                        id="checkout-email"
                                        className={`checkout-form__input${fieldErrors.email ? " checkout-form__input--error" : ""}`}
                                        onChange={handleInputChange}
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        placeholder="tu@email.com"
                                        autoComplete="email"
                                        disabled={submitting}
                                    />
                                    {fieldErrors.email && (
                                        <span className="checkout-form__field-error">{fieldErrors.email}</span>
                                    )}
                                </div>

                                <div className="checkout-form__field">
                                    <label htmlFor="checkout-telefono" className="checkout-form__label">
                                        Teléfono <span className="checkout-form__optional">(opcional)</span>
                                    </label>
                                    <input
                                        id="checkout-telefono"
                                        className={`checkout-form__input${fieldErrors.telefono ? " checkout-form__input--error" : ""}`}
                                        onChange={handleInputChange}
                                        type="tel"
                                        name="telefono"
                                        value={values.telefono}
                                        placeholder="Ej. 09 123 456"
                                        autoComplete="tel"
                                        disabled={submitting}
                                    />
                                    {fieldErrors.telefono && (
                                        <span className="checkout-form__field-error">{fieldErrors.telefono}</span>
                                    )}
                                </div>

                                <div className="checkout-form__demo">
                                    <BsShieldCheck aria-hidden="true" />
                                    <span>
                                        Pedido simulado para el portfolio — los datos se guardan en Firebase solo como demo.
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    className="checkout-btn checkout-btn--primary checkout-btn--block"
                                    disabled={submitting}
                                >
                                    {submitting ? "Registrando pedido…" : "Confirmar pedido simulado"}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <aside className="checkout-summary">
                            <h2 className="checkout-summary__title">
                                <BsBagCheck aria-hidden="true" />
                                Resumen del pedido
                            </h2>

                            <ul className="checkout-summary__items">
                                {cart.map((item) => (
                                    <li key={item.id} className="checkout-summary__item">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="checkout-summary__thumb"
                                            loading="lazy"
                                        />
                                        <div className="checkout-summary__item-body">
                                            <span className="checkout-summary__item-name">{item.name}</span>
                                            <span className="checkout-summary__item-qty">
                                                {item.cantidad} × USD {item.price}
                                            </span>
                                        </div>
                                        <span className="checkout-summary__item-total">
                                            USD {item.price * item.cantidad}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="checkout-summary__row">
                                <span>Artículos</span>
                                <span>{itemCount}</span>
                            </div>
                            <div className="checkout-summary__row checkout-summary__row--total">
                                <span>Total referencial</span>
                                <span>USD {totalCart()}</span>
                            </div>

                            <p className="checkout-summary__note">
                                Envío y medios de pago no aplican en esta demostración.
                            </p>

                            <Link to="/cart" className="checkout-summary__back">
                                ← Volver al carrito
                            </Link>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
