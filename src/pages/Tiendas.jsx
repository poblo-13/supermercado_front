const sucursales = [
    {
        id: 1,
        nombre: "Concepción",
        ubicacion: "Centro de Concepción",
        horario: "Lunes a sábado",
        atencion: "09:00 a 20:00"
    },
    {
        id: 2,
        nombre: "San Pedro de la Paz",
        ubicacion: "Sector Lomas Coloradas",
        horario: "Lunes a sábado",
        atencion: "09:00 a 21:00"
    }
];

function Tiendas() {
    return (
        <main className="tiendas">

            <section className="tiendas-intro">
                <h1>Nuestras tiendas</h1>
                <p>
                    En Supermercado del Frente queremos estar
                    cerca de ti. Conoce nuestras sucursales
                    en el Gran Concepción.
                </p>
            </section>

            <section className="tiendas-grid">
                {sucursales.map((sucursal) => (
                    <article
                        className="tienda-card"
                        key={sucursal.id}
                    >
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
                ))}
            </section>

        </main>
    );
}

export default Tiendas;