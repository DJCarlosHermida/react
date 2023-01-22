import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clicker from "./Ejemplos/Clicker/Clicker";


function App() {
  return  (
    <div>
        <Navbar />
        <Clicker /> 
    </div>
  );
}
export default App;