import logo from './discoVinilo.png';
import './App.css';
import { saludar } from './utils';

function App() {

  saludar()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section className="main">
        <h1>| PARA FIESTAS |</h1>
      </section>

      <footer>
        <p>© Copyright 2022 | All Rights Reserved ® </p>
        <a className="App-link" href="https://djcarloshermida.com.uy" target="_blank" rel="noopener noreferrer">| DJ CARLOS HERMIDA |</a>
      </footer>

    </div>
  );
}

export default App;
