
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useInventario } from '../hooks/useInventario';
import { validarArticulo } from '../utils/validarArticulo';
import CampoFormulario from '../components/CampoFormulario';

function AgregarArticulo() {
    const { agregarArticulo } = useInventario();
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nombre: '',
        marca: '',
        tipo: '',
        categoria: '',
        precio: '',
        stock: ''
    });

    const [errores, setErrores] = useState({});

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));

        setErrores((anteriores) => ({
            ...anteriores,
            [name]: ''
        }));
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        const erroresValidacion = validarArticulo(formulario);

        if (Object.keys(erroresValidacion).length > 0) {
            setErrores(erroresValidacion);
            return;
        }

        const nuevoArticulo = {
            nombre: formulario.nombre.trim(),
            marca: formulario.marca.trim(),
            tipo: formulario.tipo.trim(),
            categoria: formulario.categoria,
            precio: Number(formulario.precio),
            stock: Number(formulario.stock),
            imagen: ''
        };

        setErrores({});
        agregarArticulo(nuevoArticulo);
        navigate('/inventario');
    };

    const estiloCampo =
        'w-full rounded-lg border border-[#AABFC3] bg-white ' +
        'px-4 py-3 text-[#16232A] outline-none ' +
        'focus:border-[#075056] focus:ring-2 focus:ring-[#075056]/20';

    const estiloError = 'mensaje-error';

    return (
        <main className="agregar-articulo pb-12">
            <h1>Agregar artículo</h1>

            <p>
                Registra nuevos productos en el inventario
                de nuestro supermercado.
            </p>

            <form
                onSubmit={manejarEnvio}
                noValidate
                className="formulario-articulo mt-8 grid max-w-2xl gap-4 rounded-2xl bg-[#E4EEF0] p-6 sm:p-8"
            >
                <CampoFormulario
                    etiqueta="Nombre del producto"
                    nombre="nombre"
                    valor={formulario.nombre}
                    onChange={manejarCambio}
                    error={errores.nombre}
                />

                <CampoFormulario
                    etiqueta="Marca"
                    nombre="marca"
                    valor={formulario.marca}
                    onChange={manejarCambio}
                    error={errores.marca}
                />

                <CampoFormulario
                    etiqueta="Tipo de producto"
                    nombre="tipo"
                    valor={formulario.tipo}
                    onChange={manejarCambio}
                    error={errores.tipo}
                />

                <label htmlFor="categoria">
                    Categoría
                </label>

                <select
                    id="categoria"
                    name="categoria"
                    value={formulario.categoria}
                    onChange={manejarCambio}
                    className={estiloCampo}
                    aria-invalid={Boolean(errores.categoria)}
                    aria-describedby={
                        errores.categoria ? 'error-categoria' : undefined
                    }
                    required
                >
                    <option value="">Seleccionar categoría</option>
                    <option value="Abarrotes">Abarrotes</option>
                    <option value="Lácteos">Lácteos</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Panadería">Panadería</option>
                    <option value="Otros">Otros</option>
                </select>

                {errores.categoria && (
                    <p
                        id="error-categoria"
                        className={estiloError}
                        role="alert"
                    >
                        {errores.categoria}
                    </p>
                )}

                <CampoFormulario
                    etiqueta="Precio ($ CLP)"
                    nombre="precio"
                    tipo="number"
                    valor={formulario.precio}
                    onChange={manejarCambio}
                    error={errores.precio}
                    min="1"
                    step="1"
                />

                <CampoFormulario
                    etiqueta="Stock disponible"
                    nombre="stock"
                    tipo="number"
                    valor={formulario.stock}
                    onChange={manejarCambio}
                    error={errores.stock}
                    min="0"
                    step="1"
                />

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
