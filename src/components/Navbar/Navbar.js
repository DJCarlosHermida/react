import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect, useRef } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { LoginContext } from '../../context/LoginContext'
import { CartContext } from '../../context/CartContext'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo.js'

export const Navbar = () => {
    const { user, logout } = useContext(LoginContext)
    const { emptycart } = useContext(CartContext)
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const userMenuRef = useRef(null)

    const handleLogout = () => {
        emptycart()
        logout()
        setUserMenuOpen(false)
        setMenuOpen(false)
        navigate('/')
    }

    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 992) setMenuOpen(false)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    useEffect(() => {
        if (!userMenuOpen) return undefined

        const onClickOutside = (e) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setUserMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', onClickOutside)
        return () => document.removeEventListener('mousedown', onClickOutside)
    }, [userMenuOpen])

    useEffect(() => {
        if (!user.logged) setUserMenuOpen(false)
    }, [user.logged])

    return (
        <header className="header">
            <div className="header__container">
                <Logo className="animate__animated animate__fadeInUp" />

                <button
                    type="button"
                    className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="header-nav"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="header__toggle-bar" aria-hidden="true" />
                    <span className="header__toggle-bar" aria-hidden="true" />
                    <span className="header__toggle-bar" aria-hidden="true" />
                </button>

                <nav
                    id="header-nav"
                    className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
                >
                    <Link className="header__Link" to="/" onClick={closeMenu}>Home</Link>
                    <Link className="header__Link" to="/nosotros" onClick={closeMenu}>Nosotros</Link>
                    <Link className="header__Link" to="/productos" onClick={closeMenu}>Productos</Link>
                    <Link className="header__Link" to="/contacto" onClick={closeMenu}>Contacto</Link>
                    {user.logged ? (
                        <div className="header__user-menu" ref={userMenuRef}>
                            <button
                                type="button"
                                className="header__user-btn"
                                onClick={() => setUserMenuOpen((open) => !open)}
                                aria-label="Menú de sesión"
                                aria-expanded={userMenuOpen}
                                aria-haspopup="true"
                            >
                                <BsPersonCircle className="header__user-icon" aria-hidden="true" />
                            </button>
                            {userMenuOpen && (
                                <div className="header__user-dropdown" role="menu">
                                    <button
                                        type="button"
                                        className="header__user-dropdown-item"
                                        role="menuitem"
                                        onClick={handleLogout}
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link className="header__Link" to="/login" onClick={closeMenu} state={{ reason: 'account' }}>Login</Link>
                    )}
                    <CartWidget />
                </nav>

                {menuOpen && (
                    <button
                        type="button"
                        className="header__backdrop"
                        aria-label="Cerrar menú"
                        onClick={closeMenu}
                    />
                )}
            </div>
        </header>
    )
}
