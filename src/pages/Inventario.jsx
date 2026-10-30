import { useContext } from 'react';
import { InventarioContext } from '../context/ContextoInventario';

function Inventario() {
    const { articulos } = useContext(InventarioContext);
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
                        {articulos.map((producto) => (
                            <tr
                                key={producto.id}
                                className="transition-colors hover:bg-[#F5F9FA]"
                            >
                                <td className={estiloCelda}>
                                    {producto.nombre}
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

        </main>
    );
}

export default Inventario;
