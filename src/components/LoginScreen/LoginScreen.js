import { useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'

const LOGIN_MESSAGES = {
    cart: 'Iniciá sesión para agregar productos al carrito.',
    checkout: 'Iniciá sesión para finalizar tu compra.',
    account: 'Acceso de demostración del flujo de compra en un e-commerce.',
}

const LoginScreen = () => {
    const { login, user, demoCredentials } = useContext(LoginContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const reasonMessage = LOGIN_MESSAGES[location.state?.reason] || 'Acceso de demostración del flujo de compra en un e-commerce.'

    useEffect(() => {
        if (user.logged) {
            const from = location.state?.from || '/'
            navigate(from, { replace: true })
        }
    }, [user.logged, navigate, location])

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const fillDemoCredentials = () => {
        setValues({
            email: demoCredentials.email,
            password: demoCredentials.password,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className="login-screen">
            <div className="login">
                <p className="login-screen__badge">E-commerce ficticio</p>
                <h2>Acceso de demostración</h2>
                <p className="login-screen__hint">{reasonMessage}</p>

                <div className="login-screen__demo" aria-label="Credenciales de demostración">
                    <p className="login-screen__demo-title">Cuenta ficticia</p>
                    <p className="login-screen__demo-row">
                        <span>Correo</span>
                        <code>{demoCredentials.email}</code>
                    </p>
                    <p className="login-screen__demo-row">
                        <span>Contraseña</span>
                        <code>{demoCredentials.password}</code>
                    </p>
                    <button
                        type="button"
                        className="login-screen__demo-btn"
                        onClick={fillDemoCredentials}
                    >
                        Usar estas credenciales
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="login-screen__form">
                    {user.error && <p className="login-screen__error" role="alert">{user.error}</p>}
                    <label className="login-screen__label" htmlFor="login-email">Correo</label>
                    <input
                        id="login-email"
                        className="form-control"
                        value={values.email}
                        type="email"
                        onChange={handleInputChange}
                        name="email"
                        placeholder={demoCredentials.email}
                        autoComplete="username"
                    />
                    <label className="login-screen__label" htmlFor="login-password">Contraseña</label>
                    <input
                        id="login-password"
                        className="form-control"
                        value={values.password}
                        type="password"
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Contraseña de prueba"
                        autoComplete="current-password"
                    />
                    <button type="submit" className="login-screen__submit">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
