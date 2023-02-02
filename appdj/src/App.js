import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";

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