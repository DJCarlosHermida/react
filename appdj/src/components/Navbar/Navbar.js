import './Navbar.scss'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
            <h1 className="header__logo">LOGO</h1>
            <nav className="header__nav">
                <a className="header__Link" href="#">Enlace 1</a>
                <a className="header__Link" href="#">Enlace 2</a>
                <a className="header__Link" href="#">Enlace 3</a>
                <a className="header__Link" href="#">Enlace 4</a>
            </nav>
            </div>
        </header>
    )
}