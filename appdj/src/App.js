import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Inicio from "./components/Inicio/Inicio"
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros"
import Contacto from "./components/Contacto/Contacto";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      
      
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/productos" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="/nosotros" element={ <Nosotros /> } />
        <Route path="/contacto" element={ <Contacto /> } />
        <Route path="*" element={ <Navigate to={"/"}/> } /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;