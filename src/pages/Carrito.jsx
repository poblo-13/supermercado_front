
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InventarioContext } from '../context/ContextoInventario';

function Carrito() {
    const {
        articulos,
        carrito,
        agregarAlCarrito,
        disminuirDelCarrito
    } = useContext(InventarioContext);

    const productosEnCarrito = carrito
        .map((item) => {
            const producto = articulos.find(
                (articulo) => String(articulo.id) === String(item.id)
            );

            return producto
                ? { ...producto, cantidad: item.cantidad }
                : null;
        })
        .filter(Boolean);

    const total = productosEnCarrito.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    return (
        <main className="pagina-carrito">
            <h1>Carrito de compras</h1>

            <p>
                Revisa los productos seleccionados
                y modifica sus cantidades.
            </p>

            {productosEnCarrito.length === 0 ? (
                <div className="mt-8 rounded-xl bg-[#E4EEF0] p-6">
                    <p>Tu carrito está vacío.</p>

                    <Link
                        to="/inventario"
                        className="font-semibold text-[#075056] underline"
                    >
                        Ver inventario
                    </Link>
                </div>
            ) : (
                <div className="mt-8 flex flex-col gap-4">
                    {productosEnCarrito.map((producto) => (
                        <article
                            key={producto.id}
                            className="flex flex-col gap-2 rounded-xl border border-[#FF5B04] bg-white p-5 [&>p]:m-0 [&>h2]:m-0"
                        >
                            <h2 className="text-xl font-bold">
                                {producto.nombre}
                            </h2>

                            <p>
                                Precio unitario: ${producto.precio.toLocaleString('es-CL')}
                            </p>

                            <p>
                                Stock disponible: {producto.stock}
                            </p>

                            <div className="my-2 flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => disminuirDelCarrito(producto.id)}
                                    className="rounded-lg bg-[#E4EEF0] px-4 py-2 font-bold"
                                    aria-label={`Disminuir cantidad de ${producto.nombre}`}
                                >
                                    -
                                </button>

                                <span className="font-semibold">
                                    {producto.cantidad}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => agregarAlCarrito(producto.id)}
                                    disabled={producto.stock === 0}
                                    className="rounded-lg bg-[#075056] px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                                    aria-label={`Aumentar cantidad de ${producto.nombre}`}
                                >
                                    +
                                </button>
                            </div>

                            <p className="font-semibold">
                                Subtotal: ${(producto.precio * producto.cantidad).toLocaleString('es-CL')}
                            </p>
                        </article>
                    ))}

                    <div className="rounded-xl bg-[#E4EEF0] p-6">
                        <h2 className="text-2xl font-bold">
                            Total: ${total.toLocaleString('es-CL')}
                        </h2>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Carrito;
