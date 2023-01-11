import logo from './discoVinilo.png';
import './App.css';
import { Footer } from './footer';
import { OpcionesDisco } from './components/OpcionesDisco';
import './css/contenedor.scss'
import Clicker from './components/Clicker';
import Nosotros from './components/aboutUs';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Link } from 'react-router-dom';



function App() {

  const [show, sertShow] = useState(true)
  const handleShow = () => {
    sertShow (!show)
  }

  return (
    <BrowserRouter>

   

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <nav >
          <ul className="header__container">
          
            <Link className='Link' to="/" >Inicio</Link>
            <Link className='Link' to="/servicios" >Servicios</Link>
            <Link className='Link' to="/productos" >Productos</Link>
            <Link className='Link' to="/">Contacto</Link>
          </ul>
        </nav>
      </header>

      <section className="main">
        <h1>| PARA FIESTAS |</h1>
        <h3>Bienvenidos</h3>
      </section>


       <Routes>
      <Route path='/nosotros' element={<Nosotros />}/>
      <Route path='/servicios' element={<Clicker />} />
      <Route path='/productos' element={<ItemListContainer /> }/>
    </Routes>

      
      


      <Footer />
    </div>

    </BrowserRouter>
    
  );
}

export default App;
