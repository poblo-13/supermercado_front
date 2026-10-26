import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Tiendas from './pages/Tiendas';
import MenuInferior from './components/MenuInferior';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="encabezado">
          <strong>Supermercado del Frente</strong>
          <p>Sistema de gestión de inventario</p>
        </header>

        <div className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tiendas" element={<Tiendas />} />
          </Routes>
        </div>

        <MenuInferior />
      </div>
    </BrowserRouter>
  );
}

export default App;