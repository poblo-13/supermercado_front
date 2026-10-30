
import { NavLink } from 'react-router-dom';

function MenuInventario() {
    return (
        <nav
            className="menu-inventario"
            aria-label="Menú de inventario"
        >
            <NavLink
                to="/agregar-articulo"
                className="menu-inventario-enlace"
            >
                Agregar artículo
            </NavLink>

            <NavLink
                to="/inventario"
                className="menu-inventario-enlace"
            >
                Ver inventario
            </NavLink>
        </nav>
    );
}

export default MenuInventario;
