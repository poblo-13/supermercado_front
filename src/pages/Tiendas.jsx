
import { sucursales } from '../data/sucursales';
import SucursalCard from '../components/SucursalCard';

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
                    <SucursalCard
                        key={sucursal.id}
                        sucursal={sucursal}
                    />
                ))}
            </section>

        </main>
    );
}

export default Tiendas;
