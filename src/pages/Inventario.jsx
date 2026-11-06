
import { useState } from 'react';
import { Link } from 'react-router';
import { useInventario } from '../hooks/useInventario';

function Inventario() {
    const { articulos } = useInventario();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

    const categorias = [
        ...new Set(articulos.map((articulo) => articulo.categoria))
    ];

    const articulosFiltrados = categoriaSeleccionada === 'Todas'
        ? articulos
        : articulos.filter(
            (articulo) => articulo.categoria === categoriaSeleccionada
        );

    const estiloEncabezado =
        'px-5 py-4 text-left font-semibold text-[#16232A]';

    const estiloCelda =
        'border-t border-[#E4EEF0] px-5 py-4 text-[#075056]';

    return (
        <main className="pagina-inventario">
            <h1>Inventario de productos</h1>

            <p>
                Consulta todos los artículos disponibles
                en nuestro supermercado.
            </p>

            <div className="mb-6 flex max-w-sm flex-col gap-2">
                <label
                    htmlFor="filtro-categoria"
                    className="font-semibold text-[#16232A]"
                >
                    Filtrar por categoría
                </label>

                <select
                    id="filtro-categoria"
                    value={categoriaSeleccionada}
                    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    className="rounded-lg border border-[#AABFC3] bg-white px-4 py-3 text-[#075056] focus:border-[#075056] focus:outline-none focus:ring-2 focus:ring-[#075056]/20"
                >
                    <option value="Todas">Todas las categorías</option>

                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>

            {articulosFiltrados.length === 0 ? (
                <p
                    className="rounded-xl border border-[#E4EEF0] bg-white p-5 text-[#075056]"
                    role="status"
                >
                    {articulos.length === 0
                        ? 'Todavía no hay artículos registrados en el inventario.'
                        : 'No hay artículos disponibles en la categoría seleccionada.'}
                </p>
            ) : (
                <div className="mt-8 overflow-x-auto rounded-xl border border-[#E4EEF0]">
                    <table className="w-full min-w-[900px] border-collapse">
                        <thead className="bg-[#E4EEF0]">
                            <tr>
                                <th scope="col" className={estiloEncabezado}>
                                    Producto
                                </th>
                                <th scope="col" className={estiloEncabezado}>
                                    Marca
                                </th>
                                <th scope="col" className={estiloEncabezado}>
                                    Tipo
                                </th>
                                <th scope="col" className={estiloEncabezado}>
                                    Categoría
                                </th>
                                <th scope="col" className={estiloEncabezado}>
                                    Precio
                                </th>
                                <th scope="col" className={estiloEncabezado}>
                                    Stock
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {articulosFiltrados.map((producto) => (
                                <tr
                                    key={producto.id}
                                    className="transition-colors hover:bg-[#F5F9FA]"
                                >
                                    <td className={estiloCelda}>
                                        <Link
                                            to={`/producto/${producto.id}`}
                                            className="font-semibold text-[#075056] underline-offset-4 hover:text-[#FF5B04] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075056]"
                                        >
                                            {producto.nombre}
                                        </Link>
                                    </td>

                                    <td className={estiloCelda}>
                                        {producto.marca}
                                    </td>

                                    <td className={estiloCelda}>
                                        {producto.tipo}
                                    </td>

                                    <td className={estiloCelda}>
                                        {producto.categoria}
                                    </td>

                                    <td className={estiloCelda}>
                                        ${producto.precio.toLocaleString('es-CL')}
                                    </td>

                                    <td className={estiloCelda}>
                                        {producto.stock}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}

export default Inventario;
