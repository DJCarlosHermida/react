import logo from './discoVinilo.png';
import './App.css';
import { Footer } from './footer';
import { OpcionesDisco } from './components/OpcionesDisco';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav >
          <ul className="navBar">
            <ol><a href="#" className="navLink">Inicio</a></ol>
            <ol><a href="#" className="navLink">Servicios</a></ol>
            <ol><a href="#" className="navLink">Contacto</a></ol>
            <img src="https://w7.pngwing.com/pngs/1008/303/png-transparent-shopping-cart-icon-product-return-shopping-cart-retail-supermarket-objects-thumbnail.png" alt="Carrito" title="Carrito" className="carrito"></img>
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
