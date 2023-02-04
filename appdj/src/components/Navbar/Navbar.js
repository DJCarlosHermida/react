import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
            <header className="header">
                <div className="container  header__container">


                    <a href="https://soundcloud.com/djcarloshermida/sets/cachengue" rel="noreferrer" target="_blank">
                    <img src="./logoDJ.png" class="header__logo" alt="Logo DJ" title="Escuchar en Souncloud" />
                    </a>

                    <nav className="header__nav">
                        <Link className="header__Link" to="/inicio">Inicio</Link>
                        <Link className="header__Link" to="/productos/">Productos</Link>
                        <Link className="header__Link" to="/productos/LED">Iluminación</Link>
                        <Link className="header__Link" to="/productos/Parlantes">Audio</Link>
                        <Link className="header__Link" to="/productos/Microfonos">Micrófonos</Link>
                        <Link className="header__Link" to="/productos/DJ">DJ</Link>
                        <Link className="header__Link" to="/productos/Interfaz">Interfaz</Link>
                    </nav>

                </div>
            </header>

    )
}