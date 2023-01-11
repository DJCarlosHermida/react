import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = ({bg = '#78ccb0'}) => {

    return (
        <header className="header" style={{background: bg}}>
            <div className='header__container'>
                <h1 className="header__logo">LOGO</h1>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/limpieza">Limpieza</Link>
                    <Link className="header__link" to="/productos/verduleria">Verduleria</Link>
                    <Link className="header__link" to="/productos/carniceria">Carniceria</Link>
                    <Link className="header__link" to="/productos/panaderia">Panaderia</Link>
                    <Link className="header__link" to="/productos/perfumeria">Perfumeria</Link>
                </nav>
            </div>
        </header>
    )
}