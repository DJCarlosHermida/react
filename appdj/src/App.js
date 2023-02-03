import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import Nosotros from "./components/Nosotros/Nosotros";
import Galeria from "./components/Galeria/Galeria"
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      
      
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/nosotros" element={ <Nosotros /> } />
        <Route path="/productos" element={ <ItemListContainer /> } />
        <Route path="/galeria" element={ <Galeria /> } />
        <Route path="/contacto" element={ <Contacto /> } />
        <Route path="*" element={ <Navigate to={"/"}/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;