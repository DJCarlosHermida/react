import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
            <header className="header">
                <div className="header__container">


                    <a href="https://soundcloud.com/djcarloshermida/sets/cachengue" rel="noreferrer" target="_blank">
                    <img src="./logoDJ.png" class="header__logo" alt="Logo Dj" title="Logo DJ" />
                    </a>

                    <nav className="header__nav">
                        <Link className="header__Link" to="/">Inicio</Link>
                        <Link className="header__Link" to="/nosotros">Nosotros</Link>
                        <Link className="header__Link" to="/productos">Productos</Link>
                        <Link className="header__Link" to="/galeria">Galería</Link>
                        <Link className="header__Link" to="/contacto">Contacto</Link>
                        <Link className="header__Link" to="/carrito">Carrito</Link>
                    </nav>

                </div>
            </header>

    )
}