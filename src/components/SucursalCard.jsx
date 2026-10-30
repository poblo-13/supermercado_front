
function SucursalCard({ sucursal }) {
    return (
        <article className="tienda-card">
            <h2>{sucursal.nombre}</h2>

            <div className="tienda-detalle">
                <h3>Ubicación</h3>
                <p>{sucursal.ubicacion}</p>
            </div>

            <div className="tienda-detalle">
                <h3>Horario de atención</h3>
                <p>{sucursal.horario}</p>
                <p>{sucursal.atencion}</p>
            </div>
        </article>
    );
}

export default SucursalCard;
