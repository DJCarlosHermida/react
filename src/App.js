import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <ul>
        <a href="index.html">
            Inicio
          </a>
        </ul>
        <ul>Servicios</ul>
        <ul>Galería
          <ol>Fotos</ol>
          <ol>Videos</ol>
        </ul>
        <ul>Multimedia
          <ol>Curso DJ</ol>
          <ol>Música Electrónica</ol>
          <ol>Remix</ol>
          <ol>Directos</ol>
        </ul>
        <ul>Contacto</ul>
      </header>
      

      <body>
        <div>
          <h1>PARA FIESTAS</h1>
        </div>

      <footer>
        <a className="App-link" href="https://djcarloshermida.com.uy" target="_blank" rel="noopener noreferrer">
            | DJ CARLOS HERMIDA |
          </a>
      </footer>
      </body>
    </div>
  );
}

export default App;
