
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Tiendas from './pages/Tiendas';
import AgregarArticulo from './pages/AgregarArticulo';
import Inventario from './pages/Inventario';
import NoEncontrada from './pages/NoEncontrada';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="tiendas" element={<Tiendas />} />
          <Route
            path="agregar-articulo"
            element={<AgregarArticulo />}
          />
          <Route
            path="inventario"
            element={<Inventario />}
          />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
