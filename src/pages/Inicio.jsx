import { useContext } from 'react';
import { InventarioContext } from '../context/ContextoInventario';
import ProductosLista from '../components/ProductosLista';

function Inicio() {
    const { articulos } = useContext(InventarioContext);

    return (
        <main className="inicio">

            <section className="inicio-bienvenida">
                <h1>Todo lo que necesitas en un solo lugar.</h1>
                <p>
                    Explora nuestros productos y consulta su disponibilidad.
                </p>
            </section>

            <section className="inventario">
                <div className="inventario-encabezado">
                    <h2>Nuestros productos</h2>
                    <span>
                        {articulos.length} productos disponibles
                    </span>
                </div>

                <ProductosLista articulos={articulos} />
            </section>

        </main>
    );
}

export default Inicio;
