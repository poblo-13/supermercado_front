
import { NavLink } from 'react-router';
import { useInventario } from '../hooks/useInventario';

function MenuInventario() {
    const { carrito } = useInventario();

    const cantidadCarrito = carrito.reduce(
        (total, item) => total + item.cantidad,
        0
    );

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

            <NavLink
                to="/carrito"
                className="menu-inventario-enlace"
            >
                <span>Carrito de compras</span>

                {cantidadCarrito > 0 && (
                    <span className="ml-2 rounded-full bg-[#FF5B04] px-2 py-1 text-sm font-bold text-white">
                        {cantidadCarrito}
                    </span>
                )}
            </NavLink>
        </nav>
    );
}

export default MenuInventario;
