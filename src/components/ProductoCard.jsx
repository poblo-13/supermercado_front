
function ProductoCard({ producto }) {
    return (
        <article className="producto-card">

            <div className="producto-imagen">
                {producto.imagen ? (
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        loading="lazy"
                    />
                ) : (
                    <span>Imagen no disponible</span>
                )}
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
    );
}

export default ProductoCard;
