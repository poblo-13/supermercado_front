import { NavLink } from 'react-router-dom';

function MenuInferior() {
    return (
        <nav className="menu-inferior" aria-label="Menú principal">
            <NavLink to="/" end className="menu-enlace">
                Inicio
            </NavLink>

            <NavLink to="/nosotros" className="menu-enlace">
                Nosotros
            </NavLink>

            <NavLink to="/tiendas" className="menu-enlace">
                Tiendas
            </NavLink>
        </nav>
    );
}

export default MenuInferior;