import { productos } from '../data/productos';

function Inicio() {
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
                    <span>{productos.length} productos disponibles</span>
                </div>

                <div className="productos-grid">
                    {productos.map((producto) => (
                        <article className="producto-card" key={producto.id}>

                            <div className="producto-imagen">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    loading="lazy"
                                />
                            </div>

                            <div className="producto-info">
                                <p className="producto-categoria">
                                    {producto.categoria}
                                </p>

                                <h3>{producto.nombre}</h3>

                                <p className="producto-precio">
                                    ${producto.precio.toLocaleString('es-CL')}
                                </p>

                                <span className="producto-stock">
                                    {producto.stock} unidades disponibles
                                </span>
                            </div>

                        </article>
                    ))}
                </div>
            </section>

        </main>
    );
}

export default Inicio;