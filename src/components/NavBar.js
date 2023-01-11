import './Navbar.scss'
import '../../src/discoVinilo.png'
const Navbar = () => {

    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
        <nav className="header__nav">
            <a className="header__link" href="#">Enlace 1</a>
            <a className="header__link" href="#">Enlace 2</a>
            <a className="header__link" href="#">Enlace 3</a>
            <a className="header__link" href="#">Enlace 4</a>
        </nav>
        </header>


    )
}

export default Navbar