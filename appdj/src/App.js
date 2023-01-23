import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clicker from "./Ejemplos/Clicker/Clicker";
import Nosotros from "./components/Nosotros/Nosotros";
import { useState } from "react";



function App() {

  const [show, setShow] = useState(true)
  const handleShow = () => {
    setShow(!show)
}

  return  (
    <div>
        <Navbar />
        <button onClick={handleShow}>Show</button>
        { show && <Clicker />}
        {/* <Clicker />  */}
        <hr/>
        <Nosotros />
    </div>
  );
}
export default App;