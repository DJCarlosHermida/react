import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import Nosotros from "./components/Nosotros/Nosotros";
import Galeria from "./components/Galeria/Galeria"
import Contacto from "./components/Contacto/Contacto";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={ <ItemListContainer />}/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer />} />
          <Route path="/nosotros" element={ <Nosotros />} />
          <Route path="/contacto" element={ <Contacto /> }/>
          <Route path="galeria" element={ <Galeria />} />
          <Route path="*" element={ <Navigate to={"/"}/>} />

        </Routes>
        
        <Footer />

        
    </BrowserRouter>
  );
}

export default App;