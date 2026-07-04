import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo.js'

export const Navbar = () => {
    const { user, logout } = useContext(LoginContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
            <header className="header">
                <div className="header__container">
                    <Logo className="animate__animated animate__fadeInUp" />
                    <nav className="header__nav">
                        <Link className="header__Link" to="/">Home</Link>
                        <Link className="header__Link" to="/nosotros">Nosotros</Link>
                        <Link className="header__Link" to="/productos/">Productos</Link>
                        <Link className="header__Link" to="/productos/iluminacion">Iluminación</Link>
                        <Link className="header__Link" to="/productos/parlantes">Audio</Link>
                        <Link className="header__Link" to="/productos/microfonos">Micrófonos</Link>
                        <Link className="header__Link" to="/productos/dj">DJ</Link>
                        <Link className="header__Link" to="/productos/interfaz">Interfaz</Link>
                        <Link className="header__Link" to="/contacto">Contacto</Link>
                        {user.logged ? (
                            <>
                                <span className="header__user">{user.displayName || user.email}</span>
                                <button type="button" className="header__Link header__logout" onClick={handleLogout}>Cerrar sesión</button>
                            </>
                        ) : (
                            <Link className="header__Link" to="/login">Login</Link>
                        )}
                        <CartWidget />
                    </nav>
                </div>
            </header>
    )
}