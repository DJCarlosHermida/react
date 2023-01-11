import './Navbar.scss'
import '../../src/discoVinilo.png'
const Navbar = () => {

    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
        <nav className="header__nav">
            <ol><Link href="#" className="header__nav">Inicio</Link></ol>
            <ol><Link href="#" className="header__nav">Servicios</Link></ol>
            <ol><Link href="#" className="header__nav">Productos</Link></ol>
            <ol><Link href="#" className="header__nav">Contacto</Link></ol>
        </nav>
        </header>


    )
}

export default Navbar