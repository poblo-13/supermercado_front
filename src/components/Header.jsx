
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="encabezado">
            <strong>
                <Link to="/">
                    Supermercado del Frente
                </Link>
            </strong>

            <p>Sistema de gestión de inventario</p>
        </header>
    );
}

export default Header;
