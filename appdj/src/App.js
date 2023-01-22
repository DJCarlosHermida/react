import { Navbar } from "./components/Navbar/Navbar";
import { Usuario } from "./components/Usuario/Usuario";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contenedor from "./components/Contenedor/Contenedor";
import MyButton from "./Ejemplos/MyButton/MyButton";


function App() {
  

  return  (
    <div>
        <Navbar />
        <Contenedor>
          <Usuario nombre="DJ" curso="ReactJS" edad={22} />

          <MyButton variant={2} className="otra-clase">
            Da Click!
            <small>Dale Wacho</small>
          </MyButton>
        </Contenedor> 
    </div>
  );
}

export default App;