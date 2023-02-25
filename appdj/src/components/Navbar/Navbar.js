import './Navbar.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
            <header className="header">
                <div className="container  header__container">


                    <a href="https://soundcloud.com/djcarloshermida/sets/cachengue" rel="noreferrer" target="_blank">
                    <img src="./logoDJ.png" class="header__logo" alt="Logo DJ" title="Escuchar en Souncloud" />
                    </a>

                    <nav className="header__nav">
                        <Link className="header__Link" to="/inicio">Inicio</Link>
                        <Link className="header__Link" to="/nosotros">Nosotros</Link>
                        <Link className="header__Link" to="/productos/">Productos</Link>
                        <Link className="header__Link" to="/productos/iluminacion">Iluminación</Link>
                        <Link className="header__Link" to="/productos/parlantes">Audio</Link>
                        <Link className="header__Link" to="/productos/microfonos">Micrófonos</Link>
                        <Link className="header__Link" to="/productos/dj">DJ</Link>
                        <Link className="header__Link" to="/productos/interfaz">Interfaz</Link>
                        <Link className="header__Link" to="/contacto">Contacto</Link>
                        <CartWidget />
                        

                    </nav>

                </div>
            </header>

    )
}