import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {

  return  (
    <div>
        <Navbar />
        <ItemDetailContainer itemId={14}/>
        <ItemListContainer />

        <Footer />
    </div>
  );
}
export default App;