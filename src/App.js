import logo from './discoVinilo.png';
import './App.css';
import { Footer } from './footer';
import { OpcionesDisco } from './components/OpcionesDisco';
import './css/contenedor.scss'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav >
          <ul className="header__container">
          
            <ol><a href="#" className="header__nav">Inicio</a></ol>
            <ol><a href="#" className="header__nav">Servicios</a></ol>
            <ol><a href="#" className="header__nav">Productos</a></ol>
            <ol><a href="#" className="header__nav">Contacto</a></ol>
            <button className="material-symbols-outlined header__nav">garden_cart</button>
          </ul>
        </nav>
      </header>

      <section className="main">
        <h1>| PARA FIESTAS |</h1>
      </section>

      <OpcionesDisco titulo="Opciones Discoteca" />



      {/* <Servicios /> */}
      <Footer />
    </div>
  );
}

export default App;
