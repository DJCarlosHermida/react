import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './Contacto.scss'

const CONTACT_EMAIL = 'djcarloshermida@outlook.com'
const WHATSAPP_PHONE = '59891332854'

const Contacto = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [consultaId, setConsultaId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        if (error) setError(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setSubmitting(true)

        try {
            const docRef = await addDoc(collection(db, 'contacts'), {
                name: values.name.trim(),
                email: values.email.trim(),
                phone: values.phone.trim(),
                message: values.text.trim(),
                createdAt: serverTimestamp(),
                source: 'dj-team-ecommerce',
                status: 'nueva',
            })
            setConsultaId(docRef.id)
            setSubmitted(true)
        } catch (err) {
            console.error('Error al guardar consulta:', err)
            setError('No se pudo enviar la consulta. Por favor, intentá de nuevo en unos minutos.')
        } finally {
            setSubmitting(false)
        }
    }

    const resetForm = () => {
        setSubmitted(false)
        setConsultaId(null)
        setError(null)
        setValues({ name: '', email: '', phone: '', text: '' })
    }

    const waText = encodeURIComponent(
        'Hola, quiero consultar por equipos y servicios para un evento.'
    )

    return (
        <section className="contact-page">
            <div className="contact-page__hero">
                <div className="container">
                    <p className="contact-page__kicker">Estamos para ayudarte</p>
                    <h1 className="contact-page__title">Contacto</h1>
                    <p className="contact-page__lead">
                        Consultá disponibilidad, presupuestos o asesoramiento para tu evento.
                        Respondemos a la brevedad.
                    </p>
                </div>
            </div>

            <div className="container contact-page__body">
                <div className="row g-4 g-lg-5 align-items-stretch">
                    <aside className="col-lg-5">
                        <div className="contact-info h-100">
                            <h2 className="contact-info__title">Hablemos de tu evento</h2>
                            <p className="contact-info__text">
                                Contanos fecha, tipo de evento, lugar, horario y cantidad de personas.
                                Así podemos orientarte con el equipamiento ideal.
                            </p>

                            <ul className="contact-info__list">
                                <li className="contact-info__item">
                                    <span className="contact-info__icon" aria-hidden="true">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </span>
                                    <div>
                                        <span className="contact-info__label">Email</span>
                                        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-info__link">
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </li>
                                <li className="contact-info__item">
                                    <span className="contact-info__icon" aria-hidden="true">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <span className="contact-info__label">WhatsApp</span>
                                        <a
                                            href={`https://wa.me/${WHATSAPP_PHONE}?text=${waText}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="contact-info__link"
                                        >
                                            Consulta rápida por chat
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <div className="contact-info__tags">
                                <span>Iluminación</span>
                                <span>Audio</span>
                                <span>DJ</span>
                                <span>Eventos</span>
                            </div>
                        </div>
                    </aside>

                    <div className="col-lg-7">
                        <div className="contact-form-card">
                            {submitted ? (
                                <div className="contact-form-card__success">
                                    <div className="contact-form-card__success-icon" aria-hidden="true">✓</div>
                                    <h3>Consulta enviada</h3>
                                    <p>
                                        Recibimos tu mensaje correctamente. Te responderemos a la brevedad
                                        en <strong>{values.email}</strong>.
                                    </p>
                                    {consultaId && (
                                        <p className="contact-form-card__ref">
                                            Referencia: <code>{consultaId}</code>
                                        </p>
                                    )}
                                    <button
                                        type="button"
                                        className="contact-form-card__btn contact-form-card__btn--ghost"
                                        onClick={resetForm}
                                    >
                                        Enviar otra consulta
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <h2 className="contact-form__title">Formulario de contacto</h2>
                                    <p className="contact-form__hint">Los campos marcados con * son obligatorios.</p>

                                    {error && (
                                        <p className="contact-form__error" role="alert">{error}</p>
                                    )}

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="contact-name" className="contact-form__label">Nombre *</label>
                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                className="contact-form__input"
                                                placeholder="Tu nombre"
                                                value={values.name}
                                                onChange={handleInputChange}
                                                required
                                                autoComplete="name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="contact-phone" className="contact-form__label">Celular *</label>
                                            <input
                                                id="contact-phone"
                                                name="phone"
                                                type="tel"
                                                className="contact-form__input"
                                                placeholder="09X XXX XXX"
                                                value={values.phone}
                                                onChange={handleInputChange}
                                                required
                                                autoComplete="tel"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="contact-email" className="contact-form__label">Email *</label>
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                className="contact-form__input"
                                                placeholder="tu@email.com"
                                                value={values.email}
                                                onChange={handleInputChange}
                                                required
                                                autoComplete="email"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="contact-text" className="contact-form__label">Mensaje *</label>
                                            <textarea
                                                id="contact-text"
                                                name="text"
                                                className="contact-form__input contact-form__textarea"
                                                placeholder="Fecha del evento, tipo, lugar, cantidad de personas..."
                                                rows={5}
                                                value={values.text}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="contact-form-card__btn"
                                                disabled={submitting}
                                            >
                                                {submitting ? 'Enviando...' : 'Enviar consulta'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto
