import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {

  return  (
    <div>
        <Navbar />
        <ItemListContainer />

        <Footer />
    </div>
  );
}
export default App;