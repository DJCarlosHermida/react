import logo from './discoVinilo.png';
import './App.css';
import { Footer } from './footer';
import { OpcionesDisco } from './components/OpcionesDisco';
import './css/contenedor.scss'
import Clicker from './components/Clicker';
import Nosotros from './components/aboutUs';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";



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
          
            <ol><a href="#" className="header__nav">Inicio</a></ol>
            <ol><a href="#" className="header__nav">Servicios</a></ol>
            <ol><a href="#" className="header__nav">Productos</a></ol>
            <ol><a href="#" className="header__nav">Contacto</a></ol>
          </ul>
        </nav>
      </header>
       <Routes>
      <Route path='/'/>
      <Route path=''/>
      <Route path=''/>
      <Route path=''/>
    </Routes>

      <section className="main">
        <h1>| PARA FIESTAS |</h1>
      </section>
      <ItemListContainer />


      <Footer />
    </div>

    </BrowserRouter>
    
  );
}

export default App;
