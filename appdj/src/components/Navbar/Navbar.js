import './Navbar.scss'

export const Navbar = () => {

    return (
            <header className="header">
                <div className="header__container">

                    <a href="https://soundcloud.com/djcarloshermida/sets/cachengue" target="_blank">
                        <img src="./logoDJ.png" class="header__logo" alt="Logo Dj" title="Logo DJ" />
                    </a>

                    <nav className="header__nav">
                        <a className="header__Link" href="#">Inicio</a>
                        <a className="header__Link" href="#">Artículos</a>
                        <a className="header__Link" href="#">Galería</a>
                        <a className="header__Link" href="#">Contacto</a>
                        <a className="header__Link" href="#">Carrito</a>
                    </nav>

                </div>
            </header>

    )
}