
import { Link, useParams } from 'react-router';
import { useInventario } from '../hooks/useInventario';

function DetalleProducto() {
    const { id } = useParams();
    const { articulos, agregarAlCarrito } = useInventario();

    const producto = articulos.find(
        (articulo) => String(articulo.id) === id
    );

    if (!producto) {
        return (
            <main className="detalle-producto">
                <h1>Producto no encontrado</h1>
                <p>
                    No existe un artículo con el identificador solicitado.
                </p>

                <Link to="/inventario">
                    Volver al inventario
                </Link>
            </main>
        );
    }

    return (
        <main className="detalle-producto">
            <h1>Detalle del producto</h1>

            <div className="mt-8 grid gap-6 rounded-2xl border border-[#FF5B04] bg-white p-6 md:grid-cols-2">

                <div className="flex min-h-64 items-center justify-center rounded-xl bg-[#E4EEF0] p-6">
                    {producto.imagen ? (
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="max-h-64 w-full object-contain"
                        />
                    ) : (
                        <p>Imagen no disponible</p>
                    )}
                </div>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#16232A]">
                        {producto.nombre}
                    </h2>

                    <p>Marca: {producto.marca}</p>
                    <p>Tipo: {producto.tipo}</p>
                    <p>Categoría: {producto.categoria}</p>

                    <p className="text-2xl font-bold text-[#FF5B04]">
                        ${producto.precio.toLocaleString('es-CL')}
                    </p>

                    <p>Stock disponible: {producto.stock} unidades</p>

                    <button
                        type="button"
                        onClick={() => agregarAlCarrito(producto.id)}
                        disabled={producto.stock === 0}
                        className="rounded-lg bg-[#FF5B04] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#E65303] disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        {producto.stock === 0
                            ? 'Producto agotado'
                            : 'Agregar al carrito'}
                    </button>

                    <Link
                        to="/inventario"
                        className="mt-4 text-[#075056] underline"
                    >
                        Volver al inventario
                    </Link>
                </section>
            </div>
        </main>
    );
}

export default DetalleProducto;
