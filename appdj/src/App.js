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
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { LoginProvider } from "./context/LoginContext";

function App() {

  return (
    <LoginProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </LoginProvider>
  );
}


export default App;

 