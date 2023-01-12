import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = ({bg = '#78ccb0'}) => {

    return (
        <header className="header" style={{background: bg}}>
            <div className='header__container'>
                <h1 className="header__logo">LOGO</h1>

               º <nav className="header__nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/productos/servicios">Servicios</Link>
                    <Link to="/productos/audio">Audio</Link>
                    <Link to="/productos/iluminacion">Iluminación</Link>
                    <Link to="/productos/dj">DJ</Link>
                    <Link to="/productos/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}