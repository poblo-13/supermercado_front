
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InventarioContext } from '../context/ContextoInventario';

function AgregarArticulo() {
    const { agregarArticulo } = useContext(InventarioContext);
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nombre: '',
        marca: '',
        tipo: '',
        categoria: '',
        precio: '',
        stock: ''
    });

    const [error, setError] = useState('');

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        const nuevoArticulo = {
            nombre: formulario.nombre.trim(),
            marca: formulario.marca.trim(),
            tipo: formulario.tipo.trim(),
            categoria: formulario.categoria,
            precio: Number(formulario.precio),
            stock: Number(formulario.stock),
            imagen: ''
        };

        if (
            !nuevoArticulo.nombre ||
            !nuevoArticulo.marca ||
            !nuevoArticulo.tipo ||
            !nuevoArticulo.categoria ||
            !Number.isFinite(nuevoArticulo.precio) ||
            nuevoArticulo.precio <= 0 ||
            !Number.isInteger(nuevoArticulo.stock) ||
            nuevoArticulo.stock < 0
        ) {
            setError('Revisa los datos ingresados. Los campos de texto no pueden contener solo espacios y el precio y stock deben ser válidos.');
            return;
        }

        setError('');
        agregarArticulo(nuevoArticulo);
        navigate('/inventario');
    };

    const estiloCampo =
        'w-full rounded-lg border border-[#AABFC3] bg-white ' +
        'px-4 py-3 text-[#16232A] outline-none ' +
        'focus:border-[#075056] focus:ring-2 focus:ring-[#075056]/20';

    return (
        <main className="agregar-articulo pb-12">
            <h1>Agregar artículo</h1>

            <p>
                Registra nuevos productos en el inventario
                de nuestro supermercado.
            </p>

            <form
                onSubmit={manejarEnvio}
                className="formulario-articulo mt-8 grid max-w-2xl gap-4 rounded-2xl bg-[#E4EEF0] p-6 sm:p-8"
            >

                <label htmlFor="nombre">Nombre del producto</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    required
                />

                <label htmlFor="marca">Marca</label>
                <input
                    id="marca"
                    name="marca"
                    type="text"
                    value={formulario.marca}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    required
                />

                <label htmlFor="tipo">Tipo de producto</label>
                <input
                    id="tipo"
                    name="tipo"
                    type="text"
                    value={formulario.tipo}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    required
                />

                <label htmlFor="categoria">Categoría</label>
                <select
                    id="categoria"
                    name="categoria"
                    value={formulario.categoria}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    required
                >
                    <option value="">Seleccionar categoría</option>
                    <option value="Abarrotes">Abarrotes</option>
                    <option value="Lácteos">Lácteos</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Panadería">Panadería</option>
                    <option value="Otros">Otros</option>
                </select>

                <label htmlFor="precio">Precio ($ CLP)</label>
                <input
                    id="precio"
                    name="precio"
                    type="number"
                    min="1"
                    step="1"
                    value={formulario.precio}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    required
                />

                <label htmlFor="stock">Stock disponible</label>
                <input
                    id="stock"
                    name="stock"
                    type="number"
                    min="0"
                    step="1"
                    value={formulario.stock}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    required
                />

                {error && (
                    <p className="mensaje-error" role="alert">
                        {error}
                    </p>
                )}
                
                <button
                    type="submit"
                    className="mt-3 w-full cursor-pointer rounded-lg border-0 bg-[#FF5B04] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#E65303]"
                >
                    Registrar artículo
                </button>
            </form>
        </main>
    );
}

export default AgregarArticulo;
